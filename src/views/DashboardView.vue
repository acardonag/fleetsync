<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h2 class="dashboard-title">Panel de Control</h2>
      <div class="dashboard-actions">
        <button @click="showAddVehicleModal = true" class="btn-primary">
          ➕ Agregar Vehículo
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">🚗</div>
        <div class="stat-content">
          <div class="stat-value">{{ vehiculos.length }}</div>
          <div class="stat-label">Vehículos Total</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon disponible">✅</div>
        <div class="stat-content">
          <div class="stat-value">{{ vehiculosDisponibles }}</div>
          <div class="stat-label">Disponibles</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon ocupado">🔑</div>
        <div class="stat-content">
          <div class="stat-value">{{ vehiculosOcupados }}</div>
          <div class="stat-label">En Servicio</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon mantenimiento">🔧</div>
        <div class="stat-content">
          <div class="stat-value">{{ vehiculosMantenimiento }}</div>
          <div class="stat-label">Mantenimiento</div>
        </div>
      </div>
    </div>

    <!-- Vehicles List -->
    <div class="vehicles-section">
      <h3 class="section-title">Vehículos</h3>
      
      <div v-if="loading" class="loading-container">
        <div class="spinner"></div>
        <p>Cargando vehículos...</p>
      </div>

      <div v-else-if="vehiculos.length === 0" class="empty-state">
        <div class="empty-icon">🚗</div>
        <h3>No hay vehículos registrados</h3>
        <p>Comienza agregando tu primer vehículo a la flota</p>
        <button @click="showAddVehicleModal = true" class="btn-primary">
          Agregar Primer Vehículo
        </button>
      </div>

      <div v-else class="vehicles-grid">
        <div v-for="vehiculo in vehiculos" :key="vehiculo.id" class="vehicle-card">
          <div class="vehicle-header">
            <div class="vehicle-icon">🚗</div>
            <span :class="['vehicle-status', `status-${vehiculo.estado}`]">
              {{ getEstadoLabel(vehiculo.estado) }}
            </span>
          </div>
          
          <div class="vehicle-body">
            <h4 class="vehicle-placa">{{ vehiculo.placa }}</h4>
            <p class="vehicle-info">{{ vehiculo.marca }} {{ vehiculo.modelo }}</p>
            <p class="vehicle-info">Año: {{ vehiculo.año }}</p>
            <p v-if="vehiculo.conductor" class="vehicle-conductor">
              👤 {{ vehiculo.conductor }}
            </p>
          </div>

          <div class="vehicle-actions">
            <button @click="viewVehicle(vehiculo)" class="btn-icon" title="Ver detalles">
              👁️
            </button>
            <button @click="editVehicle(vehiculo)" class="btn-icon" title="Editar">
              ✏️
            </button>
            <button @click="deleteVehicle(vehiculo)" class="btn-icon btn-danger-icon" title="Eliminar">
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add/Edit Vehicle Modal -->
    <div v-if="showAddVehicleModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>{{ editingVehicle ? 'Editar Vehículo' : 'Agregar Nuevo Vehículo' }}</h3>
          <button @click="closeModal" class="btn-close">✕</button>
        </div>
        
        <form @submit.prevent="saveVehicle" class="modal-body">
          <div class="form-group">
            <label class="form-label">Placa *</label>
            <input 
              v-model="form.placa" 
              type="text" 
              class="form-input" 
              placeholder="ABC-123"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">Marca *</label>
            <input 
              v-model="form.marca" 
              type="text" 
              class="form-input" 
              placeholder="Toyota"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">Modelo *</label>
            <input 
              v-model="form.modelo" 
              type="text" 
              class="form-input" 
              placeholder="Corolla"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">Año *</label>
            <input 
              v-model.number="form.año" 
              type="number" 
              class="form-input" 
              placeholder="2023"
              min="1990"
              :max="new Date().getFullYear() + 1"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">Estado *</label>
            <select v-model="form.estado" class="form-select" required>
              <option value="disponible">Disponible</option>
              <option value="ocupado">En Servicio</option>
              <option value="mantenimiento">Mantenimiento</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Conductor Actual</label>
            <input 
              v-model="form.conductor" 
              type="text" 
              class="form-input" 
              placeholder="Nombre del conductor (opcional)"
            />
          </div>

          <div class="modal-footer">
            <button type="button" @click="closeModal" class="btn-secondary">
              Cancelar
            </button>
            <button type="submit" class="btn-primary" :disabled="saving">
              {{ saving ? 'Guardando...' : 'Guardar' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { createDocument, getAllDocuments, updateDocument, deleteDocument } from '../firebase/db'

const vehiculos = ref([])
const loading = ref(true)
const saving = ref(false)
const showAddVehicleModal = ref(false)
const editingVehicle = ref(null)

const form = ref({
  placa: '',
  marca: '',
  modelo: '',
  año: new Date().getFullYear(),
  estado: 'disponible',
  conductor: ''
})

const vehiculosDisponibles = computed(() => 
  vehiculos.value.filter(v => v.estado === 'disponible').length
)

const vehiculosOcupados = computed(() => 
  vehiculos.value.filter(v => v.estado === 'ocupado').length
)

const vehiculosMantenimiento = computed(() => 
  vehiculos.value.filter(v => v.estado === 'mantenimiento').length
)

onMounted(async () => {
  await loadVehicles()
})

async function loadVehicles() {
  loading.value = true
  try {
    vehiculos.value = await getAllDocuments('vehiculos', 'createdAt')
  } catch (error) {
    console.error('Error loading vehicles:', error)
    alert('Error al cargar los vehículos')
  } finally {
    loading.value = false
  }
}

async function saveVehicle() {
  saving.value = true
  
  try {
    if (editingVehicle.value) {
      await updateDocument('vehiculos', editingVehicle.value.id, form.value)
    } else {
      await createDocument('vehiculos', form.value)
    }
    
    await loadVehicles()
    closeModal()
  } catch (error) {
    console.error('Error saving vehicle:', error)
    alert('Error al guardar el vehículo')
  } finally {
    saving.value = false
  }
}

function editVehicle(vehiculo) {
  editingVehicle.value = vehiculo
  form.value = {
    placa: vehiculo.placa,
    marca: vehiculo.marca,
    modelo: vehiculo.modelo,
    año: vehiculo.año,
    estado: vehiculo.estado,
    conductor: vehiculo.conductor || ''
  }
  showAddVehicleModal.value = true
}

async function deleteVehicle(vehiculo) {
  if (!confirm(`¿Estás seguro de eliminar el vehículo ${vehiculo.placa}?`)) {
    return
  }
  
  try {
    await deleteDocument('vehiculos', vehiculo.id)
    await loadVehicles()
  } catch (error) {
    console.error('Error deleting vehicle:', error)
    alert('Error al eliminar el vehículo')
  }
}

function viewVehicle(vehiculo) {
  alert(`Ver detalles de ${vehiculo.placa}\n\nEsta funcionalidad se implementará próximamente.`)
}

function closeModal() {
  showAddVehicleModal.value = false
  editingVehicle.value = null
  form.value = {
    placa: '',
    marca: '',
    modelo: '',
    año: new Date().getFullYear(),
    estado: 'disponible',
    conductor: ''
  }
}

function getEstadoLabel(estado) {
  const labels = {
    disponible: 'Disponible',
    ocupado: 'En Servicio',
    mantenimiento: 'Mantenimiento'
  }
  return labels[estado] || estado
}
</script>

<style scoped>
.dashboard {
  width: 100%;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.dashboard-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
}

.stat-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  border-color: #3b82f6;
}

.stat-icon {
  font-size: 2.5rem;
}

.stat-icon.disponible {
  filter: hue-rotate(90deg);
}

.stat-icon.ocupado {
  filter: hue-rotate(200deg);
}

.stat-icon.mantenimiento {
  filter: hue-rotate(30deg);
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
}

.vehicles-section {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.loading-container {
  text-align: center;
  padding: 3rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.vehicles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.vehicle-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.25rem;
  transition: all 0.2s;
}

.vehicle-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.vehicle-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.vehicle-icon {
  font-size: 2rem;
}

.vehicle-status {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-disponible {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  color: #065f46;
  border: 1px solid #6ee7b7;
}

.status-ocupado {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  color: #1e40af;
  border: 1px solid #93c5fd;
}

.status-mantenimiento {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  color: #92400e;
  border: 1px solid #fcd34d;
}

.vehicle-body {
  margin-bottom: 1rem;
}

.vehicle-placa {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.vehicle-info {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

.vehicle-conductor {
  font-size: 0.875rem;
  color: #3b82f6;
  font-weight: 600;
  margin-top: 0.5rem;
}

.vehicle-actions {
  display: flex;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.btn-icon {
  flex: 1;
  padding: 0.5rem;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-icon:hover {
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
  transform: scale(1.05);
  border-color: #94a3b8;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-danger-icon:hover {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border-color: #f87171;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 0.75rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.btn-close:hover {
  background: #f3f4f6;
  color: #1f2937;
}

.modal-body {
  padding: 1.5rem;
}

.modal-footer {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  margin-top: 1rem;
}

@media (max-width: 640px) {
  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .dashboard-actions {
    width: 100%;
  }
  
  .dashboard-actions button {
    width: 100%;
  }
}
</style>

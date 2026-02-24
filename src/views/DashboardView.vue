<template>
  <div class="vehiculos-view">
    <div class="view-header">
      <h2 class="view-title">Gestión de Vehículos</h2>
      <div class="view-actions">
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
    <div class="content-section">
      
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
            <select v-model="form.conductor" class="form-select">
              <option value="">Sin conductor asignado</option>
              <option v-for="conductor in conductores" :key="conductor.id" :value="conductor.nombre">
                {{ conductor.nombre }}
              </option>
            </select>
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

    <!-- View Vehicle Details Modal -->
    <div v-if="viewingVehicle" class="modal-overlay" @click.self="viewingVehicle = null">
      <div class="modal-content modal-large">
        <div class="modal-header">
          <h3>Detalles del Vehículo</h3>
          <button @click="viewingVehicle = null" class="btn-close">✕</button>
        </div>

        <div class="modal-body vehicle-details-view">
          <div class="details-header">
            <div class="vehicle-icon-large">🚗</div>
            <div class="details-main">
              <h2>{{ viewingVehicle.placa }}</h2>
              <p class="detail-large">{{ viewingVehicle.marca }} {{ viewingVehicle.modelo }}</p>
              <p class="detail-large">📅 Año {{ viewingVehicle.año }}</p>
              <span :class="['vehicle-status-large', `status-${viewingVehicle.estado}`]">
                {{ getEstadoLabel(viewingVehicle.estado) }}
              </span>
            </div>
          </div>

          <div class="details-grid">
            <div class="detail-section">
              <h4>Información del Vehículo</h4>
              <p><strong>Placa:</strong> {{ viewingVehicle.placa }}</p>
              <p><strong>Marca:</strong> {{ viewingVehicle.marca }}</p>
              <p><strong>Modelo:</strong> {{ viewingVehicle.modelo }}</p>
              <p><strong>Año:</strong> {{ viewingVehicle.año }}</p>
              <p><strong>Estado:</strong> {{ getEstadoLabel(viewingVehicle.estado) }}</p>
            </div>

            <div class="detail-section">
              <h4>Conductor Asignado</h4>
              <p v-if="viewingVehicle.conductor">
                <strong>👤 {{ viewingVehicle.conductor }}</strong>
              </p>
              <p v-else class="text-muted">Sin conductor asignado</p>
            </div>

            <div class="detail-section" v-if="viewingVehicle.createdAt">
              <h4>Información del Registro</h4>
              <p><strong>Creado por:</strong> {{ viewingVehicle.createdByName }}</p>
              <p><strong>Fecha de creación:</strong> {{ formatDateTime(viewingVehicle.createdAt) }}</p>
              <p v-if="viewingVehicle.updatedAt"><strong>Última actualización:</strong> {{ formatDateTime(viewingVehicle.updatedAt) }}</p>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button @click="viewingVehicle = null" class="btn-secondary">Cerrar</button>
          <button @click="editVehicle(viewingVehicle); viewingVehicle = null" class="btn-primary">
            Editar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { createDocument, getAllDocuments, updateDocument, deleteDocument } from '../firebase/db'

const conductores = ref([])

const vehiculos = ref([])
const loading = ref(true)
const saving = ref(false)
const showAddVehicleModal = ref(false)
const editingVehicle = ref(null)
const viewingVehicle = ref(null)

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
  await Promise.all([loadVehicles(), loadConductores()])
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

async function loadConductores() {
  try {
    conductores.value = await getAllDocuments('conductores', 'createdAt')
  } catch (error) {
    console.error('Error loading conductores:', error)
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
  viewingVehicle.value = vehiculo
}

function formatDateTime(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
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
.vehiculos-view {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.view-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.view-actions {
  display: flex;
  gap: 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f7ff;
  border-radius: 12px;
}

.stat-icon.disponible {
  background: #e8f5e9;
}

.stat-icon.ocupado {
  background: #e3f2fd;
}

.stat-icon.mantenimiento {
  background: #fff3e0;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.content-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.loading-container {
  text-align: center;
  padding: 4rem 2rem;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #f0f0f0;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: #666;
  margin-bottom: 2rem;
}

.vehicles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.vehicle-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.vehicle-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.vehicle-info {
  font-size: 0.875rem;
  color: #666;
  margin: 0.25rem 0;
}

.vehicle-conductor {
  font-size: 0.875rem;
  color: #3b82f6;
  font-weight: 600;
  margin: 0.5rem 0 0 0;
}

.vehicle-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

.btn-icon {
  background: #f3f4f6;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  transition: background 0.2s;
}

.btn-icon:hover {
  background: #e5e7eb;
}

.btn-danger-icon:hover {
  background: #fee2e2;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 600px;
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
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background 0.2s;
}

.btn-close:hover {
  background: #f3f4f6;
}

.modal-body {
  padding: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-weight: 600;
  color: #1a1a1a;
  font-size: 0.875rem;
}

.form-input,
.form-select {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-primary:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.btn-secondary {
  background: #f3f4f6;
  color: #1a1a1a;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-secondary:hover {
  background: #e5e7eb;
}

.modal-large {
  max-width: 800px;
}

.vehicle-details-view {
  padding: 2rem;
}

.details-header {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;
}

.vehicle-icon-large {
  font-size: 5rem;
  flex-shrink: 0;
}

.details-main h2 {
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  font-weight: 700;
}

.detail-large {
  font-size: 1.125rem;
  color: #666;
  margin: 0.25rem 0;
}

.vehicle-status-large {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 0.5rem;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.detail-section h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3b82f6;
}

.detail-section p {
  margin: 0.75rem 0;
  color: #666;
}

.detail-section strong {
  color: #1a1a1a;
  font-weight: 600;
}

.text-muted {
  color: #9ca3af;
  font-style: italic;
}

@media (max-width: 768px) {
  .vehiculos-view {
    padding: 1rem;
  }

  .view-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .vehicles-grid {
    grid-template-columns: 1fr;
  }
}
</style>

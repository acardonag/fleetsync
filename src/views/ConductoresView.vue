<template>
  <div class="conductores-view">
    <div class="view-header">
      <h2 class="view-title">Gestión de Conductores</h2>
      <div class="view-actions">
        <button @click="showAddModal = true" class="btn-primary">
          ➕ Agregar Conductor
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-content">
          <div class="stat-value">{{ conductores.length }}</div>
          <div class="stat-label">Conductores Total</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon disponible">✅</div>
        <div class="stat-content">
          <div class="stat-value">{{ conductoresActivos }}</div>
          <div class="stat-label">Activos</div>
        </div>
      </div>
    </div>

    <!-- Conductores List -->
    <div class="content-section">
      <div v-if="loading" class="loading-container">
        <div class="spinner"></div>
        <p>Cargando conductores...</p>
      </div>

      <div v-else-if="conductores.length === 0" class="empty-state">
        <div class="empty-icon">👥</div>
        <h3>No hay conductores registrados</h3>
        <p>Comienza agregando tu primer conductor</p>
        <button @click="showAddModal = true" class="btn-primary">
          Agregar Primer Conductor
        </button>
      </div>

      <div v-else class="conductores-grid">
        <div v-for="conductor in conductores" :key="conductor.id" class="conductor-card">
          <div class="conductor-header">
            <div class="conductor-avatar">
              <img v-if="conductor.foto?.url" :src="conductor.foto.url" :alt="conductor.nombre" />
              <div v-else class="avatar-placeholder">
                {{ getInitials(conductor.nombre) }}
              </div>
            </div>
            <div class="conductor-main-info">
              <h4 class="conductor-name">{{ conductor.nombre }}</h4>
              <p class="conductor-phone">📞 {{ conductor.telefono }}</p>
              <p class="conductor-experience">🚗 {{ conductor.experiencia }}</p>
            </div>
          </div>

          <div class="conductor-details">
            <p class="detail-item">
              <span class="detail-label">Dirección:</span>
              <span class="detail-value">{{ conductor.direccion }}</span>
            </p>
            <p class="detail-item">
              <span class="detail-label">Inicio contrato:</span>
              <span class="detail-value">{{ formatDate(conductor.fechaInicio) }}</span>
            </p>
          </div>

          <div class="conductor-documents">
            <div class="document-badges">
              <span v-if="conductor.cedula" class="badge badge-success" title="Cédula cargada">
                📄 Cédula
              </span>
              <span v-if="conductor.pase" class="badge badge-success" title="Pase cargado">
                🪪 Pase
              </span>
              <span v-if="conductor.contrato" class="badge badge-success" title="Contrato cargado">
                📋 Contrato
              </span>
            </div>
          </div>

          <div class="conductor-actions">
            <button @click="viewConductor(conductor)" class="btn-icon" title="Ver detalles">
              👁️
            </button>
            <button @click="editConductor(conductor)" class="btn-icon" title="Editar">
              ✏️
            </button>
            <button @click="deleteConductor(conductor)" class="btn-icon btn-danger-icon" title="Eliminar">
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add/Edit Modal -->
    <div v-if="showAddModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content modal-large">
        <div class="modal-header">
          <h3>{{ editingConductor ? 'Editar Conductor' : 'Agregar Nuevo Conductor' }}</h3>
          <button @click="closeModal" class="btn-close">✕</button>
        </div>

        <form @submit.prevent="saveConductor" class="modal-body">
          <div class="form-grid">
            <!-- Información Básica -->
            <div class="form-section">
              <h4 class="section-subtitle">Información Personal</h4>
              
              <div class="form-group">
                <label class="form-label">Nombre Completo *</label>
                <input 
                  v-model="form.nombre" 
                  type="text" 
                  class="form-input" 
                  placeholder="Juan Pérez González"
                  required
                />
              </div>

              <div class="form-group">
                <label class="form-label">Teléfono *</label>
                <input 
                  v-model="form.telefono" 
                  type="tel" 
                  class="form-input" 
                  placeholder="+57 300 123 4567"
                  required
                />
              </div>

              <div class="form-group">
                <label class="form-label">Dirección de Residencia *</label>
                <textarea 
                  v-model="form.direccion" 
                  class="form-textarea" 
                  placeholder="Calle 123 #45-67, Barrio, Ciudad"
                  rows="2"
                  required
                ></textarea>
              </div>

              <div class="form-group">
                <label class="form-label">Experiencia Manejando *</label>
                <input 
                  v-model="form.experiencia" 
                  type="text" 
                  class="form-input" 
                  placeholder="5 años, 3 años en Uber"
                  required
                />
              </div>

              <div class="form-group">
                <label class="form-label">Fecha de Inicio del Contrato *</label>
                <input 
                  v-model="form.fechaInicio" 
                  type="date" 
                  class="form-input" 
                  required
                />
              </div>
            </div>

            <!-- Documentos -->
            <div class="form-section">
              <h4 class="section-subtitle">Documentos</h4>

              <!-- Foto del Conductor -->
              <div class="form-group">
                <label class="form-label">Foto del Conductor (opcional)</label>
                <div class="file-upload-area">
                  <input 
                    type="file" 
                    @change="handleFileChange($event, 'foto')"
                    accept="image/*"
                    class="file-input"
                    id="foto-input"
                  />
                  <label for="foto-input" class="file-label">
                    <span v-if="!form.fotoFile && !form.foto?.url">📷 Seleccionar foto</span>
                    <span v-else-if="form.fotoFile">✅ {{ form.fotoFile.name }}</span>
                    <span v-else>✅ Foto cargada</span>
                  </label>
                  <button 
                    v-if="form.foto?.url || form.fotoFile" 
                    type="button" 
                    @click="clearFile('foto')" 
                    class="btn-clear-file"
                  >
                    ✕
                  </button>
                </div>
                <img v-if="form.foto?.url && !form.fotoFile" :src="form.foto.url" class="preview-image" />
              </div>

              <!-- Cédula -->
              <div class="form-group">
                <label class="form-label">Cédula (Foto o PDF)</label>
                <div class="file-upload-area">
                  <input 
                    type="file" 
                    @change="handleFileChange($event, 'cedula')"
                    accept="image/*,.pdf"
                    class="file-input"
                    id="cedula-input"
                  />
                  <label for="cedula-input" class="file-label">
                    <span v-if="!form.cedulaFile && !form.cedula?.url">📄 Seleccionar cédula</span>
                    <span v-else-if="form.cedulaFile">✅ {{ form.cedulaFile.name }}</span>
                    <span v-else>✅ Cédula cargada</span>
                  </label>
                  <button 
                    v-if="form.cedula?.url || form.cedulaFile" 
                    type="button" 
                    @click="clearFile('cedula')" 
                    class="btn-clear-file"
                  >
                    ✕
                  </button>
                </div>
                <a v-if="form.cedula?.url && !form.cedulaFile" :href="form.cedula.url" target="_blank" class="file-link">
                  Ver documento
                </a>
              </div>

              <!-- Pase de Conducción -->
              <div class="form-group">
                <label class="form-label">Pase de Conducción (Foto o PDF)</label>
                <div class="file-upload-area">
                  <input 
                    type="file" 
                    @change="handleFileChange($event, 'pase')"
                    accept="image/*,.pdf"
                    class="file-input"
                    id="pase-input"
                  />
                  <label for="pase-input" class="file-label">
                    <span v-if="!form.paseFile && !form.pase?.url">🪪 Seleccionar pase</span>
                    <span v-else-if="form.paseFile">✅ {{ form.paseFile.name }}</span>
                    <span v-else>✅ Pase cargado</span>
                  </label>
                  <button 
                    v-if="form.pase?.url || form.paseFile" 
                    type="button" 
                    @click="clearFile('pase')" 
                    class="btn-clear-file"
                  >
                    ✕
                  </button>
                </div>
                <a v-if="form.pase?.url && !form.paseFile" :href="form.pase.url" target="_blank" class="file-link">
                  Ver documento
                </a>
              </div>

              <!-- Contrato -->
              <div class="form-group">
                <label class="form-label">Contrato Firmado (Foto o PDF)</label>
                <div class="file-upload-area">
                  <input 
                    type="file" 
                    @change="handleFileChange($event, 'contrato')"
                    accept="image/*,.pdf"
                    class="file-input"
                    id="contrato-input"
                  />
                  <label for="contrato-input" class="file-label">
                    <span v-if="!form.contratoFile && !form.contrato?.url">📋 Seleccionar contrato</span>
                    <span v-else-if="form.contratoFile">✅ {{ form.contratoFile.name }}</span>
                    <span v-else>✅ Contrato cargado</span>
                  </label>
                  <button 
                    v-if="form.contrato?.url || form.contratoFile" 
                    type="button" 
                    @click="clearFile('contrato')" 
                    class="btn-clear-file"
                  >
                    ✕
                  </button>
                </div>
                <a v-if="form.contrato?.url && !form.contratoFile" :href="form.contrato.url" target="_blank" class="file-link">
                  Ver documento
                </a>
              </div>
            </div>
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

    <!-- View Details Modal -->
    <div v-if="viewingConductor" class="modal-overlay" @click.self="viewingConductor = null">
      <div class="modal-content modal-large">
        <div class="modal-header">
          <h3>Detalles del Conductor</h3>
          <button @click="viewingConductor = null" class="btn-close">✕</button>
        </div>

        <div class="modal-body conductor-details-view">
          <div class="details-header">
            <div class="conductor-avatar-large">
              <img v-if="viewingConductor.foto?.url" :src="viewingConductor.foto.url" :alt="viewingConductor.nombre" />
              <div v-else class="avatar-placeholder-large">
                {{ getInitials(viewingConductor.nombre) }}
              </div>
            </div>
            <div class="details-main">
              <h2>{{ viewingConductor.nombre }}</h2>
              <p class="detail-large">📞 {{ viewingConductor.telefono }}</p>
              <p class="detail-large">🚗 {{ viewingConductor.experiencia }}</p>
            </div>
          </div>

          <div class="details-grid">
            <div class="detail-section">
              <h4>Información Personal</h4>
              <p><strong>Dirección:</strong> {{ viewingConductor.direccion }}</p>
              <p><strong>Fecha inicio contrato:</strong> {{ formatDate(viewingConductor.fechaInicio) }}</p>
            </div>

            <div class="detail-section">
              <h4>Documentos</h4>
              <div class="documents-list">
                <a v-if="viewingConductor.cedula?.url" :href="viewingConductor.cedula.url" target="_blank" class="document-link">
                  📄 Ver Cédula
                </a>
                <span v-else class="document-missing">📄 Cédula no cargada</span>

                <a v-if="viewingConductor.pase?.url" :href="viewingConductor.pase.url" target="_blank" class="document-link">
                  🪪 Ver Pase de Conducción
                </a>
                <span v-else class="document-missing">🪪 Pase no cargado</span>

                <a v-if="viewingConductor.contrato?.url" :href="viewingConductor.contrato.url" target="_blank" class="document-link">
                  📋 Ver Contrato
                </a>
                <span v-else class="document-missing">📋 Contrato no cargado</span>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button @click="viewingConductor = null" class="btn-secondary">Cerrar</button>
          <button @click="editConductor(viewingConductor); viewingConductor = null" class="btn-primary">
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
import { uploadConductorDocument, deleteConductorDocument } from '../firebase/storage'

const conductores = ref([])
const loading = ref(true)
const saving = ref(false)
const showAddModal = ref(false)
const editingConductor = ref(null)
const viewingConductor = ref(null)

const form = ref({
  nombre: '',
  telefono: '',
  direccion: '',
  experiencia: '',
  fechaInicio: '',
  foto: null,
  cedula: null,
  pase: null,
  contrato: null,
  fotoFile: null,
  cedulaFile: null,
  paseFile: null,
  contratoFile: null
})

const conductoresActivos = computed(() => conductores.value.length)

onMounted(async () => {
  await loadConductores()
})

async function loadConductores() {
  loading.value = true
  try {
    conductores.value = await getAllDocuments('conductores', 'createdAt')
  } catch (error) {
    console.error('Error loading conductores:', error)
    alert('Error al cargar los conductores')
  } finally {
    loading.value = false
  }
}

function handleFileChange(event, fileType) {
  const file = event.target.files[0]
  if (file) {
    form.value[`${fileType}File`] = file
  }
}

function clearFile(fileType) {
  form.value[`${fileType}File`] = null
  form.value[fileType] = null
  // Clear the file input
  const input = document.getElementById(`${fileType}-input`)
  if (input) {
    input.value = ''
  }
}

async function saveConductor() {
  saving.value = true

  try {
    // Prepare conductor data
    const conductorData = {
      nombre: form.value.nombre,
      telefono: form.value.telefono,
      direccion: form.value.direccion,
      experiencia: form.value.experiencia,
      fechaInicio: form.value.fechaInicio,
      foto: form.value.foto,
      cedula: form.value.cedula,
      pase: form.value.pase,
      contrato: form.value.contrato
    }

    let conductorId = editingConductor.value?.id

    // If creating new conductor, create it first to get ID
    if (!conductorId) {
      const newConductor = await createDocument('conductores', conductorData)
      conductorId = newConductor.id
    }

    // Upload new files if any
    if (form.value.fotoFile) {
      const fotoData = await uploadConductorDocument(conductorId, form.value.fotoFile, 'foto')
      conductorData.foto = fotoData
    }

    if (form.value.cedulaFile) {
      const cedulaData = await uploadConductorDocument(conductorId, form.value.cedulaFile, 'cedula')
      conductorData.cedula = cedulaData
    }

    if (form.value.paseFile) {
      const paseData = await uploadConductorDocument(conductorId, form.value.paseFile, 'pase')
      conductorData.pase = paseData
    }

    if (form.value.contratoFile) {
      const contratoData = await uploadConductorDocument(conductorId, form.value.contratoFile, 'contrato')
      conductorData.contrato = contratoData
    }

    // Update if editing and files were uploaded
    if (editingConductor.value && (form.value.fotoFile || form.value.cedulaFile || form.value.paseFile || form.value.contratoFile)) {
      await updateDocument('conductores', conductorId, conductorData)
    } else if (!editingConductor.value && (form.value.fotoFile || form.value.cedulaFile || form.value.paseFile || form.value.contratoFile)) {
      // Update the newly created conductor with file URLs
      await updateDocument('conductores', conductorId, conductorData)
    } else if (editingConductor.value) {
      // Just update without files
      await updateDocument('conductores', conductorId, conductorData)
    }

    await loadConductores()
    closeModal()
  } catch (error) {
    console.error('Error saving conductor:', error)
    alert('Error al guardar el conductor. Por favor intenta de nuevo.')
  } finally {
    saving.value = false
  }
}

function editConductor(conductor) {
  editingConductor.value = conductor
  form.value = {
    nombre: conductor.nombre,
    telefono: conductor.telefono,
    direccion: conductor.direccion,
    experiencia: conductor.experiencia,
    fechaInicio: conductor.fechaInicio,
    foto: conductor.foto || null,
    cedula: conductor.cedula || null,
    pase: conductor.pase || null,
    contrato: conductor.contrato || null,
    fotoFile: null,
    cedulaFile: null,
    paseFile: null,
    contratoFile: null
  }
  showAddModal.value = true
}

async function deleteConductor(conductor) {
  if (!confirm(`¿Estás seguro de eliminar a ${conductor.nombre}?`)) {
    return
  }

  try {
    // Delete associated files from storage
    if (conductor.foto?.path) {
      await deleteConductorDocument(conductor.foto.path)
    }
    if (conductor.cedula?.path) {
      await deleteConductorDocument(conductor.cedula.path)
    }
    if (conductor.pase?.path) {
      await deleteConductorDocument(conductor.pase.path)
    }
    if (conductor.contrato?.path) {
      await deleteConductorDocument(conductor.contrato.path)
    }

    // Delete conductor from database
    await deleteDocument('conductores', conductor.id)
    await loadConductores()
  } catch (error) {
    console.error('Error deleting conductor:', error)
    alert('Error al eliminar el conductor')
  }
}

function viewConductor(conductor) {
  viewingConductor.value = conductor
}

function closeModal() {
  showAddModal.value = false
  editingConductor.value = null
  form.value = {
    nombre: '',
    telefono: '',
    direccion: '',
    experiencia: '',
    fechaInicio: '',
    foto: null,
    cedula: null,
    pase: null,
    contrato: null,
    fotoFile: null,
    cedulaFile: null,
    paseFile: null,
    contratoFile: null
  }
}

function getInitials(nombre) {
  if (!nombre) return '??'
  const parts = nombre.split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return nombre.substring(0, 2).toUpperCase()
}

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<style scoped>
.conductores-view {
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

.conductores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.conductor-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.conductor-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.conductor-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: flex-start;
}

.conductor-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.conductor-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
}

.conductor-main-info {
  flex: 1;
}

.conductor-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.conductor-phone,
.conductor-experience {
  font-size: 0.875rem;
  color: #666;
  margin: 0.25rem 0;
}

.conductor-details {
  margin: 1rem 0;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

.detail-item {
  font-size: 0.875rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.detail-value {
  color: #666;
}

.conductor-documents {
  margin: 1rem 0;
}

.document-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.badge-success {
  background: #e8f5e9;
  color: #2e7d32;
}

.conductor-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
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

.modal-large {
  max-width: 900px;
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

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3b82f6;
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
.form-textarea {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.file-upload-area {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.file-input {
  display: none;
}

.file-label {
  flex: 1;
  padding: 0.75rem;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  font-size: 0.875rem;
  color: #666;
}

.file-label:hover {
  border-color: #3b82f6;
  background: #f0f7ff;
}

.btn-clear-file {
  background: #fee2e2;
  color: #dc2626;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: background 0.2s;
}

.btn-clear-file:hover {
  background: #fecaca;
}

.preview-image {
  max-width: 200px;
  max-height: 200px;
  border-radius: 8px;
  margin-top: 0.5rem;
}

.file-link {
  color: #3b82f6;
  text-decoration: none;
  font-size: 0.875rem;
  display: inline-block;
  margin-top: 0.5rem;
}

.file-link:hover {
  text-decoration: underline;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.conductor-details-view {
  padding: 2rem;
}

.details-header {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;
}

.conductor-avatar-large {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.conductor-avatar-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder-large {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 2.5rem;
}

.details-main h2 {
  font-size: 1.75rem;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
}

.detail-large {
  font-size: 1rem;
  color: #666;
  margin: 0.25rem 0;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.documents-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.document-link {
  display: inline-flex;
  align-items: center;
  color: #3b82f6;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: #f0f7ff;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.2s;
}

.document-link:hover {
  background: #dbeafe;
}

.document-missing {
  color: #9ca3af;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

@media (max-width: 768px) {
  .conductores-view {
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

  .conductores-grid {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .details-header {
    flex-direction: column;
    text-align: center;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }
}
</style>

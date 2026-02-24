<template>
  <div class="ingresos-view">
    <div class="view-header">
      <h2 class="view-title">Gestión de Ingresos</h2>
      <div class="view-actions">
        <button @click="showAddModal = true" class="btn-primary">
          ➕ Registrar Ingreso
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div class="filters-section">
      <div class="filters-grid">
        <div class="filter-group">
          <label class="filter-label">📅 Período</label>
          <select v-model="filtros.periodo" @change="aplicarFiltros" class="filter-select">
            <option value="semana">Última Semana</option>
            <option value="mes">Último Mes</option>
            <option value="trimestre">Último Trimestre</option>
            <option value="año">Este Año</option>
            <option value="todo">Todo</option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">🚗 Vehículo</label>
          <select v-model="filtros.vehiculoId" @change="aplicarFiltros" class="filter-select">
            <option value="">Todos los vehículos</option>
            <option v-for="vehiculo in vehiculos" :key="vehiculo.id" :value="vehiculo.id">
              {{ vehiculo.placa }} - {{ vehiculo.marca }} {{ vehiculo.modelo }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">👤 Conductor</label>
          <select v-model="filtros.conductorId" @change="aplicarFiltros" class="filter-select">
            <option value="">Todos los conductores</option>
            <option v-for="conductor in conductores" :key="conductor.id" :value="conductor.id">
              {{ conductor.nombre }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">📊 Tipo</label>
          <select v-model="filtros.tipo" @change="aplicarFiltros" class="filter-select">
            <option value="">Todos</option>
            <option value="diario">Diario</option>
            <option value="semanal">Semanal</option>
            <option value="mensual">Mensual</option>
          </select>
        </div>
      </div>
    </div>

    <!-- KPIs -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">💰</div>
        <div class="stat-content">
          <div class="stat-value">{{ formatMoney(totalIngresos) }}</div>
          <div class="stat-label">Total Ingresos</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">🚗</div>
        <div class="stat-content">
          <div class="stat-value">{{ formatMoney(promedioVehiculo) }}</div>
          <div class="stat-label">Promedio por Vehículo</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">👤</div>
        <div class="stat-content">
          <div class="stat-value">{{ formatMoney(promedioConductor) }}</div>
          <div class="stat-label">Promedio por Conductor</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-content">
          <div class="stat-value">{{ ingresosFiltrados.length }}</div>
          <div class="stat-label">Total Registros</div>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="charts-section">
      <div class="chart-container">
        <h3 class="chart-title">📊 Ingresos por Vehículo</h3>
        <canvas ref="vehiculosChart"></canvas>
      </div>

      <div class="chart-container">
        <h3 class="chart-title">📈 Tendencia de Ingresos</h3>
        <canvas ref="tendenciaChart"></canvas>
      </div>
    </div>

    <!-- Rankings -->
    <div class="rankings-section">
      <div class="ranking-card">
        <h3 class="ranking-title">🏆 Top 5 Vehículos</h3>
        <div class="ranking-list">
          <div v-for="(item, index) in topVehiculos" :key="item.vehiculoId" class="ranking-item">
            <div class="ranking-position">{{ index + 1 }}</div>
            <div class="ranking-info">
              <div class="ranking-name">{{ item.placa }}</div>
              <div class="ranking-details">{{ item.marca }} {{ item.modelo }}</div>
            </div>
            <div class="ranking-value">{{ formatMoney(item.total) }}</div>
          </div>
          <div v-if="topVehiculos.length === 0" class="ranking-empty">
            No hay datos disponibles
          </div>
        </div>
      </div>

      <div class="ranking-card">
        <h3 class="ranking-title">🏆 Top 5 Conductores</h3>
        <div class="ranking-list">
          <div v-for="(item, index) in topConductores" :key="item.conductorId" class="ranking-item">
            <div class="ranking-position">{{ index + 1 }}</div>
            <div class="ranking-info">
              <div class="ranking-name">{{ item.nombre }}</div>
              <div class="ranking-details">{{ item.registros }} registros</div>
            </div>
            <div class="ranking-value">{{ formatMoney(item.total) }}</div>
          </div>
          <div v-if="topConductores.length === 0" class="ranking-empty">
            No hay datos disponibles
          </div>
        </div>
      </div>
    </div>

    <!-- Ingresos List -->
    <div class="content-section">
      <div class="section-header">
        <h3 class="section-title">Registros de Ingresos</h3>
        <div class="search-box">
          <input 
            v-model="busqueda" 
            type="text" 
            placeholder="🔍 Buscar por placa o conductor..."
            class="search-input"
          />
        </div>
      </div>

      <div v-if="loading" class="loading-container">
        <div class="spinner"></div>
        <p>Cargando ingresos...</p>
      </div>

      <div v-else-if="ingresosPaginados.length === 0" class="empty-state">
        <div class="empty-icon">💰</div>
        <h3>No hay ingresos registrados</h3>
        <p>Comienza registrando el primer ingreso de tus vehículos</p>
        <button @click="showAddModal = true" class="btn-primary">
          Registrar Primer Ingreso
        </button>
      </div>

      <div v-else>
        <div class="ingresos-grid">
          <div v-for="ingreso in ingresosPaginados" :key="ingreso.id" class="ingreso-card">
            <div class="ingreso-header">
              <div class="ingreso-date">📅 {{ formatDate(ingreso.fecha) }}</div>
              <span :class="['ingreso-tipo', `tipo-${ingreso.tipoRegistro}`]">
                {{ getTipoLabel(ingreso.tipoRegistro) }}
              </span>
            </div>

            <div class="ingreso-body">
              <div class="ingreso-vehiculo">
                <strong>🚗 {{ getVehiculo(ingreso.vehiculoId)?.placa }}</strong>
                <span class="ingreso-vehiculo-info">
                  {{ getVehiculo(ingreso.vehiculoId)?.marca }} {{ getVehiculo(ingreso.vehiculoId)?.modelo }}
                </span>
              </div>
              <div class="ingreso-conductor">
                <strong>👤 {{ getConductor(ingreso.conductorId)?.nombre }}</strong>
              </div>
              <div class="ingreso-monto">
                {{ formatMoney(ingreso.monto) }}
              </div>
            </div>

            <div class="ingreso-actions">
              <button @click="viewIngreso(ingreso)" class="btn-icon" title="Ver detalles">
                👁️
              </button>
              <button @click="editIngreso(ingreso)" class="btn-icon" title="Editar">
                ✏️
              </button>
              <button @click="deleteIngreso(ingreso)" class="btn-icon btn-danger-icon" title="Eliminar">
                🗑️
              </button>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination" v-if="totalPages > 1">
          <button 
            @click="paginaActual--" 
            :disabled="paginaActual === 1"
            class="btn-pagination"
          >
            ◀ Anterior
          </button>
          <span class="pagination-info">
            Página {{ paginaActual }} de {{ totalPages }}
          </span>
          <button 
            @click="paginaActual++" 
            :disabled="paginaActual === totalPages"
            class="btn-pagination"
          >
            Siguiente ▶
          </button>
        </div>
      </div>
    </div>

    <!-- Add/Edit Modal -->
    <div v-if="showAddModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content modal-medium">
        <div class="modal-header">
          <h3>{{ editingIngreso ? 'Editar Ingreso' : 'Registrar Nuevo Ingreso' }}</h3>
          <button @click="closeModal" class="btn-close">✕</button>
        </div>

        <form @submit.prevent="saveIngreso" class="modal-body">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Vehículo *</label>
              <select v-model="form.vehiculoId" @change="onVehiculoChange" class="form-select" required>
                <option value="">Seleccionar vehículo</option>
                <option v-for="vehiculo in vehiculos" :key="vehiculo.id" :value="vehiculo.id">
                  {{ vehiculo.placa }} - {{ vehiculo.marca }} {{ vehiculo.modelo }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Conductor *</label>
              <select v-model="form.conductorId" class="form-select" required :disabled="!form.vehiculoId">
                <option value="">Seleccionar conductor</option>
                <option v-for="conductor in conductoresDisponibles" :key="conductor.id" :value="conductor.id">
                  {{ conductor.nombre }}
                </option>
              </select>
              <small v-if="!form.vehiculoId" class="form-hint">Primero selecciona un vehículo</small>
            </div>

            <div class="form-group">
              <label class="form-label">Fecha *</label>
              <input 
                v-model="form.fecha" 
                type="date" 
                class="form-input" 
                :max="today"
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">Monto (COP) *</label>
              <input 
                v-model.number="form.monto" 
                type="number" 
                class="form-input" 
                placeholder="150000"
                min="1"
                required
              />
            </div>

            <div class="form-group full-width">
              <label class="form-label">Tipo de Registro *</label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" v-model="form.tipoRegistro" value="diario" required />
                  <span>📅 Diario</span>
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="form.tipoRegistro" value="semanal" required />
                  <span>📆 Semanal</span>
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="form.tipoRegistro" value="mensual" required />
                  <span>📊 Mensual</span>
                </label>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Kilometraje (opcional)</label>
              <input 
                v-model.number="form.kilometraje" 
                type="number" 
                class="form-input" 
                placeholder="250"
                min="0"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Horas Trabajadas (opcional)</label>
              <input 
                v-model.number="form.horasTrabajadas" 
                type="number" 
                class="form-input" 
                placeholder="8"
                min="0"
                step="0.5"
              />
            </div>

            <div class="form-group full-width">
              <label class="form-label">Notas Adicionales (opcional)</label>
              <textarea 
                v-model="form.notasAdicionales" 
                class="form-textarea" 
                placeholder="Información adicional sobre este ingreso..."
                rows="3"
              ></textarea>
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
    <div v-if="viewingIngreso" class="modal-overlay" @click.self="viewingIngreso = null">
      <div class="modal-content modal-large">
        <div class="modal-header">
          <h3>Detalles del Ingreso</h3>
          <button @click="viewingIngreso = null" class="btn-close">✕</button>
        </div>

        <div class="modal-body">
          <div class="details-grid">
            <div class="detail-section">
              <h4>Información del Vehículo</h4>
              <p><strong>Placa:</strong> {{ getVehiculo(viewingIngreso.vehiculoId)?.placa }}</p>
              <p><strong>Marca:</strong> {{ getVehiculo(viewingIngreso.vehiculoId)?.marca }}</p>
              <p><strong>Modelo:</strong> {{ getVehiculo(viewingIngreso.vehiculoId)?.modelo }}</p>
              <p><strong>Año:</strong> {{ getVehiculo(viewingIngreso.vehiculoId)?.año }}</p>
            </div>

            <div class="detail-section">
              <h4>Información del Conductor</h4>
              <p><strong>Nombre:</strong> {{ getConductor(viewingIngreso.conductorId)?.nombre }}</p>
              <p><strong>Teléfono:</strong> {{ getConductor(viewingIngreso.conductorId)?.telefono }}</p>
            </div>

            <div class="detail-section">
              <h4>Detalles del Ingreso</h4>
              <p><strong>Fecha:</strong> {{ formatDate(viewingIngreso.fecha) }}</p>
              <p><strong>Monto:</strong> {{ formatMoney(viewingIngreso.monto) }}</p>
              <p><strong>Tipo:</strong> {{ getTipoLabel(viewingIngreso.tipoRegistro) }}</p>
              <p v-if="viewingIngreso.kilometraje"><strong>Kilometraje:</strong> {{ viewingIngreso.kilometraje }} km</p>
              <p v-if="viewingIngreso.horasTrabajadas"><strong>Horas Trabajadas:</strong> {{ viewingIngreso.horasTrabajadas }} hrs</p>
            </div>

            <div class="detail-section full-width" v-if="viewingIngreso.notasAdicionales">
              <h4>Notas Adicionales</h4>
              <p>{{ viewingIngreso.notasAdicionales }}</p>
            </div>

            <div class="detail-section full-width" v-if="viewingIngreso.createdAt">
              <h4>Información del Registro</h4>
              <p><strong>Creado por:</strong> {{ viewingIngreso.createdByName }}</p>
              <p><strong>Fecha de creación:</strong> {{ formatDateTime(viewingIngreso.createdAt) }}</p>
              <p v-if="viewingIngreso.updatedAt"><strong>Última actualización:</strong> {{ formatDateTime(viewingIngreso.updatedAt) }}</p>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button @click="viewingIngreso = null" class="btn-secondary">Cerrar</button>
          <button @click="editIngreso(viewingIngreso); viewingIngreso = null" class="btn-primary">
            Editar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { createDocument, getAllDocuments, updateDocument, deleteDocument } from '../firebase/db'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

// Refs
const ingresos = ref([])
const vehiculos = ref([])
const conductores = ref([])
const loading = ref(true)
const saving = ref(false)
const showAddModal = ref(false)
const editingIngreso = ref(null)
const viewingIngreso = ref(null)
const busqueda = ref('')
const paginaActual = ref(1)
const registrosPorPagina = 20

// Charts
const vehiculosChart = ref(null)
const tendenciaChart = ref(null)
let chartInstances = {}

// Filters
const filtros = ref({
  periodo: 'mes',
  vehiculoId: '',
  conductorId: '',
  tipo: ''
})

// Form
const form = ref({
  vehiculoId: '',
  conductorId: '',
  fecha: '',
  monto: 0,
  tipoRegistro: 'diario',
  kilometraje: null,
  horasTrabajadas: null,
  notasAdicionales: ''
})

// Today's date for max date validation
const today = computed(() => {
  const date = new Date()
  return date.toISOString().split('T')[0]
})

// Filter conductores based on selected vehiculo
const conductoresDisponibles = computed(() => {
  if (!form.value.vehiculoId) return []
  
  const vehiculo = vehiculos.value.find(v => v.id === form.value.vehiculoId)
  if (!vehiculo || !vehiculo.conductor) return conductores.value
  
  // Find conductor assigned to this vehicle
  const conductorAsignado = conductores.value.find(c => c.nombre === vehiculo.conductor)
  return conductorAsignado ? [conductorAsignado] : conductores.value
})

// Filtered ingresos
const ingresosFiltrados = computed(() => {
  let filtered = [...ingresos.value]

  // Filter by periodo
  if (filtros.value.periodo !== 'todo') {
    const now = new Date()
    const fechaLimite = new Date()

    switch (filtros.value.periodo) {
      case 'semana':
        fechaLimite.setDate(now.getDate() - 7)
        break
      case 'mes':
        fechaLimite.setMonth(now.getMonth() - 1)
        break
      case 'trimestre':
        fechaLimite.setMonth(now.getMonth() - 3)
        break
      case 'año':
        fechaLimite.setFullYear(now.getFullYear() - 1)
        break
    }

    filtered = filtered.filter(ing => {
      const fechaIngreso = new Date(ing.fecha + 'T00:00:00')
      return fechaIngreso >= fechaLimite
    })
  }

  // Filter by vehiculo
  if (filtros.value.vehiculoId) {
    filtered = filtered.filter(ing => ing.vehiculoId === filtros.value.vehiculoId)
  }

  // Filter by conductor
  if (filtros.value.conductorId) {
    filtered = filtered.filter(ing => ing.conductorId === filtros.value.conductorId)
  }

  // Filter by tipo
  if (filtros.value.tipo) {
    filtered = filtered.filter(ing => ing.tipoRegistro === filtros.value.tipo)
  }

  // Filter by search
  if (busqueda.value) {
    const searchLower = busqueda.value.toLowerCase()
    filtered = filtered.filter(ing => {
      const vehiculo = getVehiculo(ing.vehiculoId)
      const conductor = getConductor(ing.conductorId)
      return (
        vehiculo?.placa?.toLowerCase().includes(searchLower) ||
        conductor?.nombre?.toLowerCase().includes(searchLower)
      )
    })
  }

  return filtered.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
})

// Paginated ingresos
const ingresosPaginados = computed(() => {
  const inicio = (paginaActual.value - 1) * registrosPorPagina
  const fin = inicio + registrosPorPagina
  return ingresosFiltrados.value.slice(inicio, fin)
})

const totalPages = computed(() => {
  return Math.ceil(ingresosFiltrados.value.length / registrosPorPagina)
})

// KPIs
const totalIngresos = computed(() => {
  return ingresosFiltrados.value.reduce((sum, ing) => sum + ing.monto, 0)
})

const promedioVehiculo = computed(() => {
  const vehiculosUnicos = new Set(ingresosFiltrados.value.map(ing => ing.vehiculoId))
  return vehiculosUnicos.size > 0 ? totalIngresos.value / vehiculosUnicos.size : 0
})

const promedioConductor = computed(() => {
  const conductoresUnicos = new Set(ingresosFiltrados.value.map(ing => ing.conductorId))
  return conductoresUnicos.size > 0 ? totalIngresos.value / conductoresUnicos.size : 0
})

// Top Vehiculos
const topVehiculos = computed(() => {
  const vehiculosMap = {}
  
  ingresosFiltrados.value.forEach(ing => {
    if (!vehiculosMap[ing.vehiculoId]) {
      const vehiculo = getVehiculo(ing.vehiculoId)
      vehiculosMap[ing.vehiculoId] = {
        vehiculoId: ing.vehiculoId,
        placa: vehiculo?.placa || 'N/A',
        marca: vehiculo?.marca || '',
        modelo: vehiculo?.modelo || '',
        total: 0
      }
    }
    vehiculosMap[ing.vehiculoId].total += ing.monto
  })

  return Object.values(vehiculosMap)
    .sort((a, b) => b.total - a.total)
    .slice(0, 5)
})

// Top Conductores
const topConductores = computed(() => {
  const conductoresMap = {}
  
  ingresosFiltrados.value.forEach(ing => {
    if (!conductoresMap[ing.conductorId]) {
      const conductor = getConductor(ing.conductorId)
      conductoresMap[ing.conductorId] = {
        conductorId: ing.conductorId,
        nombre: conductor?.nombre || 'N/A',
        total: 0,
        registros: 0
      }
    }
    conductoresMap[ing.conductorId].total += ing.monto
    conductoresMap[ing.conductorId].registros++
  })

  return Object.values(conductoresMap)
    .sort((a, b) => b.total - a.total)
    .slice(0, 5)
})

// Lifecycle
onMounted(async () => {
  await loadData()
  await nextTick()
  createCharts()
})

// Watch for filter changes to update charts
watch([ingresosFiltrados], () => {
  nextTick(() => {
    createCharts()
  })
})

// Watch for search/pagination
watch([busqueda], () => {
  paginaActual.value = 1
})

// Methods
async function loadData() {
  loading.value = true
  try {
    const [ingresosData, vehiculosData, conductoresData] = await Promise.all([
      getAllDocuments('ingresos', 'fecha'),
      getAllDocuments('vehiculos', 'createdAt'),
      getAllDocuments('conductores', 'createdAt')
    ])
    ingresos.value = ingresosData
    vehiculos.value = vehiculosData
    conductores.value = conductoresData
  } catch (error) {
    console.error('Error loading data:', error)
    alert('Error al cargar los datos')
  } finally {
    loading.value = false
  }
}

function aplicarFiltros() {
  paginaActual.value = 1
}

function onVehiculoChange() {
  form.value.conductorId = ''
}

async function saveIngreso() {
  saving.value = true

  try {
    // Validate conductor is assigned to vehicle
    const vehiculo = vehiculos.value.find(v => v.id === form.value.vehiculoId)
    const conductor = conductores.value.find(c => c.id === form.value.conductorId)

    if (vehiculo?.conductor && vehiculo.conductor !== conductor?.nombre) {
      alert('El conductor seleccionado no está asignado a este vehículo')
      saving.value = false
      return
    }

    // Check for duplicate
    if (!editingIngreso.value) {
      const duplicado = ingresos.value.find(ing => 
        ing.vehiculoId === form.value.vehiculoId && 
        ing.fecha === form.value.fecha &&
        ing.tipoRegistro === form.value.tipoRegistro
      )

      if (duplicado) {
        alert(`Ya existe un registro ${form.value.tipoRegistro} para este vehículo en esta fecha`)
        saving.value = false
        return
      }
    }

    const ingresoData = {
      vehiculoId: form.value.vehiculoId,
      conductorId: form.value.conductorId,
      fecha: form.value.fecha,
      monto: form.value.monto,
      tipoRegistro: form.value.tipoRegistro,
      kilometraje: form.value.kilometraje || null,
      horasTrabajadas: form.value.horasTrabajadas || null,
      notasAdicionales: form.value.notasAdicionales || ''
    }

    if (editingIngreso.value) {
      await updateDocument('ingresos', editingIngreso.value.id, ingresoData)
    } else {
      await createDocument('ingresos', ingresoData)
    }

    await loadData()
    closeModal()
  } catch (error) {
    console.error('Error saving ingreso:', error)
    alert('Error al guardar el ingreso')
  } finally {
    saving.value = false
  }
}

function editIngreso(ingreso) {
  editingIngreso.value = ingreso
  form.value = {
    vehiculoId: ingreso.vehiculoId,
    conductorId: ingreso.conductorId,
    fecha: ingreso.fecha,
    monto: ingreso.monto,
    tipoRegistro: ingreso.tipoRegistro,
    kilometraje: ingreso.kilometraje,
    horasTrabajadas: ingreso.horasTrabajadas,
    notasAdicionales: ingreso.notasAdicionales || ''
  }
  showAddModal.value = true
}

async function deleteIngreso(ingreso) {
  const vehiculo = getVehiculo(ingreso.vehiculoId)
  const confirmMsg = `¿Estás seguro de eliminar el ingreso de ${formatMoney(ingreso.monto)} del vehículo ${vehiculo?.placa} del día ${formatDate(ingreso.fecha)}?`
  
  if (!confirm(confirmMsg)) return

  try {
    await deleteDocument('ingresos', ingreso.id)
    await loadData()
  } catch (error) {
    console.error('Error deleting ingreso:', error)
    alert('Error al eliminar el ingreso')
  }
}

function viewIngreso(ingreso) {
  viewingIngreso.value = ingreso
}

function closeModal() {
  showAddModal.value = false
  editingIngreso.value = null
  form.value = {
    vehiculoId: '',
    conductorId: '',
    fecha: '',
    monto: 0,
    tipoRegistro: 'diario',
    kilometraje: null,
    horasTrabajadas: null,
    notasAdicionales: ''
  }
}

function getVehiculo(vehiculoId) {
  return vehiculos.value.find(v => v.id === vehiculoId)
}

function getConductor(conductorId) {
  return conductores.value.find(c => c.id === conductorId)
}

function formatMoney(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(amount || 0)
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

function getTipoLabel(tipo) {
  const labels = {
    diario: 'Diario',
    semanal: 'Semanal',
    mensual: 'Mensual'
  }
  return labels[tipo] || tipo
}

function createCharts() {
  // Destroy existing charts
  Object.values(chartInstances).forEach(chart => chart?.destroy())
  chartInstances = {}

  // Create Vehiculos Chart
  if (vehiculosChart.value) {
    const ctx = vehiculosChart.value.getContext('2d')
    const topVehiculosData = topVehiculos.value

    chartInstances.vehiculos = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: topVehiculosData.map(v => v.placa),
        datasets: [{
          label: 'Ingresos',
          data: topVehiculosData.map(v => v.total),
          backgroundColor: 'rgba(59, 130, 246, 0.6)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return formatMoney(context.parsed.y)
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + (value / 1000).toFixed(0) + 'k'
              }
            }
          }
        }
      }
    })
  }

  // Create Tendencia Chart
  if (tendenciaChart.value) {
    const ctx = tendenciaChart.value.getContext('2d')
    
    // Group by date
    const ingresosPorFecha = {}
    ingresosFiltrados.value.forEach(ing => {
      if (!ingresosPorFecha[ing.fecha]) {
        ingresosPorFecha[ing.fecha] = 0
      }
      ingresosPorFecha[ing.fecha] += ing.monto
    })

    const fechasOrdenadas = Object.keys(ingresosPorFecha).sort()
    const ultimas30Fechas = fechasOrdenadas.slice(-30)

    chartInstances.tendencia = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ultimas30Fechas.map(f => {
          const date = new Date(f + 'T00:00:00')
          return date.toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })
        }),
        datasets: [{
          label: 'Ingresos Diarios',
          data: ultimas30Fechas.map(f => ingresosPorFecha[f]),
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return formatMoney(context.parsed.y)
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + (value / 1000).toFixed(0) + 'k'
              }
            }
          }
        }
      }
    })
  }
}
</script>

<style scoped>
.ingresos-view {
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

/* Filters */
.filters-section {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-label {
  font-weight: 600;
  color: #1a1a1a;
  font-size: 0.875rem;
}

.filter-select {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: white;
}

.filter-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Stats */
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

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 1.5rem;
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

/* Charts */
.charts-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.chart-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  height: 350px;
}

.chart-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
}

.chart-container canvas {
  max-height: 280px;
}

/* Rankings */
.rankings-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.ranking-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.ranking-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f0f0f0;
}

.ranking-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.ranking-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 8px;
  transition: background 0.2s;
}

.ranking-item:hover {
  background: #f3f4f6;
}

.ranking-position {
  font-size: 1.25rem;
  font-weight: 700;
  color: #3b82f6;
  width: 32px;
  text-align: center;
}

.ranking-info {
  flex: 1;
}

.ranking-name {
  font-weight: 600;
  color: #1a1a1a;
}

.ranking-details {
  font-size: 0.875rem;
  color: #666;
}

.ranking-value {
  font-weight: 700;
  color: #059669;
}

.ranking-empty {
  text-align: center;
  padding: 2rem;
  color: #9ca3af;
  font-style: italic;
}

/* Content Section */
.content-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.search-box {
  flex: 1;
  max-width: 400px;
}

.search-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
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

/* Ingresos Grid */
.ingresos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.ingreso-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.ingreso-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.ingreso-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f0f0f0;
}

.ingreso-date {
  font-size: 0.875rem;
  color: #666;
  font-weight: 600;
}

.ingreso-tipo {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.tipo-diario {
  background: #dbeafe;
  color: #1e40af;
}

.tipo-semanal {
  background: #d1fae5;
  color: #065f46;
}

.tipo-mensual {
  background: #fef3c7;
  color: #92400e;
}

.ingreso-body {
  margin-bottom: 1rem;
}

.ingreso-vehiculo,
.ingreso-conductor {
  margin-bottom: 0.5rem;
}

.ingreso-vehiculo strong,
.ingreso-conductor strong {
  display: block;
  font-size: 0.875rem;
  color: #1a1a1a;
}

.ingreso-vehiculo-info {
  font-size: 0.75rem;
  color: #666;
}

.ingreso-monto {
  font-size: 1.5rem;
  font-weight: 700;
  color: #059669;
  margin-top: 0.75rem;
}

.ingreso-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
}

.btn-pagination {
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  color: #1a1a1a;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-pagination:hover:not(:disabled) {
  background: #e5e7eb;
}

.btn-pagination:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-info {
  font-size: 0.875rem;
  color: #666;
}

/* Buttons */
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

/* Modal */
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

.modal-medium {
  max-width: 700px;
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

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

/* Form */
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  font-weight: 600;
  color: #1a1a1a;
  font-size: 0.875rem;
}

.form-input,
.form-select,
.form-textarea {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.form-hint {
  font-size: 0.75rem;
  color: #9ca3af;
  font-style: italic;
}

.radio-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.2s;
}

.radio-label:hover {
  border-color: #3b82f6;
  background: #f0f7ff;
}

.radio-label input[type="radio"] {
  cursor: pointer;
}

.radio-label input[type="radio"]:checked + span {
  font-weight: 600;
  color: #3b82f6;
}

/* Details */
.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.detail-section {
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
}

.detail-section.full-width {
  grid-column: 1 / -1;
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

/* Responsive */
@media (max-width: 768px) {
  .ingresos-view {
    padding: 1rem;
  }

  .view-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .stats-grid,
  .charts-section,
  .rankings-section {
    grid-template-columns: 1fr;
  }

  .chart-container {
    height: 300px;
  }

  .ingresos-grid {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .section-header {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    max-width: 100%;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <div class="gastos-view">
    <!-- Header -->
    <div class="view-header">
      <div class="header-content">
        <h1 class="view-title">💸 Gestión de Gastos</h1>
        <button @click="openCreateModal" class="btn-primary">
          + Registrar Gasto
        </button>
      </div>
    </div>

    <!-- Filtros -->
    <div class="filters-section">
      <div class="filters-grid">
        <div class="filter-item">
          <label>📅 Período</label>
          <select v-model="filters.periodo" @change="applyFilters" class="filter-select">
            <option value="7">Última semana</option>
            <option value="30">Último mes</option>
            <option value="90">Últimos 3 meses</option>
            <option value="365">Último año</option>
            <option value="all">Todo</option>
          </select>
        </div>

        <div class="filter-item">
          <label>🚗 Vehículo</label>
          <select v-model="filters.vehiculoId" @change="applyFilters" class="filter-select">
            <option value="">Todos los vehículos</option>
            <option v-for="vehiculo in vehiculos" :key="vehiculo.id" :value="vehiculo.id">
              {{ vehiculo.placa }} - {{ vehiculo.marca }} {{ vehiculo.modelo }}
            </option>
          </select>
        </div>

        <div class="filter-item">
          <label>💰 Tipo de Gasto</label>
          <select v-model="filters.tipoGasto" @change="applyFilters" class="filter-select">
            <option value="">Todos los tipos</option>
            <option value="combustible">⛽ Combustible</option>
            <option value="mantenimiento">🔧 Mantenimiento</option>
            <option value="multa">🚨 Multa</option>
            <option value="seguro">🛡️ Seguro</option>
            <option value="peaje">🛣️ Peaje</option>
            <option value="parqueadero">🅿️ Parqueadero</option>
            <option value="lavado">🧼 Lavado</option>
            <option value="otro">📦 Otro</option>
          </select>
        </div>

        <div class="filter-item">
          <label>👤 Conductor</label>
          <select v-model="filters.conductorId" @change="applyFilters" class="filter-select">
            <option value="">Todos los conductores</option>
            <option v-for="conductor in conductores" :key="conductor.id" :value="conductor.id">
              {{ conductor.nombre }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- KPIs -->
    <div class="kpis-section">
      <div class="kpi-card red">
        <div class="kpi-icon">💸</div>
        <div class="kpi-content">
          <div class="kpi-label">Total de Gastos</div>
          <div class="kpi-value">{{ formatCurrency(totalGastos) }}</div>
        </div>
      </div>

      <div class="kpi-card orange">
        <div class="kpi-icon">🚗</div>
        <div class="kpi-content">
          <div class="kpi-label">Gasto Promedio por Vehículo</div>
          <div class="kpi-value">{{ formatCurrency(promedioVehiculo) }}</div>
        </div>
      </div>

      <div class="kpi-card purple">
        <div class="kpi-icon">📊</div>
        <div class="kpi-content">
          <div class="kpi-label">Total de Registros</div>
          <div class="kpi-value">{{ filteredGastos.length }}</div>
        </div>
      </div>

      <div class="kpi-card blue">
        <div class="kpi-icon">💹</div>
        <div class="kpi-content">
          <div class="kpi-label">Margen (Ingresos - Gastos)</div>
          <div class="kpi-value" :class="margen >= 0 ? 'positive' : 'negative'">
            {{ formatCurrency(margen) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Gráficos y Rankings -->
    <div class="charts-section">
      <div class="chart-card">
        <h3 class="chart-title">📊 Gastos por Vehículo ({{ filters.periodo === 'all' ? 'Total' : 'Período Seleccionado' }})</h3>
        <canvas ref="vehiculosChartCanvas"></canvas>
      </div>

      <div class="chart-card">
        <h3 class="chart-title">📈 Tendencia de Gastos</h3>
        <canvas ref="tendenciaChartCanvas"></canvas>
      </div>

      <div class="chart-card">
        <h3 class="chart-title">🥧 Distribución por Tipo de Gasto</h3>
        <canvas ref="tiposChartCanvas"></canvas>
      </div>
    </div>

    <!-- Rankings -->
    <div class="rankings-section">
      <div class="ranking-card">
        <h3 class="ranking-title">🔝 Top 5 Vehículos con Más Gastos</h3>
        <div class="ranking-list">
          <div v-for="(item, index) in topVehiculos" :key="item.vehiculoId" class="ranking-item">
            <div class="ranking-position">{{ index + 1 }}</div>
            <div class="ranking-info">
              <div class="ranking-name">{{ getVehiculoLabel(item.vehiculoId) }}</div>
              <div class="ranking-detail">{{ item.count }} gastos</div>
            </div>
            <div class="ranking-value">{{ formatCurrency(item.total) }}</div>
          </div>
          <div v-if="topVehiculos.length === 0" class="ranking-empty">
            Sin datos en el período seleccionado
          </div>
        </div>
      </div>

      <div class="ranking-card">
        <h3 class="ranking-title">🔧 Próximos Mantenimientos</h3>
        <div class="ranking-list">
          <div v-for="item in proximosMantenimientos" :key="item.id" class="ranking-item alert">
            <div class="ranking-info">
              <div class="ranking-name">{{ item.vehiculoLabel }}</div>
              <div class="ranking-detail">Actual: {{ item.kmActual }} km | Próximo: {{ item.proximoMant }} km</div>
            </div>
            <div class="ranking-badge" :class="item.urgencia">
              {{ item.faltante }} km
            </div>
          </div>
          <div v-if="proximosMantenimientos.length === 0" class="ranking-empty">
            ✅ No hay mantenimientos próximos programados
          </div>
        </div>
      </div>
    </div>

    <!-- Búsqueda -->
    <div class="search-section">
      <div class="search-bar">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="🔍 Buscar por descripción, proveedor, placa o conductor..."
          class="search-input"
        />
        <button v-if="searchQuery" @click="searchQuery = ''" class="btn-clear">✕</button>
      </div>
    </div>

    <!-- Tabla de Gastos -->
    <div class="table-section">
      <div class="table-header">
        <h2 class="table-title">Registro de Gastos ({{ paginatedGastos.length }} de {{ searchedGastos.length }})</h2>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Vehículo</th>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Proveedor</th>
              <th>Monto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="gasto in paginatedGastos" :key="gasto.id" class="table-row">
              <td>{{ formatDate(gasto.fecha) }}</td>
              <td>
                <div class="vehiculo-cell">
                  <strong>{{ getVehiculoPlaca(gasto.vehiculoId) }}</strong>
                  <small>{{ getVehiculoModelo(gasto.vehiculoId) }}</small>
                </div>
              </td>
              <td>
                <span class="badge" :class="'badge-' + gasto.tipoGasto">
                  {{ getTipoGastoIcon(gasto.tipoGasto) }} {{ getTipoGastoLabel(gasto.tipoGasto) }}
                </span>
                <div v-if="gasto.tipoGasto === 'mantenimiento' && gasto.categoriaMantenimiento" class="sub-badge">
                  {{ gasto.categoriaMantenimiento }}
                </div>
              </td>
              <td>
                <div class="description-cell">
                  {{ gasto.descripcion || '-' }}
                </div>
              </td>
              <td>{{ gasto.proveedor || '-' }}</td>
              <td class="amount-cell">{{ formatCurrency(gasto.monto) }}</td>
              <td>
                <div class="action-buttons">
                  <button @click="viewGasto(gasto)" class="btn-icon" title="Ver detalles">👁️</button>
                  <button @click="editGasto(gasto)" class="btn-icon" title="Editar">✏️</button>
                  <button @click="confirmDelete(gasto)" class="btn-icon btn-danger" title="Eliminar">🗑️</button>
                </div>
              </td>
            </tr>
            <tr v-if="paginatedGastos.length === 0">
              <td colspan="7" class="empty-state">
                <div class="empty-icon">📭</div>
                <p>No se encontraron gastos</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Paginación -->
      <div v-if="totalPages > 1" class="pagination">
        <button
          @click="currentPage = 1"
          :disabled="currentPage === 1"
          class="btn-pagination"
        >
          ⏮️
        </button>
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="btn-pagination"
        >
          ◀️
        </button>
        <span class="pagination-info">
          Página {{ currentPage }} de {{ totalPages }}
        </span>
        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          class="btn-pagination"
        >
          ▶️
        </button>
        <button
          @click="currentPage = totalPages"
          :disabled="currentPage === totalPages"
          class="btn-pagination"
        >
          ⏭️
        </button>
      </div>
    </div>

    <!-- Modal Crear/Editar -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content large">
        <div class="modal-header">
          <h2 class="modal-title">{{ isEditing ? '✏️ Editar Gasto' : '💸 Registrar Nuevo Gasto' }}</h2>
          <button @click="closeModal" class="btn-close">✕</button>
        </div>

        <form @submit.prevent="saveGasto" class="modal-body">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label required">🚗 Vehículo</label>
              <select v-model="form.vehiculoId" required class="form-input">
                <option value="">Seleccionar vehículo...</option>
                <option v-for="vehiculo in vehiculos" :key="vehiculo.id" :value="vehiculo.id">
                  {{ vehiculo.placa }} - {{ vehiculo.marca }} {{ vehiculo.modelo }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">👤 Conductor (opcional)</label>
              <select v-model="form.conductorId" class="form-input">
                <option value="">Gasto del vehículo (no asignado a conductor)</option>
                <option v-for="conductor in availableConductores" :key="conductor.id" :value="conductor.id">
                  {{ conductor.nombre }}
                </option>
              </select>
              <small class="form-hint">Solo para gastos generados por conductor específico (ej: multas)</small>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label required">📅 Fecha</label>
              <input
                v-model="form.fecha"
                type="date"
                required
                :max="today"
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label class="form-label required">💰 Tipo de Gasto</label>
              <select v-model="form.tipoGasto" required class="form-input">
                <option value="">Seleccionar tipo...</option>
                <option value="combustible">⛽ Combustible</option>
                <option value="mantenimiento">🔧 Mantenimiento</option>
                <option value="multa">🚨 Multa</option>
                <option value="seguro">🛡️ Seguro</option>
                <option value="peaje">🛣️ Peaje</option>
                <option value="parqueadero">🅿️ Parqueadero</option>
                <option value="lavado">🧼 Lavado</option>
                <option value="otro">📦 Otro</option>
              </select>
            </div>
          </div>

          <div v-if="form.tipoGasto === 'mantenimiento'" class="form-row">
            <div class="form-group">
              <label class="form-label required">🔧 Categoría de Mantenimiento</label>
              <select v-model="form.categoriaMantenimiento" required class="form-input">
                <option value="">Seleccionar categoría...</option>
                <option value="preventivo">✅ Preventivo</option>
                <option value="correctivo">⚠️ Correctivo</option>
              </select>
            </div>

            <div v-if="form.categoriaMantenimiento === 'preventivo'" class="form-group">
              <label class="form-label">📍 Próximo Mantenimiento (km)</label>
              <input
                v-model.number="form.proximoMantenimiento"
                type="number"
                min="0"
                class="form-input"
                placeholder="Ej: 85000"
              />
              <small class="form-hint">Kilometraje estimado del próximo servicio</small>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label required">💵 Monto (COP)</label>
              <input
                v-model.number="form.monto"
                type="number"
                required
                min="1"
                step="1"
                class="form-input"
                placeholder="Ej: 50000"
              />
            </div>

            <div class="form-group">
              <label class="form-label">🏪 Proveedor</label>
              <input
                v-model="form.proveedor"
                type="text"
                class="form-input"
                placeholder="Ej: Terpel, Taller Central, etc."
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">📏 Kilometraje Actual</label>
              <input
                v-model.number="form.kilometrajeActual"
                type="number"
                min="0"
                class="form-input"
                placeholder="Ej: 75000"
              />
              <small class="form-hint">Importante para historial de mantenimientos</small>
            </div>

            <div class="form-group full-width">
              <label class="form-label required">📝 Descripción</label>
              <input
                v-model="form.descripcion"
                type="text"
                required
                class="form-input"
                placeholder="Ej: Cambio de aceite y filtros"
              />
            </div>
          </div>

          <div class="form-group full-width">
            <label class="form-label">📄 Notas Adicionales</label>
            <textarea
              v-model="form.notasAdicionales"
              class="form-textarea"
              rows="3"
              placeholder="Información adicional, observaciones, etc."
            ></textarea>
          </div>

          <div v-if="formError" class="form-error">
            ⚠️ {{ formError }}
          </div>

          <div class="modal-footer">
            <button type="button" @click="closeModal" class="btn-secondary">
              Cancelar
            </button>
            <button type="submit" class="btn-primary" :disabled="saving">
              {{ saving ? 'Guardando...' : (isEditing ? 'Actualizar' : 'Registrar') }} Gasto
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal Ver Detalles -->
    <div v-if="viewingGasto" class="modal-overlay" @click.self="closeViewModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">👁️ Detalles del Gasto</h2>
          <button @click="closeViewModal" class="btn-close">✕</button>
        </div>

        <div class="modal-body">
          <div class="detail-section">
            <h3 class="detail-title">🚗 Información del Vehículo</h3>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="detail-label">Placa:</span>
                <span class="detail-value">{{ getVehiculoPlaca(viewingGasto.vehiculoId) }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Vehículo:</span>
                <span class="detail-value">{{ getVehiculoModelo(viewingGasto.vehiculoId) }}</span>
              </div>
            </div>
          </div>

          <div v-if="viewingGasto.conductorId" class="detail-section">
            <h3 class="detail-title">👤 Información del Conductor</h3>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="detail-label">Nombre:</span>
                <span class="detail-value">{{ getConductorNombre(viewingGasto.conductorId) }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Teléfono:</span>
                <span class="detail-value">{{ getConductorTelefono(viewingGasto.conductorId) }}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h3 class="detail-title">💸 Información del Gasto</h3>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="detail-label">Fecha:</span>
                <span class="detail-value">{{ formatDate(viewingGasto.fecha) }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Tipo:</span>
                <span class="detail-value">
                  <span class="badge" :class="'badge-' + viewingGasto.tipoGasto">
                    {{ getTipoGastoIcon(viewingGasto.tipoGasto) }} {{ getTipoGastoLabel(viewingGasto.tipoGasto) }}
                  </span>
                </span>
              </div>
              <div v-if="viewingGasto.categoriaMantenimiento" class="detail-item">
                <span class="detail-label">Categoría:</span>
                <span class="detail-value">{{ viewingGasto.categoriaMantenimiento }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Monto:</span>
                <span class="detail-value highlight">{{ formatCurrency(viewingGasto.monto) }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Descripción:</span>
                <span class="detail-value">{{ viewingGasto.descripcion }}</span>
              </div>
              <div v-if="viewingGasto.proveedor" class="detail-item">
                <span class="detail-label">Proveedor:</span>
                <span class="detail-value">{{ viewingGasto.proveedor }}</span>
              </div>
              <div v-if="viewingGasto.kilometrajeActual" class="detail-item">
                <span class="detail-label">Kilometraje:</span>
                <span class="detail-value">{{ viewingGasto.kilometrajeActual.toLocaleString('es-CO') }} km</span>
              </div>
              <div v-if="viewingGasto.proximoMantenimiento" class="detail-item">
                <span class="detail-label">Próximo Mant.:</span>
                <span class="detail-value">{{ viewingGasto.proximoMantenimiento.toLocaleString('es-CO') }} km</span>
              </div>
              <div v-if="viewingGasto.notasAdicionales" class="detail-item full">
                <span class="detail-label">Notas:</span>
                <span class="detail-value">{{ viewingGasto.notasAdicionales }}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h3 class="detail-title">📋 Información de Auditoría</h3>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="detail-label">Creado por:</span>
                <span class="detail-value">{{ viewingGasto.createdBy }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Fecha creación:</span>
                <span class="detail-value">{{ formatDateTime(viewingGasto.createdAt) }}</span>
              </div>
              <div v-if="viewingGasto.updatedAt && viewingGasto.updatedAt.seconds !== viewingGasto.createdAt.seconds" class="detail-item">
                <span class="detail-label">Última actualización:</span>
                <span class="detail-value">{{ formatDateTime(viewingGasto.updatedAt) }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button @click="closeViewModal" class="btn-secondary">Cerrar</button>
          <button @click="editFromView" class="btn-primary">✏️ Editar</button>
        </div>
      </div>
    </div>

    <!-- Modal Confirmación Eliminar -->
    <div v-if="deletingGasto" class="modal-overlay" @click.self="closeDeleteModal">
      <div class="modal-content small">
        <div class="modal-header">
          <h2 class="modal-title">🗑️ Confirmar Eliminación</h2>
          <button @click="closeDeleteModal" class="btn-close">✕</button>
        </div>

        <div class="modal-body">
          <p class="delete-message">
            ¿Estás seguro de eliminar el gasto de
            <strong>{{ formatCurrency(deletingGasto.monto) }}</strong>
            del vehículo <strong>{{ getVehiculoPlaca(deletingGasto.vehiculoId) }}</strong>
            del día <strong>{{ formatDate(deletingGasto.fecha) }}</strong>?
          </p>
          <p class="delete-warning">⚠️ Esta acción no se puede deshacer.</p>
        </div>

        <div class="modal-footer">
          <button @click="closeDeleteModal" class="btn-secondary">Cancelar</button>
          <button @click="deleteGasto" class="btn-danger" :disabled="deleting">
            {{ deleting ? 'Eliminando...' : 'Eliminar Gasto' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { auth } from '../firebase/auth'
import { db } from '../firebase/db'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

// Refs
const vehiculos = ref([])
const conductores = ref([])
const gastos = ref([])
const ingresos = ref([]) // Para calcular margen
const showModal = ref(false)
const isEditing = ref(false)
const viewingGasto = ref(null)
const deletingGasto = ref(null)
const saving = ref(false)
const deleting = ref(false)
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 20
const formError = ref('')

// Charts
const vehiculosChartCanvas = ref(null)
const tendenciaChartCanvas = ref(null)
const tiposChartCanvas = ref(null)
let vehiculosChart = null
let tendenciaChart = null
let tiposChart = null

// Filtros
const filters = ref({
  periodo: '30',
  vehiculoId: '',
  tipoGasto: '',
  conductorId: ''
})

// Formulario
const emptyForm = {
  vehiculoId: '',
  conductorId: '',
  fecha: new Date().toISOString().split('T')[0],
  tipoGasto: '',
  categoriaMantenimiento: '',
  descripcion: '',
  monto: null,
  proveedor: '',
  kilometrajeActual: null,
  proximoMantenimiento: null,
  notasAdicionales: ''
}

const form = ref({ ...emptyForm })
const editingId = ref(null)

// Computed
const today = computed(() => new Date().toISOString().split('T')[0])

const availableConductores = computed(() => {
  if (!form.value.vehiculoId) return []
  return conductores.value
})

const filteredGastos = computed(() => {
  let result = [...gastos.value]

  // Filtro por período
  if (filters.value.periodo !== 'all') {
    const days = parseInt(filters.value.periodo)
    const cutoffDate = new Date()
    cutoffDate.setDate(cutoffDate.getDate() - days)
    result = result.filter(g => new Date(g.fecha) >= cutoffDate)
  }

  // Filtro por vehículo
  if (filters.value.vehiculoId) {
    result = result.filter(g => g.vehiculoId === filters.value.vehiculoId)
  }

  // Filtro por tipo
  if (filters.value.tipoGasto) {
    result = result.filter(g => g.tipoGasto === filters.value.tipoGasto)
  }

  // Filtro por conductor
  if (filters.value.conductorId) {
    result = result.filter(g => g.conductorId === filters.value.conductorId)
  }

  return result.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
})

const searchedGastos = computed(() => {
  if (!searchQuery.value.trim()) return filteredGastos.value

  const query = searchQuery.value.toLowerCase()
  return filteredGastos.value.filter(gasto => {
    const vehiculo = vehiculos.value.find(v => v.id === gasto.vehiculoId)
    const conductor = gasto.conductorId ? conductores.value.find(c => c.id === gasto.conductorId) : null

    return (
      gasto.descripcion?.toLowerCase().includes(query) ||
      gasto.proveedor?.toLowerCase().includes(query) ||
      vehiculo?.placa?.toLowerCase().includes(query) ||
      vehiculo?.marca?.toLowerCase().includes(query) ||
      vehiculo?.modelo?.toLowerCase().includes(query) ||
      conductor?.nombre?.toLowerCase().includes(query)
    )
  })
})

const paginatedGastos = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return searchedGastos.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(searchedGastos.value.length / itemsPerPage)
})

// KPIs
const totalGastos = computed(() => {
  return filteredGastos.value.reduce((sum, g) => sum + (g.monto || 0), 0)
})

const promedioVehiculo = computed(() => {
  const vehiculosConGastos = new Set(filteredGastos.value.map(g => g.vehiculoId))
  return vehiculosConGastos.size > 0 ? totalGastos.value / vehiculosConGastos.size : 0
})

const totalIngresos = computed(() => {
  let result = [...ingresos.value]

  // Aplicar mismo filtro de período que gastos
  if (filters.value.periodo !== 'all') {
    const days = parseInt(filters.value.periodo)
    const cutoffDate = new Date()
    cutoffDate.setDate(cutoffDate.getDate() - days)
    result = result.filter(i => new Date(i.fecha) >= cutoffDate)
  }

  // Aplicar mismo filtro de vehículo
  if (filters.value.vehiculoId) {
    result = result.filter(i => i.vehiculoId === filters.value.vehiculoId)
  }

  return result.reduce((sum, i) => sum + (i.monto || 0), 0)
})

const margen = computed(() => {
  return totalIngresos.value - totalGastos.value
})

// Rankings
const topVehiculos = computed(() => {
  const gastosPorVehiculo = {}

  filteredGastos.value.forEach(gasto => {
    if (!gastosPorVehiculo[gasto.vehiculoId]) {
      gastosPorVehiculo[gasto.vehiculoId] = { total: 0, count: 0 }
    }
    gastosPorVehiculo[gasto.vehiculoId].total += gasto.monto
    gastosPorVehiculo[gasto.vehiculoId].count++
  })

  return Object.entries(gastosPorVehiculo)
    .map(([vehiculoId, data]) => ({
      vehiculoId,
      total: data.total,
      count: data.count
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 5)
})

const proximosMantenimientos = computed(() => {
  // Obtener últimos mantenimientos preventivos con próximo km programado
  const mantenimientos = gastos.value.filter(g =>
    g.tipoGasto === 'mantenimiento' &&
    g.categoriaMantenimiento === 'preventivo' &&
    g.proximoMantenimiento &&
    g.kilometrajeActual
  )

  // Agrupar por vehículo y obtener el más reciente
  const porVehiculo = {}
  mantenimientos.forEach(m => {
    if (!porVehiculo[m.vehiculoId] || new Date(m.fecha) > new Date(porVehiculo[m.vehiculoId].fecha)) {
      porVehiculo[m.vehiculoId] = m
    }
  })

  return Object.values(porVehiculo)
    .map(m => {
      const faltante = m.proximoMantenimiento - m.kilometrajeActual
      let urgencia = 'normal'
      if (faltante <= 1000) urgencia = 'urgent'
      else if (faltante <= 3000) urgencia = 'warning'

      return {
        id: m.id,
        vehiculoLabel: getVehiculoLabel(m.vehiculoId),
        kmActual: m.kilometrajeActual,
        proximoMant: m.proximoMantenimiento,
        faltante,
        urgencia
      }
    })
    .filter(m => m.faltante >= 0) // Solo mostrar pendientes
    .sort((a, b) => a.faltante - b.faltante)
    .slice(0, 5)
})

// Métodos auxiliares
function getVehiculoLabel(id) {
  const vehiculo = vehiculos.value.find(v => v.id === id)
  return vehiculo ? `${vehiculo.placa} - ${vehiculo.marca} ${vehiculo.modelo}` : 'Desconocido'
}

function getVehiculoPlaca(id) {
  const vehiculo = vehiculos.value.find(v => v.id === id)
  return vehiculo?.placa || 'N/A'
}

function getVehiculoModelo(id) {
  const vehiculo = vehiculos.value.find(v => v.id === id)
  return vehiculo ? `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.año}` : 'N/A'
}

function getConductorNombre(id) {
  const conductor = conductores.value.find(c => c.id === id)
  return conductor?.nombre || 'N/A'
}

function getConductorTelefono(id) {
  const conductor = conductores.value.find(c => c.id === id)
  return conductor?.telefono || 'N/A'
}

function getTipoGastoIcon(tipo) {
  const icons = {
    combustible: '⛽',
    mantenimiento: '🔧',
    multa: '🚨',
    seguro: '🛡️',
    peaje: '🛣️',
    parqueadero: '🅿️',
    lavado: '🧼',
    otro: '📦'
  }
  return icons[tipo] || '💸'
}

function getTipoGastoLabel(tipo) {
  const labels = {
    combustible: 'Combustible',
    mantenimiento: 'Mantenimiento',
    multa: 'Multa',
    seguro: 'Seguro',
    peaje: 'Peaje',
    parqueadero: 'Parqueadero',
    lavado: 'Lavado',
    otro: 'Otro'
  }
  return labels[tipo] || tipo
}

function formatCurrency(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(value || 0)
}

function formatDate(dateStr) {
  if (!dateStr) return 'N/A'
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' })
}

function formatDateTime(timestamp) {
  if (!timestamp) return 'N/A'
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  return date.toLocaleString('es-CO', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Gráficos
function updateCharts() {
  nextTick(() => {
    updateVehiculosChart()
    updateTendenciaChart()
    updateTiposChart()
  })
}

function updateVehiculosChart() {
  if (!vehiculosChartCanvas.value) return

  const gastosPorVehiculo = {}
  filteredGastos.value.forEach(gasto => {
    if (!gastosPorVehiculo[gasto.vehiculoId]) {
      gastosPorVehiculo[gasto.vehiculoId] = 0
    }
    gastosPorVehiculo[gasto.vehiculoId] += gasto.monto
  })

  const labels = Object.keys(gastosPorVehiculo).map(id => getVehiculoPlaca(id))
  const data = Object.values(gastosPorVehiculo)

  if (vehiculosChart) {
    vehiculosChart.destroy()
  }

  vehiculosChart = new Chart(vehiculosChartCanvas.value, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Gastos (COP)',
        data,
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => formatCurrency(context.parsed.y)
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => formatCurrency(value)
          }
        }
      }
    }
  })
}

function updateTendenciaChart() {
  if (!tendenciaChartCanvas.value) return

  // Agrupar gastos por fecha
  const gastosPorFecha = {}
  filteredGastos.value.forEach(gasto => {
    if (!gastosPorFecha[gasto.fecha]) {
      gastosPorFecha[gasto.fecha] = 0
    }
    gastosPorFecha[gasto.fecha] += gasto.monto
  })

  const sortedDates = Object.keys(gastosPorFecha).sort()
  const data = sortedDates.map(date => gastosPorFecha[date])

  if (tendenciaChart) {
    tendenciaChart.destroy()
  }

  tendenciaChart = new Chart(tendenciaChartCanvas.value, {
    type: 'line',
    data: {
      labels: sortedDates.map(d => formatDate(d)),
      datasets: [{
        label: 'Gastos Diarios',
        data,
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => formatCurrency(context.parsed.y)
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => formatCurrency(value)
          }
        }
      }
    }
  })
}

function updateTiposChart() {
  if (!tiposChartCanvas.value) return

  const gastosPorTipo = {}
  filteredGastos.value.forEach(gasto => {
    if (!gastosPorTipo[gasto.tipoGasto]) {
      gastosPorTipo[gasto.tipoGasto] = 0
    }
    gastosPorTipo[gasto.tipoGasto] += gasto.monto
  })

  const labels = Object.keys(gastosPorTipo).map(tipo => getTipoGastoLabel(tipo))
  const data = Object.values(gastosPorTipo)

  const colors = [
    'rgba(239, 68, 68, 0.8)',
    'rgba(249, 115, 22, 0.8)',
    'rgba(234, 179, 8, 0.8)',
    'rgba(34, 197, 94, 0.8)',
    'rgba(59, 130, 246, 0.8)',
    'rgba(168, 85, 247, 0.8)',
    'rgba(236, 72, 153, 0.8)',
    'rgba(107, 114, 128, 0.8)'
  ]

  if (tiposChart) {
    tiposChart.destroy()
  }

  tiposChart = new Chart(tiposChartCanvas.value, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = context.label || ''
              const value = formatCurrency(context.parsed)
              const total = context.dataset.data.reduce((a, b) => a + b, 0)
              const percentage = ((context.parsed / total) * 100).toFixed(1)
              return `${label}: ${value} (${percentage}%)`
            }
          }
        }
      }
    }
  })
}

// CRUD
function openCreateModal() {
  isEditing.value = false
  editingId.value = null
  form.value = { ...emptyForm }
  formError.value = ''
  showModal.value = true
}

function editGasto(gasto) {
  isEditing.value = true
  editingId.value = gasto.id
  form.value = {
    vehiculoId: gasto.vehiculoId,
    conductorId: gasto.conductorId || '',
    fecha: gasto.fecha,
    tipoGasto: gasto.tipoGasto,
    categoriaMantenimiento: gasto.categoriaMantenimiento || '',
    descripcion: gasto.descripcion,
    monto: gasto.monto,
    proveedor: gasto.proveedor || '',
    kilometrajeActual: gasto.kilometrajeActual || null,
    proximoMantenimiento: gasto.proximoMantenimiento || null,
    notasAdicionales: gasto.notasAdicionales || ''
  }
  formError.value = ''
  showModal.value = true
}

function viewGasto(gasto) {
  viewingGasto.value = gasto
}

function editFromView() {
  const gasto = viewingGasto.value
  viewingGasto.value = null
  editGasto(gasto)
}

function confirmDelete(gasto) {
  deletingGasto.value = gasto
}

async function saveGasto() {
  formError.value = ''

  // Validaciones
  if (!form.value.vehiculoId || !form.value.fecha || !form.value.tipoGasto || !form.value.descripcion || !form.value.monto) {
    formError.value = 'Por favor completa todos los campos requeridos'
    return
  }

  if (form.value.monto <= 0) {
    formError.value = 'El monto debe ser mayor a 0'
    return
  }

  if (form.value.tipoGasto === 'mantenimiento' && !form.value.categoriaMantenimiento) {
    formError.value = 'Debes seleccionar la categoría de mantenimiento'
    return
  }

  // Validar que no exista duplicado
  if (!isEditing.value) {
    const duplicado = gastos.value.find(g =>
      g.vehiculoId === form.value.vehiculoId &&
      g.fecha === form.value.fecha &&
      g.tipoGasto === form.value.tipoGasto &&
      g.descripcion === form.value.descripcion
    )

    if (duplicado) {
      formError.value = 'Ya existe un gasto similar para este vehículo en esta fecha'
      return
    }
  }

  saving.value = true

  try {
    const gastoData = {
      vehiculoId: form.value.vehiculoId,
      conductorId: form.value.conductorId || null,
      fecha: form.value.fecha,
      tipoGasto: form.value.tipoGasto,
      categoriaMantenimiento: form.value.tipoGasto === 'mantenimiento' ? form.value.categoriaMantenimiento : null,
      descripcion: form.value.descripcion,
      monto: form.value.monto,
      proveedor: form.value.proveedor || null,
      kilometrajeActual: form.value.kilometrajeActual || null,
      proximoMantenimiento: (form.value.tipoGasto === 'mantenimiento' && form.value.categoriaMantenimiento === 'preventivo') ? form.value.proximoMantenimiento : null,
      notasAdicionales: form.value.notasAdicionales || null,
      updatedAt: new Date()
    }

    if (isEditing.value) {
      await db.updateDocument('gastos', editingId.value, gastoData)
      const index = gastos.value.findIndex(g => g.id === editingId.value)
      if (index !== -1) {
        gastos.value[index] = { ...gastos.value[index], ...gastoData }
      }
    } else {
      gastoData.createdAt = new Date()
      gastoData.createdBy = auth.currentUser?.email || 'unknown'
      const docId = await db.createDocument('gastos', gastoData)
      gastos.value.push({ id: docId, ...gastoData })
    }

    closeModal()
    updateCharts()
  } catch (error) {
    console.error('Error saving gasto:', error)
    formError.value = 'Error al guardar el gasto. Intenta nuevamente.'
  } finally {
    saving.value = false
  }
}

async function deleteGasto() {
  deleting.value = true

  try {
    await db.deleteDocument('gastos', deletingGasto.value.id)
    gastos.value = gastos.value.filter(g => g.id !== deletingGasto.value.id)
    closeDeleteModal()
    updateCharts()
  } catch (error) {
    console.error('Error deleting gasto:', error)
    alert('Error al eliminar el gasto')
  } finally {
    deleting.value = false
  }
}

function closeModal() {
  showModal.value = false
  isEditing.value = false
  editingId.value = null
  form.value = { ...emptyForm }
  formError.value = ''
}

function closeViewModal() {
  viewingGasto.value = null
}

function closeDeleteModal() {
  deletingGasto.value = null
}

function applyFilters() {
  currentPage.value = 1
  updateCharts()
}

// Lifecycle
onMounted(async () => {
  try {
    const [vehiculosData, conductoresData, gastosData, ingresosData] = await Promise.all([
      db.getAllDocuments('vehiculos'),
      db.getAllDocuments('conductores'),
      db.getAllDocuments('gastos'),
      db.getAllDocuments('ingresos')
    ])

    vehiculos.value = vehiculosData
    conductores.value = conductoresData
    gastos.value = gastosData.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    ingresos.value = ingresosData

    updateCharts()
  } catch (error) {
    console.error('Error loading data:', error)
  }
})

watch([() => filters.value.periodo, () => filters.value.vehiculoId, () => filters.value.tipoGasto, () => filters.value.conductorId], () => {
  updateCharts()
})

watch(searchQuery, () => {
  currentPage.value = 1
})
</script>

<style scoped>
.gastos-view {
  padding: 2rem;
  background: #f3f4f6;
  min-height: 100vh;
}

/* Header */
.view-header {
  margin-bottom: 2rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.view-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

/* Filtros */
.filters-section {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.filter-item label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.filter-select {
  width: 100%;
  padding: 0.625rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-select:hover {
  border-color: #9ca3af;
}

.filter-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* KPIs */
.kpis-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.kpi-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.kpi-card.red .kpi-icon {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  color: #dc2626;
}

.kpi-card.orange .kpi-icon {
  background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%);
  color: #ea580c;
}

.kpi-card.purple .kpi-icon {
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
  color: #9333ea;
}

.kpi-card.blue .kpi-icon {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  color: #2563eb;
}

.kpi-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  flex-shrink: 0;
}

.kpi-content {
  flex: 1;
}

.kpi-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

.kpi-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.kpi-value.positive {
  color: #059669;
}

.kpi-value.negative {
  color: #dc2626;
}

/* Gráficos */
.charts-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.chart-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.chart-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
}

/* Rankings */
.rankings-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.ranking-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.ranking-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
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
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.ranking-item:hover {
  background: #f3f4f6;
}

.ranking-item.alert {
  background: #fef2f2;
  border-left: 4px solid #ef4444;
}

.ranking-position {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.ranking-info {
  flex: 1;
}

.ranking-name {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.ranking-detail {
  font-size: 0.875rem;
  color: #6b7280;
}

.ranking-value {
  font-weight: 700;
  color: #ef4444;
  font-size: 1.125rem;
}

.ranking-badge {
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 0.875rem;
}

.ranking-badge.normal {
  background: #dbeafe;
  color: #1e40af;
}

.ranking-badge.warning {
  background: #fef3c7;
  color: #92400e;
}

.ranking-badge.urgent {
  background: #fee2e2;
  color: #991b1b;
}

.ranking-empty {
  text-align: center;
  padding: 2rem;
  color: #9ca3af;
}

/* Búsqueda */
.search-section {
  margin-bottom: 2rem;
}

.search-bar {
  position: relative;
  max-width: 600px;
}

.search-input {
  width: 100%;
  padding: 0.75rem 3rem 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.938rem;
  transition: all 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-clear {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Tabla */
.table-section {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.table-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.table-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table thead {
  background: #f9fafb;
  border-bottom: 2px solid #e5e7eb;
}

.data-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
  white-space: nowrap;
}

.data-table td {
  padding: 1rem;
  border-bottom: 1px solid #f3f4f6;
  font-size: 0.875rem;
  color: #1f2937;
}

.table-row:hover {
  background: #f9fafb;
}

.vehiculo-cell strong {
  display: block;
  color: #1f2937;
  margin-bottom: 0.125rem;
}

.vehiculo-cell small {
  color: #6b7280;
  font-size: 0.75rem;
}

.description-cell {
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.amount-cell {
  font-weight: 700;
  color: #ef4444;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.badge-combustible {
  background: #fef3c7;
  color: #92400e;
}

.badge-mantenimiento {
  background: #dbeafe;
  color: #1e40af;
}

.badge-multa {
  background: #fee2e2;
  color: #991b1b;
}

.badge-seguro {
  background: #dcfce7;
  color: #166534;
}

.badge-peaje, .badge-parqueadero, .badge-lavado {
  background: #f3e8ff;
  color: #6b21a8;
}

.badge-otro {
  background: #e5e7eb;
  color: #374151;
}

.sub-badge {
  font-size: 0.7rem;
  color: #6b7280;
  margin-top: 0.25rem;
  font-style: italic;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  background: none;
  border: none;
  font-size: 1.125rem;
  cursor: pointer;
  padding: 0.25rem;
  transition: transform 0.2s;
}

.btn-icon:hover {
  transform: scale(1.2);
}

.btn-icon.btn-danger:hover {
  filter: brightness(1.2);
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: #9ca3af;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* Paginación */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.btn-pagination {
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}

.btn-pagination:hover:not(:disabled) {
  background: #f9fafb;
  border-color: #3b82f6;
}

.btn-pagination:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-info {
  font-weight: 500;
  color: #374151;
}

/* Botones */
.btn-primary {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  padding: 0.75rem 1.5rem;
  background: #f3f4f6;
  color: #374151;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: #e5e7eb;
}

.btn-danger {
  padding: 0.75rem 1.5rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-danger:hover {
  background: #dc2626;
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
  border-radius: 0.75rem;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-content.large {
  max-width: 800px;
}

.modal-content.small {
  max-width: 400px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.btn-close {
  background: #f3f4f6;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.btn-close:hover {
  background: #e5e7eb;
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

/* Formulario */
.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.form-label.required::after {
  content: ' *';
  color: #ef4444;
}

.form-input,
.form-textarea {
  padding: 0.625rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-hint {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
}

.form-error {
  padding: 0.75rem;
  background: #fee2e2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #991b1b;
  font-size: 0.875rem;
  margin-top: 1rem;
}

/* Detalles */
.detail-section {
  margin-bottom: 1.5rem;
}

.detail-section:last-child {
  margin-bottom: 0;
}

.detail-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.detail-item.full {
  grid-column: 1 / -1;
}

.detail-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.detail-value {
  font-size: 0.938rem;
  color: #1f2937;
  font-weight: 500;
}

.detail-value.highlight {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ef4444;
}

/* Delete modal */
.delete-message {
  font-size: 0.938rem;
  color: #374151;
  margin-bottom: 1rem;
}

.delete-warning {
  font-size: 0.875rem;
  color: #dc2626;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .gastos-view {
    padding: 1rem;
  }

  .view-title {
    font-size: 1.5rem;
  }

  .charts-section,
  .rankings-section {
    grid-template-columns: 1fr;
  }

  .kpis-section {
    grid-template-columns: 1fr;
  }

  .filters-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .data-table {
    font-size: 0.75rem;
  }

  .data-table th,
  .data-table td {
    padding: 0.5rem;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>

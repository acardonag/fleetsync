<template>
  <div class="mantenimientos-view">
    <!-- Header -->
    <div class="view-header">
      <div class="header-content">
        <h1 class="view-title">🔧 Gestión de Mantenimientos</h1>
        <button @click="openCreateModal" class="btn-primary">
          + Programar Mantenimiento
        </button>
      </div>
    </div>

    <!-- Alertas de Mantenimientos Próximos -->
    <div v-if="alertasUrgentes.length > 0" class="alerts-section">
      <div class="alert-banner urgent">
        <div class="alert-icon">🚨</div>
        <div class="alert-content">
          <h3 class="alert-title">¡Mantenimientos Urgentes!</h3>
          <p class="alert-message">
            {{ alertasUrgentes.length }} vehículo(s) requieren mantenimiento inmediato
          </p>
        </div>
      </div>
    </div>

    <div v-if="alertasProximas.length > 0" class="alerts-section">
      <div class="alert-banner warning">
        <div class="alert-icon">⚠️</div>
        <div class="alert-content">
          <h3 class="alert-title">Mantenimientos Próximos</h3>
          <p class="alert-message">
            {{ alertasProximas.length }} vehículo(s) se acercan al siguiente mantenimiento
          </p>
        </div>
      </div>
    </div>

    <!-- KPIs -->
    <div class="kpis-section">
      <div class="kpi-card blue">
        <div class="kpi-icon">📅</div>
        <div class="kpi-content">
          <div class="kpi-label">Mantenimientos Programados</div>
          <div class="kpi-value">{{ mantenimientosProgramados.filter(m => m.activo).length }}</div>
        </div>
      </div>

      <div class="kpi-card orange">
        <div class="kpi-icon">⏰</div>
        <div class="kpi-content">
          <div class="kpi-label">Próximos (< 1000 km)</div>
          <div class="kpi-value">{{ alertasProximas.length }}</div>
        </div>
      </div>

      <div class="kpi-card red">
        <div class="kpi-icon">🚨</div>
        <div class="kpi-content">
          <div class="kpi-label">Vencidos / Urgentes</div>
          <div class="kpi-value">{{ alertasUrgentes.length }}</div>
        </div>
      </div>

      <div class="kpi-card green">
        <div class="kpi-icon">✅</div>
        <div class="kpi-content">
          <div class="kpi-label">Completados Este Mes</div>
          <div class="kpi-value">{{ mantenimientosCompletadosMes }}</div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="tabs-section">
      <button 
        @click="currentTab = 'alertas'" 
        :class="['tab-btn', { active: currentTab === 'alertas' }]"
      >
        🚨 Alertas ({{ alertasUrgentes.length + alertasProximas.length }})
      </button>
      <button 
        @click="currentTab = 'programados'" 
        :class="['tab-btn', { active: currentTab === 'programados' }]"
      >
        📅 Programados ({{ mantenimientosProgramados.filter(m => m.activo).length }})
      </button>
      <button 
        @click="currentTab = 'historial'" 
        :class="['tab-btn', { active: currentTab === 'historial' }]"
      >
        📋 Historial
      </button>
      <button 
        @click="currentTab = 'vehiculos'" 
        :class="['tab-btn', { active: currentTab === 'vehiculos' }]"
      >
        🚗 Por Vehículo
      </button>
    </div>

    <!-- Tab: Alertas -->
    <div v-if="currentTab === 'alertas'" class="tab-content">
      <div class="alertas-grid">
        <!-- Urgentes -->
        <div v-if="alertasUrgentes.length > 0" class="alertas-column">
          <h3 class="column-title urgent">🚨 Urgentes (Vencidos)</h3>
          <div class="mantenimiento-card urgent" v-for="alerta in alertasUrgentes" :key="alerta.id">
            <div class="card-header">
              <div class="vehiculo-info">
                <strong>{{ getVehiculoLabel(alerta.vehiculoId) }}</strong>
                <span class="km-badge">{{ formatKm(getVehiculoKm(alerta.vehiculoId)) }} km</span>
              </div>
            </div>
            <div class="card-body">
              <div class="mantenimiento-tipo">
                {{ getTipoMantenimientoIcon(alerta.tipoMantenimiento) }} 
                {{ getTipoMantenimientoLabel(alerta.tipoMantenimiento) }}
              </div>
              <div class="mantenimiento-detalle">
                <div class="detalle-item">
                  <span class="label">Próximo:</span>
                  <span class="value">{{ formatKm(alerta.proximoKm) }} km</span>
                </div>
                <div class="detalle-item">
                  <span class="label">Retraso:</span>
                  <span class="value urgent-text">{{ formatKm(alerta.kmDiferencia) }} km</span>
                </div>
              </div>
              <p class="descripcion">{{ alerta.descripcion }}</p>
            </div>
            <div class="card-footer">
              <button @click="marcarComoRealizado(alerta)" class="btn-small success">
                ✅ Marcar Realizado
              </button>
              <button @click="editMantenimiento(alerta)" class="btn-small">✏️ Editar</button>
            </div>
          </div>
        </div>

        <!-- Próximos -->
        <div v-if="alertasProximas.length > 0" class="alertas-column">
          <h3 class="column-title warning">⚠️ Próximos (< 1000 km)</h3>
          <div class="mantenimiento-card warning" v-for="alerta in alertasProximas" :key="alerta.id">
            <div class="card-header">
              <div class="vehiculo-info">
                <strong>{{ getVehiculoLabel(alerta.vehiculoId) }}</strong>
                <span class="km-badge">{{ formatKm(getVehiculoKm(alerta.vehiculoId)) }} km</span>
              </div>
            </div>
            <div class="card-body">
              <div class="mantenimiento-tipo">
                {{ getTipoMantenimientoIcon(alerta.tipoMantenimiento) }} 
                {{ getTipoMantenimientoLabel(alerta.tipoMantenimiento) }}
              </div>
              <div class="mantenimiento-detalle">
                <div class="detalle-item">
                  <span class="label">Próximo:</span>
                  <span class="value">{{ formatKm(alerta.proximoKm) }} km</span>
                </div>
                <div class="detalle-item">
                  <span class="label">Faltan:</span>
                  <span class="value warning-text">{{ formatKm(alerta.kmDiferencia) }} km</span>
                </div>
              </div>
              <p class="descripcion">{{ alerta.descripcion }}</p>
            </div>
            <div class="card-footer">
              <button @click="marcarComoRealizado(alerta)" class="btn-small success">
                ✅ Marcar Realizado
              </button>
              <button @click="editMantenimiento(alerta)" class="btn-small">✏️ Editar</button>
            </div>
          </div>
        </div>

        <!-- Al día -->
        <div class="alertas-column">
          <h3 class="column-title ok">✅ Al Día (> 1000 km)</h3>
          <div class="mantenimiento-card ok" v-for="alerta in alertasOk" :key="alerta.id">
            <div class="card-header">
              <div class="vehiculo-info">
                <strong>{{ getVehiculoLabel(alerta.vehiculoId) }}</strong>
                <span class="km-badge">{{ formatKm(getVehiculoKm(alerta.vehiculoId)) }} km</span>
              </div>
            </div>
            <div class="card-body">
              <div class="mantenimiento-tipo">
                {{ getTipoMantenimientoIcon(alerta.tipoMantenimiento) }} 
                {{ getTipoMantenimientoLabel(alerta.tipoMantenimiento) }}
              </div>
              <div class="mantenimiento-detalle">
                <div class="detalle-item">
                  <span class="label">Próximo:</span>
                  <span class="value">{{ formatKm(alerta.proximoKm) }} km</span>
                </div>
                <div class="detalle-item">
                  <span class="label">Faltan:</span>
                  <span class="value">{{ formatKm(alerta.kmDiferencia) }} km</span>
                </div>
              </div>
              <p class="descripcion">{{ alerta.descripcion }}</p>
            </div>
            <div class="card-footer">
              <button @click="editMantenimiento(alerta)" class="btn-small">✏️ Editar</button>
            </div>
          </div>
          <div v-if="alertasOk.length === 0" class="empty-column">
            No hay mantenimientos programados en esta categoría
          </div>
        </div>
      </div>
    </div>

    <!-- Tab: Programados -->
    <div v-if="currentTab === 'programados'" class="tab-content">
      <div class="table-section">
        <table class="data-table">
          <thead>
            <tr>
              <th>Vehículo</th>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>KM Actual</th>
              <th>Próximo KM</th>
              <th>Frecuencia</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mant in mantenimientosProgramados.filter(m => m.activo)" :key="mant.id">
              <td>
                <div class="vehiculo-cell">
                  <strong>{{ getVehiculoPlaca(mant.vehiculoId) }}</strong>
                  <small>{{ getVehiculoModelo(mant.vehiculoId) }}</small>
                </div>
              </td>
              <td>
                <span class="badge-tipo">
                  {{ getTipoMantenimientoIcon(mant.tipoMantenimiento) }} 
                  {{ getTipoMantenimientoLabel(mant.tipoMantenimiento) }}
                </span>
              </td>
              <td>{{ mant.descripcion }}</td>
              <td>{{ formatKm(getVehiculoKm(mant.vehiculoId)) }} km</td>
              <td><strong>{{ formatKm(mant.proximoKm) }} km</strong></td>
              <td>Cada {{ formatKm(mant.frecuenciaKm) }} km</td>
              <td>
                <span :class="['status-badge', getEstadoClass(mant)]">
                  {{ getEstadoLabel(mant) }}
                </span>
              </td>
              <td>
                <div class="action-buttons">
                  <button @click="editMantenimiento(mant)" class="btn-icon" title="Editar">✏️</button>
                  <button @click="marcarComoRealizado(mant)" class="btn-icon" title="Marcar realizado">✅</button>
                  <button @click="toggleActivo(mant)" class="btn-icon" title="Desactivar">❌</button>
                </div>
              </td>
            </tr>
            <tr v-if="mantenimientosProgramados.filter(m => m.activo).length === 0">
              <td colspan="8" class="empty-state">
                <div class="empty-icon">📅</div>
                <p>No hay mantenimientos programados</p>
                <button @click="openCreateModal" class="btn-primary">+ Programar Mantenimiento</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Tab: Historial -->
    <div v-if="currentTab === 'historial'" class="tab-content">
      <div class="filters-row">
        <select v-model="historialVehiculoFilter" class="filter-select">
          <option value="">Todos los vehículos</option>
          <option v-for="vehiculo in vehiculos" :key="vehiculo.id" :value="vehiculo.id">
            {{ vehiculo.placa }} - {{ vehiculo.marca }} {{ vehiculo.modelo }}
          </option>
        </select>
      </div>

      <div class="table-section">
        <table class="data-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Vehículo</th>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>KM Realizado</th>
              <th>Monto</th>
              <th>Proveedor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mant in historialMantenimientos" :key="mant.id">
              <td>{{ formatDate(mant.fecha) }}</td>
              <td>
                <div class="vehiculo-cell">
                  <strong>{{ getVehiculoPlaca(mant.vehiculoId) }}</strong>
                  <small>{{ getVehiculoModelo(mant.vehiculoId) }}</small>
                </div>
              </td>
              <td>
                <span class="badge" :class="'badge-' + (mant.categoriaMantenimiento || 'otro')">
                  {{ mant.categoriaMantenimiento || 'N/A' }}
                </span>
              </td>
              <td>{{ mant.descripcion }}</td>
              <td>{{ mant.kilometrajeActual ? formatKm(mant.kilometrajeActual) + ' km' : 'N/A' }}</td>
              <td class="amount-cell">{{ formatCurrency(mant.monto) }}</td>
              <td>{{ mant.proveedor || 'N/A' }}</td>
            </tr>
            <tr v-if="historialMantenimientos.length === 0">
              <td colspan="7" class="empty-state">
                <div class="empty-icon">📋</div>
                <p>No hay mantenimientos realizados</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Tab: Por Vehículo -->
    <div v-if="currentTab === 'vehiculos'" class="tab-content">
      <div class="vehiculos-grid">
        <div v-for="vehiculo in vehiculosConStats" :key="vehiculo.id" class="vehiculo-stats-card">
          <div class="card-header">
            <h3 class="vehiculo-titulo">{{ vehiculo.placa }}</h3>
            <p class="vehiculo-modelo">{{ vehiculo.marca }} {{ vehiculo.modelo }} {{ vehiculo.año }}</p>
          </div>
          
          <div class="stats-section">
            <div class="stat-item">
              <span class="stat-label">KM Actual:</span>
              <span class="stat-value highlight">{{ formatKm(vehiculo.kilometrajeActual || 0) }} km</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Promedio Diario:</span>
              <span class="stat-value">{{ formatKm(vehiculo.promedioDiario) }} km/día</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Promedio Semanal:</span>
              <span class="stat-value">{{ formatKm(vehiculo.promedioSemanal) }} km/sem</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Promedio Mensual:</span>
              <span class="stat-value">{{ formatKm(vehiculo.promedioMensual) }} km/mes</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Última Actualización:</span>
              <span class="stat-value">{{ vehiculo.ultimaActualizacionKm ? formatDateTime(vehiculo.ultimaActualizacionKm) : 'N/A' }}</span>
            </div>
          </div>

          <div class="mantenimientos-section">
            <h4 class="section-subtitle">Mantenimientos Programados:</h4>
            <div v-if="getMantenimientosVehiculo(vehiculo.id).length > 0">
              <div v-for="mant in getMantenimientosVehiculo(vehiculo.id)" :key="mant.id" class="mant-mini-card">
                <div class="mant-info">
                  <span class="mant-tipo">{{ getTipoMantenimientoIcon(mant.tipoMantenimiento) }} {{ getTipoMantenimientoLabel(mant.tipoMantenimiento) }}</span>
                  <span class="mant-km">{{ formatKm(mant.proximoKm) }} km</span>
                </div>
                <span :class="['mant-status', getEstadoClass(mant)]">
                  {{ getEstadoLabel(mant) }}
                </span>
              </div>
            </div>
            <p v-else class="no-mant">Sin mantenimientos programados</p>
          </div>

          <div class="card-footer">
            <button @click="programarMantenimientosAutomaticos(vehiculo)" class="btn-small primary">
              🤖 Sugerir Mantenimientos
            </button>
          </div>
        </div>

        <div v-if="vehiculosConStats.length === 0" class="empty-state">
          <div class="empty-icon">🚗</div>
          <p>No hay vehículos registrados</p>
        </div>
      </div>
    </div>

    <!-- Modal Crear/Editar Mantenimiento -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">{{ isEditing ? '✏️ Editar Mantenimiento' : '🔧 Programar Nuevo Mantenimiento' }}</h2>
          <button @click="closeModal" class="btn-close">✕</button>
        </div>

        <form @submit.prevent="saveMantenimiento" class="modal-body">
          <div class="form-group">
            <label class="form-label required">🚗 Vehículo</label>
            <select v-model="form.vehiculoId" required class="form-input">
              <option value="">Seleccionar vehículo...</option>
              <option v-for="vehiculo in vehiculos" :key="vehiculo.id" :value="vehiculo.id">
                {{ vehiculo.placa }} - {{ vehiculo.marca }} {{ vehiculo.modelo }} ({{ formatKm(vehiculo.kilometrajeActual || 0) }} km)
              </option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label required">🔧 Tipo de Mantenimiento</label>
            <select v-model="form.tipoMantenimiento" required class="form-input" @change="onTipoChange">
              <option value="">Seleccionar tipo...</option>
              <option value="cambio_aceite">🛢️ Cambio de Aceite</option>
              <option value="cambio_filtros">🌬️ Cambio de Filtros</option>
              <option value="revision_frenos">🛑 Revisión de Frenos</option>
              <option value="alineacion_balanceo">⚖️ Alineación y Balanceo</option>
              <option value="cambio_llantas">🛞 Cambio de Llantas</option>
              <option value="cambio_bujias">⚡ Cambio de Bujías</option>
              <option value="cambio_bateria">🔋 Cambio de Batería</option>
              <option value="revision_general">🔍 Revisión General</option>
              <option value="cambio_correa">🔗 Cambio de Correa de Distribución</option>
              <option value="otro">📦 Otro</option>
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label required">📏 Frecuencia (km)</label>
              <input
                v-model.number="form.frecuenciaKm"
                type="number"
                required
                min="100"
                step="100"
                class="form-input"
                placeholder="Ej: 5000"
              />
              <small class="form-hint">Cada cuántos km se debe realizar</small>
            </div>

            <div class="form-group">
              <label class="form-label required">⚠️ Recordatorio (km antes)</label>
              <input
                v-model.number="form.recordatorioAnticipado"
                type="number"
                required
                min="0"
                class="form-input"
                placeholder="Ej: 500"
              />
              <small class="form-hint">Km de anticipación para alerta</small>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label required">📝 Descripción</label>
            <textarea
              v-model="form.descripcion"
              required
              class="form-textarea"
              rows="3"
              placeholder="Descripción del mantenimiento..."
            ></textarea>
          </div>

          <div v-if="formError" class="form-error">
            ⚠️ {{ formError }}
          </div>

          <div class="modal-footer">
            <button type="button" @click="closeModal" class="btn-secondary">Cancelar</button>
            <button type="submit" class="btn-primary" :disabled="saving">
              {{ saving ? 'Guardando...' : (isEditing ? 'Actualizar' : 'Programar') }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal Marcar como Realizado -->
    <div v-if="showCompletarModal" class="modal-overlay" @click.self="closeCompletarModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">✅ Marcar Mantenimiento como Realizado</h2>
          <button @click="closeCompletarModal" class="btn-close">✕</button>
        </div>

        <form @submit.prevent="completarMantenimiento" class="modal-body">
          <p class="info-message">
            Vas a marcar como realizado el siguiente mantenimiento:
          </p>
          <div class="mantenimiento-resumen">
            <strong>{{ getTipoMantenimientoLabel(completandoMant?.tipoMantenimiento) }}</strong>
            <p>{{ completandoMant?.descripcion }}</p>
            <p>Vehículo: {{ getVehiculoLabel(completandoMant?.vehiculoId) }}</p>
          </div>

          <div class="form-group">
            <label class="form-label required">📅 Fecha de Realización</label>
            <input
              v-model="formCompletar.fecha"
              type="date"
              required
              :max="today"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label class="form-label required">📏 Kilometraje Actual</label>
            <input
              v-model.number="formCompletar.kilometraje"
              type="number"
              required
              min="0"
              class="form-input"
              :placeholder="'KM actual: ' + formatKm(getVehiculoKm(completandoMant?.vehiculoId))"
            />
          </div>

          <div class="form-group">
            <label class="form-label required">💵 Costo del Mantenimiento (COP)</label>
            <input
              v-model.number="formCompletar.monto"
              type="number"
              required
              min="0"
              class="form-input"
              placeholder="Ej: 150000"
            />
          </div>

          <div class="form-group">
            <label class="form-label">🏪 Proveedor / Taller</label>
            <input
              v-model="formCompletar.proveedor"
              type="text"
              class="form-input"
              placeholder="Ej: Taller Central"
            />
          </div>

          <div class="form-group">
            <label class="form-label">📄 Notas Adicionales</label>
            <textarea
              v-model="formCompletar.notas"
              class="form-textarea"
              rows="2"
              placeholder="Observaciones, repuestos cambiados, etc."
            ></textarea>
          </div>

          <div v-if="formError" class="form-error">
            ⚠️ {{ formError }}
          </div>

          <div class="modal-footer">
            <button type="button" @click="closeCompletarModal" class="btn-secondary">Cancelar</button>
            <button type="submit" class="btn-success" :disabled="saving">
              {{ saving ? 'Guardando...' : 'Confirmar y Registrar' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { auth } from '../firebase/auth'
import { getAllDocuments, createDocument, updateDocument, deleteDocument, getDocument } from '../firebase/db'

// Refs
const vehiculos = ref([])
const mantenimientosProgramados = ref([])
const gastosMantenimiento = ref([]) // Historial de mantenimientos
const showModal = ref(false)
const showCompletarModal = ref(false)
const isEditing = ref(false)
const saving = ref(false)
const formError = ref('')
const currentTab = ref('alertas')
const historialVehiculoFilter = ref('')
const completandoMant = ref(null)

// Sugerencias por tipo de mantenimiento (km)
const sugerenciasFrecuencia = {
  cambio_aceite: { frecuencia: 5000, recordatorio: 500, descripcion: 'Cambio de aceite y filtro de aceite' },
  cambio_filtros: { frecuencia: 10000, recordatorio: 1000, descripcion: 'Cambio de filtros de aire y combustible' },
  revision_frenos: { frecuencia: 10000, recordatorio: 1000, descripcion: 'Revisión y ajuste de frenos' },
  alineacion_balanceo: { frecuencia: 10000, recordatorio: 1000, descripcion: 'Alineación y balanceo de llantas' },
  cambio_llantas: { frecuencia: 40000, recordatorio: 5000, descripcion: 'Rotación o cambio de llantas' },
  cambio_bujias: { frecuencia: 30000, recordatorio: 3000, descripcion: 'Cambio de bujías' },
  cambio_bateria: { frecuencia: 40000, recordatorio: 5000, descripcion: 'Revisión o cambio de batería' },
  revision_general: { frecuencia: 15000, recordatorio: 1500, descripcion: 'Revisión general del vehículo' },
  cambio_correa: { frecuencia: 60000, recordatorio: 5000, descripcion: 'Cambio de correa de distribución' },
  otro: { frecuencia: 5000, recordatorio: 500, descripcion: '' }
}

// Formularios
const emptyForm = {
  vehiculoId: '',
  tipoMantenimiento: '',
  descripcion: '',
  frecuenciaKm: 5000,
  recordatorioAnticipado: 500,
  activo: true
}

const form = ref({ ...emptyForm })
const editingId = ref(null)

const emptyFormCompletar = {
  fecha: new Date().toISOString().split('T')[0],
  kilometraje: 0,
  monto: 0,
  proveedor: '',
  notas: ''
}

const formCompletar = ref({ ...emptyFormCompletar })

// Computed
const today = computed(() => new Date().toISOString().split('T')[0])

const vehiculosConStats = computed(() => {
  return vehiculos.value.map(v => {
    const kmActual = v.kilometrajeActual || 0
    const fechaInscripcion = v.fechaInscripcion ? new Date(v.fechaInscripcion) : null
    
    let promedioDiario = 0
    let promedioSemanal = 0
    let promedioMensual = 0

    if (fechaInscripcion && kmActual > 0) {
      const hoy = new Date()
      const diasTranscurridos = Math.max(1, Math.floor((hoy - fechaInscripcion) / (1000 * 60 * 60 * 24)))
      
      promedioDiario = Math.round(kmActual / diasTranscurridos)
      promedioSemanal = Math.round(promedioDiario * 7)
      promedioMensual = Math.round(promedioDiario * 30)
    }

    return {
      ...v,
      promedioDiario,
      promedioSemanal,
      promedioMensual
    }
  })
})

const alertasUrgentes = computed(() => {
  return mantenimientosProgramados.value
    .filter(m => m.activo)
    .map(m => {
      const kmActual = getVehiculoKm(m.vehiculoId)
      const kmDiferencia = m.proximoKm - kmActual
      return { ...m, kmDiferencia }
    })
    .filter(m => m.kmDiferencia <= 0)
    .sort((a, b) => a.kmDiferencia - b.kmDiferencia)
})

const alertasProximas = computed(() => {
  return mantenimientosProgramados.value
    .filter(m => m.activo)
    .map(m => {
      const kmActual = getVehiculoKm(m.vehiculoId)
      const kmDiferencia = m.proximoKm - kmActual
      return { ...m, kmDiferencia }
    })
    .filter(m => m.kmDiferencia > 0 && m.kmDiferencia <= 1000)
    .sort((a, b) => a.kmDiferencia - b.kmDiferencia)
})

const alertasOk = computed(() => {
  return mantenimientosProgramados.value
    .filter(m => m.activo)
    .map(m => {
      const kmActual = getVehiculoKm(m.vehiculoId)
      const kmDiferencia = m.proximoKm - kmActual
      return { ...m, kmDiferencia }
    })
    .filter(m => m.kmDiferencia > 1000)
    .sort((a, b) => a.kmDiferencia - b.kmDiferencia)
})

const mantenimientosCompletadosMes = computed(() => {
  const inicioMes = new Date()
  inicioMes.setDate(1)
  inicioMes.setHours(0, 0, 0, 0)

  return gastosMantenimiento.value.filter(g => {
    const fecha = new Date(g.fecha)
    return fecha >= inicioMes
  }).length
})

const historialMantenimientos = computed(() => {
  let resultado = gastosMantenimiento.value

  if (historialVehiculoFilter.value) {
    resultado = resultado.filter(g => g.vehiculoId === historialVehiculoFilter.value)
  }

  return resultado.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
})

// Métodos auxiliares
function getVehiculoKm(vehiculoId) {
  const vehiculo = vehiculos.value.find(v => v.id === vehiculoId)
  return vehiculo?.kilometrajeActual || 0
}

function getVehiculoLabel(vehiculoId) {
  const vehiculo = vehiculos.value.find(v => v.id === vehiculoId)
  return vehiculo ? `${vehiculo.placa} - ${vehiculo.marca} ${vehiculo.modelo}` : 'Desconocido'
}

function getVehiculoPlaca(vehiculoId) {
  const vehiculo = vehiculos.value.find(v => v.id === vehiculoId)
  return vehiculo?.placa || 'N/A'
}

function getVehiculoModelo(vehiculoId) {
  const vehiculo = vehiculos.value.find(v => v.id === vehiculoId)
  return vehiculo ? `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.año}` : 'N/A'
}

function getTipoMantenimientoIcon(tipo) {
  const icons = {
    cambio_aceite: '🛢️',
    cambio_filtros: '🌬️',
    revision_frenos: '🛑',
    alineacion_balanceo: '⚖️',
    cambio_llantas: '🛞',
    cambio_bujias: '⚡',
    cambio_bateria: '🔋',
    revision_general: '🔍',
    cambio_correa: '🔗',
    otro: '🔧'
  }
  return icons[tipo] || '🔧'
}

function getTipoMantenimientoLabel(tipo) {
  const labels = {
    cambio_aceite: 'Cambio de Aceite',
    cambio_filtros: 'Cambio de Filtros',
    revision_frenos: 'Revisión de Frenos',
    alineacion_balanceo: 'Alineación y Balanceo',
    cambio_llantas: 'Cambio de Llantas',
    cambio_bujias: 'Cambio de Bujías',
    cambio_bateria: 'Cambio de Batería',
    revision_general: 'Revisión General',
    cambio_correa: 'Cambio de Correa',
    otro: 'Otro'
  }
  return labels[tipo] || tipo
}

function getEstadoClass(mant) {
  const kmActual = getVehiculoKm(mant.vehiculoId)
  const kmDiferencia = mant.proximoKm - kmActual

  if (kmDiferencia <= 0) return 'urgent'
  if (kmDiferencia <= 1000) return 'warning'
  return 'ok'
}

function getEstadoLabel(mant) {
  const kmActual = getVehiculoKm(mant.vehiculoId)
  const kmDiferencia = mant.proximoKm - kmActual

  if (kmDiferencia <= 0) return `Vencido (${formatKm(Math.abs(kmDiferencia))} km)`
  if (kmDiferencia <= 1000) return `Próximo (${formatKm(kmDiferencia)} km)`
  return `Al día (${formatKm(kmDiferencia)} km)`
}

function getMantenimientosVehiculo(vehiculoId) {
  return mantenimientosProgramados.value
    .filter(m => m.vehiculoId === vehiculoId && m.activo)
    .slice(0, 5)
}

function formatKm(km) {
  return (km || 0).toLocaleString('es-CO')
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

// CRUD Mantenimientos Programados
function openCreateModal() {
  isEditing.value = false
  editingId.value = null
  form.value = { ...emptyForm }
  formError.value = ''
  showModal.value = true
}

function editMantenimiento(mant) {
  isEditing.value = true
  editingId.value = mant.id
  form.value = {
    vehiculoId: mant.vehiculoId,
    tipoMantenimiento: mant.tipoMantenimiento,
    descripcion: mant.descripcion,
    frecuenciaKm: mant.frecuenciaKm,
    recordatorioAnticipado: mant.recordatorioAnticipado,
    activo: mant.activo
  }
  formError.value = ''
  showModal.value = true
}

function onTipoChange() {
  const sugerencia = sugerenciasFrecuencia[form.value.tipoMantenimiento]
  if (sugerencia && !isEditing.value) {
    form.value.frecuenciaKm = sugerencia.frecuencia
    form.value.recordatorioAnticipado = sugerencia.recordatorio
    if (sugerencia.descripcion) {
      form.value.descripcion = sugerencia.descripcion
    }
  }
}

async function saveMantenimiento() {
  formError.value = ''

  if (!form.value.vehiculoId || !form.value.tipoMantenimiento || !form.value.descripcion) {
    formError.value = 'Por favor completa todos los campos requeridos'
    return
  }

  saving.value = true

  try {
    const vehiculo = vehiculos.value.find(v => v.id === form.value.vehiculoId)
    const kmActual = vehiculo?.kilometrajeActual || 0

    const mantData = {
      vehiculoId: form.value.vehiculoId,
      tipoMantenimiento: form.value.tipoMantenimiento,
      descripcion: form.value.descripcion,
      kilometrajeBase: kmActual,
      frecuenciaKm: form.value.frecuenciaKm,
      proximoKm: kmActual + form.value.frecuenciaKm,
      recordatorioAnticipado: form.value.recordatorioAnticipado,
      activo: form.value.activo,
      updatedAt: new Date()
    }

    if (isEditing.value) {
      await updateDocument('mantenimientos_programados', editingId.value, mantData)
      const index = mantenimientosProgramados.value.findIndex(m => m.id === editingId.value)
      if (index !== -1) {
        mantenimientosProgramados.value[index] = { ...mantenimientosProgramados.value[index], ...mantData }
      }
    } else {
      mantData.createdAt = new Date()
      mantData.createdBy = auth.currentUser?.email || 'unknown'
      const result = await createDocument('mantenimientos_programados', mantData)
      mantenimientosProgramados.value.push(result)
    }

    closeModal()
  } catch (error) {
    console.error('Error saving mantenimiento:', error)
    formError.value = 'Error al guardar el mantenimiento'
  } finally {
    saving.value = false
  }
}

async function toggleActivo(mant) {
  if (!confirm(`¿Desactivar este mantenimiento programado?`)) return

  try {
    await updateDocument('mantenimientos_programados', mant.id, { activo: false })
    const index = mantenimientosProgramados.value.findIndex(m => m.id === mant.id)
    if (index !== -1) {
      mantenimientosProgramados.value[index].activo = false
    }
  } catch (error) {
    console.error('Error updating mantenimiento:', error)
    alert('Error al actualizar')
  }
}

function marcarComoRealizado(mant) {
  completandoMant.value = mant
  formCompletar.value = {
    ...emptyFormCompletar,
    kilometraje: getVehiculoKm(mant.vehiculoId)
  }
  showCompletarModal.value = true
}

async function completarMantenimiento() {
  formError.value = ''

  if (!formCompletar.value.fecha || !formCompletar.value.kilometraje || !formCompletar.value.monto) {
    formError.value = 'Por favor completa todos los campos requeridos'
    return
  }

  saving.value = true

  try {
    // 1. Registrar en gastos como mantenimiento
    const gastoData = {
      vehiculoId: completandoMant.value.vehiculoId,
      conductorId: null,
      fecha: formCompletar.value.fecha,
      tipoGasto: 'mantenimiento',
      categoriaMantenimiento: 'preventivo',
      descripcion: completandoMant.value.descripcion,
      monto: formCompletar.value.monto,
      proveedor: formCompletar.value.proveedor || null,
      kilometrajeActual: formCompletar.value.kilometraje,
      proximoMantenimiento: null,
      notasAdicionales: formCompletar.value.notas || null,
      createdAt: new Date(),
      createdBy: auth.currentUser?.email || 'unknown'
    }

    await createDocument('gastos', gastoData)

    // 2. Actualizar KM del vehículo
    await updateDocument('vehiculos', completandoMant.value.vehiculoId, {
      kilometrajeActual: formCompletar.value.kilometraje,
      ultimaActualizacionKm: new Date()
    })

    // Actualizar localmente
    const vehiculoIndex = vehiculos.value.findIndex(v => v.id === completandoMant.value.vehiculoId)
    if (vehiculoIndex !== -1) {
      vehiculos.value[vehiculoIndex].kilometrajeActual = formCompletar.value.kilometraje
      vehiculos.value[vehiculoIndex].ultimaActualizacionKm = new Date()
    }

    // 3. Reprogramar el siguiente mantenimiento
    const nuevoProximoKm = formCompletar.value.kilometraje + completandoMant.value.frecuenciaKm

    await updateDocument('mantenimientos_programados', completandoMant.value.id, {
      kilometrajeBase: formCompletar.value.kilometraje,
      proximoKm: nuevoProximoKm,
      updatedAt: new Date()
    })

    const mantIndex = mantenimientosProgramados.value.findIndex(m => m.id === completandoMant.value.id)
    if (mantIndex !== -1) {
      mantenimientosProgramados.value[mantIndex].kilometrajeBase = formCompletar.value.kilometraje
      mantenimientosProgramados.value[mantIndex].proximoKm = nuevoProximoKm
    }

    // Agregar al historial local
    gastosMantenimiento.value.unshift({
      ...gastoData,
      id: Date.now().toString()
    })

    closeCompletarModal()
    alert(`✅ Mantenimiento registrado. Próximo a los ${formatKm(nuevoProximoKm)} km`)
  } catch (error) {
    console.error('Error completing mantenimiento:', error)
    formError.value = 'Error al registrar el mantenimiento'
  } finally {
    saving.value = false
  }
}

async function programarMantenimientosAutomaticos(vehiculo) {
  if (!confirm(`¿Programar mantenimientos automáticos sugeridos para ${vehiculo.placa}?`)) return

  try {
    const kmActual = vehiculo.kilometrajeActual || 0
    const mantenimientosExistentes = mantenimientosProgramados.value
      .filter(m => m.vehiculoId === vehiculo.id && m.activo)
      .map(m => m.tipoMantenimiento)

    const sugerencias = [
      { tipo: 'cambio_aceite', ...sugerenciasFrecuencia.cambio_aceite },
      { tipo: 'cambio_filtros', ...sugerenciasFrecuencia.cambio_filtros },
      { tipo: 'revision_frenos', ...sugerenciasFrecuencia.revision_frenos },
      { tipo: 'alineacion_balanceo', ...sugerenciasFrecuencia.alineacion_balanceo },
      { tipo: 'revision_general', ...sugerenciasFrecuencia.revision_general }
    ]

    let creados = 0

    for (const sug of sugerencias) {
      if (!mantenimientosExistentes.includes(sug.tipo)) {
        const mantData = {
          vehiculoId: vehiculo.id,
          tipoMantenimiento: sug.tipo,
          descripcion: sug.descripcion,
          kilometrajeBase: kmActual,
          frecuenciaKm: sug.frecuencia,
          proximoKm: kmActual + sug.frecuencia,
          recordatorioAnticipado: sug.recordatorio,
          activo: true,
          createdAt: new Date(),
          createdBy: auth.currentUser?.email || 'unknown'
        }

        const result = await createDocument('mantenimientos_programados', mantData)
        mantenimientosProgramados.value.push(result)
        creados++
      }
    }

    alert(`✅ ${creados} mantenimiento(s) programado(s) automáticamente`)
  } catch (error) {
    console.error('Error programming mantenimientos:', error)
    alert('Error al programar mantenimientos')
  }
}

function closeModal() {
  showModal.value = false
  isEditing.value = false
  editingId.value = null
  form.value = { ...emptyForm }
  formError.value = ''
}

function closeCompletarModal() {
  showCompletarModal.value = false
  completandoMant.value = null
  formCompletar.value = { ...emptyFormCompletar }
  formError.value = ''
}

// Lifecycle
onMounted(async () => {
  try {
    const [vehiculosData, mantProgramadosData, gastosData] = await Promise.all([
      getAllDocuments('vehiculos'),
      getAllDocuments('mantenimientos_programados'),
      getAllDocuments('gastos')
    ])

    vehiculos.value = vehiculosData
    mantenimientosProgramados.value = mantProgramadosData
    gastosMantenimiento.value = gastosData.filter(g => g.tipoGasto === 'mantenimiento')
  } catch (error) {
    console.error('Error loading data:', error)
  }
})
</script>

<style scoped>
.mantenimientos-view {
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

/* Alertas */
.alerts-section {
  margin-bottom: 1.5rem;
}

.alert-banner {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.alert-banner.urgent {
  background: linear-gradient(135deg, #fee2e2, #fecaca);
  border-left: 4px solid #dc2626;
}

.alert-banner.warning {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
}

.alert-icon {
  font-size: 2rem;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
}

.alert-message {
  margin: 0;
  color: #4b5563;
  font-size: 0.938rem;
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
  transition: transform 0.2s;
}

.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.kpi-card.blue .kpi-icon {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  color: #2563eb;
}

.kpi-card.orange .kpi-icon {
  background: linear-gradient(135deg, #ffedd5, #fed7aa);
  color: #ea580c;
}

.kpi-card.red .kpi-icon {
  background: linear-gradient(135deg, #fee2e2, #fecaca);
  color: #dc2626;
}

.kpi-card.green .kpi-icon {
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  color: #16a34a;
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
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
}

/* Tabs */
.tabs-section {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: white;
  padding: 0.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}

.tab-btn {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  color: #6b7280;
}

.tab-btn:hover {
  background: #f3f4f6;
  color: #1f2937;
}

.tab-btn.active {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
}

/* Tab Content */
.tab-content {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Alertas Grid */
.alertas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.alertas-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.column-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid;
}

.column-title.urgent {
  color: #dc2626;
  border-color: #dc2626;
}

.column-title.warning {
  color: #f59e0b;
  border-color: #f59e0b;
}

.column-title.ok {
  color: #16a34a;
  border-color: #16a34a;
}

/* Mantenimiento Card */
.mantenimiento-card {
  border-radius: 0.5rem;
  padding: 1rem;
  border-left: 4px solid;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.mantenimiento-card.urgent {
  border-color: #dc2626;
  background: linear-gradient(to right, #fee2e2 0%, white 5%);
}

.mantenimiento-card.warning {
  border-color: #f59e0b;
  background: linear-gradient(to right, #fef3c7 0%, white 5%);
}

.mantenimiento-card.ok {
  border-color: #16a34a;
  background: linear-gradient(to right, #dcfce7 0%, white 5%);
}

.card-header {
  margin-bottom: 0.75rem;
}

.vehiculo-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.km-badge {
  background: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #4b5563;
}

.card-body {
  margin-bottom: 0.75rem;
}

.mantenimiento-tipo {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.mantenimiento-detalle {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.detalle-item {
  display: flex;
  flex-direction: column;
}

.detalle-item .label {
  font-size: 0.75rem;
  color: #6b7280;
  text-transform: uppercase;
  font-weight: 600;
}

.detalle-item .value {
  font-size: 0.938rem;
  color: #1f2937;
  font-weight: 600;
}

.urgent-text {
  color: #dc2626 !important;
}

.warning-text {
  color: #f59e0b !important;
}

.descripcion {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.card-footer {
  display: flex;
  gap: 0.5rem;
}

.empty-column {
  text-align: center;
  padding: 2rem 1rem;
  color: #9ca3af;
  font-size: 0.875rem;
}

/* Table */
.table-section {
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
}

.data-table td {
  padding: 1rem;
  border-bottom: 1px solid #f3f4f6;
  font-size: 0.875rem;
}

.vehiculo-cell strong {
  display: block;
  margin-bottom: 0.125rem;
}

.vehiculo-cell small {
  color: #6b7280;
  font-size: 0.75rem;
}

.badge-tipo {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  background: #dbeafe;
  color: #1e40af;
}

.status-badge {
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.status-badge.urgent {
  background: #fee2e2;
  color: #991b1b;
}

.status-badge.warning {
  background: #fef3c7;
  color: #92400e;
}

.status-badge.ok {
  background: #dcfce7;
  color: #166534;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.badge-preventivo {
  background: #dcfce7;
  color: #166534;
}

.badge-correctivo {
  background: #fef3c7;
  color: #92400e;
}

.badge-otro {
  background: #e5e7eb;
  color: #374151;
}

.amount-cell {
  font-weight: 700;
  color: #ef4444;
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

/* Vehículos Grid */
.vehiculos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.vehiculo-stats-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  transition: all 0.2s;
}

.vehiculo-stats-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.vehiculo-titulo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
}

.vehiculo-modelo {
  color: #6b7280;
  margin: 0 0 1rem 0;
}

.stats-section {
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.stat-item:last-child {
  border-bottom: none;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.stat-value {
  font-weight: 700;
  color: #1f2937;
}

.stat-value.highlight {
  color: #2563eb;
  font-size: 1.125rem;
}

.mantenimientos-section {
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 0.875rem;
  font-weight: 700;
  color: #374151;
  margin: 0 0 0.75rem 0;
  text-transform: uppercase;
}

.mant-mini-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  border-left: 3px solid transparent;
}

.mant-mini-card:has(.mant-status.urgent) {
  border-color: #dc2626;
  background: #fee2e2;
}

.mant-mini-card:has(.mant-status.warning) {
  border-color: #f59e0b;
  background: #fef3c7;
}

.mant-info {
  display: flex;
  flex-direction: column;
}

.mant-tipo {
  font-weight: 600;
  font-size: 0.875rem;
  color: #1f2937;
}

.mant-km {
  font-size: 0.75rem;
  color: #6b7280;
}

.mant-status {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.mant-status.urgent {
  background: #dc2626;
  color: white;
}

.mant-status.warning {
  background: #f59e0b;
  color: white;
}

.mant-status.ok {
  background: #16a34a;
  color: white;
}

.no-mant {
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
  padding: 1rem;
}

/* Filters */
.filters-row {
  margin-bottom: 1rem;
}

.filter-select {
  padding: 0.625rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  min-width: 250px;
}

/* Buttons */
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

.btn-success {
  padding: 0.75rem 1.5rem;
  background: #16a34a;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-success:hover {
  background: #15803d;
}

.btn-small {
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  color: #374151;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn-small:hover {
  background: #e5e7eb;
}

.btn-small.success {
  background: #dcfce7;
  color: #166534;
}

.btn-small.success:hover {
  background: #bbf7d0;
}

.btn-small.primary {
  background: #dbeafe;
  color: #1e40af;
}

.btn-small.primary:hover {
  background: #bfdbfe;
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

/* Forms */
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
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

.info-message {
  color: #4b5563;
  margin-bottom: 1rem;
}

.mantenimiento-resumen {
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 3px solid #3b82f6;
}

.mantenimiento-resumen strong {
  display: block;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.mantenimiento-resumen p {
  color: #6b7280;
  margin: 0.25rem 0;
  font-size: 0.875rem;
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

/* Responsive */
@media (max-width: 768px) {
  .mantenimientos-view {
    padding: 1rem;
  }

  .view-title {
    font-size: 1.5rem;
  }

  .alertas-grid,
  .vehiculos-grid {
    grid-template-columns: 1fr;
  }

  .tabs-section {
    overflow-x: auto;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .kpis-section {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <div id="app">
    <!-- Login Screen -->
    <div v-if="!currentUser" class="login-container">
      <div class="login-card">
        <div class="login-header">
          <div class="app-icon">⚡</div>
          <h1 class="app-title">FleetSync</h1>
          <p class="app-subtitle">Tu flota siempre en sync</p>
        </div>
        
        <button @click="signIn" class="btn-login" :disabled="loading">
          <span v-if="!loading">
            <svg class="google-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Iniciar Sesión con Google
          </span>
          <span v-else>Cargando...</span>
        </button>
        
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>

    <!-- Main App -->
    <div v-else class="app-container">
      <!-- Header -->
      <header class="app-header">
        <div class="header-content">
          <div class="header-left">
            <div class="app-icon-small">⚡</div>
            <h1 class="header-title">FleetSync</h1>
          </div>
          <div class="header-right">
            <div class="user-info">
              <img v-if="currentUser.photoURL" :src="currentUser.photoURL" alt="User" class="user-avatar" />
              <span class="user-name">{{ currentUser.displayName || currentUser.email }}</span>
            </div>
            <button @click="signOut" class="btn-logout">Cerrar Sesión</button>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="main-content">
        <DashboardView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth, signInWithGoogle, signOutUser, onAuthChange } from './firebase/auth'
import { ADMIN_USERS } from './firebase/config'
import DashboardView from './views/DashboardView.vue'

const currentUser = ref(null)
const loading = ref(false)
const errorMessage = ref('')

onMounted(() => {
  onAuthChange((user) => {
    if (user && ADMIN_USERS.includes(user.email)) {
      currentUser.value = user
      errorMessage.value = ''
    } else if (user) {
      errorMessage.value = 'Usuario no autorizado. Contacta al administrador.'
      signOutUser()
      currentUser.value = null
    } else {
      currentUser.value = null
    }
    loading.value = false
  })
})

async function signIn() {
  loading.value = true
  errorMessage.value = ''
  
  try {
    const user = await signInWithGoogle()
    
    if (!ADMIN_USERS.includes(user.email)) {
      errorMessage.value = 'Usuario no autorizado. Contacta al administrador.'
      await signOutUser()
      currentUser.value = null
    } else {
      currentUser.value = user
    }
  } catch (error) {
    console.error('Error signing in:', error)
    errorMessage.value = 'Error al iniciar sesión. Intenta de nuevo.'
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    await signOutUser()
    currentUser.value = null
  } catch (error) {
    console.error('Error signing out:', error)
  }
}
</script>

<style scoped>
/* Login Screen */
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  padding: 1rem;
}

.login-card {
  background: white;
  border-radius: 1rem;
  padding: 3rem 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.login-header {
  margin-bottom: 2rem;
}

.app-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.app-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.app-subtitle {
  color: #6b7280;
  font-size: 0.95rem;
}

.btn-login {
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.btn-login:hover:not(:disabled) {
  background: #f9fafb;
  border-color: #d1d5db;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-login:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.google-icon {
  width: 24px;
  height: 24px;
}

.error-message {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 0.5rem;
  color: #c00;
  font-size: 0.875rem;
}

/* Main App */
.app-container {
  min-height: 100vh;
  background: #f3f4f6;
}

.app-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.app-icon-small {
  font-size: 2rem;
}

.header-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #e5e7eb;
}

.user-name {
  font-size: 0.875rem;
  color: #4b5563;
  font-weight: 500;
}

.btn-logout {
  padding: 0.5rem 1rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-logout:hover {
  background: #dc2626;
  transform: translateY(-1px);
}

.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

@media (max-width: 768px) {
  .user-name {
    display: none;
  }
  
  .header-content {
    padding: 1rem;
  }
  
  .main-content {
    padding: 1rem;
  }
}
</style>

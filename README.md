# ⚡ FleetSync

**Tu flota siempre en sync**

Sistema moderno de gestión de flotas vehiculares para Uber. Control total, en tiempo real, desde cualquier dispositivo.

---

## ✨ Características Principales

- **⚡ Dashboard en Tiempo Real**: Métricas y estadísticas actualizadas al instante
- **🚗 Gestión de Vehículos**: Control completo de tu flota
- **👥 Conductores**: Asignación y seguimiento de conductores
- **💰 Pagos**: Control de pagos semanales/mensuales
- **🔧 Mantenimiento**: Calendario y alertas de servicio
- **🔐 Autenticación Segura**: Login con Google vía Firebase
- **📱 100% Responsivo**: Funciona perfecto en desktop, tablet y móvil
- **📊 Reportes**: Exporta datos para análisis

---

## 🎨 Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| **Vue 3** | Framework frontend (Composition API) |
| **Vite** | Build tool ultra-rápido |
| **Firebase Firestore** | Base de datos en tiempo real |
| **Firebase Auth** | Autenticación segura |
| **GitHub Pages** | Hosting gratuito |
| **CSS Variables** | Sistema de diseño moderno |

---

## 🚀 Inicio Rápido

---

## 🚀 Inicio Rápido

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/fleetsync.git
cd fleetsync

# Instalar dependencias
npm install

# Configurar Firebase (ver sección siguiente)
# Editar src/firebase/config.js

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173/fleetsync/](http://localhost:5173/fleetsync/)

---

## ⚙️ Configuración de Firebase

### 1. Crear Proyecto Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Crea un nuevo proyecto
3. Habilita **Firestore Database** (modo producción)
4. Habilita **Authentication** → Proveedor Google

### 2. Obtener Credenciales

Project Settings → General → Your apps → Web app

### 3. Configurar en el Proyecto

Edita `src/firebase/config.js`:

```javascript
export const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
}

export const ADMIN_USERS = [
  "tu-email@gmail.com"
]
```

### 4. Reglas de Firestore

Firestore Database → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAdmin() {
      return request.auth != null && 
             request.auth.token.email in [
               'tu-email@gmail.com'
             ];
    }
    
    match /{collection}/{document} {
      allow read, write: if isAdmin();
    }
  }
}
```

---

## 🌐 Deploy en GitHub Pages

### Deploy Automático (Recomendado)

El proyecto incluye GitHub Actions configurado.

```bash
# Inicializar repo
git init
git add .
git commit -m "Initial commit"

# Subir a GitHub
git branch -M main
git remote add origin https://github.com/TU_USUARIO/fleetsync.git
git push -u origin main
```

**Settings → Pages → Source: GitHub Actions**

Cada `git push` desplegará automáticamente.

### Deploy Manual

```bash
npm run deploy
```

Tu app estará en: `https://TU_USUARIO.github.io/fleetsync/`

---

## 📁 Estructura

```
fleetsync/
├── .github/workflows/     # CI/CD automático
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── views/            # Páginas principales
│   ├── firebase/         # Config y servicios
│   ├── composables/      # Lógica compartida
│   ├── assets/           # Imágenes, estilos
│   ├── App.vue           # Componente raíz
│   ├── main.js           # Entry point
│   └── style.css         # Estilos globales
├── public/               # Assets estáticos
├── index.html
├── vite.config.js
└── package.json
```

---

## 🎯 Roadmap

- [x] Sistema de autenticación
- [x] CRUD de vehículos
- [x] Dashboard con estadísticas
- [ ] Gestión de conductores completa
- [ ] Control de pagos y adeudos
- [ ] Calendario de mantenimiento
- [ ] Reportes exportables (PDF/Excel)
- [ ] Notificaciones push
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App)

---

## 🛠️ Scripts

```bash
npm run dev      # Desarrollo (http://localhost:5173)
npm run build    # Build para producción
npm run preview  # Preview del build
npm run deploy   # Build + Deploy a GitHub Pages
```

---

## 🎨 Paleta de Colores

FleetSync usa un sistema de diseño moderno con CSS Variables:

- **Primary**: Electric Blue (#3b82f6)
- **Accent**: Cyan (#06b6d4)
- **Success**: Green (#22c55e)
- **Warning**: Amber (#f59e0b)
- **Danger**: Red (#ef4444)
- **Neutrals**: Slate (50-900)

---

## 📝 Licencia

MIT License - Úsalo como quieras

---

## 💡 Soporte

¿Problemas? Abre un [issue](https://github.com/TU_USUARIO/fleetsync/issues)

---

**Hecho con ⚡ y Vue 3**

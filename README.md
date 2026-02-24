# 🚗 Gestión de Flota Uber

Sistema de gestión para administrar flota de vehículos alquilados para trabajar en Uber.

## 🚀 Características

- **🚗 Gestión de Vehículos**: Administrar flota de autos
- **👥 Gestión de Conductores**: Registro y seguimiento de conductores
- **💰 Control de Pagos**: Seguimiento de pagos semanales/mensuales
- **🔧 Registro de Mantenimiento**: Historial de servicios y reparaciones
- **📊 Dashboard y Reportes**: Visualización de métricas importantes
- **🔐 Autenticación Segura**: Login con Google vía Firebase
- **📱 Diseño Responsivo**: Funciona en desktop, tablet y móvil

## 🛠️ Tecnologías

- **Frontend**: Vue 3 + Vite
- **Base de Datos**: Firebase Firestore
- **Autenticación**: Firebase Auth
- **Deployment**: GitHub Pages
- **Estilos**: CSS3 moderno

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Deploy a GitHub Pages
npm run deploy
```

## ⚙️ Configuración

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com)
2. Habilita Firestore Database
3. Habilita Authentication con Google
4. Copia tu configuración Firebase en `src/firebase/config.js`
5. Agrega los emails de administradores autorizados

## 📁 Estructura del Proyecto

```
flota-uber/
├── src/
│   ├── components/       # Componentes Vue reutilizables
│   ├── views/            # Vistas/páginas principales
│   ├── firebase/         # Configuración y servicios Firebase
│   ├── composables/      # Lógica reutilizable (Vue Composition API)
│   ├── assets/           # Imágenes, estilos globales
│   ├── App.vue           # Componente raíz
│   └── main.js           # Punto de entrada
├── public/               # Archivos estáticos
├── .github/              # GitHub Actions workflows
├── index.html
├── vite.config.js
└── package.json
```

## 🔐 Seguridad

- Solo usuarios autorizados pueden acceder al sistema
- Reglas de Firestore configuradas para validar permisos
- Authentication con Google para login seguro

## 📄 Licencia

MIT

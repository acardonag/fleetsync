// Configuración de Firebase para Flota Uber
// IMPORTANTE: Reemplaza estos valores con tu propia configuración de Firebase

export const firebaseConfig = {
  apiKey: "AIzaSyDd65pxbPI0CPu-KVxNniahiW6oYQp1Uqc",
  authDomain: "fleetsync-f34ef.firebaseapp.com",
  projectId: "fleetsync-f34ef",
  storageBucket: "fleetsync-f34ef.firebasestorage.app",
  messagingSenderId: "89917742680",
  appId: "1:89917742680:web:9398930c592b3bcab7342d"
};

// Lista de usuarios administradores autorizados (emails de Google)
// IMPORTANTE: Agrega aquí los emails de los usuarios que podrán acceder a la aplicación
export const ADMIN_USERS = [
  "acg1606@gmail.com",
  "rucardona16@gmail.com"
]

// INSTRUCCIONES PARA CONFIGURAR FIREBASE:
// 1. Ve a https://console.firebase.google.com
// 2. Crea un nuevo proyecto o usa uno existente
// 3. Habilita Firestore Database (modo producción)
// 4. Habilita Authentication → Google como proveedor
// 5. En Project Settings → General → Your apps → Agrega una Web app
// 6. Copia la configuración y reemplaza los valores arriba
// 7. Agrega tu email en ADMIN_USERS

// REGLAS DE FIRESTORE RECOMENDADAS:
// Ve a Firestore Database → Rules y usa estas reglas:
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    function isAdmin() {
      return request.auth != null && 
             request.auth.token.email in [
               'acg1606@gmail.com'
             ];
    }
    
    match /vehiculos/{vehiculoId} {
      allow read, write: if isAdmin();
    }
    
    match /conductores/{conductorId} {
      allow read, write: if isAdmin();
    }
    
    match /pagos/{pagoId} {
      allow read, write: if isAdmin();
    }
    
    match /servicios/{servicioId} {
      allow read, write: if isAdmin();
    }
  }
}
*/

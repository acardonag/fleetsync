import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  onAuthStateChanged 
} from 'firebase/auth'
import { firebaseConfig } from './config'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

// Sign in with Google
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (error) {
    console.error('Error signing in:', error)
    throw error
  }
}

// Sign out
export async function signOutUser() {
  try {
    await signOut(auth)
  } catch (error) {
    console.error('Error signing out:', error)
    throw error
  }
}

// Auth state observer
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback)
}

// Get current user
export function getCurrentUser() {
  return auth.currentUser
}

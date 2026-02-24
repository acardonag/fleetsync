import { initializeApp } from 'firebase/app'
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage'
import { firebaseConfig } from './config'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

/**
 * Upload a file to Firebase Storage
 * @param {File} file - The file to upload
 * @param {string} path - The storage path (e.g., 'conductores/cedulas/filename.jpg')
 * @returns {Promise<string>} - The download URL of the uploaded file
 */
export async function uploadFile(file, path) {
  if (!file) {
    throw new Error('No file provided')
  }

  try {
    const storageRef = ref(storage, path)
    const snapshot = await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(snapshot.ref)
    return downloadURL
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
}

/**
 * Delete a file from Firebase Storage
 * @param {string} path - The storage path of the file to delete
 */
export async function deleteFile(path) {
  if (!path) {
    return
  }

  try {
    const storageRef = ref(storage, path)
    await deleteObject(storageRef)
  } catch (error) {
    console.error('Error deleting file:', error)
    throw error
  }
}

/**
 * Upload conductor documents
 * @param {string} conductorId - The conductor's ID
 * @param {File} file - The file to upload
 * @param {string} type - The document type (cedula, pase, contrato, foto)
 * @returns {Promise<Object>} - Object with URL and path
 */
export async function uploadConductorDocument(conductorId, file, type) {
  if (!file) {
    return null
  }

  const timestamp = Date.now()
  const extension = file.name.split('.').pop()
  const fileName = `${type}_${timestamp}.${extension}`
  const path = `conductores/${conductorId}/${fileName}`

  const url = await uploadFile(file, path)
  
  return {
    url,
    path,
    fileName: file.name,
    uploadedAt: new Date().toISOString()
  }
}

/**
 * Delete conductor document
 * @param {string} documentPath - The storage path of the document
 */
export async function deleteConductorDocument(documentPath) {
  if (!documentPath) {
    return
  }

  try {
    await deleteFile(documentPath)
  } catch (error) {
    console.error('Error deleting conductor document:', error)
    // Don't throw - we still want to delete the conductor even if file delete fails
  }
}

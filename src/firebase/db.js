import { initializeApp } from 'firebase/app'
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  getDoc,
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  Timestamp 
} from 'firebase/firestore'
import { firebaseConfig } from './config'
import { getCurrentUser } from './auth'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Helper function to add audit fields
function addAuditFields(data, isUpdate = false) {
  const user = getCurrentUser()
  const timestamp = new Date().toISOString()
  
  const auditFields = {
    ...(isUpdate ? {
      updatedBy: user?.uid || 'unknown',
      updatedByEmail: user?.email || 'unknown',
      updatedByName: user?.displayName || user?.email || 'unknown',
      updatedAt: timestamp
    } : {
      createdBy: user?.uid || 'unknown',
      createdByEmail: user?.email || 'unknown',
      createdByName: user?.displayName || user?.email || 'unknown',
      createdAt: timestamp
    })
  }
  
  return { ...data, ...auditFields }
}

// CRUD Operations

// Create
export async function createDocument(collectionName, data) {
  try {
    const dataWithAudit = addAuditFields(data)
    const docRef = await addDoc(collection(db, collectionName), dataWithAudit)
    return { id: docRef.id, ...dataWithAudit }
  } catch (error) {
    console.error(`Error creating document in ${collectionName}:`, error)
    throw error
  }
}

// Read all
export async function getAllDocuments(collectionName, orderByField = null) {
  try {
    let q = collection(db, collectionName)
    
    if (orderByField) {
      q = query(q, orderBy(orderByField, 'desc'))
    }
    
    const querySnapshot = await getDocs(q)
    const documents = []
    
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() })
    })
    
    return documents
  } catch (error) {
    console.error(`Error getting documents from ${collectionName}:`, error)
    return []
  }
}

// Read one
export async function getDocument(collectionName, documentId) {
  try {
    const docRef = doc(db, collectionName, documentId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      return null
    }
  } catch (error) {
    console.error(`Error getting document ${documentId}:`, error)
    throw error
  }
}

// Update
export async function updateDocument(collectionName, documentId, data) {
  try {
    const docRef = doc(db, collectionName, documentId)
    const dataWithAudit = addAuditFields(data, true)
    await updateDoc(docRef, dataWithAudit)
    return { id: documentId, ...dataWithAudit }
  } catch (error) {
    console.error(`Error updating document ${documentId}:`, error)
    throw error
  }
}

// Delete (soft delete - moves to deleted collection)
export async function deleteDocument(collectionName, documentId) {
  try {
    const docRef = doc(db, collectionName, documentId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      // Save to deleted collection
      const deletedData = {
        ...docSnap.data(),
        originalId: documentId,
        deletedBy: getCurrentUser()?.uid || 'unknown',
        deletedByEmail: getCurrentUser()?.email || 'unknown',
        deletedAt: new Date().toISOString(),
        originalCollection: collectionName
      }
      
      await addDoc(collection(db, `${collectionName}_deleted`), deletedData)
      
      // Delete original
      await deleteDoc(docRef)
      
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error deleting document ${documentId}:`, error)
    throw error
  }
}

// Query with filters
export async function queryDocuments(collectionName, filters = []) {
  try {
    let q = collection(db, collectionName)
    
    filters.forEach(filter => {
      q = query(q, where(filter.field, filter.operator, filter.value))
    })
    
    const querySnapshot = await getDocs(q)
    const documents = []
    
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() })
    })
    
    return documents
  } catch (error) {
    console.error(`Error querying ${collectionName}:`, error)
    return []
  }
}

// Export all data (for backup)
export async function exportAllData() {
  try {
    const collections = ['vehiculos', 'conductores', 'pagos', 'servicios']
    const exportData = {}
    
    for (const collectionName of collections) {
      exportData[collectionName] = await getAllDocuments(collectionName)
    }
    
    exportData.exportDate = new Date().toISOString()
    exportData.exportedBy = getCurrentUser()?.email || 'unknown'
    
    return exportData
  } catch (error) {
    console.error('Error exporting data:', error)
    throw error
  }
}

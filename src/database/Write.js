import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export async function save(task) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), task);
    return { ...task, id: docRef.id }; // Return the new task with Firebase-generated ID
  } catch (error) {
    throw new Error('Failed to save the task');
  }
}

export async function update(taskId, updates) {
    try {
      const taskRef = doc(db, "tasks", taskId);
      await updateDoc(taskRef, updates);
    } catch (error) {
      throw new Error('Failed to update the task');
    }
}

export async function deleteTask(taskId) {
    try {
        const taskRef = doc(db, "tasks", taskId);
        await deleteDoc(taskRef);
    } catch (error) {
        throw new Error('Failed to delete the task');
    }
}

export async function deleteAllTasks() {
    try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        querySnapshot.forEach(async (document) => {
            await deleteDoc(doc(db, "tasks", document.id));
        });
    } catch (error) {
        throw new Error('Failed to delete all tasks');
    }
}
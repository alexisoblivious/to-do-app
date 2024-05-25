import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig";
export async function loadDatabase() {

    try{
        const querySnapshot = await getDocs(collection(db, "tasks"));
        
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push({
                ...doc.data(),
                id: doc.id
            })
        });
        return data;
    }
    catch(error){
        throw new Error('Failed to load the database');
    }
    
}   

export function loadById(id) {
    console.log(`Load id: ${id}`);
}
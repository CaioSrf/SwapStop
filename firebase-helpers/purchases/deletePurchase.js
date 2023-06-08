import { collection, deleteDoc, doc } from "firebase/firestore";
import { Firestore } from "../../firebase";

export function deletePurchase(purchaseId) {
    const collectionRef = collection(Firestore, 'purchases')
    const docRef = doc(collectionRef, purchaseId)
    deleteDoc(docRef);
}
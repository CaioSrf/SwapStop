import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { Firestore, FirebaseAuth } from '../../firebase';

export async function createPurchase({
    product = { id: 0, price: 0, name: '' },
    paymentMethod = '',
}) {
    const newPurchase = {
        userId: FirebaseAuth.currentUser.uid,
        productId: product.id,
        productName: product.name,
        price: product.price,
        paymentMethod: paymentMethod
    }
    const collectionRef = collection(Firestore, 'purchases')
    const docRef = await addDoc(collectionRef, newPurchase)

    updateDoc(docRef, { id: docRef.id })

}
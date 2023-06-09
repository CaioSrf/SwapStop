import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore"
import { FirebaseAuth, Firestore } from "../../firebase";

export async function listPurchases() {
    const userId = FirebaseAuth.currentUser.uid;
    const collectionRef = collection(Firestore, 'purchases');
    const currentQuery = query(collectionRef, where("userId", "==", userId))

    const purchases = await getDocs(currentQuery).then(snapshot => {
        let data = [];
        snapshot.forEach(doc => {
            data.push(doc?.data())
        })
        return data
    }).catch(err => {
        console.log({ err });
    })

    return purchases
}

export function listenPurchases(callback) {
    const userId = FirebaseAuth.currentUser.uid;
    const collectionRef = collection(Firestore, 'purchases');
    const currentQuery = query(collectionRef, where("userId", "==", userId));
  
    const unsubscribe = onSnapshot(currentQuery, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
      callback(data);
    }, (error) => {
      console.log({ error });
    });
  
    return unsubscribe;
  }
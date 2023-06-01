import { collection, doc, setDoc } from 'firebase/firestore';
import { Firestore } from '../../firebase';

export async function createProfile({ user, name, number, type }) {
    const userProfile = {
        userId: user.uid,
        name,
        number,
        email: user.email,
        type
    }

    console.log('new profile', userProfile)

    const collectionRef = collection(Firestore, 'users')
    await setDoc(doc(collectionRef, user.uid), userProfile).catch(err => console.log(err))
}
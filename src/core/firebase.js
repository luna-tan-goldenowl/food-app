import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey           : 'AIzaSyCZNXECIvnlcN7hw1HGfCpHf4iDfPZW4sU',
  authDomain       : 'fir-foodapp-auth.firebaseapp.com',
  projectId        : 'fir-foodapp-auth',
  storageBucket    : 'fir-foodapp-auth.appspot.com',
  messagingSenderId: '494330134450',
  appId            : '1:494330134450:web:c9ed4bf5f88f328f342eab',
  measurementId    : 'G-9MFBKBMSE6'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid         : user.uid,
        name        : user.displayName,
        authProvider: 'google',
        email       : user.email
      });
    }
    console.log(res.user);
  } catch (err) {
    alert(err.message);
  }
};

const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid         : user.uid,
        name        : user.displayName,
        authProvider: 'facebook',
        email       : user.email
      });
    }
  } catch (err) {
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password, phonenumber) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    //await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid         : user.uid,
      name        : name,
      authProvider: 'local',
      email       : email,
      phonenumber : phonenumber,
      password    : password
    });
  } catch (err) {
    alert(err.message);
  }
};

const sendPasswordReset = async email => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err) {
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithFacebook,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout
};

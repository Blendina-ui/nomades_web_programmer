import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js';

// TODO: Replace the following with your app's Firebase project configuration
// You can find it in the Firebase Console under "Project settings"
const firebaseConfig = {}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  let step = 1;
  const userData = {};

  // TODO: remove signout from here
  // By default we sign out the user
  signOut(auth)

  function renderStep() {
    //TODO: Implement stepper logic
  }

  function renderLogin() {
    //TODO: Implement login form
  }


  function renderUserInfo() {
    //TODO: Implement user info view
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      renderUserInfo();
    } else {
      renderLogin();
    }
  });
});
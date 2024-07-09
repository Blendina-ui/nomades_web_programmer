import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyAsI15-sQTpXuDYcte0sDCvXxLfwabxPt4",
  authDomain: "wpr-2024-0607-99826.firebaseapp.com",
  projectId: "wpr-2024-0607-99826",
  storageBucket: "wpr-2024-0607-99826.appspot.com",
  messagingSenderId: "793443606024",
  appId: "1:793443606024:web:77a5fc1161a9b3b30f3bbd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  let step = 1;
  const userData = {};

  function renderStep() {
    content.innerHTML = '';

    if (step === 1) {
      content.innerHTML = `
        <h2>Step 1: Enter your name</h2>
        <input type="text" id="name" class="form-control" placeholder="Enter your name" value="${userData.name || ''}">
        <button id="next" class="btn btn-primary mt-3">Next</button>
      `;

      document.getElementById('next').addEventListener('click', () => {
        userData.name = document.getElementById('name').value;
        step++;
        renderStep();
      });
    } else if (step === 2) {
      content.innerHTML = `
        <h2>Step 2: Enter your email</h2>
        <input type="email" id="email" class="form-control" placeholder="Enter your email" value="${userData.email || ''}">
        <button id="next" class="btn btn-primary mt-3">Next</button>
        <button id="back" class="btn btn-secondary mt-3">Back</button>
      `;

      document.getElementById('next').addEventListener('click', () => {
        userData.email = document.getElementById('email').value;
        step++;
        renderStep();
      });

      document.getElementById('back').addEventListener('click', () => {
        step--;
        renderStep();
      });
    } else if (step === 3) {
      content.innerHTML = `
        <h2>Step 3: Create a password</h2>
        <input type="password" id="password" class="form-control" placeholder="Create a password" value="${userData.password || ''}">
        <button id="submit" class="btn btn-primary mt-3">Submit</button>
        <button id="back" class="btn btn-secondary mt-3">Back</button>
      `;

      document.getElementById('submit').addEventListener('click', () => {
        userData.password = document.getElementById('password').value;
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
          .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, 'users', user.uid), {
              name: userData.name,
              email: userData.email
            });
            step++;
            renderStep();
          })
          .catch((error) => {
            console.error("Error creating user:", error);
          });
      });

      document.getElementById('back').addEventListener('click', () => {
        step--;
        renderStep();
      });
    } else {
      content.innerHTML = `
        <h2>Registration Complete</h2>
        <p>Thank you for registering, ${userData.name}!</p>
      `;
    }
  }

  function renderLogin() {
    content.innerHTML = `
      <h2>Login</h2>
      <input type="email" id="login-email" class="form-control" placeholder="Enter your email">
      <input type="password" id="login-password" class="form-control mt-3" placeholder="Enter your password">
      <button id="login" class="btn btn-primary mt-3">Login</button>
      <button id="google-login" class="btn btn-secondary mt-3">Login with Google</button>
      <button id="register" class="btn btn-link mt-3">Register</button>
    `;

    document.getElementById('login').addEventListener('click', () => {
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          renderWelcomeMessage(user);
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    });

    document.getElementById('google-login').addEventListener('click', () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          renderWelcomeMessage(user);
        })
        .catch((error) => {
          console.error("Error logging in with Google:", error);
        });
    });

    document.getElementById('register').addEventListener('click', () => {
      step = 1;
      renderStep();
    });
  }

  function renderWelcomeMessage(user) {
    getDoc(doc(db, 'users', user.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        const userData = docSnap.data();
        content.innerHTML = `
          <h2>Welcome, ${userData.name}</h2>
          <p>Email: ${userData.email}</p>
          <button id="logout" class="btn btn-primary mt-3">Logout</button>
        `;

        document.getElementById('logout').addEventListener('click', () => {
          signOut(auth).then(() => {
            renderLogin();
          });
        });
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.error("Error getting document:", error);
    });
  }

  function renderUserInfo() {
    const user = auth.currentUser;

    if (user) {
      renderWelcomeMessage(user);
    } else {
      renderLogin();
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      renderUserInfo();
    } else {
      renderLogin();
    }
  });

  // Initial render
  renderStep();
});

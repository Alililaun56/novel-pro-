import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFW62ReV0d7oU07iTd_UGfMqMly7iZMG8",
  authDomain: "warisha-novels-world.firebaseapp.com",
  projectId: "warisha-novels-world",
  storageBucket: "warisha-novels-world.firebasestorage.app",
  messagingSenderId: "730509359637",
  appId: "1:730509359637:web:27a0e9ad2eb0196ed92c1c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

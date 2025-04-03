
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDubScPHseUNZJR9FsKdNjaWHIDyXfCaac",
    authDomain: "ugr-final-db.firebaseapp.com",
    projectId: "ugr-final-db",
    storageBucket: "ugr-final-db.firebasestorage.app",
    messagingSenderId: "444234409030",
    appId: "1:444234409030:web:f62cfbb7dcc026fd2dd647",
    measurementId: "G-L7QPFCLPJX"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

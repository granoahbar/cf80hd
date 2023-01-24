// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3KsLNoI7kSW3mWb8Fik5r4VN5GJHzXLA",
  authDomain: "clear-focus-80hd.firebaseapp.com",
  projectId: "clear-focus-80hd",
  storageBucket: "clear-focus-80hd.appspot.com",
  messagingSenderId: "473076123423",
  appId: "1:473076123423:web:6cb61c5cb535eed999922a"
};

// Initialize Firebase
let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }
export { firebase }
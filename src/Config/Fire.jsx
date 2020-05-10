import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMOqJT3QDieRauxPCPw3jAsESouSxdkQU",
  authDomain: "my-project-123-270811.firebaseapp.com",
  databaseURL: "https://my-project-123-270811.firebaseio.com",
  projectId: "my-project-123-270811",
  storageBucket: "my-project-123-270811.appspot.com",
  messagingSenderId: "737594673110",
  appId: "1:737594673110:web:06241d11034781ab014677",
  measurementId: "G-KPY0X7VGE9"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;

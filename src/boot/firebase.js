import * as firebase from 'firebase/app';
import "firebase/auth"

const firebaseAuth = firebase.initializeApp({
  apiKey: "AIzaSyBc2QzWiv2voaQpqX8BVRCtu7y17UgVf9E",
  authDomain: "awesome-todo-36bc3.firebaseapp.com",
  databaseURL: "https://awesome-todo-36bc3.firebaseio.com",
  projectId: "awesome-todo-36bc3",
  storageBucket: "awesome-todo-36bc3.appspot.com",
  messagingSenderId: "873249907720",
  appId: "1:873249907720:web:c1a41ba04c76445cc85dbd"
}).auth();

export { firebaseAuth };

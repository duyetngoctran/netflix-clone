import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDVJx2av6qwtteiaSs0hcnvlqlRElijN0w",
    authDomain: "netflix-clone-510eb.firebaseapp.com",
    databaseURL: "https://netflix-clone-510eb.firebaseio.com",
    projectId: "netflix-clone-510eb",
    storageBucket: "netflix-clone-510eb.appspot.com",
    messagingSenderId: "468813802030",
    appId: "1:468813802030:web:cc129b137eadb790e60dbf",
    measurementId: "G-NVKKBRQNS8"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };

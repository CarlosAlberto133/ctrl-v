import firebase from 'firebase/compat/app';
import 'firebase/compat/database'; 

export const firebaseMixin = { 
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyD1cJMmOrv48EZq8nKq04qIlXUIP-Htm7o", 
      authDomain: "ctrl-v-83011.firebaseapp.com",
      databaseURL: "https://ctrl-v-83011-default-rtdb.firebaseio.com",
      projectId: "ctrl-v-83011",
      storageBucket: "ctrl-v-83011.appspot.com",
      messagingSenderId: "1052023525697",
      appId: "1:1052023525697:web:ca15d4c868c3ea077191c0",
      measurementId: "G-DCFDDVBGN0"
    } 

    firebase.initializeApp(firebaseConfig)
    const db = firebase.database()

    const databaseRef = db.ref(`${this.$route.params.id}`)

    databaseRef.once('value', (snapshot) => {
      this.payload = snapshot.val()
    })
  }
}

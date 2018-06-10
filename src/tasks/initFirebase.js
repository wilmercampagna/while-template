import firebase from 'firebase'

let config = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXX-app-XXXXX.firebaseapp.com',
  databaseURL: 'https://XXXXXXXX-app-f0ea4.firebaseio.com',
  projectId: 'XXXXXXX-app-XXXXXX',
  storageBucket: 'XXXXXX-app-XXXXXX.appspot.com',
  messagingSenderId: 'XXXXXXXXXXXXXX'
}

firebase.initializeApp(config)

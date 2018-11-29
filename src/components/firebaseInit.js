import * as firebase from "firebase";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyBTt1qGBwH_odlqU5XwfC2BvVQSFlBU7ok",
  authDomain: "vueblog-c4840.firebaseapp.com",
  databaseURL: "https://vueblog-c4840.firebaseio.com",
  projectId: "vueblog-c4840",
  storageBucket: "vueblog-c4840.appspot.com",
  messagingSenderId: "841516577422"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase.firestore();

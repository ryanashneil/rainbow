import firebase from "firebase";

export default firebase.initializeApp({
  apiKey: process.env.API_KEY,
  databaseURL: process.env.DATABASE_URL
});

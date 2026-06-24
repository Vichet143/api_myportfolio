import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://portfolio-ccfaa-default-rtdb.asia-southeast1.firebasedatabase.app"
});
export const db = admin.firestore();
export default admin;
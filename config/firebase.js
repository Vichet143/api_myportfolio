import admin from "firebase-admin";
import serviceAccount from "./portfolio-ccfaa-firebase-adminsdk-fbsvc-21593ef2bc.json" with { type: "json" };

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://portfolio-ccfaa-default-rtdb.asia-southeast1.firebasedatabase.app"
});
export const db = admin.firestore();
export default admin;
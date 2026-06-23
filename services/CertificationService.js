import Certification from "../models/Certification.js";
import { db } from "../config/firebase.js";
import RequestChecker from "../utils/CheckRequest.js";

class CertificationService {
  static async addCertification(certificationData) {
    try {
      RequestChecker(certificationData.certificate_name, "certificate_name");
      RequestChecker(certificationData.organization, "organization");
      RequestChecker(certificationData.issue_date, "issue_date");
      RequestChecker(certificationData.certificate_url, "certificate_url");
      RequestChecker(certificationData.type_certification, "type_certification");

      const certificate = new Certification(
        certificationData.certificate_name,
        certificationData.organization,
        certificationData.issue_date,
        certificationData.certificate_url,
        certificationData.type_certification
      );

      const certificateRef = await db
        .collection("certificate")
        .add(certificate.toFirebaseObject());

      console.log("Step 2");

      const certificateGet = await certificateRef.get();

      console.log("Step 3");

      const savedCertificate = certificateGet.data();

      console.log("Step 4");

      return {
        certificate_id: certificateRef.id,
        certificateData: savedCertificate,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateCertificate(certificate_id, updateData) {
    try {
      const certificateRef = await db
        .collection("certificate")
        .doc(certificate_id);
      const certificateDoc = await certificateRef.get();

      if (!certificateDoc.exists) {
        throw new Error("Certificate is not found");
      }
      const udate = {
        ...updateData,
      };

      await certificateRef.update(udate);

      const certificateUpdate = await certificateRef.get();

      return {
        id: certificateUpdate.id,
        certificateData: certificateUpdate.data(),
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAllCertificate() {
    try {
      const certificateRef = await db.collection("certificate").get();

      const certificateData = certificateRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return certificateData;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default CertificationService;

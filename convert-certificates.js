// convert-certificates.js
import { fromPath } from "pdf2pic";
import fs from "fs";
import path from "path";

const certificates = [
  { pdf: "./public/certificates/1 SQL.pdf", image: "1-sql.png" },
  { pdf: "./public/certificates/2 JAVA.pdf", image: "java-programming.png" },
  { pdf: "./public/certificates/SAYEE SURAJ PATIL 423095.pdf", image: "celonis-ba.png" },
  { pdf: "./public/certificates/3 Angular.pdf", image: "angular-basics.png" },
  { pdf: "./public/certificates/2 Angular.pdf", image: "angular-essential.png" },
  { pdf: "./public/certificates/Attachments_BootcampAI_Cert_140225_35.pdf", image: "bootcamp-ai.png" },
  { pdf: "./public/certificates/1 Angular.pdf", image: "angular-course.png" },
  { pdf: "./public/certificates/1 Express.pdf", image: "express.png" },
  { pdf: "./public/certificates/1 Nodejs.pdf", image: "nodejs.png" },
  { pdf: "./public/certificates/SAYEE-PATIL-Participant-Certificate.pdf", image: "python.png" },
  { pdf: "./public/certificates/GOOGLE AIML VIRTUAL INTERNSHIP.pdf", image: "google-aiml.png" },
  { pdf: "./public/certificates/1 C++ .pdf", image: "cpp.png" },
  { pdf: "./public/certificates/AI with Python.pdf", image: "ai-python.png" },

];

async function convertCertificates() {
  for (const cert of certificates) {
    const pdfPath = path.resolve(cert.pdf); // absolute path helps with spaces
    const options = {
      density: 100,
      saveFilename: cert.image.replace(".png", ""),
      savePath: "./public/certificates",
      format: "png",
      width: 600,
      height: 800,
    };

    console.log(`Converting: ${pdfPath} → ${cert.image}`);

    const convert = fromPath(pdfPath, options);
    try {
      await convert(1); // convert only the first page
      console.log(`✅ Done: ${cert.image}`);
    } catch (err) {
      console.error(`❌ Error converting ${cert.pdf}:`, err.message);
    }
  }
}

convertCertificates();

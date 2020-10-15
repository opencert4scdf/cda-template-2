import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface CustomTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  institute: string;
  foo?: {
    title: string;
  };
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  {
  "id": "53b75bbe",
  "name": "FIRE SAFETY",
  "description": "78th Fire Safety Manager Course",
  "issuedOn": "2019-05-29T00:00:00+08:00",
  "admissionDate": "2019-05-29T00:00:00+08:00",
  "graduationDate": "2019-05-29T00:00:00+08:00",
  "$template": {
    "name": "customTemplate",
    "type": "EMBEDDED_RENDERER",
    "url": "https://cranky-lichterman-c839bb.netlify.app/"
  },
  "issuers": [
    {
      "name": "Civil Defence Academy, Singapore Civil Defence Force",
      "url": "https://scdf.gov.sg",
      "documentStore": "0xD5d216E4E205E966c901BFefABbE065F108Bb403",
      "identityProof": {
        "type": "DNS-TXT",
        "location": "proud-brown-newt.sandbox.openattestation.com"
      }
    }
  ],
  "recipient": {
    "name": "Dzikril",
    "nric": "SXXXXXXXY",
    "course": "Fire Safety Manager Course"
  },
  "transcript": [
    {
      "name": "Paper 1",
      "grade": "C",
      "score": "66"
    },
    {
      "name": "Project",
      "grade": "D",
      "score": "59"
    },
    {
      "name": "Transcript",
      "transcripttext": "Dzikril was a very good student who paid consistent attention in class."
    }
};

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyB-ODgac9aDAO36Akxfs4kAW24zsnEAjb4" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "What is backtracking",
    config: {
      systemInstruction: `You are a Data structure and Algorithm Instructor. You will only reply to the problem related to 
      Data structure and Algorithm. You have to solve query of user in simplest way
      If user ask any question which is not related to Data structure and Algorithm, reply him rudely
      You have to reply him rudely if question is not related to Data structure and Algorithm.
      Else reply him politely with simple explanation and provide some examples too and if possible then also give then some leetcode question to practice just their number and name
      `,
    },
  });
  console.log(response.text);
}

main();
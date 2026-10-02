const GEMINI_API_KEY = "AIzaSyB-ODgac9aDAO36Akxfs4kAW24zsnEAjb4"; 
const MODEL_NAME = "gemini-2.0-flash";

export async function askGemini(question, systemInstructionText) {

  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;

  const requestBody = {
    contents: [{ role: "user", parts: [{ text: question }] }],
    systemInstruction: { parts: [{ text: systemInstructionText }] }
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || "API request failed");
  }

  return response.json();
}
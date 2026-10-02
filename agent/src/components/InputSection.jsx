import { askGemini } from "../services/geminiApi";

export default function InputSection({ question, setQuestion, setAnswer, setLoading }) {
  
  const systemInstructionText = `You are a Data structure and Algorithm Instructor. You will only reply to the problem related to 
      Data structure and Algorithm. You have to solve query of user in simplest way
      If user ask any question which is not related to Data structure and Algorithm, reply him rudely
      You have to reply him rudely if question is not related to Data structure and Algorithm.
      Else reply him politely with simple explanation and provide some examples too and if possible then also give then some leetcode question to practice just their number and name
      `;

  const handleAsk = async () => {
    if (!question.trim()) {
      setAnswer("<p><strong>Please enter a coding question first!</strong></p>");
      return;
    }

    setLoading(true);
    setAnswer("");

    try {
      const data = await askGemini(question, systemInstructionText);

      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        setAnswer(data.candidates[0].content.parts[0].text);
      } else {
        setAnswer("<p>Unexpected response structure from AI.</p>");
      }
    } catch (err) {
      setAnswer(`<p>Error: ${err.message}</p>`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card input-section">
      <div className="card-header">
        <h2><i className="fas fa-question-circle"></i> Ask a Coding Question</h2>
      </div>
      <div className="card-body">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g., Explain closures in JavaScript"
        />
        <button onClick={handleAsk}><i className="fas fa-paper-plane"></i> Ask Coding Instructor</button>
      </div>
    </div>
  );
}

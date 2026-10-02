export default function OutputSection({ answer, loading }) {
  // Format plain text into HTML with code highlighting
  const formatAnswer = (text) => {
    if (!text) return "<p>No response yet. Ask a coding question!</p>";

    let formatted = text;

    // Wrap code blocks (```...```)
    formatted = formatted.replace(/```([\s\S]*?)```/g, (match, code) => {
      return `<pre><code>${code.trim()}</code></pre>`;
    });

    // Wrap inline code (`...`)
    formatted = formatted.replace(/`([^`]+)`/g, (match, code) => {
      return `<code>${code}</code>`;
    });

    // Convert double line breaks into <p>
    const paragraphs = formatted
      .split(/\n\s*\n/) // split on blank lines
      .map((p) => `<p>${p.trim()}</p>`)
      .join("");

    return paragraphs;
  };

  return (
    <div className="card output-section">
      <div className="card-header">
        <h2>
          <i className="fas fa-graduation-cap"></i> Instructor&apos;s Response
        </h2>
      </div>
      <div className="card-body">
        {loading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Analyzing your question...</p>
          </div>
        ) : (
          <div
            className="answer-container"
            dangerouslySetInnerHTML={{ __html: formatAnswer(answer) }}
          />
        )}
      </div>
    </div>
  );
}

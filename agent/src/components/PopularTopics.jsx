export default function PopularTopics() {
  const topics = [
    "JavaScript Closures",
    "Python Decorators",
    "React Hooks",
    "Recursion Patterns",
    "Async/Await"
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h2>
          <i className="fas fa-fire" style={{ color: "var(--warning)" }}></i>{" "}
          Popular Topics
        </h2>
      </div>
      <div className="card-body">
        <ul style={{ listStyleType: "none", lineHeight: "2.2" }}>
          {topics.map((topic, index) => (
            <li key={index}>
              <i
                className="fas fa-chevron-right"
                style={{ color: "var(--primary)", marginRight: "10px" }}
              ></i>
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="header">
      <h1>Coding Instructor AI</h1>
      <div className="user-controls">
        <button className="btn"><i className="fas fa-moon"></i> Dark Mode</button>
        <button className="btn"><i className="fas fa-user"></i> Profile</button>
      </div>
    </div>
  );
}

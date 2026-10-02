export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <i className="fas fa-robot"></i>
        <span>Code Mentor AI</span>
      </div>
      <div className="sidebar-menu">
        <div className="menu-item active"><i className="fas fa-home"></i> Dashboard</div>
        <div className="menu-item"><i className="fas fa-history"></i> History</div>
        <div className="menu-item"><i className="fas fa-book"></i> Tutorials</div>
        <div className="menu-item"><i className="fas fa-code"></i> Playground</div>
        <div className="menu-item"><i className="fas fa-cog"></i> Settings</div>
      </div>
      <div className="sidebar-footer">
        <p>Code Mentor AI v2.0</p>
        <p>Powered by Gemini API</p>
      </div>
    </div>
  );
}

export default function StatsCard() {
  const stats = [
    {
      icon: "fas fa-code-branch",
      value: "1,248",
      label: "Questions Solved",
      color: "var(--primary)"
    },
    {
      icon: "fas fa-language",
      value: "24",
      label: "Languages",
      color: "var(--secondary)"
    }
  ];

  return (
    <div className="card">
      <div className="card-body">
        <div className="stats">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <i className={`${stat.icon} fa-2x`} style={{ color: stat.color }}></i>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import "./index.css";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard
          question={question}
          setQuestion={setQuestion}
          answer={answer}
          setAnswer={setAnswer}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
}

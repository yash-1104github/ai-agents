import StatsCard from "./StatsCard";
import PopularTopics from "./PopularTopics";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

export default function Dashboard({ question, setQuestion, answer, setAnswer, loading, setLoading }) {
  return (
    <div className="dashboard">
      <StatsCard />
      <PopularTopics />
      <InputSection 
        question={question}
        setQuestion={setQuestion}
        setAnswer={setAnswer}
        setLoading={setLoading}
      />
      <OutputSection answer={answer} loading={loading} />
    </div>
  );
}

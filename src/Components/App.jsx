import "../Styles/App.css"; 
import GenInfo from "./GenInfo";
import EduInfo from "./EducationInfo";
import WorkInfo from "./WorkInfo";

function App() {
  return (
    <div className="container">
      <h1 id="header"> CV Application </h1>
      <GenInfo />
      <EduInfo />
      <WorkInfo />
    </div>
  );
}

export default App;
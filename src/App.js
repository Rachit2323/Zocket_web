import Main from "./components/Main/Main.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step from "./components/Step1/Step.js";
import MainCamp from "./components/MainCampaign/MainCamp.js";
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainCamp/>} />
        <Route path="/step" element={<Step/>} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;

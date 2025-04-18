import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import "./App.css";
import { PersonList } from "./Components/person-list";
import { Navigation } from "./Components/navigation";
function App() {
  return (
   <>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<PersonList/>}/>
        <Route path="/people" element={<PersonList/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;

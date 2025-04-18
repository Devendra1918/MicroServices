import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import "./App.css";
import { PersonList } from "./Components/person-list";
import { Navigation } from "./Components/navigation";
import { Home } from "./Components/home";
function App() {
  return (
   <>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/people" element={<PersonList/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;

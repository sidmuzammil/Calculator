import { About } from "./About";
import { Main } from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import { Nav } from "./Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes className="navigation-bar">
            <Route path="/" element={<Main />} />
            <Route path="About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

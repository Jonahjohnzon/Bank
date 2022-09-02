import Head from "./Component/Frontpage/Head";
import Signup from "./Component/Signup/Signup";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./Component/Frontpage/Navbar";
import Login from "./Component/Login/Login";
import About from "./Component/Abouts/About";
import Contact from "./Component/Frontpage/Contact/Contact"
import Profilepage from "./Component/Profilpage/Profilepage";
import Terms from "./Component/Terms/Terms";
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route  exact path="/" element={<Head/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Profile" element={<Profilepage/>}/>
        <Route exact path="/Terms" element={<Terms/>}/>
      </Routes>
      <Contact/>
    </Router>
    </div>
  );
}

export default App;

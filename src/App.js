import Head from "./Component/Frontpage/Head";
import Signup from "./Component/Signup/Signup";
import {HashRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./Component/Frontpage/Navbar";
import Login from "./Component/Login/Login";
import About from "./Component/Abouts/About";
import Contact from "./Component/Frontpage/Contact/Contact"
import Profilepage from "./Component/Profilpage/Profilepage";
import Terms from "./Component/Terms/Terms";
import Repay from "./Component/Profilpage/Repay";
import Loading from "./Component/Loading";
import PaymentLoad from "./Component/PaymentLoad";
import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { Context } from "./Component/Context/Context";
function App() {
  const [user,setuser]=useState(false)
  const [name,setname]=useState('')
  const [alert,setalert]=useState(false)


  return (
    <div className="App" style={{cursor:'default'}}>
    <Context.Provider value={{user, setname,name, setuser, alert, setalert}}>
<Router>
      <Navbar permit={user} username={name}/>
   
      <ScrollToTop smooth color="black"  />
      <Routes>
        <Route  exact path="/" element={<Head setname={name=>setname(name)}/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Profile" element={<Profilepage/>}/>
        <Route exact path="/Terms" element={<Terms/>}/>
        <Route exact path="/Repay" element={<Repay/>}/>
        <Route exact path="/Payment" element={<PaymentLoad/>}/>
      </Routes>
      <Contact/>
    </Router>
    </Context.Provider>
    </div>
  );
}

export default App;

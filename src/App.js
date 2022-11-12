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
function App() {
  const [loading,setloading]=useState(true)
  const [user,setuser]=useState(true)
  const [name,setname]=useState('')

const Getdat=async()=>{
  setuser(true)
  
  const token=await localStorage.getItem('tkn')
  const userid=await localStorage.getItem('usr')
  const data=await fetch(`https://heritageapp.herokuapp.com/${userid}`,{
    method:'GET',   
    headers:{
      'auth-token':token}
  })
  try{const permit=await data.json()
  setuser(permit?.auth)
  console.log(permit)
  setname(permit?.data?.user)
  setloading(false)
  console.log(permit)}
  catch(err){
    console.log(err)
  }
}

useEffect(()=>{
  Getdat()

},[])
  return (
    <div className="App" style={{cursor:'default'}}>
  {loading?<Loading/>:<Router>
      <Navbar permit={user} username={name}/>
   
      <ScrollToTop smooth color="black"  />
      <Routes>
        <Route  exact path="/" element={<Head/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/Login" element={<Login user={user=>setuser(user)}/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Profile" element={<Profilepage/>}/>
        <Route exact path="/Terms" element={<Terms/>}/>
        <Route exact path="/Repay" element={<Repay/>}/>
        <Route exact path="/Payment" element={<PaymentLoad/>}/>
      </Routes>
      <Contact/>
    </Router>}
    </div>
  );
}

export default App;

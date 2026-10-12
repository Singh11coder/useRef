import React,{useState} from 'react'
import Form from './components/Form'
import './App.css'
import RHF from './components/RHF'
import Usercard from './components/Usercard'
import Navbar from './components/Navbar'
const App = () => {
  const [toggle,setToggle] = useState(false);
  const[userData, setUserData] = useState(()=>{
     return JSON.parse(localStorage.getItem("users")) || [];
  })
  

  
 
  return (
    <div>
      {/* <Form/> */}
      <Navbar setToggle={setToggle}/>
      {!toggle ?
        <div class="container">
         {userData.map((user) => (
          
             <Usercard user={user}/>
        ))}
        </div> 
        :
        <RHF setUserData={setUserData} setToggle={setToggle} userData={userData}/>
      }
     
    </div>
  )
}

export default App;

import React from 'react'

const Usercard = ({user}) => {
  return (
   
    <div class="card">
       <img src={user.Image}></img>
       <h2>Name: {user.Name}</h2>
       <h3>Email: {user.Email}</h3>
       <div class="btns">
          <button class="btn1">Update</button>
          <button class="btn2">Delete</button>
       </div>
    </div>
  
  )
}

export default Usercard;

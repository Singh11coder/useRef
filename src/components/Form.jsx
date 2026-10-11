import React,{useState,useRef} from 'react'

const Form = () => {

  const formRef = useRef({});

  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(formRef);
  }
  return ( 
    <div>
       <form onSubmit={handleSubmit}>
          <input 
          ref={(e) => formRef.current.ProductName =  e}
          type="text" placeholder="Product Name"/>

          <input 
          ref={(e) => formRef.current.ProductPrice =  e}
          type="text" placeholder="Product Price"/>
          <span>Select Category</span>
          <select ref={(e) => formRef.current.Category = e}>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Kids">Kids</option>
          </select>
          <input 
           ref={(e) => formRef.current.ImageUrl = e}
           type="text" placeholder="image url"/>

          <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default Form

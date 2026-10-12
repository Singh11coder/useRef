import React,{useRef} from 'react'
import {useForm} from 'react-hook-form';

const RHF = ({setUserData,setToggle,userData}) => {
   
   const {
    register, 
    handleSubmit, 
    reset, 
    formState:{errors}
  } = useForm({
    mode:"onChange"
  });

  console.log(errors);

  const formSubmit = (data) => {
    console.log(data);
    setUserData(prev => [...prev,data]);
    setToggle(prev => !prev);
    reset();
    localStorage.setItem("users",JSON.stringify(userData));
    
  }

  
  return (
    <div>
      REACT HOOK FORM
       <form onSubmit={handleSubmit(formSubmit)}>
          <input 
         {...register("Name",{
             required:"Name is required"
         })}
          type="text" placeholder="Name"/>
          {errors.Name && <p>{errors.Name.message}</p>}

          <input 
          {...register("Email",{
             required:"Email is required",
             pattern:{
               value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
               message:"Email is not valid "
             }
          })}
          type="email" placeholder="Email"/>
           {errors.Email && <p>{errors.Email.message}</p>}
        
          <input 
            {...register("Password",{
                required:"Password is required",
                pattern:{
                  value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:"Enter Strong Password"
                }
            })}
            type="password" placeholder='password'
          />
          {errors.Password && <p>{errors.Password.message}</p>}

          <input
          {...register("MobileNo",{
             required:"Mobile No is required",
             minLength:{
                value: 10,
                message:"Minimum 10 digits are required"
             },
             maxLength:{
                value: 10,
                message:"Maximum 10 digits are alllowed"
             },
             pattern:{
                value: /^(?:\+91|91|0)?[6-9]\d{9}$/,
                message:"Enter Valid Phone Number"
             }
          })}
          type="number" placeholder="Mobile No"
          />
          {errors.MobileNo && <p>{errors.MobileNo.message}</p>}

          <input 
           {...register("Image",{
             required:"Image is required"
           })}
           type="text" placeholder="image url"/>
           {errors.Image && <p>{errors.Image.message}</p>}

          <button class="create" type="submit">Submit</button>
       </form>
    </div>
  )
}

export default RHF;


import  { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { ButtonDiv, SignInButton, SignInInput, SignInP, SignUpDiv } from './StyleHeader'


export default function SignUp() {
    
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const jsonData = {
        "Email":Email,
        "Password":Password
    }

  const handleChangeEmail = (event:any) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event:any) => {
    setPassword(event.target.value);
  };


   const AddUser = () => {
    
    fetch('http://localhost:3001/api/users/createUser', { 
      method: 'POST', 
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    }).then(res=>{
      if(res.status === 200 && jsonData.Email !== "" && jsonData.Password !== ""){
        toast.success("Account Created Succssefully!")
      }
      else{
        toast.error("Failed to Create Account!")
      }
    })
   }
  return (
      <SignUpDiv>
        <ToastContainer></ToastContainer>
        <SignInP> SIGN UP </SignInP>
        <SignInInput required onChange={handleChangeEmail} value={Email} placeholder='Email address'/><br/>
        <SignInInput required onChange={handleChangePassword} value={Password} placeholder='Password'/><br/>
        <ButtonDiv><br/><br/>
        <SignInButton onClick={AddUser}> SIGN UP </SignInButton>
        </ButtonDiv>
    </SignUpDiv>
  )
}

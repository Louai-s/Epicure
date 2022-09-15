import axios from 'axios';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import SignUp from './SignUp';
import { ButtonDiv, SignInButton, SignInDiv, SignInInput, SignInP, Ximg } from './StyleHeader'

export default function OpenedSignIn() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Users, setUsers] = useState([]);
  const [sessionStorageContent, setsessionStorageContent] = useState('');
  
  const userData = {
    "Email":Email,
    "Password":Password,
}
const ValidateUser = () => {
  axios.get("http://localhost:3001/api/users/getUsers").then((response:any) => {setUsers(response.data)});
  const filter:any = Users.filter((user:any) => user.Email === userData.Email && user.Password === userData.Password);
  console.log(filter)
  if(filter.length >= 1){
    toast.success(<div> Welcome {filter[0].FirstName}!</div>)
  }
  else{
  toast.error("Username or Password invalid! ,Please try again")}
}
    const[SignUpOpen,setSignUpOpen] = useState(false);
    const toggleSignUp = () => {
        setSignUpOpen(!SignUpOpen);
      }
      const handleChangeEmail = (event:any) => {
        setEmail(event.target.value);
      };
      const handleChangePassword = (event:any) => {
        setPassword(event.target.value);
      };
  return (
  
    <SignInDiv>
       <ToastContainer></ToastContainer>
        <SignInP> SIGN IN </SignInP>
        <SignInP> to continue the order, please sign in</SignInP>
        <SignInInput required  onChange={handleChangeEmail} placeholder='Email address' value={Email}/><br/>
        <SignInInput required type="password" onChange={handleChangePassword} placeholder='Password' value={Password}/><br/>
        <ButtonDiv>
        <SignInButton onClick={ValidateUser}> LOGIN </SignInButton>
        </ButtonDiv>
        <SignInP>Forget Password?</SignInP>
        <SignInP> -----------or----------- </SignInP>
        <ButtonDiv>
        <SignInButton onClick={toggleSignUp}>SIGN UP</SignInButton>
        {SignUpOpen &&(<SignUp/>)}
        </ButtonDiv>
    </SignInDiv>
  )
}

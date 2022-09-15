
import axios from 'axios';
import  React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { ButtonDiv, SignInButton, SignInInput, SignInP, SignUpDiv,FirstLastNameInput,DivFirstLastNameInput } from './StyleHeader'

export default function SignUp() {
    
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPass, setConfirmPass] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Users, setUsers] = useState([]);
    const jsonData = {
        "Email":Email,
        "Password":Password,
        "FirstName":FirstName,
        "LastName":LastName,
        "PhoneNumber":PhoneNumber
    }
  const handleChangeEmail = (event:any) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event:any) => {
    setPassword(event.target.value);
  };
  const handleFirstName = (event:any) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event:any) => {
    setLastName(event.target.value);
  };
  const handleConfirmPassword = (event:any) => {
    setConfirmPass(event.target.value);
  }
  const handlePhoneNumber = (event:any) => {
    setPhoneNumber(event.target.value);
  }

  const isEmail = (email:string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

   const AddUser = () => {
    axios.get("http://localhost:3001/api/users/getUsers").then((response:any) => {setUsers(response.data)});
    const filter:any = Users.filter((user:any) => user.Email === jsonData.Email);
    if(filter.length >= 1){
      toast.error("User already Exists!")
    }
    else{
    if(jsonData.Email !== "" && jsonData.Password !== "" && isEmail(Email) ){
      if(jsonData.Password !== ConfirmPass){
        toast.error("Passwords Does not Match!")
      }
      else{
      fetch('http://localhost:3001/api/users/createUser', { 
      method: 'POST', 
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
      toast.success("Account Created Succssefully!")
  }
    }
    else{
      toast.error("Failed to Create Account!")
    }
  }
   }
  return (
      <SignUpDiv>
        <ToastContainer></ToastContainer>
        <SignInP> SIGN UP </SignInP>
        <SignInInput required onChange={handleChangeEmail} value={Email} placeholder='Email address'/><br/>
        <DivFirstLastNameInput>
          <FirstLastNameInput required onChange={handleFirstName} value={FirstName} placeholder="First Name" /> 
          <FirstLastNameInput required onChange={handleLastName} value={LastName} placeholder="Last Name" />
        </DivFirstLastNameInput>
        <SignInInput required onChange={handlePhoneNumber} value={PhoneNumber} placeholder='Phone Number'/><br/>
        <SignInInput required type="password" onChange={handleChangePassword} value={Password} placeholder='Password'/><br/>
        <SignInInput required type="password" onChange={handleConfirmPassword} value={ConfirmPass} placeholder='Confirm Password'/><br/>
        <ButtonDiv><br/><br/>
        <SignInButton onClick={AddUser}> SIGN UP </SignInButton>
        </ButtonDiv>
    </SignUpDiv>
  )
}


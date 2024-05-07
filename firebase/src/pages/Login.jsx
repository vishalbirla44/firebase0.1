import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { app } from '../firebase'






const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
 
const Login = () => {
    const [Email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")

const Singup = () => {
    createUserWithEmailAndPassword(
        auth,
        Email,
        password,
    ).then(alert("succesfully"))
}



const SingupWithgoogle = () =>{

  signInWithPopup(auth,googleProvider)

}

  return (

    <div>
        <h1> Sing up </h1>
        <label> email</label>
        <input type="email"  placeholder='enter your email' onChange={(e) =>setEmail(e.target.value)} value={Email} />

        <label htmlFor="">Password</label>
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} />
   <br/>

   
        <button onClick={Singup} >Singup</button>
        <br/> 
        <button onClick={SingupWithgoogle}>google</button>

    </div>
  )
}

export default Login

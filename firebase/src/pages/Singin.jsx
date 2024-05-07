import React, { useState } from 'react'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { app } from '../firebase'


const auth= getAuth(app)

const Singin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const singin = () => {
        signInWithEmailAndPassword(auth,
            email,
            password,)
        .then((value) => console.log("sucess") )
        .catch((value) => console.log( "erro"))
    }

  return (
    <div>
        <h1> Singin page</h1>

        <label> email</label>
        <input type="email" placeholder='eneter your email' onChange={(e) => setemail(e.target.value)} value={email} />

        <label> password</label>
        <input type="password" placeholder='eneter your password' onChange={(e) => setpassword (e.target.value)} value={password} />

        <button onClick={singin}>singin</button>
      
    </div>
  )
}

export default Singin

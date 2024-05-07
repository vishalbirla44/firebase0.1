import { app } from './firebase'
import { getAuth, onAuthStateChanged ,signOut} from 'firebase/auth' 
import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import Singin from './pages/Singin'



const auth = getAuth(app)

const App = () => {
  const [user, setuser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, user =>{
      if(user) {
        console.log('hello',  user)
        setuser(user)
      }
      else{
        console.log('user is logged out')
        setuser(null)
      }
    })
  },[])


   if (user=== null){
  return(
<div className='App'>
<>
    <Singin/>
    <Login/>
    </></div>)
  }

  return (
  <div className='App'>
  <>
  <p>hello {user.email}</p>
  <button onClick={() =>{signOut(auth)}}>Logout</button>

  </>
  </div>
  )
}

export default App

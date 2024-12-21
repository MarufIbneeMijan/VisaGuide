import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();
export const authContext = createContext()
const AuthProvider = ({children}) => {
  const [loading,setLoading]=useState(true)
  const [currentUser ,setCurrentUser]=useState(null)
  
  const auth = getAuth(app)
 
    const singUpUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginuser = (email,password)=>{
      return signInWithEmailAndPassword(auth ,email,password
      )
    }
    const singOutUser = ()=>{
       signOut(auth).then(()=>{
        setCurrentUser(null)
       })
    }



const googleSingIn= ()=>{
 return signInWithPopup(auth, provider)
  
}
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(user)=>{
        if(user){
          setCurrentUser(user)
          setLoading(false)
        }
      })
     return ()=>{
      unsubscribe()
     }
    },[])
    const values = {
     
      singUpUser,
      loginuser,
      singOutUser,
      setLoading,
      googleSingIn,
      currentUser,
      loading,
    }

    return <authContext.Provider value={values}>{children}</authContext.Provider>
       
   
};

export default AuthProvider


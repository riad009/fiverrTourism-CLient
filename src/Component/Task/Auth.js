import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/Firebase.config.js';


 const auth=getAuth(app)

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({});
      
    const [loading,setLoading]=useState(true);

    //registration pop
    const providerLogin=(provider)=>{
        setUser(user)
  return signInWithPopup(auth,provider)
  
      }
      //reg button
      const creatUser=(email,password)=>{
        setUser(user)
          setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
  
      }

       //login button
    const login=(email,password)=>{
        setUser(user)
          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
      }
      

      //logout
      const logout=()=>{

        return signOut (auth)
    }
      
      useEffect(()=>{
    
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log('user',currentUser)  
      setUser(currentUser);
      setLoading(false)
    //   setLoading(false);
      
      return ()=>{

        unsubscribe()
      }
        })  
          
      },[])


    const authInfo={user,providerLogin,creatUser,login,logout}
    return (
        <div>
              <AuthContext.Provider value={authInfo}>

{children}
</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
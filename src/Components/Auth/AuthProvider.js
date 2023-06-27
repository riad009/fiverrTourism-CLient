import React from 'react';
import  { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase.config';


 const auth=getAuth(app)
 const auth2=getAuth(app)
 export const AuthContext=createContext();
 
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({});
      
    const [loading,setLoading]=useState(true);

    //registration pop
    const providerLogin=(provider)=>{
        setUser(user)
  return signInWithPopup(auth,provider)
  
      }
      //login button
      const creatUser=(email,password)=>{
        setUser(user)
          setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
  
      }
      //login - create new  user
      const creatNewUser=(email,password)=>{
        
         
  return createUserWithEmailAndPassword(auth2,email,password)
  
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
        
      setUser(currentUser);
      setLoading(false)
    //   setLoading(false);
      
      return ()=>{

        unsubscribe()
      }
        })  
          
      },[])


    const authInfo={user,loading, providerLogin,creatUser,login,logout,creatNewUser}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>

{children}
</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
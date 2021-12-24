import {useState} from "react"
import initializeAuthentication from "../../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInUsingGoogle = () => {
   return signInWithPopup(auth, googleProvider)
    
  }
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
    })
  }
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
    }, [])
  })
  return {
    user,
    error,
    logout,
    signInUsingGoogle
  }

}
export default useFirebase;
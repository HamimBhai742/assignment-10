import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/AuthConfig";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [loder, setLoder] = useState(true)
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const creatNewUser = (email, password) => {
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) => {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleAuthProvider = new GoogleAuthProvider()
    const GoogleLogin = () => {
        setLoder(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

    const gitHubAuthProvider = new GithubAuthProvider()
    const gitHubLoginLogin = () => {
        setLoder(true)
        return signInWithPopup(auth, gitHubAuthProvider)
    }


    const LogOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoder(false)
        })
        return () => {
            unSubscribe
        }
    }, [])
    const userInfo = {
        user,
        creatNewUser,
        LoginUser,
        LogOut,
        GoogleLogin,
        gitHubLoginLogin,
        loder
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
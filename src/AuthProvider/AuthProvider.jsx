import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/AuthConfig";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const creatNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleAuthProvider = new GoogleAuthProvider()
    const GoogleLogin = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    const gitHubAuthProvider = new GithubAuthProvider()
    const gitHubLoginLogin = () => {
        return signInWithPopup(auth, gitHubAuthProvider)
    }


    const LogOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
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
        gitHubLoginLogin
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
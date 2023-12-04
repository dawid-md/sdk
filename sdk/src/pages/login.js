import { auth, provider } from "../config/firebase"
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("signed in ", userCredential.user);
            navigate('/')
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        }
    };

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        navigate('/')
    }

    return <div>
        <p>Sign in with Google</p>
        <button onClick={signInWithGoogle}>Sign In</button>
        <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <button type="submit">Register</button>
        </form>
        {error && <p>Error: {error}</p>}
    </div>
}
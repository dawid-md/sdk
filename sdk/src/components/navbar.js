import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'  //library
import { signOut } from "firebase/auth"

export const Navbar = () => {
    const [user] = useAuthState(auth)

    const signUserOut = async () => {
        await signOut(auth)
    }

    return(
        <>
            <div>
                <Link to="/">Home </Link>
                {!user && <Link to="/login">Login</Link>}
                {user && <Link to="/createpost">Create Post</Link>}
            </div>

            <div>
                {/* <p>{auth.currentUser?.displayName}</p>  
                <img src={auth.currentUser?.photoURL || ""} width={50}/> //this approach doesn't refresh the image after logging with another user */}
                {user && (
                <>
                    <p>{user?.displayName}</p>  
                    <img src={user?.photoURL || ""} width={100} height={100} referrerPolicy="no-referrer" />   {/*referrerPolicy tag get rids of broken image tag so "user &&..." is not necessary anymore"*/}
                    <button onClick={signUserOut}> Log Out</button>
                </>
                )}
            </div>
        </>
    ) 
}
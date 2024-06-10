import googleIcon from '../assets/img/google.png';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/config';
import { useState } from 'react';

const Login = () => {

    const [user, setUser] = useState(null);

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Chat Odası</h1>

                <img src={user?.photoURL} alt="User Photo" />

                <p>Devam etmek için giriş yapın</p>

                <button onClick={handleLogin} className='login-button'>
                    <img src={googleIcon} alt="Google Icon" />
                    <span>Google ile Gir</span>
                </button>
            </div>
        </div>
    )
}

export default Login
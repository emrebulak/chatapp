import googleIcon from '../assets/img/google.png';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/config';

const Login = ({ setIsAuth }) => {

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem('token', result.user.refreshToken);
                setIsAuth(localStorage.getItem('token'));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Chat Odası</h1>

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
import { useRef } from "react";

const Room = ({ setIsAuth, setRoom }) => {

    const ref = useRef();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        setIsAuth('');
    }

    const handleLogIn = () => {
        const room = ref.current.value.toLowerCase();
        setRoom(room);
        localStorage.setItem('room', room);
    }

    return (
        <div className="room-container">
            <div className="room-card">
                <h1>Chat Odası</h1>

                <p>Hangi Odaya Gireceksiniz</p>

                <input ref={ref} className="room-input" type="text" placeholder='ÖRN: haftasonu' />

                <button onClick={handleLogIn} className='room-button'>Odaya Gir</button>

                <button onClick={handleLogOut} className='room-button bg-red'>Çıkış Yap</button>
            </div>
        </div>
    )
}

export default Room
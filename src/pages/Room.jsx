const Room = ({setIsAuth}) => {

   const handleLogOut = () => {
        localStorage.removeItem('token');
        setIsAuth('');
    }

    return (
        <div className="room-container">
            <div className="room-card">
                <h1>Chat Odası</h1>

                <p>Hangi Odaya Gireceksiniz</p>
                
                <input className="room-input" type="text" placeholder='ÖRN: haftasonu' />

                <button className='room-button'>Odaya Gir</button>

                <button onClick={handleLogOut} className='room-button bg-red'>Çıkış Yap</button>
            </div>
        </div>
    )
}

export default Room
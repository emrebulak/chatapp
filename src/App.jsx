import React, { useState } from 'react'
import Login from './pages/Login'
import Room from './pages/Room'
import Chat from './pages/Chat'

const App = () => {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  const [room, setRoom] = useState(localStorage.getItem('room'));

  return (
    <div className='container'>
      {
        isAuth ? (room ? <Chat room={room} setRoom={setRoom} /> : <Room room={room} setRoom={setRoom} setIsAuth={setIsAuth} />) : <Login setIsAuth={setIsAuth} />
      }
    </div>
  )
}

export default App
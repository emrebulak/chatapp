import React, { useState } from 'react'
import Login from './pages/Login'
import Room from './pages/Room'

const App = () => {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  const [room, setRoom] = useState('');

  return (
    <div className='container'>
      {
        isAuth ? <Room setIsAuth={setIsAuth}/> : <Login setIsAuth={setIsAuth} />
      }
    </div>
  )
}

export default App
import React from 'react'
import { useNavigate } from 'react-router-dom'
import UseAuth from '../../hooks/useAuth'

const Home = () => {
    const signOut = UseAuth()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => [signOut(), navigate("/login")]}>SAIR</button>
        </div>
    )
}

export default Home
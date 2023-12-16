import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'; // Change to lowercase for consistency

const Home = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => { signOut(); navigate("/Register-Screens/login"); }}>SAIR</button>
        </div>
    );
}

export default Home;

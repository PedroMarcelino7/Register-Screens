import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import UseAuth from '../hooks/useAuth'
import Forgot from '../pages/ForgotPassword/Forgot'

const Private = ({ Item }) => {
    const { signed } = UseAuth()

    return signed ? <Item /> : <Login />
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path='/Register-Screens' element={<Private Item={Home} />} />
                    <Route path='/Register-Screens/login' element={<Login />} />
                    <Route exact path='/Register-Screens/register' element={<Register />} />
                    <Route exact path='/Register-Screens/password' element={<Forgot />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp

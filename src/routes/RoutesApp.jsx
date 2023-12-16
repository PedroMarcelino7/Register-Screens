import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import UseAuth from '../hooks/useAuth'

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
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp

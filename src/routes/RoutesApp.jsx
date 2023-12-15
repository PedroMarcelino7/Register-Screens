import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import UseAuth from '../hooks/useAuth'

const Private = ({ Item }) => {
    const signed = false

    return signed > 0 ? <Item /> : <Login />
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<Private Item={Home} />} />
                    <Route path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp

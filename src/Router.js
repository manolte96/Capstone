import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router'
import Login from './components/Login'
import Home from './components/Home'
import cookie from 'cookie'
//import ProtectedRoutes from './components/ProtectedRoutes'
// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth= () => {
    const cookies=cookie.parse(document.cookie)
    return cookies ['loggedIn'] ?true:false
}

// Write ProtectedRoute function here
const ProtectedRoutes= () => {
    return checkAuth() ?<Outlet />:<Navigate to='/Login' />
}

const Router = () => {
    return (
        <Routes>
            {/* <Route element={<ProtectedRoutes/>}> */}
              <Route exact path="/" element={<Home />} /> 
            {/* </Route> */}
            {/* <Route path="/" element={<ProtectedRoute component={Home} />} /> */}
            <Route exact path="/Login" element={<Login />} />
        </Routes>
    );
};

export default Router;
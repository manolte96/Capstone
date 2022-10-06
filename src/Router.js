import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoutes'
// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"


// Write ProtectedRoute function here


const Router = () => {
    return (
        <Routes>
                        <Route path="/" element={Home} />

            {/* <Route path="/" element={<ProtectedRoute component={Home} />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/Login" element={<ProtectedRoute component={Login} />} />
        </Routes>
    );
};

export default Router;
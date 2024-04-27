import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loder } = useContext(AuthContext)
    if (loder) {
        return <div className='flex justify-center min-h-screen items-center'><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
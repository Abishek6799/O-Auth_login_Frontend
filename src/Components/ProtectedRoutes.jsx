import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/" replace />
    return (
        <div>
            
        </div>
    );
};

export default ProtectedRoutes;
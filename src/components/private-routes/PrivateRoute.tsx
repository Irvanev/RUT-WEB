import React, {ComponentType} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';

interface PrivateRouteProps {
    element: ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({element: Element}) => {
    const {auth} = useAuth();
    const location = useLocation();

    if (!auth) {
        return <Navigate to="/login" state={{from: location}} />;
    }

    return <Element />;
};

export default PrivateRoute;

import React, {JSX} from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

interface ProtectedRouteProps {
    element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({element}) => {
    const {user} = useAuth();
    return user ? element : <Navigate to="/signin"/>;
};

export default ProtectedRoute;

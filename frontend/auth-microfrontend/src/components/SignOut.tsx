import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const SignOut: React.FC = () => {
    const navigate = useNavigate();
    const {setUser} = useAuth();

    useEffect(() => {
        localStorage.removeItem("jwt");
        setUser(null);
        navigate("/signin");
    }, []);

    return null;
};

export default SignOut;

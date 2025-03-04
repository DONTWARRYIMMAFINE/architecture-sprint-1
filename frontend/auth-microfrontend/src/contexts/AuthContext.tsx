import React, {createContext, PropsWithChildren, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContextType, UserData} from "../types/AuthTypes";
import auth from "../utils/auth.ts";

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserData | null>(null);

    const checkAuth = () => {
        const token = localStorage.getItem("jwt");
        if (!token) {
            return;
        }

        auth.checkToken(token)
            .then((res) => {
                setUser(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setUser(null);
                navigate("/signin");
            });
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

import React, {PropsWithChildren} from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./Login.tsx";
import Register from "./Register.tsx";
import SignOut from "./SignOut.tsx";

const AuthRoutes: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <Routes>
            <Route path="/signin" element={<Login/>}/>
            <Route path="/signup" element={<Register/>}/>
            <Route path="/signout" element={<SignOut/>}/>
            {children}
        </Routes>
    );
};

export default AuthRoutes;

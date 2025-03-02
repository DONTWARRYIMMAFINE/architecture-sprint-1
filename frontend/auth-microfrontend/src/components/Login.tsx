import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.ts";
import {UserAuthCredentials} from "../types/AuthTypes.ts";
import auth from "../utils/auth.ts";
import InfoTooltip, {InfoTooltipProps} from "./InfoTooltip.tsx";

import "../blocks/auth-form/auth-form.css";

const Login: React.FC = () => {
    const {setUser} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState<boolean>(false);
    const [tooltipStatus, setTooltipStatus] = useState<InfoTooltipProps["status"]>(null);

    function onLogin(userData: UserAuthCredentials) {
        auth.login(userData)
            .then(() => {
                setUser(userData);
                navigate("/");
            })
            .catch(() => {
                setTooltipStatus("fail");
                setIsInfoToolTipOpen(true);
            });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onLogin({email, password});
    };

    return (<>
        <div className="auth-form">
            <form className="auth-form__form" onSubmit={handleSubmit}>
                <div className="auth-form__wrapper">
                    <h3 className="auth-form__title">Вход</h3>
                    <label className="auth-form__input">
                        <input type="text" name="name" id="email"
                               className="auth-form__textfield" placeholder="Email"
                               onChange={e => setEmail(e.target.value)} required/>
                    </label>
                    <label className="auth-form__input">
                        <input type="password" name="password" id="password"
                               className="auth-form__textfield" placeholder="Пароль"
                               onChange={e => setPassword(e.target.value)} required/>
                    </label>
                </div>
                <button className="auth-form__button" type="submit">Войти</button>
            </form>
        </div>
        <InfoTooltip isOpen={isInfoToolTipOpen} status={tooltipStatus} onClose={() => setIsInfoToolTipOpen(false)}/>
    </>);
};

export default Login;

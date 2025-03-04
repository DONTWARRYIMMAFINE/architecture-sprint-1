import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {UserAuthCredentials} from "../types/AuthTypes.ts";
import auth from "../utils/auth.ts";
import InfoTooltip, {InfoTooltipProps} from "./InfoTooltip.tsx";

import "../blocks/auth-form/auth-form.css";

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState<boolean>(false);
    const [tooltipStatus, setTooltipStatus] = useState<InfoTooltipProps["status"]>(null);

    const onRegister = (userData: UserAuthCredentials) => {
        auth.register(userData)
            .then(() => {
                setTooltipStatus("success");
                setIsInfoToolTipOpen(true);
            })
            .catch(() => {
                setTooltipStatus("fail");
                setIsInfoToolTipOpen(true);
            });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onRegister({email, password});
    };

    const handleOnTooltipClose = () => {
        if (tooltipStatus === "success" && isInfoToolTipOpen) {
            navigate("/signin");
        }
        setIsInfoToolTipOpen(false);
    };

    return (<>
        <div className="auth-form">
            <form className="auth-form__form" onSubmit={handleSubmit}>
                <div className="auth-form__wrapper">
                    <h3 className="auth-form__title">Регистрация</h3>
                    <label className="auth-form__input">
                        <input type="text" name="email" id="email"
                               className="auth-form__textfield" placeholder="Email"
                               onChange={e => setEmail(e.target.value)} required/>
                    </label>
                    <label className="auth-form__input">
                        <input type="password" name="password" id="password"
                               className="auth-form__textfield" placeholder="Пароль"
                               onChange={e => setPassword(e.target.value)} required/>
                    </label>
                </div>
                <div className="auth-form__wrapper">
                    <button className="auth-form__button" type="submit">Зарегистрироваться</button>
                    <p className="auth-form__text">Уже зарегистрированы? <Link className="auth-form__link"
                                                                               to="/signin">Войти</Link></p>
                </div>
            </form>
        </div>
        <InfoTooltip isOpen={isInfoToolTipOpen} status={tooltipStatus} onClose={handleOnTooltipClose}/>
    </>);
};

export default Register;

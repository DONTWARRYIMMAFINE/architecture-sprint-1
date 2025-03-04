import {useAuth} from "auth/useAuth";
import React from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import logoPath from "../images/logo.svg";

const Header = () => {
    const navigate = useNavigate();
    const {user} = useAuth();

    const handleSignOut = () => {
        navigate("/signout");
    };

    return (
        <header className="header page__section">
            <img src={logoPath} alt="Логотип проекта Mesto" className="logo header__logo"/>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="header__wrapper">
                            <p className="header__user">{user?.email}</p>
                            <button className="header__logout" onClick={handleSignOut}>Выйти</button>
                        </div>
                    }
                />
                <Route
                    path="/signup"
                    element={<Link className="header__auth-link" to="/signin">Войти</Link>}
                />
                <Route
                    path="/signin"
                    element={<Link className="header__auth-link" to="/signup">Регистрация</Link>}
                />
            </Routes>
        </header>
    );
};

export default Header;

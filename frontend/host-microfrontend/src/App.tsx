import React, {lazy} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";

import "./index.css";

const AuthProvider = lazy(() => import("auth/AuthContext"));
const AuthRoutes = lazy(() => import("auth/AuthRoutes"));
const ProtectedRoute = lazy(() => import("auth/ProtectedRoute"));

const App = () => (
    <div className="page__content">
        <BrowserRouter>
            <AuthProvider>
                <Header/>
                <AuthRoutes>
                    <Route path="/" element={
                        <ProtectedRoute element={<Main/>}/>
                    }/>
                </AuthRoutes>
                <Footer/>
            </AuthProvider>
        </BrowserRouter>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App/>);

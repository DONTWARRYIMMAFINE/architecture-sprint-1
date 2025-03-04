import React, { PropsWithChildren } from "react";
import { AuthContextType } from "../types/AuthTypes";
export declare const AuthContext: React.Context<AuthContextType | null>;
declare const AuthProvider: React.FC<PropsWithChildren>;
export default AuthProvider;

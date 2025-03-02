import { AuthLoginResponse, AuthResponse, UserAuthCredentials } from "../types/AuthTypes.ts";
interface AuthApiConfig {
    address: string;
}
declare class AuthApi {
    private readonly _address;
    constructor({ address }: AuthApiConfig);
    register: (userData: UserAuthCredentials) => Promise<AuthResponse>;
    login: (userData: UserAuthCredentials) => Promise<AuthLoginResponse>;
    logout: () => void;
    checkToken: (token: string) => Promise<AuthResponse>;
    private getResponse;
}
declare const auth: AuthApi;
export default auth;

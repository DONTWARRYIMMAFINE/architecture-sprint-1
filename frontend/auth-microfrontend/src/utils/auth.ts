import {AuthLoginResponse, AuthResponse, UserAuthCredentials} from "../types/AuthTypes.ts";

interface AuthApiConfig {
    address: string;
}

class AuthApi {
    private readonly _address;

    constructor({address}: AuthApiConfig) {
        this._address = address
    }

    public register = async (userData: UserAuthCredentials): Promise<AuthResponse> => {
        return fetch(`${this._address}/signup`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then(this.getResponse);
    };

    public login = async (userData: UserAuthCredentials): Promise<AuthLoginResponse> => {
        return fetch(`${this._address}/signin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then(this.getResponse)
            .then((data: any) => {
                localStorage.setItem("jwt", data.token);
                return data;
            });
    };

    public checkToken = async (token: string): Promise<AuthResponse> => {
        return fetch(`${this._address}/users/me`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }).then(this.getResponse);
    };

    private getResponse = async (res: Response): Promise<any> => {
        if (!res.ok) {
            throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
    };
}

const auth = new AuthApi({
    address: "https://auth.nomoreparties.co",
});
export default auth;

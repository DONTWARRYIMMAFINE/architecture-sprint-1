import {UserData} from "auth/compiled-types/types/AuthTypes";

interface ApiConfig {
    address: string;
    groupId: string;
    token: string;
}

class Api {
    private readonly _address: string;
    private readonly _groupId: string;
    private readonly _token: string;

    constructor({address, groupId, token}: ApiConfig) {
        this._groupId = groupId;
        this._address = address;
        this._token = token;
    }

    public getUserInfo = async (): Promise<UserData> => {
        return fetch(`${this._address}/${this._groupId}/users/me`, {
            headers: {
                authorization: this._token,
            },
        }).then(this.getResponse);
    };

    public setUserInfo = async ({name, about}: Pick<UserData, "name" | "about">): Promise<UserData> => {
        return fetch(`${this._address}/${this._groupId}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                about,
            }),
        }).then(this.getResponse);
    };

    public setUserAvatar = async ({avatar}: Pick<UserData, "avatar">): Promise<UserData> => {
        return fetch(`${this._address}/${this._groupId}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                avatar,
            }),
        }).then(this.getResponse);
    };

    private getResponse = async (res: Response): Promise<any> => {
        if (!res.ok) {
            throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
    };
}

const api = new Api({
    address: "https://nomoreparties.co", // "http://localhost:5000"
    groupId: `cohort0`,
    token: "80a75492-21c5-4330-a02f-308029e94b63",
});

export default api;

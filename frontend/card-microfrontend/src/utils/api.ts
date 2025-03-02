import {CreateCard, ICard} from "../types/CardTypes.ts";

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
        this._address = address;
        this._groupId = groupId;
        this._token = token;
    }

    public getCardList = async (): Promise<ICard[]> => {
        return fetch(`${this._address}/${this._groupId}/cards`, {
            headers: {
                authorization: this._token,
            },
        }).then(this.getResponse);
    };

    public addCard = async (cardData: CreateCard): Promise<ICard> => {
        return fetch(`${this._address}/${this._groupId}/cards`, {
            method: "POST",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cardData),
        }).then(this.getResponse);
    };

    public removeCard = async (cardID: string): Promise<ICard> => {
        return fetch(`${this._address}/${this._groupId}/cards/${cardID}`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
            },
        }).then(this.getResponse);
    };

    public changeLikeCardStatus = async (cardID: string, like: boolean): Promise<ICard> => {
        return fetch(`${this._address}/${this._groupId}/cards/like/${cardID}`, {
            method: like ? "PUT" : "DELETE",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
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

const api = new Api({
    address: "https://nomoreparties.co", // "http://localhost:5000"
    groupId: `cohort0`,
    token: `80a75492-21c5-4330-a02f-308029e94b63`,
});

export default api;

import { CreateCard, ICard } from "../types/CardTypes.ts";
interface ApiConfig {
    address: string;
    groupId: string;
    token: string;
}
declare class Api {
    private readonly _address;
    private readonly _groupId;
    private readonly _token;
    constructor({ address, groupId, token }: ApiConfig);
    getCardList: () => Promise<ICard[]>;
    addCard: (cardData: CreateCard) => Promise<ICard>;
    removeCard: (cardID: string) => Promise<ICard>;
    changeLikeCardStatus: (cardID: string, like: boolean) => Promise<ICard>;
    private getResponse;
}
declare const api: Api;
export default api;

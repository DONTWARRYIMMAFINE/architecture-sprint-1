import { UserData } from "auth/compiled-types/types/AuthTypes";
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
    getUserInfo: () => Promise<UserData>;
    setUserInfo: ({ name, about }: Pick<UserData, "name" | "about">) => Promise<UserData>;
    setUserAvatar: ({ avatar }: Pick<UserData, "avatar">) => Promise<UserData>;
    private getResponse;
}
declare const api: Api;
export default api;

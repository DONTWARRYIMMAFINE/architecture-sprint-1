export interface UserData {
    _id?: string;
    email: string;
    name?: string;
    about?: string;
    avatar?: string;
}
export interface UserAuthCredentials extends Omit<UserData, "_id"> {
    password: string;
}
export interface AuthLoginResponse {
    token: string;
}
export interface AuthResponse {
    data: UserData;
}
export interface AuthContextType {
    user: UserData | null;
    setUser: (user: UserData | null) => void;
}

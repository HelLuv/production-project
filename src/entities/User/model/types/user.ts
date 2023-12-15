export interface User {
    id: string;
    username: string;
}

export interface UserSchema {
    authData?: User | null;
    __inited: boolean;
}

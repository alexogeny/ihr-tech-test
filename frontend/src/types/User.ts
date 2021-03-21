/**
 * Defines the user type
 * @module type/user
 * @interface
 */

export interface IUser {
    id: string;
    pwd: string;
    isAdmin: boolean;
}

export interface IUsers {
    Users: IUser[];
}
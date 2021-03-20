/**
 * Here we'll define the Name type.
 * @module type/name
 * @interface
 */

export interface IName {
    value: string;
}

export interface INames {
    names: IName[];
}

export type INameMutation = {
    createName: IName;
};
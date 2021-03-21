/**
 * Defines the History type
 * @module type/history
 * @interface
 */

export interface IHistory {
    userId: String;
    nameId: String;
    dateAssigned: String;
}

export type IHistoryMutation = {
    addHistory: IHistory;
};
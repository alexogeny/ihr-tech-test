/**
 * Defines the History type
 * @module type/history
 * @interface
 */

export interface IHistory {
    userId: Int16Array;
    nameId: Int16Array;
}

export type IHistoryMutation = {
    addHistory: IHistory;
};
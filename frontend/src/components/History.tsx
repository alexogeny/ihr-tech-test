import * as React from "react";
import { IHistory } from "../types/History";

type Props = {
    history: IHistory;
};

const History: React.FC<Props> = ({ history }) => {
    const { userId, nameId, dateAssigned } = history;

    return (
        <div className="Card" > </div>
    );
};

export default History;
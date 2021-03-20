import * as React from "react";
import { IHistory } from "../types/History";

type Props = {
    history: IHistory;
};

const History: React.FC<Props> = ({ history }) => {
    const { title, description } = history;

    return (
        <div classHistory= "Card" > </div>
  );
};

export default History;
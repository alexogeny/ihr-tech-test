import * as React from "react";
import { IName } from "../types/Name";

type Props = {
    name: IName;
};

const Name: React.FC<Props> = ({ name }) => {
    const { title, description } = name;

    return (
        <div className= "Card" > </div>
  );
};

export default Name;
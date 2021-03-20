import * as React from "react";
import { IUser } from "../types/User";

type Props = {
    user: IUser;
};

const User: React.FC<Props> = ({ user }) => {
    const { title, description } = user;

    return (
        <div className= "Card" > </div>
  );
};

export default User;
import * as React from "react";
import { IUser } from "../types/User";

type Props = {
    user: IUser;
};

const User: React.FC<Props> = ({ user }) => {
    const { id, pwd, isAdmin } = user;

    return (
        <div className="Card" >
            <span>ID: {id}</span>
        </div>
    );
};

export default User;
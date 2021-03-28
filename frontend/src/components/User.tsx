import * as React from "react";
import { IUser } from "../types/User";
import {GET_USERS} from "../graphql";
import {useUsersQuery} from "../makeRequest";

type Props = {
    user: IUser;
};

function Users() {
    
    const { loading, error, data } = useUsersQuery(GET_USERS)
    if (loading) return (<h4>Loading...</h4>)
    if (error) return (<h4>Something went wrong.<br/>error</h4>)

    return (

        <div>
        {data.Users.map((user: IUser) => (
            <div key={user.id}>{user} </div>
        ))}
        </div>
    );
};

export default Users;
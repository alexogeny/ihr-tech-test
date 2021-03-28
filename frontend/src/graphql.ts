/**
 * Define the queries to the backend server in this file
 * If our application was more complex, probably reuse components from the backend
 * For now, just want to try and get something working, so we'll define individual queries here
 */

import {gql} from '@apollo/client';

export const GET_USERS = gql`
    {
        users {
            id
            pwd
            isAdmin
        }
    }
`

export const CREATE_NAME = gql`
    mutation createName($value: String!) {
        addName
    }
`
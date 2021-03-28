/**
 * Imports
 */
import { DocumentNode, useQuery, useMutation } from '@apollo/client';
import { IUsers } from './types/User';
import { IName, INames, INameMutation } from './types/Name';
import { IHistory, IHistoryMutation } from './types/History';

/**
 * Uses users query
 * @param gqlQuery 
 * @returns stateful response
 */
export function useUsersQuery(gqlQuery: DocumentNode) {
    const { loading, error, data } = useQuery<IUsers>(gqlQuery)
    return { loading, error, data }
}

/**
 * Uses name query
 * @param gqlQuery 
 * @returns stateful response
 */
export function useNameQuery(gqlQuery: DocumentNode) {
    const { loading, error, data } = useQuery<IName>(gqlQuery)
    return { loading, error, data }
}

/**
 * Uses names query
 * @param gqlQuery 
 * @returns  
 */
export function useNamesQuery(gqlQuery: DocumentNode) {
    const { loading, error, data } = useQuery<INames>(gqlQuery)
    return { loading, error, data }
}

/**
 * Uses name mutation
 * @param gqlQuery 
 * @returns  
 */
export function useNameMutation(gqlQuery: DocumentNode) {
    const [addName] = useMutation<INameMutation>(gqlQuery)
    return [addName]
}

/**
 * Uses history query
 * @param gqlQuery 
 * @returns  
 */
export function useHistoryQuery(gqlQuery: DocumentNode) {
    const { loading, error, data } = useQuery<IHistory>(gqlQuery)
    return { loading, error, data }
}

/**
 * Uses history mutation
 * @param gqlQuery 
 * @returns  
 */
export function useHistoryMutation(gqlQuery: DocumentNode) {
    const [addHistory] = useMutation<IHistoryMutation>(gqlQuery)
    return [addHistory]
}
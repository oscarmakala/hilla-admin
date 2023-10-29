import {useMemo} from 'react';

const emptyParams = {};

/**
 * Hook for getting user permissions
 *
 * Calls the authProvider.getPermissions() method using react-query.
 * If the authProvider returns a rejected promise, returns empty permissions.
 *
 * The return value updates according to the request state:
 *
 * - start: { isLoading: true }
 * - success: { permissions: [any], isLoading: false }
 * - error: { error: [error from provider], isLoading: false }
 *
 * Useful to enable features based on user permissions
 *
 * @param {Object} params Any params you want to pass to the authProvider
 *
 * @returns The current auth check state. Destructure as { permissions, error, isLoading, refetch }.
 *
 * @example
 *     import { usePermissions } from 'react-admin';
 *
 *     const PostDetail = props => {
 *         const { isLoading, permissions } = usePermissions();
 *         if (!isLoading && permissions == 'editor') {
 *             return <PostEdit {...props} />
 *         } else {
 *             return <PostShow {...props} />
 *         }
 *     };
 */
const usePermissions = (params = emptyParams) => {
    return ({
        permissions: undefined,
        isLoading: false
    });
};

export default usePermissions;

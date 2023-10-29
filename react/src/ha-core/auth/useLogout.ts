import {useLocation, useNavigate} from "react-router-dom";
import {useCallback, useEffect, useRef} from "react";
import {removeDoubleSlashes, useBasename } from "../routing";
import { defaultAuthParams } from "./useAuthProvider";


const useLogout = (): Logout => {
    const navigate = useNavigate();
    // useNavigate forces rerenders on every navigation, even if we don't use the result
    // see https://github.com/remix-run/react-router/issues/7634
    // so we use a ref to bail out of rerenders when we don't need to
    const navigateRef = useRef(navigate);
    const location = useLocation();
    const locationRef = useRef(location);
    const basename = useBasename();
    const loginUrl = removeDoubleSlashes(
        `${basename}/${defaultAuthParams.loginUrl}`
    );

    /*
 * We need the current location to pass in the router state
 * so that the login hook knows where to redirect to as next route after login.
 *
 * But if we used the location from useLocation as a dependency of the logout
 * function, it would be rebuilt each time the user changes location.
 * Consequently, that would force a rerender of all components using this hook
 * upon navigation (CoreAdminRouter for example).
 *
 * To avoid that, we store the location in a ref.
 */
    useEffect(() => {
        locationRef.current = location;
        navigateRef.current = navigate;
    }, [location, navigate]);


    //todo add clear store
    const logoutWithoutProvider = useCallback((_: any) => {
            navigate(
                {
                    pathname: loginUrl,
                },
                {
                    state: {
                        nextPathname: location && location.pathname,
                    },
                }
            );
            // resetStore();
            return Promise.resolve();
        },
        [location, navigate, loginUrl]
    );
    return logoutWithoutProvider;
}

/**
 * Log the current user out by calling the authProvider.logout() method,
 * and redirect them to the login screen.
 *
 * @param {Object} params The parameters to pass to the authProvider
 * @param {string} redirectTo The path name to redirect the user to (optional, defaults to login)
 * @param {boolean} redirectToCurrentLocationAfterLogin Whether the button shall record the current location to redirect to it after login. true by default.
 *
 * @return {Promise} The authProvider response
 */
type Logout = (
    params?: any,
    redirectTo?: string | false,
    redirectToCurrentLocationAfterLogin?: boolean
) => Promise<any>;

export default useLogout;
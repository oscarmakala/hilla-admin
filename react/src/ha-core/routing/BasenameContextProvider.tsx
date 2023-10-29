import * as React from 'react';
import {BasenameContext} from './BasenameContext';
import {type ReactNode} from "react";

/**
 * Set the string to append to all links to the admin app.
 *
 * Useful when the app is mounted on a sub path, e.g. '/admin'.
 * Used internally by the `<Admin>` component.
 *
 * @see useBasename
 */

interface BasenameContextProviderProps {
    children: ReactNode;
    basename: string;
}

export const BasenameContextProvider: React.FC<BasenameContextProviderProps> = ({
                                                                                    children,
                                                                                    basename,
                                                                                }) => (
    <BasenameContext.Provider value={basename}>
        {children}
    </BasenameContext.Provider>
);
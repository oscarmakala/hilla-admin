import * as React from "react";
import {type ReactElement} from "react";
import {ResourceContext, type ResourceContextValue} from "./ResourceContext";


export const ResourceContextProvider = ({
                                            children,
                                            value,
                                        }: {
    children: ReactElement;
    value?: ResourceContextValue;
}) =>
    value ? (
        <ResourceContext.Provider value={value}>
            {children}
        </ResourceContext.Provider>
    ) : (
        children
    );

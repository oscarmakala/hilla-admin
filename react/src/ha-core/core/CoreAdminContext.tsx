
import React, {type ReactNode} from "react";
import {ResourceDefinitionContextProvider} from "./ResourceDefinitionContext";
import { AdminRouter } from "../routing";
import type {AdminChildren, DashboardComponent} from "../types";

export interface CoreAdminContextProps {
    children?: AdminChildren;
    dashboard?: DashboardComponent;
}

export const CoreAdminContext = (props: CoreAdminContextProps) => {
    const {children} = props;
    return (
        <AdminRouter>
            <ResourceDefinitionContextProvider>{children as ReactNode}</ResourceDefinitionContextProvider>
        </AdminRouter>
    )
}
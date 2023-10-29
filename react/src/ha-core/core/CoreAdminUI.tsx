
import {Route, Routes} from "react-router-dom";
import {type ReactNode} from "react";
import type {
    AdminChildren,
    CoreLayoutProps,
    DashboardComponent,
    LayoutComponent,
    LoadingComponent,
    TitleComponent
} from "../types";
import {CoreAdminRoutes} from "./CoreAdminRoutes";

export interface CoreAdminUIProps {
    children?: AdminChildren;
    dashboard?: DashboardComponent;
    layout?: LayoutComponent;
    title?: TitleComponent;
    loading?: LoadingComponent;
}

const DefaultLayout = ({children}: CoreLayoutProps) => <>{children}</>;

export const CoreAdminUI = (props: CoreAdminUIProps) => {
    const {
        children,
        dashboard,
        layout = DefaultLayout,
        loading = Noop,
        title = 'React Admin',

    } = props;
    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <CoreAdminRoutes
                        dashboard={dashboard}
                        title={title}
                        layout={layout}
                    >
                        {children as ReactNode}
                    </CoreAdminRoutes>
                }
            />
        </Routes>
    )
}

const Noop = () => null;
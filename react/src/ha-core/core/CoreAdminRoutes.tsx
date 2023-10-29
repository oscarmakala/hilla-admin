
import {Navigate, Route, Routes} from "react-router-dom";

import React, {Children} from "react";
import type {CoreLayoutProps, LayoutComponent} from "../types";
import { useCreatePath } from "../routing";
import { useConfigureAdminRouterFromChildren } from "./useConfigureAdminRouterFromChildren";

interface CoreAdminRoutesProps extends CoreLayoutProps {
    layout: LayoutComponent;
}

export const CoreAdminRoutes = (props: CoreAdminRoutesProps) => {
    const createPath = useCreatePath();
    const {
        children,
        layout: Layout,
        dashboard,
        title,
    } = props;
    const {
        customRoutesWithLayout,
        customRoutesWithoutLayout,
        status,
        resources,
    } = useConfigureAdminRouterFromChildren(props.children);

    return (
        <Routes>
            {customRoutesWithoutLayout}
            <Route
                path="/*"
                element={
                    <Layout
                        dashboard={dashboard}
                        title={title}>
                        <Routes>
                            {customRoutesWithLayout}
                            {Children.map(resources, resource => (
                                <Route
                                    key={resource.props.name}
                                    path={`${resource.props.name}/*`}
                                    element={resource}
                                />
                            ))}
                            {/*fallback to first item on resource as home page*/}
                            <Route
                                path="/"
                                element={
                                    resources.length > 0 ? (
                                        <Navigate
                                            to={createPath({
                                                resource:
                                                resources[0].props.name,
                                                type: 'list',
                                            })}
                                        />
                                    ) : null
                                }
                            />
                        </Routes>
                    </Layout>
                }
            />
        </Routes>
    )


}
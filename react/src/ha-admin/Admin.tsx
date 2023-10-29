import * as React from "react";
import {AdminContext, type AdminContextProps} from "./AdminContext";
import {AdminUI, type AdminUIProps} from "../ha-components";




export const Admin = (props: AdminProps) => {
    const {
        title,
        layout,
        dashboard,
        children
    } = props;
    return (
        <AdminContext>
            <AdminUI
                layout={layout}
                dashboard={dashboard}
                title={title}
            >{children}
            </AdminUI>
        </AdminContext>

    )
}


export interface AdminProps extends AdminContextProps, AdminUIProps {
}

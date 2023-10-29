import * as React from "react";
import type {CoreAdminContextProps} from "../ha-core";
import {CoreAdminContext} from "../ha-core";


export const AdminContext = (props: AdminContextProps) => {
    const {
        children,
        ...rest
    } = props;
    return (
        <CoreAdminContext {...rest}>
            {children}
        </CoreAdminContext>
    )
}

export interface AdminContextProps extends CoreAdminContextProps {

}
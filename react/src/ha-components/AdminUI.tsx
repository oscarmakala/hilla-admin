
import {
    Layout as DefaultLayout
} from './layout';
import type {CoreAdminUIProps} from "../ha-core";
import {CoreAdminUI} from "../ha-core";

export interface AdminUIProps extends CoreAdminUIProps {
}

export const AdminUI = ({
                            layout = DefaultLayout,
                            ...props
                        }: AdminUIProps) => {

    return (
        <CoreAdminUI
            layout={layout}
            {...props}
        />
    )
}
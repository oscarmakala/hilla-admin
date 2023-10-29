import {type ReactNode} from "react";
import {ResourceMenuItems} from "./ResourceMenuItems";


export const Menu = (props: MenuProps) => {
    const {
        children = (<ResourceMenuItems/>)
    } = props
    return (
        <ul className='list-none px-0 text-secondary font-medium flex-grow'>
            {children}
        </ul>

    )
}

// NOTE: We don't extends MenuListProps here to avoid breaking changes
export interface MenuProps {
    children?: ReactNode;
    className?: string;
    dense?: boolean;
    hasDashboard?: boolean;

    [key: string]: any;
}
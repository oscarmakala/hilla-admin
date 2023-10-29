import React from 'react';
import {NavLink} from "react-router-dom";


interface MenuItemProps {
    icon?: string
    to?: string,
    primaryText: string
}


export const MenuItemLink = (props: MenuItemProps) => {
    const {
        icon,
        to,
        primaryText,
        ...rest
    } = props;
    return (
        <li key={to}>
            <NavLink to={to!} className='flex gap-s items-center'>
                <i className={`la ${icon} text-xl`}></i>
                {primaryText}
            </NavLink>
        </li>
    )
};


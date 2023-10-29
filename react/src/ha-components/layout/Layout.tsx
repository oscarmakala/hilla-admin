
import React, {type ComponentType, Suspense, useEffect, useState} from "react";
import {AppLayout} from "@hilla/react-components/AppLayout";

import {DrawerToggle} from "@hilla/react-components/DrawerToggle";
import {Menu as DefaultMenu, type MenuProps} from './Menu';
import {Checkbox} from "@hilla/react-components/Checkbox";
import type {CoreLayoutProps} from "../../ha-core";
import Loading from "./Loading";

export const Layout = (props: LayoutProps) => {
    const {
        children,
        title,
        menu: Menu = DefaultMenu,
    } = props;
    const [darkTheme, setDarkTheme] = useState(true);
    useEffect(() => toggleTheme(darkTheme), [darkTheme]);

    function toggleTheme(dark: boolean) {
        document.documentElement.setAttribute('theme', dark ? 'dark' : 'light');
    }
    return (
        <AppLayout className='h-full' primarySection='drawer'>
            <div className='flex flex-col h-full' slot='drawer'>
                <h1 className='text-2xl px-l pt-l pb-0'>{title}</h1>
                <Menu/>
                <Checkbox label='Dark theme'
                          className='justify-end p-m'
                          checked={darkTheme}
                          onCheckedChanged={e => setDarkTheme(e.detail.value)} />
            </div>

            <div slot='navbar' className='flex gap-m items-center'>
                <DrawerToggle aria-label='Menu toggle' className='text-secondary'></DrawerToggle>
                <h1 className='text-l m-0'></h1>
            </div>

            <Suspense fallback={<Loading/>}>
                {children}
            </Suspense>
        </AppLayout>
    )
}

export interface LayoutProps extends CoreLayoutProps {
    menu?: ComponentType<MenuProps>;
}
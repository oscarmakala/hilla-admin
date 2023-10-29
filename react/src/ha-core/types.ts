import * as React from "react";
import {type ComponentType, type ReactElement, type ReactNode} from "react";

export type Identifier = string | number;

export type ResourceElement = ReactElement<ResourceProps>;
export type LoadingComponent = ComponentType<{
    loadingPrimary?: string;
    loadingSecondary?: string;
}>;


export type RenderResourcesFunction = (
    permissions: any
) =>
    | ReactNode // (permissions) => <><Resource /><Resource /><Resource /></>
    | Promise<ReactNode> // (permissions) => fetch().then(() => <><Resource /><Resource /><Resource /></>)
    | ResourceElement[] // // (permissions) => [<Resource />, <Resource />, <Resource />]
    | Promise<ResourceElement[]>; // (permissions) => fetch().then(() => [<Resource />, <Resource />, <Resource />])
export type AdminChildren = RenderResourcesFunction | ReactNode;

export type TitleComponent = string | ReactElement<any>;
export type LoginComponent = ComponentType<{}> | ReactElement<any>;
export type DashboardComponent = ComponentType<{}>;


export interface CoreLayoutProps {
    children?: ReactNode;
    dashboard?: DashboardComponent;
    title?: TitleComponent;
    menu?: ComponentType<{
        hasDashboard?: boolean;
    }>;
}

export type LayoutComponent = ComponentType<CoreLayoutProps>;

export interface ResourceOptions {
    label?: string;

    [key: string]: any;
}

export interface ResourceDefinition<OptionsType extends ResourceOptions = any> {
    readonly name: string;
    readonly options?: OptionsType;
    readonly hasList?: boolean;
    readonly hasEdit?: boolean;
    readonly hasShow?: boolean;
    readonly hasCreate?: boolean;
    readonly icon?: any;
    readonly recordRepresentation?:
        | ReactElement
        | RecordToStringFunction
        | string;
}

export type RecordToStringFunction = (record: any) => string;

export interface ResourceProps {
    intent?: 'route' | 'registration';
    name: string;
    list?: ComponentType<any> | ReactElement;
    create?: ComponentType<any> | ReactElement;
    edit?: ComponentType<any> | ReactElement;
    show?: ComponentType<any> | ReactElement;
    hasCreate?: boolean;
    hasEdit?: boolean;
    hasShow?: boolean;
    icon?: string;
    recordRepresentation?: ReactElement | RecordToStringFunction | string;
    options?: ResourceOptions;
    children?: ReactNode;
}


// Define a type for the component configuration
export interface ResourceConfig {
    list: React.ComponentType<any>;
    create: React.ComponentType<any>;
    edit: React.ComponentType<any>;
}


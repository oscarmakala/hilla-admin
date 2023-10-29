import {createContext} from "react";

export const ResourceContext = createContext<ResourceContextValue>(undefined);

export type ResourceContextValue = string|undefined;

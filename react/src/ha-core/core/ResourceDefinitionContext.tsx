
import React, {createContext, useCallback, useMemo, useState} from "react";
import isEqual from 'lodash/isEqual';
import type {ResourceDefinition, ResourceOptions} from "../types";

export type ResourceDefinitions<OptionsType extends ResourceOptions = any> = {
    [name: string]: ResourceDefinition<OptionsType>;
};

export type ResourceDefinitionContextValue = {
    definitions: ResourceDefinitions;
    register: (config: ResourceDefinition) => void;
    unregister: (config: ResourceDefinition) => void;
};

export const ResourceDefinitionContext = createContext<ResourceDefinitionContextValue>({
    definitions: {},
    register: () => {
    },
    unregister: () => {
    },
});

export const ResourceDefinitionContextProvider = ({
                                                      definitions: defaultDefinitions = {},
                                                      children,
                                                  }: {
    definitions?: ResourceDefinitions;
    children: React.ReactNode;
}) => {
    const [definitions, setState] = useState<ResourceDefinitions>(
        defaultDefinitions
    );

    const register = useCallback((config: ResourceDefinition) => {
        setState(prev =>
            isEqual(prev[config.name], config)
                ? prev
                : {
                    ...prev,
                    [config.name]: config,
                }
        );
    }, []);

    const unregister = useCallback((config: ResourceDefinition) => {
        setState(prev => {
            const {[config.name]: _, ...rest} = prev;
            return rest;
        });
    }, []);

    const contextValue = useMemo(
        () => ({definitions, register, unregister}),
        [definitions] // eslint-disable-line react-hooks/exhaustive-deps
    );

    return (
        <ResourceDefinitionContext.Provider value={contextValue}>
            {children}
        </ResourceDefinitionContext.Provider>
    );
}
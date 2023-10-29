import { useResourceDefinitions } from "./useResourceDefinitions";


export const useGetResourceLabel = (): GetResourceLabel => {
    const definitions = useResourceDefinitions();

    return (resource: string, count = 2): string => {
        const resourceDefinition = definitions[resource];
        return resourceDefinition.name
    };
};

export type GetResourceLabel = (resource: string, count?: number) => string;

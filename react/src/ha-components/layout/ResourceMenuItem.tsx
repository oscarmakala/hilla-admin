import {useCreatePath, useGetResourceLabel, useResourceDefinitions} from "../../ha-core";
import {MenuItemLink} from "./MenuItemLink";

export const ResourceMenuItem = ({name}: { name: string }) => {
    const resources = useResourceDefinitions();
    const getResourceLabel = useGetResourceLabel();
    const createPath = useCreatePath();
    if (!resources || !resources[name]) return null;
    return (
        <MenuItemLink
            to={createPath({resource: name, type: 'list',})}
            primaryText={getResourceLabel(name)}
            icon={resources[name].icon}
        />
    );
};

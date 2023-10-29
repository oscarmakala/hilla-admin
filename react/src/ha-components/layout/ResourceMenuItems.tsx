
import React from "react";
import { ResourceMenuItem } from "./ResourceMenuItem";
import {useResourceDefinitions} from "../../ha-core";

export const ResourceMenuItems = () => {
    const resources = useResourceDefinitions();
    return (
        <>
            {Object.keys(resources)
                .filter(name => resources[name].hasList)
                .map(name => (
                    <ResourceMenuItem key={name} name={name} />
                ))}
        </>
    );
};

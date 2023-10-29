import * as React from "react";
import {type ComponentType, isValidElement, type ReactElement} from "react";
import {Route, Routes} from "react-router-dom";
import {ResourceContextProvider} from "./ResourceContextProvider";
import type {ResourceProps} from "../types";

export function Resource({
                             create,
                             edit,
                             list, name,
                             show,
                             children
                         }: ResourceProps) {
    return (
        <ResourceContextProvider value={name}>
            <Routes>
                {create && (
                    <Route path="create/*" element={getElement(create)}/>
                )}
                {show && <Route path=":id/show/*" element={getElement(show)}/>}
                {edit && <Route path=":id/*" element={getElement(edit)}/>}
                {list && <Route path="/*" element={getElement(list)}/>}
                {children}
            </Routes>
        </ResourceContextProvider>
    )
}

const getElement = (ElementOrComponent: ComponentType<any> | ReactElement) => {
    if (isValidElement(ElementOrComponent)) {
        return ElementOrComponent;
    }

    // if (isValidElementType(ElementOrComponent)) {
    //     return <ElementOrComponent/>;
    // }

    return null;
};

Resource.raName = 'Resource';

Resource.registerResource = ({
                                 create,
                                 edit,
                                 icon,
                                 list,
                                 name,
                                 options,
                                 show,
                                 recordRepresentation,
                                 hasCreate,
                                 hasEdit,
                                 hasShow,
                             }: ResourceProps) => ({
    name,
    options,
    hasList: !!list,
    hasCreate: !!create || !!hasCreate,
    hasEdit: !!edit || !!hasEdit,
    hasShow: !!show || !!hasShow,
    icon,
    recordRepresentation,
});

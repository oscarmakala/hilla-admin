import {Dialog} from "@hilla/react-components/Dialog";
import {Button} from "@hilla/react-components/Button";
import {Icon} from "@hilla/react-components/Icon";
import React, {type ReactNode} from "react";
import '@vaadin/icons';
interface InputDialogProperties {
    dialogOpened: boolean
    setDialogOpened: (state: boolean) => void
    children?: ReactNode;
}

export default function InputDialog({dialogOpened, setDialogOpened, children}: InputDialogProperties) {
    return (
        <Dialog
            headerTitle="New Inventory"
            opened={dialogOpened}
            onOpenedChanged={({detail}) => {
                setDialogOpened(detail.value);
            }}
            headerRenderer={() => (
                <Button theme="tertiary" onClick={() => setDialogOpened(false)}>
                    <Icon icon="vaadin:close-small"/>
                </Button>
            )}
        >
            {children}
        </Dialog>
    )
}
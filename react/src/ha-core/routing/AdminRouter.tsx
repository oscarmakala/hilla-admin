import React from "react";
import {useInRouterContext} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export const AdminRouter = (props: AdminRouterProps) => {
    const {children} = props;
    const isInRouter = useInRouterContext();
    console.log("isInRouter " + isInRouter);
    return (
        <Router>
            {children}
        </Router>
    )
}

export interface AdminRouterProps {
    children: React.ReactNode;
}
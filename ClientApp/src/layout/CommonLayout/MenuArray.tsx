import React from "react";
import Home from "@material-ui/icons/Home";
import DescriptionIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';

export default [
    {
        path: "/",
        exact: true,
        icon: <Home />,
        label: "Home",
        permissionRequired: null,
    },
    {
        path: "/form1",
        exact: true,
        icon: <DescriptionIcon />,
        label: "Simple form 1",
        permissionRequired: null,
    },
    {
        path: "/react",
        exact: true,
        icon: <CodeIcon />,
        label: "React",
        permissionRequired: null,
    },
].filter(Boolean);

import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuArray from "src/layout/CommonLayout/MenuArray";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  toolbar: theme.mixins.toolbar,
  listItemIcon: {
    minWidth: "48px",
  },
  listItemDisabled: {
    opacity: 0.5,
  },
}));

function Menu(props) {
  const classes = useStyles();

  const selectedKeys = () => {
    const url = props.url;

    const match = MenuArray.find((option) => {
      if (option.exact) {
        return url === option.path;
      }

      return url === option.path || url.startsWith(option.path + "/");
    });

    if (match) {
      return [match.path];
    }

    return [];
  };

  const CustomRouterLink = (props) => (
    <div
      style={{
        flexGrow: 1,
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        {...props}
      />
    </div>
  );

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      open={true}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar}></div>
      <List>
        {MenuArray.map((menu) => (
          <CustomRouterLink key={menu.path} to={menu.path}>
            <ListItem button>
              <ListItemIcon
                className={clsx({
                  [classes.listItemIcon]: true,
                  [classes.active]: selectedKeys().includes(menu.path),
                })}
              >
                {menu.icon}
              </ListItemIcon>
              <ListItemText
                className={clsx({
                  [classes.active]: selectedKeys().includes(menu.path),
                })}
              >
                {menu.label}
              </ListItemText>
            </ListItem>
          </CustomRouterLink>
        ))}

        
      </List>
    </Drawer>
  );
}

export default Menu;

import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as LayoutStore from "src/store/LayoutStore";
import LayoutSelectors from "src/store/selectors/LayoutSelectors";
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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7),
    },
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
  const dispatch = useDispatch();

  const menuVisible = useSelector(
    LayoutSelectors.selectMenuVisible,
  );
  useLayoutEffect(() => {
    const toggleMenuOnResize = () => {
      (window as any).innerWidth < 576
        ? dispatch(LayoutStore.LayoutActionCreators.doHideMenu())
        : dispatch(LayoutStore.LayoutActionCreators.doShowMenu());
    };

    toggleMenuOnResize();

    (window as any).addEventListener(
      'resize',
      toggleMenuOnResize,
    );

    return () => {
      (window as any).removeEventListener(
        'resize',
        toggleMenuOnResize,
      );
    };
  }, [dispatch]);
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
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: menuVisible,
        [classes.drawerClose]: !menuVisible,
      })}
      variant="permanent"
      anchor="left"
      open={true}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: menuVisible,
          [classes.drawerClose]: !menuVisible,
        })
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
                {menuVisible && menu.label}
              </ListItemText>
            </ListItem>
          </CustomRouterLink>
        ))}


      </List>
    </Drawer>
  );
}

export default Menu;

import React from "react";
import { DRAWER_ITEMS } from "./items";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  useTheme,
} from "@mui/material";
import { matchPath } from "react-router";
import { NavLink, useLocation } from "react-router-dom";

const activeStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.secondary.contrastText,

  "& svg": {
    color: theme.palette.secondary.contrastText,
  },
});

type TProps = {
  opened: boolean;
};

export default function DrawerContent({ opened }: TProps) {
  const { pathname } = useLocation();
  const theme = useTheme();

  function isActive(route: string) {
    return !!matchPath(pathname, route);
  }

  return (
    <List sx={{ paddingTop: 0 }}>
      {DRAWER_ITEMS.map((item, index) => (
        <ListItem
          key={index}
          disablePadding
          sx={{
            display: "block",
            ...(isActive(item.route) ? activeStyle(theme) : {}),
          }}
        >
          <NavLink
            to={item.route}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: opened ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: opened ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: opened ? 1 : 0 }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
}

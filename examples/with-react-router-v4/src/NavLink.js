import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';

const NavLink = ({ label, to, exact, icon, location }) => (
  <ListItem
    component={RouterLink}
    active={ location.pathname === to }
    to={to}
    primaryText={label}
    leftIcon={icon ? <FontIcon>{icon}</FontIcon> : null}
  />
);

export default NavLink;


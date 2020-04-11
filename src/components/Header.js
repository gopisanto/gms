import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './Header.style';

const Header = ({ classes }) => {
  return (
    <div className={classes.header}>
      <h1 className={classes.headerTitle}>Indian Groceries</h1>
    </div>
  );
};

export default withStyles(styles)(Header);
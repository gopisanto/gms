import React from 'react';
import { map } from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import categories from '../categories.json';

const FilterMenu = ({ itemClickHandler }) => {
  const categoriesWithAllOption = [{
    code: '',
    label: 'All'
  }].concat(categories);

  const onItemClick = code => itemClickHandler(code);
  const list = () => (
    <div>
      <List>
        {map(categoriesWithAllOption, category => (
          <ListItem button key={category.code}>
            <ListItemText primary={category.label} onClick={() => onItemClick(category.code)} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      {list()}
    </div>
  );
};

export default FilterMenu;
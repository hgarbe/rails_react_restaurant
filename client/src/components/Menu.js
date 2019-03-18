import React from 'react';
import { Checkbox, Header, Button, Icon } from 'semantic-ui-react'

const Menu = ({ id, name, complete, deleteMenu, updateMenu }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox
        defaultChecked={complete}
        onClick={ () => updateMenu(id) }
      />

      <div style={ complete ? styles.complete : {} }>
        <Header as="h2">{ name }</Header>
      </div>
    </div>
    <Button 
    icon 
    color='red'
    size='tiny'
    onClick={() => deleteMenu(id) }
    style={{marginLeft: "15px", }}
    >
      <Icon name="trash" />
    </Button>
  </div>
)

const styles = { 
  flex: {
    display: "flex",
    alignMenus: "center",
  },
  complete: {
    textDecoration: "line-through",
    color: "blue",
  }
};

export default Menu;
import React, { Component } from 'react';
import MenuList from './components/MenuList';
import MenuForm from './components/MenuForm';
import './App.css';
import { Container, } from 'semantic-ui-react';
import axios from 'axios';


class App extends Component {
  state = { menus: [], };
 
  componentDidMount () {
    axios.get("/api/menus")
    .then( res => {
      this.setState({ menus: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
  }

  addMenu = (name) => {
    axios.post("/api/menus", { name })
    .then( res => {
      const { menus, } = this.state;
      this.setState({ menus: [...menus, res.data], });
    })
  }


  updateMenu = (id) => {
    axios.put(`/api/menus/${id}`)
      .then( res => {
        const menus = this.state.menus.map( m => {
          if (m.id === id)
            return res.data;
          return m;  
        })
        this.setState({ menus, });
      })
  }


  deleteMenu = (id) => {
    axios.delete(`/api/menus${id}`)
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: menus.filter( m => m.id !== id ),
        });
      })
  }
  
  
  render() {
    return (
      <Container>
        <h1>Restuarant Menu</h1>
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        <MenuList
          menus={this.state.menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />  
      </Container>
    );
  }
}

export default App;

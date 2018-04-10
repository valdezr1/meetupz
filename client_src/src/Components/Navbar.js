import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class Navbar extends Component {

  constructor(){
    super();
    this.state = {
      drawerToggle : false
    }

    this.drawerToggleFunc = this.drawerToggleFunc.bind(this)
  }

  drawerToggleFunc(){
    this.setState({
      drawerToggle: !this.state.drawerToggle
    });
  }

  render(){
    return(
      <div>
        <AppBar
          title = {<h4 className="nav-title">Meetupz</h4>}
          onLeftIconButtonTouchTap = {this.drawerToggleFunc}
          iconElementRight={
            <IconButton tooltip={"Meetups"}>
              <Link to='/'>
                <i class="material-icons">people</i>
              </Link>
            </IconButton>
          }
        />
        <Drawer
          width = {200}
          docked = {false}
          open={this.state.drawerToggle}
          onRequestChange = {this.drawerToggleFunc}
        >
          <Link to='/' style={{ textDecoration: 'none' }}>
            <MenuItem>
              <i className="material-icons inline-icon">people</i>
              <span>&nbsp;View Meetups</span>
            </MenuItem>
          </Link>
          <Link to="/meetups/add" style={{ textDecoration: 'none' }}>
            <MenuItem>
              <i className="material-icons inline-icon">add</i>
              <span>&nbsp;Add Meetups</span>
            </MenuItem>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <MenuItem>
              <i className="material-icons inline-icon">info</i>
              <span>&nbsp;About</span>
            </MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default Navbar;

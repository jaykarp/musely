import React, { Component } from "react";
import styled from "styled-components";
import { Button, Menu, Container, Input, MenuItem } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

const largeText = {
  height: "85px",
  fontSize: "2rem"
};
const largerText = {
  fontSize: "2.5rem",
  color: "black"
};
const searchBar = {
  marginTop: "20px",
  height: "50px"
};

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  state = { activeItem: "home" };
  render() {
    const { activeItem } = this.state;
    // const { name } = this.props.match.params;
    return (
      <div style={{marginBottom: '0px'}}>
        <Menu
          inverted
          color={"teal"}
          pointing
          // size="massive"
          style={largeText}
        >
          <Menu.Item name="home" active={activeItem === "home"}>
            <Link to="/library">Musely</Link>
          </Menu.Item>
          <MenuItem style={largerText}>Ave Maria</MenuItem>
          <Menu.Menu position="right">
            <Input
              style={searchBar}
              action={{ type: "submit", content: "Go" }}
              placeholder="Search for Songs..."
            />
            <Menu.Item name="login" active={activeItem === "login"}>
              <Link to="/login">Login</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
      
    );
  }
}

export default NavBar;

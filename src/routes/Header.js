import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const menuStyle = {
      float: 'left',
      width: '19%',
      listStyle: 'none',
      margin: '1px',
    };

    return (
      <div id="demo">
        <h1>
          <Link to="/">Check your friend's MBTI</Link>
        </h1>
        <h2>Table of MBTI</h2>
        <ul
          style={{
            listStyle: 'none',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <li style={menuStyle}>
            <Link to="/main/entire/">
              <span>ENTIRE MBTI</span>
            </Link>
          </li>
          <li style={menuStyle}>
            <Link to="/main/same/">
              <span>SAME MBTI</span>
            </Link>
          </li>
          <li style={menuStyle}>
            <Link to="/main/detail/">
              <span>SAME DETAIL</span>
            </Link>
          </li>
          <li style={menuStyle}>
            <Link to="/main/match/">
              <span>MATCH MBTI</span>
            </Link>
          </li>
          <li style={menuStyle}>
            <Link to="/main/detail2/">
              <span>MATCH DETAIL</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;

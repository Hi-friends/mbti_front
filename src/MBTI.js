import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './routes/Header';
import EntireMBTI from './routes/EntireMBTI';
import SameMBTI from './routes/SameMBTI ';

class MBTI extends Component {
  render() {
    return (
      <>
        {/* <MBTI> */}
        <Header />
        <Switch>
          <Route exact path="/" component={EntireMBTI} />
          <Route exact path="/same" component={SameMBTI} />
          {/* <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} /> */}
        </Switch>
        {/* </MBTI> */}
      </>
    );
  }
}

export default MBTI;

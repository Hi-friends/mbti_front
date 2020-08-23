import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './routes/Header';
import EntireMBTI from './routes/EntireMBTI';
import MBTI from './MBTI';
import Register from './Register';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <>
        <Link to="/register">회원가입</Link>
        <br></br>
        <Link to="/mbti">mbti확인</Link>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route path="/mbti" component={MBTI} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };
  //   usernameChange = (e) => {
  //     this.setState({
  //       username: e.target.value,
  //     });
  //   };
  dataChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  submit = async () => {
    console.log(JSON.stringify(this.state));
    await axios('http://localhost:4000/auth/login', {
      method: 'post',
      data: { ...this.state },
      withCredentials: true,
      // 페이지이동
    });
    this.props.history.push('/mbti/same');
  };
  //   componentDidUpdate() {
  //     //   뭐할건지
  //   }
  render() {
    const labelStyle = {
      color: 'white',
    };
    const { username, nickname } = this.state;
    return (
      <div class="form">
        <h1>Login</h1>
        <p>
          <label style={labelStyle}>
            ID<span class="req">*</span>
          </label>
          <input type="text" name="username" placeholder="ID" value={this.state.username} onChange={this.dataChange}></input>
        </p>
        <p>
          <label style={labelStyle}>
            password<span class="req">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={this.state.password}
            onChange={this.dataChange}
          ></input>
        </p>
        <button type="submit" class="button button-block" onClick={this.submit}>
          Get Started
        </button>{' '}
      </div>
    );
  }
}

export default Login;

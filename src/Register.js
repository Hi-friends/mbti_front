import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';

class Register extends Component {
  state = {
    username: 'user122',
    password: '123',
    mbti: 'ESTP',
    region: 'qwer',
    age: 0,
    nickname: 'asdfz12',
    sex: 'F',
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
    await axios('http://localhost:4000/auth/join', {
      method: 'post',
      data: { ...this.state },
      //   withCredentials: true,
    });
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
        <h1>Register</h1>
        <p>
          <label style={labelStyle}>
            ID<span class="req">*</span>
          </label>
          <input type="text" name="username" placeholder="ID" value={this.state.username} onChange={this.dataChange}></input>
        </p>
        <p>
          <label style={labelStyle}>
            nickname<span class="req">*</span>
          </label>
          <input type="text" name="nickname" placeholder="NICKNAME" value={nickname} onChange={this.dataChange}></input>
        </p>
        <p>
          <label style={labelStyle}>
            password<span class="req">*</span>
          </label>
          <input type="password" name="password" placeholder="PASSWORD"></input>
        </p>
        <p>
          <label style={labelStyle}>
            PASSWOR<span class="req">*</span>
          </label>
          <select name="mbti">
            <option selected="selected" disabled></option>
            <option value="INFP">INFP</option>
            <option value="ENFP">ENFP</option>
            <option value="INFJ">INFJ</option>
            <option value="ENFJ">ENFJ</option>
            <option value="INTJ">INTJ</option>
            <option value="ENTJ">ENTJ</option>
            <option value="INTP">INTP</option>
            <option value="ENTP">ENTP</option>
            <option value="ISFP">ISFP</option>
            <option value="ESFP">ESFP</option>
            <option value="ISTP">ISTP</option>
            <option value="ESTP">ESTP</option>
            <option value="ISFJ">ISFJ</option>
            <option value="ESFJ">ESFJ</option>
            <option value="ISTJ">ISTJ</option>
            <option value="ESTJ">ESTJ</option>
          </select>
        </p>
        <p>
          <label style={labelStyle}>
            Region<span class="req">*</span>
          </label>
          <select name="region">
            <option selected="selected" disabled></option>
            <option value="Seoul">Seoul</option>
            <option value="Busan">Busan</option>
            <option value="Daegu">Daegu</option>
            <option value="Incheon">Incheon</option>
            <option value="Gwangju">Gwangju</option>
            <option value="Daejeon">Daejeon</option>
            <option value="Ulsan">Ulsan</option>
            <option value="Sejong">Sejong</option>
            <option value="Gyeonggi">Gyeonggi</option>
            <option value="Gangwon">Gangwon</option>
            <option value="Chungbuk">Chungbuk</option>
            <option value="Chungnam">Chungnam</option>
            <option value="Jeonbuk">Jeonbuk</option>
            <option value="Jeonnam">Jeonnam</option>
            <option value="Gyeongbuk">Gyeongbuk</option>
            <option value="Gyeongnam">Gyeongnam</option>
            <option value="Jeju">Jeju</option>
          </select>
        </p>
        <p>
          <label style={labelStyle}>
            Age<span class="req">*</span>
          </label>
          <input type="text" name="age" placeholder="Age"></input>
        </p>
        <p style={labelStyle}>
          <label style={labelStyle}>
            Sex<span class="req">*</span>
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M
          <input type="radio" name="sex" placeholder="M"></input>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F
          <input type="radio" name="sex" placeholder="F"></input>
        </p>
        <button type="submit" class="button button-block" onClick={this.submit}>
          Get Started
        </button>{' '}
      </div>
    );
  }
}

export default Register;

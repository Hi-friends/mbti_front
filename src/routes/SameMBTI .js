import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
// import Header from './routes/Header';

class SameMBTI extends Component {
  state = {
    nickName: [],
    age: [],
    mbti_title: [],
  };
  async componentDidMount() {
    // axios
    // get this.setState
    const users = await axios('http://localhost:4000/mbti/same', {
      method: 'get',
      data: { ...this.state },
      withCredentials: true,
    });
    this.setState({});
    console.log(this.state);
  }
  render() {
    return (
      <div class="table-responsive-vertical shadow-z-1">
        <table id="table" class="table table-hover table-mc-light-blue">
          <thead>
            <tr>
              <th>MBTI</th>
              <th>Ratio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-title="MBTI"> ISTP </td>
              <td data-title="Ratio"> 30 %</td>
            </tr>
            <tr>
              <td data-title="MBTI"> ESFP </td>
              <td data-title="Ratio"> 60 %</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SameMBTI;

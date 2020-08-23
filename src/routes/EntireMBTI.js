import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// import Header from './routes/Header';

class EntireMBTI extends Component {
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

export default EntireMBTI;

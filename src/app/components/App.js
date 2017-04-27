"use strict";

import React from 'react';

import styles from '../styles/App.css';

import Main from "./Main"

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Diet Types</h1>
        <Main />
      </div>
    )
  }
}

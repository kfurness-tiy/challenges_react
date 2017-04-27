"use strict"

import React from 'react';

import styles from '../styles/App.css';

import FoodItem from './FoodItem'

export default class Diet extends React.Component {
  render () {
    const heading = "Figure out a way to print out an h1 with the diet type"
    return (
      <div>
        <h3>heading</h3>
        <FoodItem />
      </div>
    )
  }
}

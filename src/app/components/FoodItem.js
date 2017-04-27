"use strict"

import React from 'react';

import styles from '../styles/App.css';

export default class FoodItem extends React.Component {
  render () {
    const yourData= "Map through the array of food items here"
    return (
      <div>
        <p> {yourData} </p>
      </div>
    )
  }
}

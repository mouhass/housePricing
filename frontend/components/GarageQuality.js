import StarRating from 'react-native-star-rating';
import React from 'react';
import { Component } from 'react';
import {View } from 'react-native';


export default class GarageQuality extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
        <View>
      <StarRating
        disabled={false}
        maxStars={6}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
     

      </View>
    );
  }
}
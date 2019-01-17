
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Swipe from './swipe';
import PhoneSwiper from './PhoneSwiper';
import MultiSwipe from './MultiSwipe';
import SwiperNumber from './SwiperNumber';
import Example from './Example';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
      <Example />
        {/* <Swipe /> */}
        {/* <PhoneSwiper /> */}
        {/* <MultiSwipe /> */}
        {/* <SwiperNumber /> */}
      </View>
    );
  }
}

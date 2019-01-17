import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image,
} from 'react-native';
 
import Swiper from 'react-native-swiper';
 
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
   // backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#92BBD9',
  },
  
})
 
export default class Swipe extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
            <Image source={require('./Images/a.jpg')} />
        </View>
        <View style={styles.slide2}>
            <Image source={require('./Images/b.jpg')} />
        </View>
        <View style={styles.slide3}>
            <Image source={require('./Images/c.jpg')} />
        </View>
      </Swiper>
    );
  }
}
 
// AppRegistry.registerComponent('swiperapp', () => Swipe);
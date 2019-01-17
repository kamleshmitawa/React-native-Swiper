import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
    container: {
      flex: 1
    },
  
    wrapper: {
    },
  
    slide: {
      flex: 2,
      //justifyContent: 'center',
      backgroundColor: 'transparent',
    // backgroundColor: 'blue',
      color:'red',
      borderWidth: 2

      
    },
  
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
  
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
  
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
  
    text: {
      color: 'red',
      fontSize: 30,
      fontWeight: 'bold',
    },
  
    image: {
      width: 300,
      height: 100,
    },
    paginationStyle: {
      position: 'absolute',
      bottom: 10,
      right: 10
    },
    paginationText: {
      color: 'red',
      fontSize: 20
    }
  }


const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}


export default class  MultiSwipe extends Component {
  constructor(props){
    super(props);
    this.state= {
      selectedIndex: ''
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={400} horizontal={false}  style={styles.wrapper}
          renderPagination={renderPagination}
          loop={true}
          index={this.state.selectedIndex}
            onIndexChanged={(index) => {
              this.setState({
                selectedIndex: index,
              });
            }}
          
          >
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
          <View style={styles.slide1}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>

        <Swiper
          style={styles.wrapper}
          renderPagination={renderPagination}
          loop={true}
          index={this.state.selectedIndex}
          onIndexChanged={(index) => {
            this.setState({
              selectedIndex: index,
            });
          }}
        >
          <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image style={styles.image} source={require('./Images/a.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image style={styles.image} source={require('./Images/b.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image style={styles.image} source={require('./Images/c.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image style={styles.image} source={require('./Images/d.jpg')} />
          </View>
        </Swiper>

      </View>
    )
  }
}

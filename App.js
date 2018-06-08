import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

/* export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Привет, мирa!</Text>
      </View>
    );
  }
} */
class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};

    this.now = moment().format('LLLL');
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      <View>
        <Text style={styles.time}>{this.state.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.content}>
          <View style={styles.topIcons}>
            <Icon name="md-sync" size={30} color="#bf1313" />
          </View>
          <Time/>
        </View>
        <View style={styles.nav}>
          <Icon name="ios-timer" size={30} color="#bf1313" />
          <Icon name="ios-alarm" size={30} color="#bf1313" />
          <Icon name="ios-settings" size={30} color="#bf1313" />
        </View>
      </View>
    );
  }
}

const redColor = '#bf1313';

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    paddingTop: 20,
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topIcons: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    paddingTop: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20
  },
  time: {
    fontSize: 60,
    fontWeight: 'bold',
    color: redColor
  },
  nav: {
    height: 60,
    borderTopWidth: 1,
    borderColor: redColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

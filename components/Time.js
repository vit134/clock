import React, { Component } from 'react';
import moment from 'moment';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import globalCss from './globalCss';

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
        <View style={globalCss.container}>
            <Text style={styles.time}>{this.state.date.toLocaleTimeString()}</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    time: {
      fontSize: 60,
      fontWeight: 'bold',
      color: '#fc363b'
    }
  });
  
  export default Time;
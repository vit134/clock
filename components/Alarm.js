import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';

import { Actions } from 'react-native-router-flux'; // New code

const data = [
  {
    time: '06:42',
    title: 'будильник1',
    enabled: true
  },
  {
    time: '07:15',
    title: 'будильник2',
    enabled: false
  },
  {
    time: '16:42',
    title: 'будильник3',
    enabled: true
  },
  {
    time: '21:15',
    title: 'будильник4',
    enabled: false
  }
]

class AlarmItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        switchEnabled: this.props.enabled,
    }
  }

  toggleSwitch(value) {
    this.setState({switchEnabled: value})
  }
  
  render() {
    return (
      <View style={styles.alarmItem}>
        <View>
          <Text style={styles.alarmItemTime}>06:42</Text>
          <Text style={styles.alarmItemTitle}>Будильник</Text>
        </View>
        <View>
          <Switch style={styles.alarmItemSwitch} onValueChange={this.toggleSwitch.bind(this)} value = {this.state.switchEnabled}/>
        </View>
      </View>
    )
  }
}

class Alarm extends Component {
  render() {
    return (
      <View style={styles.container}>
        {data.map((el, i) => {
          return <AlarmItem key={i} {...el} />
        })}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  alarmItem: {
    borderColor: '#eee',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  alarmItemTime: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#222'
  },
  alarmItemTitle: {
    color: '#222'
  },
  alarmItemSwitch: {
    marginTop: 10,
    transform: [{scaleX: 1.4}, {scaleY: 1.4}]
  }
});

export default Alarm;
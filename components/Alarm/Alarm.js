import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

import { Container, Header, Title, Content, Left, Right, Body } from 'native-base';
import s from 'globalStyles'



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
  },
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
        alarms: data
    }
  }

  toggleSwitch(value) {
    this.setState({switchEnabled: value})
  }
  
  render() {
    return (
      <View style={styles.alarmItem}>
        <View>
          <Text style={this.state.switchEnabled ? styles.alarmItemTime : styles.alarmItemTimeDisable}>{this.props.time}</Text>
          <Text style={this.state.switchEnabled ? styles.alarmItemTitle : styles.alarmItemTitleDisabled}>{this.props.title}</Text>
        </View>
        <View>
          <Switch style={styles.alarmItemSwitch} onValueChange={this.toggleSwitch.bind(this)} value = {this.state.switchEnabled}/>
        </View>
      </View>
    )
  }
}

class Alarm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarms: data
    }
  }

  componentWillMount() {
    console.log('Will mount Types')
  }

  componentWillUpdate() {
    console.log("Will Update Types")
  }

  componentWillUnmount() {
    console.log("will Unmont Types")
  }
  
  render() {
    console.log(this.props.newAlarm);
    return (
      <Container>
        <Header style={s.navBarStyle}>
            <Left>
              <Text style={s.topButtons}>Change</Text>
            </Left>
            <Body>
                <Title>Alarm</Title>
            </Body>
            <Right>
              <Text style={styles.plusButtonStyle} onPress={() => Actions.alarmAdd()}>+</Text>
            </Right>
        </Header>
        <Content style={s.container}>
          {this.state.alarms.map((el, i) => {
            return <AlarmItem key={i} {...el} />
          })}     
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  alarmItemTimeDisable: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#cacaca'
  },
  alarmItemTitle: {
    color: '#222'
  },
  alarmItemTitleDisabled: {
    color: '#cacaca'
  },
  alarmItemSwitch: {
    marginTop: 10,
    transform: [{scaleX: 1.2}, {scaleY: 1.2}]
  },
  plusButtonStyle: {
    color: '#fc363b',
    fontSize: 34
  }
});

export default Alarm;
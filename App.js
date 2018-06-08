import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Router, Scene, Stack, Actions  } from 'react-native-router-flux';


import Alarm from './components/Alarm';
import Settings from './components/Settings';
import Time from './components/Time';

const TabIcon = ({ focused, title, iconName }) => {
  const color = focused ? '#fc363b' : 'black';

  return (
    <Icon name={iconName} size={30} color={color} />
  );
}

const alarmChange = () => {
  return(
    <Text>Change</Text>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Scene key="tabbar" tabs={true} tabBarStyle={styles.tabBarStyle}>
          <Scene key="Time" iconName={"ios-timer"} icon={TabIcon} title={"Time"}>
            <Scene key="time" component={Time} />
          </Scene>
          <Scene key="alarm" initial title="Alarm" iconName={"ios-alarm"} icon={TabIcon} renderLeftButton={alarmChange}>
            <Scene key="alarm" component={Alarm} title="Alarm"/>
          </Scene>
          <Scene key="settings" title="Settings" iconName={"ios-settings"} icon={TabIcon}>
            <Scene key="settings" component={Settings} title="Settings"/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    paddingTop: 5
  }
});

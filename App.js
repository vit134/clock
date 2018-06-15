import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Router, Scene, Modal, Actions  } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import Alarm from './components/Alarm/Alarm';
import AlarmAdd from './components/Alarm/AlarmAdd';
import AlarmTitleModal from './components/Alarm/AlarmTitleModal';
import AlarmRepeatModal from './components/Alarm/AlarmRepeatModal';
import Settings from './components/Settings';
import Time from './components/Time';

const TabIcon = ({ focused, title, iconName }) => {
  const color = focused ? '#fc363b' : 'black';

  return (
    <Icon name={iconName} size={30} color={color} />
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Scene key="tabbar" tabs={true} tabBarStyle={styles.tabBarStyle} navigationBarStyle={styles.navigationBarStyle} labelStyle={styles.label}>
          <Scene key="Time" iconName={"ios-timer"} icon={TabIcon} title={"Time"}>
            <Scene key="time" component={Time} />
          </Scene>
          <Scene key="alarm" initial title="Alarm" iconName={"ios-alarm"} icon={TabIcon} >
            <Scene key="alarm" component={Alarm} title="Alarm" hideNavBar/>
            <Scene key="alarmAdd" component={AlarmAdd} title="Add alarm" hideNavBar/>
            <Scene key="alarmTitleModal" component={AlarmTitleModal} direction="vertical" title={'Title'} hideNavBar/>
            <Scene key="alarmRepeatModal" component={AlarmRepeatModal} direction="vertical" hideNavBar/>
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
  },
  navigationBarStyle: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  plusButtonStyle: {
    color: '#fc363b',
    fontWeight: 'bold',
    fontSize: 34
  },
  topButtons: {
    color: '#fc363b',
    fontSize: 16,
    marginTop: 5
  },
  label: {
    color: '#222'
  }
});

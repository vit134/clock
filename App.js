import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

/* export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Привет, мирa!</Text>
      </View>
    );
  }
} */

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.content}></View>
        <View style={styles.nav}>
          <View><Text>1</Text></View>
          <View><Text>2</Text></View>
          <View><Text>3</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    paddingTop: 20,
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    
  },
  nav: {
    height: 60,
    borderTopWidth: 1,
    borderColor: 'red',
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'red',
  }
});

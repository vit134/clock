import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';

import { CheckBox } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';

const repeatOption = [
    {
      key: 'Every Monday',
      value: 'Mo',
    },
    {
      key: 'Every Tuesday',
      value: 'Tu',
    },
    {
      key: 'Every Wednesday',
      value: 'We',
    },
    {
      key: 'Every Thursday',
      value: 'Th',
    },
    {
      key: 'Every Friday',
      value: 'Fr',
    },
    {
      key: 'Every Saturday',
      value: 'Sa',
    },
    {
      key: 'Every Sunday',
      value: 'Su',
    }
];

class AlarmRepeatModal extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: props.checked || ['Never'] };
        this.submitState = this.submitState.bind(this);
        this._press = this._press.bind(this);
    }

    submitState(value) {
        this.props.updateRepeat(value);
        Actions.pop();
    }

    _press(value) {
        let index = this.state.checked.indexOf(value);
        
        let currentState = this.state.checked;

        if (index === -1) {
            currentState.push(value);
        } else {
            currentState.splice(index, 1);
        }

        this.setState({
            checked: currentState
        });
    }

    render() {
        return(
            <View style={styles.container}>
                {
                  repeatOption.map((item, i) => {
                      return (
                        <TouchableHighlight onPress={() => this._press(item.value)} key={i} underlayColor='rgba(255,255,255, 0.3)'>
                            <View style={styles.listItem}>
                                <Text>{item.key}</Text>                    
                                <CheckBox
                                    title=''
                                    iconRight
                                    checkedColor='#fc363b'
                                    iconType='ionicon'
                                    checkedIcon='md-checkmark'
                                    uncheckedIcon={''}
                                    checked={this.state.checked.indexOf(item.value) !== -1}
                                    containerStyle={styles.checkBox}
                                />
                            </View>
                        </TouchableHighlight>
                      )
                  })  
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    checkBox: {
        backgroundColor: '#fff',
        borderWidth: 0,
        paddingHorizontal: 0,
        paddingVertical: 0
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
})
  
export default AlarmRepeatModal;
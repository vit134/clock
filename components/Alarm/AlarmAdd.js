import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    DatePickerIOS,
    Switch,
    TextInput,
    Picker
} from 'react-native';

import { Scene, Actions } from 'react-native-router-flux';

class SwitchComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchEnabled: this.props.enabled,
        }
    }
    
    toggleSwitch(value) {
        this.setState({switchEnabled: value})
    }

    render(){
        return (
            <Switch onValueChange={this.toggleSwitch.bind(this)} value = {this.state.switchEnabled}/>
        )
    }
}

class AlarmAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
            title: 'Alarm',
            showOptions: false,
            repeat: 'Never'
        };

        this.setDate = this.setDate.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateRepeat = this.updateRepeat.bind(this);
    }

    updateTitle(value) {
        this.setState({
            title: value 
        })
     }

    updateRepeat(value) {
        this.setState({
            repeat: value 
        })
    }

    setDate(newDate) {
      this.setState({chosenDate: newDate})
    }

    onValueChange (value) {
        this.setState({
            selected : value
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                    mode={'time'}
                    style={styles.datePicker}
                />
                <View style={styles.row}>
                    <View><Text style={styles.rowText}>Title</Text></View>
                    <View>
                        <Text onPress={() => Actions.alarmTitleModal({updateTitle: this.updateTitle, title: this.state.title})}>{this.state.title}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View><Text style={styles.rowText}>Repeat song</Text></View>
                    <View>
                        <SwitchComp/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View><Text style={styles.rowText}>Repeat</Text></View>
                    <View>
                        <View>
                            <Text onPress={() => Actions.alarmRepeatModal({updateRepeat: this.updateRepeat, title: this.state.repeat})}>{this.state.repeat}</Text>
                        </View>
                    </View>
                </View>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    datePicker: {
        paddingBottom: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 50,
        width: '100%',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    rowText: {
        color: '#222',
        fontSize: 14
    }
})
  
export default AlarmAdd;
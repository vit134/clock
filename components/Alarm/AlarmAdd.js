import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    DatePickerIOS,
    TextInput,
    Picker,
    TouchableOpacity,
    
} from 'react-native';

import { Container, Header, Title, Content, Left, Right, Body, Icon, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import s from 'globalStyles'

import Switch from '../Switch';

class AlarmAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
            title: 'Alarm',
            repeatSong: false,
            repeat: 'Never'
        };

        this.setDate = this.setDate.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateRepeat = this.updateRepeat.bind(this);
        this.updateRepeatSong = this.updateRepeatSong.bind(this);
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

    updateRepeatSong(value) {
        this.setState({
            repeatSong: value
        })
    }

    setDate(newDate) {
      this.setState({chosenDate: newDate})
    }

    render() {
        return (
            <Container>
                <Header style={s.navBarStyle}>
                    <Left>
                        <Text style={s.topButtons} onPress={() => Actions.pop()}>Cancel</Text>
                    </Left>
                    <Body>
                        <Title>Add Alarm</Title>
                    </Body>
                    <Right>
                        <Text style={s.topButtons} onPress={() => Actions.popTo('alarm', {somedata: 'result' })}>Save</Text>
                    </Right>
                </Header>
                <Content style={s.container}>
                    <DatePickerIOS
                        date={this.state.chosenDate}
                        onDateChange={this.setDate}
                        mode={'time'}
                        style={styles.datePicker}
                    />
                    <TouchableOpacity style={styles.row} onPress={() => Actions.alarmTitleModal({updateTitle: this.updateTitle, title: this.state.title})}>
                        <View><Text style={styles.rowText}>Title</Text></View>
                        <View style={styles.rowRightText}>
                            <Text>{this.state.title}</Text>
                            <Icon name={'ios-arrow-forward'} style={styles.arrowIcon}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <View><Text style={styles.rowText}>Repeat song</Text></View>
                        <View>
                            <Switch cb={this.updateRepeatSong} enabled={this.state.repeatSong}/>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.row} onPress={() => Actions.alarmRepeatModal({updateRepeat: this.updateRepeat, title: this.state.repeat})}>
                        <View><Text style={styles.rowText}>Repeat</Text></View>
                        <View>
                            <View style={styles.rowRightText}>
                                <Text>{this.state.repeat}</Text>
                                <Icon name={'ios-arrow-forward'} style={styles.arrowIcon}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
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
    },
    rowRightText: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    arrowIcon: {
        fontSize: 20,
        color: '#848484',
        marginLeft: 10,
        marginTop: 3
    }
})
  
export default AlarmAdd;
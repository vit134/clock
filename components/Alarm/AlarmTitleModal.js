import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import { Actions } from 'react-native-router-flux';;

class AlarmTitleModal extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Alarm' };
        console.log(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
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
    input: {
        height: 40,
        borderColor: '#eee',
        backgroundColor: '#eee',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingHorizontal: 20
    }
})
  
export default AlarmTitleModal;
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import { Container, Header, Title, Content, Left, Right, Body, Icon, List, ListItem } from 'native-base';
import s from 'globalStyles'

import { Actions } from 'react-native-router-flux';

class AlarmTitleModal extends Component {
    constructor(props) {
        super(props);
        this.state = { text: props.title || 'Alarm' };
        this.submitState = this.submitState.bind(this);
    }

    submitState() {
        this.props.updateTitle(this.state.text);
        Actions.pop();
    }

    render() {
        return(
            <Container>
                <Header style={s.navBarStyle}>
                    <Left>
                        <Text style={s.topButtons} onPress={() => Actions.pop()}>Cancel</Text>
                    </Left>
                    <Body>
                        <Title>Alarm repeat</Title>
                    </Body>
                    <Right>
                        <Text style={s.topButtons} onPress={() => Actions.pop()}>Save</Text>
                    </Right>
                </Header>
                <View style={[s.container, styles.container]}>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            returnKeyType='done'
                            onSubmitEditing={this.submitState}
                        />
                    </View>
                </View>
            </Container>
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
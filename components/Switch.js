import React, { Component } from 'react';
import { Switch } from 'react-native';

class SwitchComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchEnabled: this.props.enabled,
        }
    }
    
    toggleSwitch(value) {
        //console.log(value);
        this.setState({switchEnabled: value});
        
        //console.log(value);
        if (this.props.cb) this.props.cb(this.state.switchEnabled);
    }

    render(){
        return (
            <Switch onValueChange={this.toggleSwitch.bind(this)} value = {this.state.switchEnabled}/>
        )
    }
}
  
export default SwitchComp;
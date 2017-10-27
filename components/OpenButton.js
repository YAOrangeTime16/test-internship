import React, { Component } from 'react';
import { 
    StyleSheet,
    TouchableOpacity,
    Text } from 'react-native';

export default class OpenButton extends Component {
    render(){
        const buttonText = this.props.gameIsOpen ? "Close Games" : "Open";
        return(
            <TouchableOpacity
                onPress={this.props.onClick}
                style={st.touch}>
                <Text style={st.text}>{ buttonText }</Text>
            </TouchableOpacity>
        );
    }
}

const st = StyleSheet.create({
    touch:{
        //backgroundColor: '#4d1ec6',
        width: '80%',
        margin: 10,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
})
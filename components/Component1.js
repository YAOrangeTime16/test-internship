import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Text } from 'react-native';

export default class ComponentOne extends Component {
    render(){
        const buttonText = this.props.gameIsOpen ? "Close Games" : "Open Games";
        return(
            <TouchableHighlight
            style={styles.touch}
            onPress={this.props.onClick}
            underlayColor="#1d7eed"
            activeOpacity={1}>
                <Text style={styles.text}>{ buttonText }</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    touch: {
        backgroundColor: "#4d1ec6",
        margin: 10,
        padding: 10,
        width: '80%'
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
})
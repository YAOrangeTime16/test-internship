import React, { Component } from 'react';
import { Button, Image, Text, View } from 'react-native';

class Canvas extends Component {
    render(){
        return(
            <View>
                <Image 
                source={require('./images/gonzo-phone-dark.png')}
                style={{width: 100, height: 100}}/>
            </View>
        );
    }
}

export default Canvas;

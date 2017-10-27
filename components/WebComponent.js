import React, { Component } from 'react';
import { WebView } from 'react-native';

class WebComponent extends Component {
    render(){
        const uriList = [
            'http://www.apple.com',
            'https://www.google.com'
        ];
        const uri = (this.props.page ==='dev') ? uriList[0] : uriList[1];
        return(
            <WebView
                source={{uri}} 
                style={{width: 370}}/>
        );
    }
}

export default WebComponent;
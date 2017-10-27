import React from 'react';
import { StyleSheet, TabBarIOS, Text } from 'react-native';

export default function CustomTabBar (props){
    return(
        <TabBarIOS style={styles.tabbarContainer} barStyle='default'>
            <TabBarIOS.Item systemIcon='contacts' onPress={props.onChangeToDev} />
            <TabBarIOS.Item systemIcon='history' onPress={props.onChange}/>
        </TabBarIOS>
    );
}

const styles = StyleSheet.create({
    tabbarContainer: {
        width: '100%'
    }
})
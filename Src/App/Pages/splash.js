import React, { Component } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import {  View } from 'react-native'


export default class Splash extends Component {
    componentDidMount(){
        this.authCheck();
    }
    authCheck = () =>{
        setTimeout(() =>{
            this.props.navigation.navigate('Auth');
        },2000)
    }
    render() {
        return (
            <View>
              <ActivityIndicator animating={true} color={Colors.red800} />
            </View>
        )
    }
}

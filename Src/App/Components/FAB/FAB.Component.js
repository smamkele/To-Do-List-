import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import styles from './FAB.Style'


export default class MyButton extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props);
        return (
            <FAB
                style={styles.fab}
                small
                icon="add"
                onPress={() => this.props.navigation.navigate('NewCard',{tasks:this.props.tasks})}
            />
        )
    }
}

    


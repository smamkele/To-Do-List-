import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import styles from './FAB.Style'

export default class MyButton extends Component {
    render() {
        return (
            <FAB
                style={styles.fab}
                small
                icon="add"
                onPress={() => this.props.navigation.navigate('NewCard')}
            />
        )
    }
}

    


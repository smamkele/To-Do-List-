import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

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
const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})


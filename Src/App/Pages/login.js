import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image, Email, Password } from 'react-native'
import styles from '../../../styles';

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    login = (email, password) => {
        alert('email:' + email + 'password:' + password)
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor='#9a73ef'
                    autoCapitalize='none'
                    type={Email}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor='#9a73ef'
                    autoCapitalize='none'
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password} />

                <TouchableOpacity style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('Main')}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

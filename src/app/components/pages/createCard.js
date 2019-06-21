import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
//type Props = {};
export default class NewCard extends Component {
    state = {
        id: '',
        title: '',
        name: '',
        contactNumber: '',
        uri: ''
    }
    createCard = () => {
        alert("New card created" + 'By' + this.state.name + 'contact:' + this.state.contactNumber);
    }
        ;

    render() {
        return (
            <View>
                <TextInput label='ID:' style={styles.welcome} onChangeText={(id) => this.setState({ id })}
                    value={this.state.id} >
                </TextInput>
                <TextInput label='Title:' style={styles.welcome} onChangeText={(title) => this.setState({ title })}
                    value={this.state.title} >
                </TextInput>
                <TextInput label='Name:' style={styles.welcome} onChangeText={(name) => this.setState({ name })}
                    value={this.state.name} >
                </TextInput>
                <TextInput label='Contact:' style={styles.welcome} onChangeText={(contactNumber) => this.setState({ contactNumber })}
                    value={this.state.contactNumber} >
                </TextInput>
                <TextInput label='Image' style={styles.welcome} onChangeText={(uri) => this.setState({ uri })}
                    value={this.state.uri} >
                </TextInput>
                <Button title='createCard' onPress={() => this.createCard()}></Button>
            </View>
        );


    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});



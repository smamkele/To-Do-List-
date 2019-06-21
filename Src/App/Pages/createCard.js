import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../../../styles';
import DateTimePicker from '../Components/DatePicker/datePicker'
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
                <DateTimePicker></DateTimePicker>
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



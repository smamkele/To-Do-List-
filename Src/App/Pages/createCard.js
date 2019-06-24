import React, { Component } from 'react';
import { View, Button,StyleSheet ,ScrollView } from 'react-native';
import { TextInput, Card } from 'react-native-paper';
import styles from '../../../styles';
import DateTimePicker from '../Components/DatePicker/datePicker'
import MyImage from '../Components/Image/ImagePicker.Component';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/blue';


//type Props = {};
export default class NewCard extends Component {
    constructor(props){
        super(props)
    }
    state = {
        date:'',
        id: '',
        title: '',
        name: '',
        contactNumber: '',
        uri: ''
    }
    createCard = () => {
     let items  = this.props.navigation.getParam('tasks');   
       console.log(items);       
       items.push({
            date:this.state.date,
            id: this.state.id,
            title: this.state.title,
            name: this.state.name,
            contactNumber: this.state.contactNumber,
            uri: this.state.uri
        })
     this.setState({card:items});
     this.props.navigation.navigate('Home',{tasks: items})
       
    }        

    render() {     
        return (
            <ScrollView>
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
                <MyImage></MyImage> 
                <AwesomeButton  style={style.button} onPress={() => this.createCard()} type="primary">Create Card</AwesomeButton>
            </View>
            </ScrollView>
        );


    }

}
const style = StyleSheet.create({
     button:{
         paddingTop:30,
         paddingBottom:20,
         marginLeft:290,
         marginTop:200

     }
        
    })




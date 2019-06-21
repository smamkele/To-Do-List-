import React, {Component} from 'react';
import {StyleSheet, Text, View,Button } from 'react-native';
import { Card} from 'react-native-paper';
import styles from '../Components/Cards/Card.Style'

export default class Details extends Component {
  render() {  
    const item  = this.props.navigation.getParam('item');    
    return (
      <View >
         <Card.Cover source={{ uri: item.uri }} />
         <Text style={styles.welcome}>ID:{item.id}</Text>
         <Text style={styles.welcome}>Title:{item.title}</Text>
        <Text style={styles.welcome}>Name:{item.name}</Text>
        <Text style={styles.text}>Contact:{item.contactNumber}</Text>        
        <Button style={styles.button} title='Go back home' onPress={() => this.props.navigation.navigate('Home')}></Button>      
      </View>
    );
  } 
}



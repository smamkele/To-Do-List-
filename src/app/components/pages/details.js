import React, {Component} from 'react';
import {StyleSheet, Text, View,Button } from 'react-native';
import { Card} from 'react-native-paper';

export default class Details extends Component {
  render() {  
    const item  = this.props.navigation.getParam('item');    
    return (
      <View >
         <Card.Cover source={{ uri: item.uri }} />
         <Text style={styles.welcome}>ID:{item.id}</Text>
         <Text style={styles.welcome}>Title:{item.title}</Text>
        <Text style={styles.welcome}>Name:{item.name}</Text>
        <Text style={styles.welcome}>Contact:{item.contactNumber}</Text>        
        <Button title='Go back home' onPress={() => this.props.navigation.navigate('Home')}></Button>      
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

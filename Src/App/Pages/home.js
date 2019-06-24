import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Cards from '../Components/Cards/Card.Component';
import MyButton from '../Components/FAB/FAB.Component';


//type Props = {};
export default class Home extends Component {  
constructor(props){
  super(props)
  let card = [{
    date:"2019-06-21",
    id: 1,
    title: "Dog",
    name: "'Sima",
   contactNumber: "08475543",
   uri: "https://picsum.photos/id/237/200/300"
  }]
  if(typeof this.props.navigation.getParam('tasks') !== 'undefined'){
    console.log(this.props.navigation.getParam('tasks'));
     card = this.props.navigation.getParam('tasks');  
  } 
    this.state = {card:card}

  }
  render() {   
    console.log(this.state);
    return (
      <View>
        <ScrollView>
          <Cards tasks={this.state.card} navigation={this.props.navigation} />         
        </ScrollView>
        <MyButton tasks={this.state.card} navigation={this.props.navigation} />
      </View>       
    );

  }


}


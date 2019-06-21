import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Cards from './card';
import MyButton from './floatButton';
//type Props = {};
export default class Home extends Component {

  render() {   
    let card = [
      {
        id: 1,
        title: 'Tower',
        name: 'Lona',
        contactNumber: '0847412543',
        uri: 'https://picsum.photos/id/870/200/300?grayscale&blur=2'
      },
      {
        id: 2,
        title: 'PC',
        name: 'Zanne',
        contactNumber: '08475543',
        uri: 'https://picsum.photos/id/2/700'
      },
      {
        id: 3,
        title: 'Dog',
        name: 'Sima',
        contactNumber: '08475543',
        uri: 'https://picsum.photos/id/237/200/300'
      },

    ]

    return (
      <View>
        <ScrollView>
          <Cards tasks={card} navigation={this.props.navigation} />         
        </ScrollView>
        <MyButton navigation={this.props.navigation} />
      </View>       
    );

  }


}


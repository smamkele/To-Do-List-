import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';
import { Button, Card} from 'react-native-paper';

//type Props = {};
export default class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {     
    const showDetails = this.props.tasks.map((item) => {
      return (       
        <Card key={item.id}>
          <Card.Title title={item.title} />
          <Card.Content>
          </Card.Content>
          <Card.Cover source={{ uri: item.uri }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button onPress={() => this.props.navigation.navigate('Details',{ item })}>Get Details</Button>
          </Card.Actions>
        </Card>   
      )
    })
    return(
      <View>{showDetails}</View>
    )
  }

}



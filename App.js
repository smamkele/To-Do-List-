import React, {Component} from 'react';
import Home from './src/app/components/pages/home';
import Details from './src/app/components/pages/details';
import NewCard from './src/app/components/pages/createCard';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
  
}
const AppNavigator = createStackNavigator({  
  Home: {
    screen: Home
  },
  Details:{
    screen: Details
  },
  NewCard:{
    screen: NewCard
  }
}, 
 {  
    initialRouteName: "Home"
 
});
const AppContainer = createAppContainer(AppNavigator);



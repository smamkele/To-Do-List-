import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import React, { Component } from 'react';
import Home from '../Pages/home';
import Details from '../Pages/details';
import NewCard from '../Pages/createCard';
const myData = require('../../Assets/data.json');


const AuthNavigator = createStackNavigator({
    Login: {
        getScreen: () => require('../Pages/login').default
    }
},
    {
        navigationOptions: {
            header: null
        }
    });
const MainNavigator = createStackNavigator({
    Home: {
        screen: Home,
     
    },
    Details: {
        screen: Details
    },
    NewCard: {
        screen: NewCard,
     
    }
},
    {
        navigationOptions: {
            header: null
        }
    });

const AppNavigator = createSwitchNavigator({
    Splash: {
        getScreen: () => require('../Pages/splash').default
    },
    Auth: AuthNavigator,
    Main: MainNavigator,
},

    {
        initialRouteName: 'Splash'

    });

export default class navigation extends Component {
    state = {
        myData:myData
    }
    render() {
        return (<AppContainer />)
    }
}

const AppContainer = createAppContainer(AppNavigator);
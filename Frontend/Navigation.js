import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MyRootComponent from './src/index';
import AddChild from './src/AddChild';
import SignInOutModal from './src/SignInOutModal';

const MainStack = createStackNavigator(
  {
    Home: { screen: MyRootComponent, navigationOptions: { header: null } }
  },
  {
    initialRouteName: 'Home'
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: { header: null }
    },
    AddChild: {
      screen: AddChild,
      navigationOptions: { header: null },
      mode: 'modal'
    },
    SignInOutModal: {
      screen: SignInOutModal,
      navigationOptions: { header: null },
      mode: 'modal'
    }
  },
  {
    mode: 'modal',
    cardStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      opacity: 1
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 1
      }
    })
  }
);

export default createAppContainer(RootStack);

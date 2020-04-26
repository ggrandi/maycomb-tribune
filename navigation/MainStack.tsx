import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/StoryScreen';
import { Header, HeaderBack } from '../components/TopBar';
import TestScreen from "../screens/TestScreen";


const HomeStack = createStackNavigator();

const MainStack = () => (
  <HomeStack.Navigator >
    <HomeStack.Screen
      component={HomeScreen}
      name="HomeScreen"
      options={{
        headerStyle: {
          backgroundColor: "#021521",
        },
        headerTitle: (props) => <Header light={true} {...props} />
      }}
    />
    <HomeStack.Screen
      component={StoryScreen}
      name="StoryScreen"
      options={{
        headerStyle: {
          backgroundColor: "#FFF",
        },
        headerTitle: (props) => <Header light={false} {...props} />,
        headerLeft: (props) => <HeaderBack {...props} />,
      }}
    />
  </HomeStack.Navigator>
);

export default MainStack;
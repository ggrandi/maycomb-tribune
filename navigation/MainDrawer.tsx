import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainStack from '../navigation/MainStack';
import DrawerContent from '../navigation/DrawerContent';
import TestScreen from "../screens/TestScreen";

const DrawerStack = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <DrawerStack.Navigator drawerContent={DrawerContent}>
      <DrawerStack.Screen
        component={MainStack}
        name="MainStack"
      />
    </DrawerStack.Navigator>
  );
}

export default MainDrawer;
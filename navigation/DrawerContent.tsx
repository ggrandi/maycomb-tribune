import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem 
        label="Breaking News"
        onPress={() => props.navigation.navigate('MainStack')}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { StackHeaderLeftButtonProps, StackHeaderTitleProps } from "@react-navigation/stack";
import { AntDesign } from '@expo/vector-icons';

import Images from '../assets';
import { TouchableOpacity } from "react-native-gesture-handler";

const height = Dimensions.get('window').width / 6;

interface IHeader extends StackHeaderTitleProps {
  light: boolean
}

const Header: React.FC<IHeader> = ({ light }) => {
  return (
    <Image source={Images.get(light ? 'logo_white' : 'logo')} style={styles.logo} />
  );
};

const HeaderBack: React.FC<StackHeaderLeftButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.back} onPress={onPress}>
      <AntDesign name="left" color="black" size={height * 0.45} />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  logo: {
    height,
    width: height * 4,
    marginBottom: height / 10,
  },
  back: {
    marginLeft: 3
  }
});

export {
  Header,
  HeaderBack,
};
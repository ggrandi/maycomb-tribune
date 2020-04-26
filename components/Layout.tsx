import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

const Layout: React.FC<{ style?: StyleProp<ViewStyle> }> = ({ children, style={} }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: "#021521",
    borderWidth: 7,
    borderBottomWidth: 4,
    borderTopWidth: 0,
    flex: 1,
  }
})

export default Layout;
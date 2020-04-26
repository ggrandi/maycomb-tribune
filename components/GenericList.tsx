import React, { useState } from 'react';
import { View, FlatList, ImageBackground, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export interface GenericListItem {
  id: string;
  name: string;
};

interface IGenericListProps { 
  data: GenericListItem[];
  ItemGenerator: React.FC<{item: GenericListItem}>;
};

const GenericList: React.FC<IGenericListProps> = ({ data, ItemGenerator }) => {

  return (
    <FlatList
      data={data}
      renderItem={(props) => <ItemGenerator {...props} />}
      keyExtractor={({ name }) => name}
      ItemSeparatorComponent={() => <Divider style={{ borderWidth: 1, borderColor: "lightgrey" }} />}
    />
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },

})

export default GenericList;
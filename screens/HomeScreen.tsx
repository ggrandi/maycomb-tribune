import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';

import GenericList, { GenericListItem } from "../components/GenericList";
import Layout from "../components/Layout";
import { storyUrl } from "../env";
//import Data from "../resources/stories.json";

const { width, height } = Dimensions.get('window');


const HomeScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<StoryItem[]>([]);

  useEffect(() => {
    fetch(storyUrl)
      .then((response) => response.json())
      .then((json) => { setData(json) })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Layout>
        {loading && <ActivityIndicator />}
        <GenericList
          data={data}
          ItemGenerator={({ item }: { item: StoryItem }) => <HomeItem navigation={navigation} item={item} />}
        />
      </Layout >
    </>
  );
}

const HomeItem: React.FC<{ item: StoryItem, navigation: any }> = ({ item, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("StoryScreen", { item: item })}>
      <View style={styles.homeItemView}>
        <Text style={[styles.text, styles.storyTitle]}>{item.name}</Text>
        <View style={styles.summaryContainer}>
          <Text style={styles.storySummary}>{item.summary}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export interface StoryItem extends GenericListItem {
  summary: string;
  article: string;
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeItemView: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width,
  },
  image: {
    width: width - 40,
    resizeMode: "cover",
  },
  text: {
    margin: 10,
  },
  storyTitle: {
    fontSize: height / 27,
  },
  storySummary: {
    fontSize: height / 57,
  },
  summaryContainer: {
    width: width * 0.7,
    alignItems: 'flex-start',
  },
})

export default HomeScreen;
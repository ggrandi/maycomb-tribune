import React from "react";
import { StyleSheet, View, Dimensions, ImageBackground, StatusBar } from "react-native";
import { Text } from "react-native-paper";

import { StoryItem } from "../screens/HomeScreen";
import Images from "../assets";
import { ScrollView } from "react-native-gesture-handler";
import AppArticleRenderer from "../components/AppArticleRenderer";

const { height, width } = Dimensions.get('window');

const StoryScreen = ({ navigation, route }) => {
  let { item }: { item: StoryItem } = route.params;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <ScrollView style={styles.articleContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.summary}>{item.summary}</Text>
          <AppArticleRenderer story={item.article} name={item.id} />
          <View style={{ height: 40 }}></View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  image: {
    opacity: 1,
  },
  imageContainer: {
    width: width - 40,
    height: (width - 40) * 0.6,
    resizeMode: "cover",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: width * 0.1,
    color: "#021521",
    fontWeight: "bold",
  },
  summary: {
    fontStyle: "italic",
    color: "darkgrey",
    marginBottom: 10,
  },
  articleContainer: {
    padding: 20,
    paddingBottom: 40,
    width: "100%",
    height: "100%",
  },
  article: {
    marginTop: 20,
  },
})

export default StoryScreen;
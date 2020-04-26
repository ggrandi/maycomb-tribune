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
          <ImageBackground source={Images.get('finch')} style={styles.imageContainer} imageStyle={styles.image}>
            <View style={styles.titleBack}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          </ImageBackground>
          <AppArticleRenderer story={item.article} name={item.id} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 20,
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
    fontSize: width * 0.08,
    color: "white",
    fontWeight: "bold",
  },
  titleBack: {
    backgroundColor: "#00000014",
  },
  summary: {
    fontStyle: "italic",
  },
  articleContainer: {
    marginTop: 20,
  },
  article: {
    marginTop: 20,
  },
})

export default StoryScreen;
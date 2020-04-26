import React, { useEffect } from "react";
import ArticleRender from "./ArticleRenderer";
import { Text } from "react-native-paper";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { serverUrl } from "../env";

const ImageRenderer: React.FC<{ url: string, caption: string }> = ({ url, caption }) => (
  <View style={styles.imageContainer}>
    <Image style={styles.image} source={{ uri: serverUrl + url, width: 640, height: 400 }} />
    <Text style={styles.caption}>{caption}</Text>
  </View>
);


const TextRenderer: React.FC<{ text: string }> = ({ text }) => (
  <Text>{text}</Text>
);

const AppArticleRenderer: React.FC<{ story: string, name?: string }> = ({ story, name = "" }) => (
  <ArticleRender body={story} name={name} ImageRenderer={ImageRenderer} TextRenderer={TextRenderer} />
);

export default AppArticleRenderer;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("screen").width * 0.8,
    height: Dimensions.get("screen").width * 0.5,
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  caption: {
    color: "#838383",
    fontSize: 10,
  },
});
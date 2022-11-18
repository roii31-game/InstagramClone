import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Basic reusable components

const Avatar = (props) => {
  <Image style={styles.avatar} source={{ uri: props.uri }} />;
};

const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>;

const Title = (props) => <Text style={styles.title}>{props.children}</Text>;

// App-specific components

const WoofCard = (props) => (
  <View style={woofCardStyles.card}>
    <Avatar url={props.avatar} />
    <View style={woofCardStyles.title}>
      <Title>{props.name}</Title>
    </View>
  </View>
);

const woofCardStyles = StyleSheet.create({
  card: {
    width: 88,
    height: 112,
    padding: 12,
    marginRight: 16,
    borderWidth: 1,
    borderColor: "#E7E3EB",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },
  title: {
    textAlign: "center",
    paddingTop: 8,
  },
});

const WoofPost = (props) => (
  <View style={woofPostStyles.layout}>
    <Image source={{ uri: props.image }} style={woofPostStyles.image} />
    <View style={woofPostStyles.content}>
      <Title>{props.title}</Title>
      <Text style={woofPostStyles.description} numberOfLines={2}>
        {props.description}
      </Text>
    </View>
  </View>
);

const woofPostStyles = StyleSheet.create({
  layout: {
    marginHorizontal: 24,
    flexDirection: "row",
    marginVertical: 8,
  },
  image: {
    borderRadius: 12,
    flex: 1,
  },
  content: {
    flex: 2,
    padding: 12,
  },
  description: {
    fontSize: 12,
    marginTop: 4,
    color: "#280D5F",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 64,
    width: 64,
    borderRadius: "50%",
  },
  heading: {
    fontWeight: "600",
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 24,
    color: "#08060B",
  },
  title: {
    color: "#280D5F",
    fontSize: 12,
    fontWeight: "600",
    textTransform: "Uppercase",
  },
});

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { width, height } from "../constants/Layout";

export class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Component </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  gradient: {
    flex: 1,
    width: width,
    height: height
  }
});

export default HomeScreen;

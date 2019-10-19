import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
    //header: null
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
  }
});

export default HomeScreen;

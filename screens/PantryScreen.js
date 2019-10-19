import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class PantryScreen extends Component {
  static navigationOptions = {
    title: "Pantries"
    //header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Pantry Component </Text>
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

export default PantryScreen;

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile"
    //header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Component </Text>
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

export default ProfileScreen;

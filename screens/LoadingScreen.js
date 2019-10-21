import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Auth } from "aws-amplify";

import { MaterialIndicator } from "react-native-indicators";

class LoadingScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.checkIntro();
  }

  checkIntro = async () => {
    const value = await AsyncStorage.getItem("@SKIP_WELCOME");
    if (value === "true") {
      this.checkUser();
    } else {
      ``;
      this.props.navigation.navigate("Welcome");
    }
  };

  checkUser = async () => {
    await Auth.currentAuthenticatedUser()
      .then(user => {
        this.props.navigation.navigate(user ? "Welcome" : "Auth");
        console.log("Cognito: ", user);
      })
      .catch(error => {
        this.props.navigation.navigate("Auth");
        console.log(error.message);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <MaterialIndicator color='black' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#Ff9292"
  }
});

export default LoadingScreen;

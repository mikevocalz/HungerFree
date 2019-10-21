import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage, Image } from "react-native";
import { SplashScreen } from "expo";

import { Button } from "react-native-elements";

export default class LandingScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    SplashScreen.hide();
    AsyncStorage.setItem("@SKIP_WELCOME", "true");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={require("../assets/images/icon.png")}
            resizeMode='contain'
          />
          <Text style={styles.title}>
            {"Homeless, Hungry & Hopeful".toUpperCase()}
          </Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.description}>React Native</Text>
          <Text style={styles.description}>Apollo GraphQL</Text>
          <Text style={styles.description}>AWS AppSync & AWS Amplify</Text>
        </View>
        <View style={styles.bottom}>
          <Button
            title='SIGN IN'
            onPress={() => this.props.navigation.navigate("SignIn")}
            titleStyle={{ fontWeight: "bold" }}
            buttonStyle={{
              backgroundColor: "#Ff9292",
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
              width: 130
            }}
          />
          <Button
            title='SIGN UP'
            onPress={() => this.props.navigation.navigate("SignUp")}
            titleStyle={{ fontWeight: "bold" }}
            buttonStyle={{
              backgroundColor: "#FFC50D",
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
              width: 130
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  logo: {
    width: 150,
    height: 150
  },
  top: {
    alignItems: "center"
  },
  middle: {
    alignItems: "center",
    marginVertical: 12
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "AvenirNext-Bold",
    textAlign: "center"
  },
  description: {
    color: "white",
    fontSize: 18,
    fontFamily: "AvenirNext-Regular"
  }
});

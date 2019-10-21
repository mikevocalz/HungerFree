import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { SplashScreen } from "expo";

import { width, height } from "../constants/Layout";
import AppIntroSlider from "react-native-app-intro-slider";
import Ionicons from "react-native-vector-icons/Ionicons";

const slides = [
  {
    key: "1",
    title: "Homelessness",
    titleStyle: { fontWeight: "bold" },
    text: "Is a Serious Issue Across the World.",
    textStyle: { color: "white" },

    image: require("../assets/images/Asset1.png"),
    imageStyle: { height: "40%", width: "80%", resizeMode: "contain" },
    backgroundColor: "#Ff9292"
  },
  {
    key: "2",
    title: "Families",
    text: "Are Living in the Streets Starving.",
    textStyle: { color: "black" },
    image: require("../assets/images/Asset2.png"),
    titleStyle: { fontWeight: "bold", color: "black" },
    imageStyle: { height: "40%", width: "80%", resizeMode: "contain" },
    backgroundColor: "#FFC50D"
  },
  {
    key: "3",
    title: "Donate to the Hungry",
    titleStyle: { fontWeight: "bold" },
    text: "Lets Feed People in Need",
    image: require("../assets/images/Asset3.png"),
    imageStyle: { height: "40%", width: "80%", resizeMode: "contain" },
    backgroundColor: "#0F303F"
  }
];

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  skipIntro = () => {
    this.props.navigation.navigate("Home");
  };

  renderNextButton = () => (
    <View style={styles.buttonCircle}>
      <Ionicons
        name='md-arrow-round-forward'
        color='rgba(255, 255, 255, .9)'
        size={24}
        style={{ backgroundColor: "transparent" }}
      />
    </View>
  );

  renderDoneButton = () => (
    <View style={styles.buttonCircle}>
      <Ionicons
        name='md-checkmark'
        color='rgba(255, 255, 255, .9)'
        size={24}
        style={{ backgroundColor: "transparent" }}
      />
    </View>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        showSkipButton
        onSkip={this.skipIntro}
        onDone={this.skipIntro}
        renderDoneButton={this.renderDoneButton}
        renderNextButton={this.renderNextButton}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F303F"
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "50%",
    height: "50%"
  }
});

export default WelcomeScreen;

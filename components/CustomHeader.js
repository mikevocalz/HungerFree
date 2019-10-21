import React, { Component } from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  View,
  Image,
  Dimensions
} from "react-native";

import { Header, Avatar } from "react-native-elements";

export default class CustomHeader extends Component {
  render() {
    return (
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        barStyle='light-content'
        centerComponent={
          <Image
            source={require("../assets/images/icon.png")}
            style={styles.headerImg}
            resizeMode='contain'
          />
        }
        containerStyle={{
          backgroundColor: "#Ff9292",
          padding: 5,
          borderBottomColor: "transparent"
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  headerImg: {
    marginLeft: 10,
    height: 40,
    width: 90
  }
});

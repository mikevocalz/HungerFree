import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Auth } from "aws-amplify";
import { Button, Input } from "react-native-elements";

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: "Sign In",
    headerStyle: {
      backgroundColor: "#Ff9292"
    },
    headerTintColor: "white"
  };

  state = {
    username: "",
    password: "",
    user: {},
    loading: false,
    error: ""
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  signIn = async () => {
    this.setState({ loading: true, error: "" });
    const { username, password } = this.state;
    if (username && password) {
      await Auth.signIn(username, password)
        .then(user => {
          this.setState({ user });
          this.props.navigation.navigate("App");
          console.log(this.state.user);
        })
        .catch(error => {
          this.setState({ loading: false, error: error.message });
        });
    } else {
      this.setState({ loading: false, error: "Complete missing fields" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>USERNAME:</Text>
        <Input
          placeholder='John Doe'
          onChangeText={text => this.onChangeText("username", text)}
          value={this.state.username}
        />
        <Text style={[styles.label, { marginTop: 15 }]}>PASSWORD:</Text>
        <Input
          placeholder='********'
          onChangeText={text => this.onChangeText("password", text)}
          value={this.state.password}
          secureTextEntry
        />
        <Button
          title='SIGN IN'
          onPress={
            //this.signIn
            () => this.props.navigation.navigate("Welcome")
          }
          titleStyle={{ fontWeight: "bold" }}
          buttonStyle={{
            width: 240,
            borderRadius: 5,
            backgroundColor: "#Ff9292"
          }}
          style={{ marginTop: 40 }}
        />
        {this.state.loading && <ActivityIndicator />}
        <Text style={styles.error}>{this.state.error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  label: {
    alignSelf: "flex-start",
    paddingLeft: "5%",
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 10
  },
  error: {
    marginTop: 10,
    paddingHorizontal: "10%",
    color: "red",
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 12
  }
});

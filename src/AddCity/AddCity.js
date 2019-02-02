import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import uuidV4 from "uuid/v4";
import { colors } from "../themes";
export default class AddCity extends Component {
  state = {
    city: "",
    country: ""
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  submit = () => {
    if (this.state.city === "" || this.state.country === "") return;
    const city = {
      city: this.state.city,
      country: this.state.country,
      locations: [],
      id: uuidV4()
    };
    this.props.screenProps.addCity(city);
    this.setState(
      {
        city: "",
        country: ""
      },
      () => {
        this.props.navigation.navigate("cities");
      }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Cities</Text>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={this.state.city}
          onChangeText={val => this.onChangeText("city", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={this.state.country}
          onChangeText={val => this.onChangeText("country", val)}
        />

        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add City</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    margin: 10,
    paddingHorizontal: 30,
    height: 50,
    borderRadius: 25
  },
  button: {
    height: 50,
    backgroundColor: "white",
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {},

  container: {
    backgroundColor: colors.main,
    flex: 1,
    justifyContent: "center"
  },
  heading: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    color: "white"
  }
});

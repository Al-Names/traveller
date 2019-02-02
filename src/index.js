import React, { Component } from "react";
import AddCity from "./AddCity/AddCity";
import Cities from "./Cities/Cities";
import City from "./Cities/City";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import { colors } from "./themes";

const CitiesNav = createStackNavigator(
  {
    Cities: { screen: Cities },
    City: { screen: City }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#ffffff",
      headerStyle: {
        backgroundColor: colors.main
      }
    }
  }
);

const Tabs = createBottomTabNavigator({
  Cities: { screen: CitiesNav },
  AddCity: { screen: AddCity }
});

export default createAppContainer(Tabs);

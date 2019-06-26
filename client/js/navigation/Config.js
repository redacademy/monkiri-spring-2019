import React from "react";
import { Header } from "react-navigation";

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  headerTintColor: "white",
  header: props => {
    return <Header {...props} />;
  },
  headerStyle: {
    backgroundColor: "#54bed9"
  },
  headerTitleStyle: { color: "#ffffff" }
});

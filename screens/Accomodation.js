import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Accomodation = () => {
  return <View style={styles.accomodation} />;
};

const styles = StyleSheet.create({
  accomodation: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Accomodation;

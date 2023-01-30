import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const ArrowCircleLeft = () => {
  return <View style={styles.arrowCircleLeft} />;
};

const styles = StyleSheet.create({
  arrowCircleLeft: {
    backgroundColor: Color.gray,
    flex: 1,
    width: "100%",
    height: 17,
    overflow: "hidden",
  },
});

export default ArrowCircleLeft;

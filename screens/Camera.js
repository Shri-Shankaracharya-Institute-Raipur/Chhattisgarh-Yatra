import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Camera = () => {
  return <View style={styles.camera} />;
};

const styles = StyleSheet.create({
  camera: {
    backgroundColor: Color.gray,
    flex: 1,
    width: "100%",
    height: 17,
    overflow: "hidden",
  },
});

export default Camera;

import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Maps = () => {
  return (
    <View style={styles.maps}>
      <Image
        style={styles.searchIcon}
        resizeMode="cover"
        source={require("../assets/search.png")}
      />
      <View style={styles.mapsChild} />
      <View style={[styles.mapsicleMapWrapper, styles.mapsiclePosition]}>
        <Image
          style={[styles.mapsicleMapIcon, styles.mapsiclePosition]}
          resizeMode="cover"
          source={require("../assets/mapsicle-map.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapsiclePosition: {
    height: 800,
    left: 0,
    top: 0,
    position: "absolute",
  },
  searchIcon: {
    top: 67,
    left: 44,
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  mapsChild: {
    top: 19,
    left: 11,
    backgroundColor: Color.darkslategray_100,
    width: 172,
    height: 31,
    position: "absolute",
  },
  mapsicleMapIcon: {
    width: 192,
  },
  mapsicleMapWrapper: {
    width: 188,
  },
  maps: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 550,
    overflow: "hidden",
  },
});

export default Maps;

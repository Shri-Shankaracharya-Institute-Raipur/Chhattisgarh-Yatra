import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Tumba = () => {
  return (
    <View style={styles.tumba}>
      <Text style={styles.tumba1}>TUMBA</Text>
      <Image
        style={styles.tumbaChild}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.tumbaItem, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/line-169.png")}
      />
      <Image
        style={[styles.image41Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-41.png")}
      />
      <Text style={styles.tumbaIsA}>
        Tumba is a less known craft widely produced in the Bastar region, which
        originated with the widespread use of hollow gourd shells. Tribal use
        them as containers to store water and salfi, from which this art is
        inspired.
      </Text>
      <View style={styles.lineParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-1921.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector68.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector69.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector70.png")}
        />
        <Text
          style={[
            styles.swamiVivekanandInternational,
            styles.jagdalpurRailwayStationTypo,
          ]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector71.png")}
        />
        <Text
          style={[
            styles.jagdalpurRailwayStation,
            styles.jagdalpurRailwayStationTypo,
          ]}
        >
          Jagdalpur Railway Station
        </Text>
        <Image
          style={[styles.busIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/bus22.png")}
        />
      </View>
      <Text style={[styles.km, styles.bastarTypo]}>245.2 Km</Text>
      <Text style={[styles.bastar, styles.bastarTypo]}>Bastar</Text>
      <Text style={[styles.bastar1, styles.bastarTypo]}>Bastar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    right: "94.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  jagdalpurRailwayStationTypo: {
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  bastarTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  tumba1: {
    top: 127,
    left: 114,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    width: 236,
    height: 56,
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  tumbaChild: {
    top: 179,
    left: 56,
    width: 300,
    height: 4,
    position: "absolute",
  },
  tumbaItem: {
    top: 403,
    width: 299,
    height: 4,
  },
  image41Icon: {
    top: 213,
    width: 311,
    height: 162,
  },
  tumbaIsA: {
    top: 422,
    left: 71,
    fontSize: FontSize.size_base,
    width: 235,
    height: 272,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  groupChild: {
    top: -2,
    left: 74,
    width: 279,
    height: 4,
    position: "absolute",
  },
  vectorIcon: {
    height: "8.56%",
    width: "6.68%",
    top: "9.25%",
    right: "93.32%",
    bottom: "82.19%",
    left: "0%",
  },
  vectorIcon1: {
    height: "11.4%",
    width: "4.55%",
    top: "25.34%",
    right: "94.65%",
    bottom: "63.26%",
    left: "0.8%",
  },
  vectorIcon2: {
    height: "11.97%",
    width: "5.08%",
    top: "88.03%",
    bottom: "0%",
    left: "0.53%",
  },
  swamiVivekanandInternational: {
    top: 265,
    width: 266,
    height: 27,
  },
  vectorIcon3: {
    height: "13.11%",
    width: "5.35%",
    top: "66.95%",
    bottom: "19.95%",
    left: "0.27%",
  },
  jagdalpurRailwayStation: {
    top: 209,
    width: 192,
    height: 25,
  },
  busIcon: {
    top: 134,
    width: 23,
    height: 37,
    overflow: "hidden",
  },
  lineParent: {
    top: 709,
    left: 19,
    width: 374,
    height: 292,
    position: "absolute",
  },
  km: {
    top: 736,
    left: 55,
    width: 168,
    height: 32,
  },
  bastar: {
    top: 796,
    left: 54,
    width: 134,
    height: 39,
  },
  bastar1: {
    top: 843,
    left: 58,
    width: 174,
    height: 37,
  },
  tumba: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    width: "100%",
    height: 1049,
    overflow: "hidden",
  },
});

export default Tumba;

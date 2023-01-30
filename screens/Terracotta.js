import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Terracotta = () => {
  return (
    <View style={styles.terracotta}>
      <Text style={styles.terracotta1}>Terracotta</Text>
      <Image
        style={styles.terracottaChild}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.terracottaItem, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/line-205.png")}
      />
      <Image
        style={[styles.image31Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-31.png")}
      />
      <Text style={styles.likeInMany}>
        Like in many other states, Terracotta has found a place in the
        handicrafts created by Chhattisgarh. Terracotta pottery represents the
        rituals and customs of tribal life in the state and symbolizes their
        emotions.
      </Text>
      <View style={styles.kmParent}>
        <Text style={styles.km}>246.8 Km</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-192.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector84.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector85.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector86.png")}
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
          source={require("../assets/vector87.png")}
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
      <Text style={[styles.bastarraigarhambikapur, styles.raipurTypo]}>
        Bastar,Raigarh,Ambikapur
      </Text>
      <Text style={[styles.raipur, styles.raipurTypo]}>
        <Text style={styles.raipur1}>Raipur</Text>
      </Text>
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
  raipurTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  terracotta1: {
    top: 127,
    left: 76,
    fontSize: FontSize.size_2xl,
    width: 314,
    height: 72,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  terracottaChild: {
    top: 178,
    left: 27,
    width: 300,
    height: 4,
    position: "absolute",
  },
  terracottaItem: {
    top: 449,
    width: 295,
    height: 4,
  },
  image31Icon: {
    top: 199,
    width: 331,
    height: 222,
  },
  likeInMany: {
    top: 468,
    width: 245,
    height: 306,
    textAlign: "justify",
    fontSize: FontSize.size_base,
    left: 59,
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  km: {
    top: 29,
    left: 42,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  groupChild: {
    top: -2,
    left: 74,
    width: 283,
    height: 4,
    position: "absolute",
  },
  vectorIcon: {
    height: "8.46%",
    width: "6.68%",
    top: "6.07%",
    right: "93.32%",
    bottom: "85.48%",
    left: "0%",
  },
  vectorIcon1: {
    height: "11.26%",
    width: "4.55%",
    top: "21.96%",
    right: "94.65%",
    bottom: "66.78%",
    left: "0.8%",
  },
  vectorIcon2: {
    height: "11.82%",
    width: "5.08%",
    top: "83.88%",
    bottom: "4.3%",
    left: "0.53%",
  },
  swamiVivekanandInternational: {
    top: 265,
    width: 266,
    height: 27,
  },
  vectorIcon3: {
    height: "12.95%",
    width: "5.35%",
    top: "63.05%",
    bottom: "24%",
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
  kmParent: {
    top: 722,
    left: 22,
    width: 374,
    height: 292,
    position: "absolute",
  },
  bastarraigarhambikapur: {
    top: 795,
    width: 265,
    height: 34,
    left: 59,
    fontSize: FontSize.size_xs,
  },
  raipur1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  raipur: {
    top: 855,
    left: 61,
    width: 212,
    height: 52,
  },
  terracotta: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    width: "100%",
    height: 1036,
    overflow: "hidden",
  },
});

export default Terracotta;

import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Margin } from "../GlobalStyles";

const KutumsarCaves = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.kutumsarCaves}>
      <Image
        style={[styles.kutumbsarGufa2, styles.kutumbsarGufa2Position]}
        resizeMode="cover"
        source={require("../assets/kutumbsar-gufa-2.png")}
      />
      <Image
        style={[styles.kutumsarCavesChild, styles.kutumbsarGufa2Position]}
        resizeMode="cover"
        source={require("../assets/line-30.png")}
      />
      <Text style={styles.kotumsarCaveWasContainer}>
        <Text style={styles.kotumsarCaveWas}>
          Kotumsar cave was initially named Gopansar cave (Gopan = hidden) but
          the present name Kotumsar became more popular as the cave is located
          near a village named ‘Kotumsar’. Kotumsar cave is located near
          Jagdalpur in the Indian state of Chhattisgarh. Kotumsar cave is a
          major attraction for people interested in ecotourism.
        </Text>
        <Text style={styles.kotumsarCaveWas}> </Text>
        <Text style={styles.theCaveIs}>
          The cave is subject to frequent flooding during the monsoon season,
          which generally begins in the middle of June and continues until the
          middle of October. The site is closed to tourists during this period.
          Various water pools fed by seepage throughout the year also exist in
          this cave.
        </Text>
      </Text>
      <Image
        style={styles.kutumsarCavesItem}
        resizeMode="cover"
        source={require("../assets/line-27.png")}
      />
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.kutumsarCavesInner, styles.lineViewBorder]} />
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu10.png")}
        />
      </Pressable>
      <Text style={[styles.kutumsarCaves1, styles.yatraTypo]}>
        Kutumsar Caves
      </Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector24.png")}
        />
        <Text style={[styles.bastar, styles.bastarTypo]}>Bastar</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector25.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.jagdalpurTypo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector26.png")}
        />
        <Text style={[styles.jagdalpur, styles.jagdalpurTypo]}>Jagdalpur</Text>
        <Text style={[styles.jagdalpurRailwayStation, styles.bastarTypo]}>
          Jagdalpur Railway Station
        </Text>
        <Image
          style={styles.busIcon}
          resizeMode="cover"
          source={require("../assets/bus.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kutumbsarGufa2Position: {
    width: 291,
    left: 0,
    position: "absolute",
  },
  lineViewBorder: {
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  yatraTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bastarTypo: {
    left: 36,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "93.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  jagdalpurTypo: {
    height: 16,
    left: 36,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  kutumbsarGufa2: {
    top: 266,
    height: 209,
  },
  kutumsarCavesChild: {
    top: 493,
    height: 4,
  },
  kotumsarCaveWas: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theCaveIs: {
    margin: Margin.m_md,
  },
  kotumsarCaveWasContainer: {
    top: 524,
    height: 244,
    textAlign: "justify",
    color: Color.white,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.robotoSerif,
    left: 32,
    width: 291,
    position: "absolute",
  },
  kutumsarCavesItem: {
    top: 768,
    left: 70,
    width: 315,
    height: 0,
    position: "absolute",
  },
  chhattisgarh: {
    top: 17,
    left: 81,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  kutumsarCavesInner: {
    top: 78,
    left: 82,
    borderTopWidth: 1,
    width: 127,
    height: 1,
  },
  yatra: {
    top: 70,
    left: 215,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconMenu: {
    left: "85.28%",
    top: "2.79%",
    right: "6.39%",
    bottom: "93.51%",
    width: "8.33%",
    height: "3.69%",
    position: "absolute",
  },
  kutumsarCaves1: {
    top: 196,
    left: 90,
    width: 198,
    height: 28,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
  },
  lineView: {
    top: 229,
    left: 80,
    borderTopWidth: 2,
    width: 203,
    height: 2,
  },
  vectorIcon: {
    height: "3.56%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.44%",
    left: "0.99%",
    position: "absolute",
  },
  bastar: {
    top: 263,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.74%",
    width: "6.29%",
    top: "19.6%",
    bottom: "76.66%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 369,
    width: 266,
  },
  vectorIcon2: {
    height: "4.1%",
    width: "6.62%",
    top: "13%",
    bottom: "82.9%",
    left: "0.33%",
  },
  jagdalpur: {
    top: 299,
    width: 115,
  },
  jagdalpurRailwayStation: {
    top: 335,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 847,
    width: 23,
    height: 22,
    left: 32,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "55.83%",
    width: "83.89%",
    top: "80.94%",
    right: "7.22%",
    bottom: "-36.76%",
    left: "8.89%",
    position: "absolute",
  },
  kutumsarCaves: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 689,
    overflow: "hidden",
    width: "100%",
  },
});

export default KutumsarCaves;

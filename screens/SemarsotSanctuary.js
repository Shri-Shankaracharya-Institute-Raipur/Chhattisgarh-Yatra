import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const SemarsotSanctuary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.semarsotSanctuary}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.semarsotSanctuaryChild, styles.lineViewBorder]} />
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu47.png")}
        />
      </Pressable>
      <Image
        style={[styles.image6Icon, styles.image6IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={[styles.semarsotSanctuaryItem, styles.image6IconPosition]}
        resizeMode="cover"
        source={require("../assets/line-103.png")}
      />
      <Image
        style={styles.semarsotSanctuaryInner}
        resizeMode="cover"
        source={require("../assets/line-116.png")}
      />
      <Text style={styles.theSemarsotWildlifeContainer}>
        <Text style={styles.theSemarsotWildlife}>
          The Semarsot Wildlife Sanctuary is near Semarsot on the
          Ambikapur-Daltongunj Road. The Semarsot Wildlife Sanctuary covers an
          area of 430.36 Sq. Kms and is covered with sal, deciduous and other
          riverine trees.
        </Text>
      </Text>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector141.png")}
        />
        <Text style={[styles.semarsot, styles.semarsotTypo]}>Semarsot</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector142.png")}
        />
        <Text
          style={[styles.varanasiInternationalAirport, styles.samarsotTypo]}
        >
          Varanasi International Airport
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector143.png")}
        />
        <Text style={[styles.samarsot, styles.samarsotTypo]}>Samarsot</Text>
        <Text style={[styles.jainagarRailwayStation, styles.semarsotTypo]}>
          Jainagar Railway Station
        </Text>
        <Image
          style={styles.busIcon}
          resizeMode="cover"
          source={require("../assets/bus.png")}
        />
      </View>
      <Text style={[styles.semarsotSanctuary1, styles.yatraTypo]}>
        Semarsot Sanctuary
      </Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  image6IconPosition: {
    left: 0,
    position: "absolute",
  },
  semarsotTypo: {
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "93.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  samarsotTypo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 30,
    left: 120,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    height: 42,
    width: 297,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  semarsotSanctuaryChild: {
    top: 90,
    left: 126,
    borderTopWidth: 1,
    width: 132,
    height: 1,
  },
  yatra: {
    top: 81,
    left: 261,
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
    left: "82.01%",
    top: "3.6%",
    right: "8.41%",
    bottom: "92.62%",
    width: "9.58%",
    height: "3.78%",
    position: "absolute",
  },
  image6Icon: {
    top: 275,
    width: 399,
    height: 305,
  },
  semarsotSanctuaryItem: {
    top: 609,
    height: 4,
    width: 297,
  },
  semarsotSanctuaryInner: {
    top: 769,
    left: 100,
    width: 328,
    height: 0,
    position: "absolute",
  },
  theSemarsotWildlife: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theSemarsotWildlifeContainer: {
    top: 639,
    fontSize: FontSize.size_sm,
    width: 342,
    height: 103,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    left: 54,
    color: Color.white,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.52%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.48%",
    left: "0.99%",
    position: "absolute",
  },
  semarsot: {
    top: 269,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.69%",
    width: "6.29%",
    top: "19.34%",
    bottom: "76.97%",
    left: "0.66%",
  },
  varanasiInternationalAirport: {
    top: 375,
    width: 266,
  },
  vectorIcon2: {
    height: "4.04%",
    width: "6.62%",
    top: "12.83%",
    bottom: "83.12%",
    left: "0.33%",
  },
  samarsot: {
    top: 305,
    width: 115,
  },
  jainagarRailwayStation: {
    top: 341,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 864,
    width: 23,
    height: 22,
    left: 54,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "53.87%",
    width: "70.56%",
    top: "78.41%",
    right: "16.82%",
    bottom: "-32.28%",
    left: "12.62%",
    position: "absolute",
  },
  semarsotSanctuary1: {
    top: 207,
    left: 71,
    fontFamily: FontFamily.cutive,
    width: 386,
    height: 49,
  },
  lineView: {
    top: 240,
    left: 57,
    borderTopWidth: 2,
    width: 307,
    height: 2,
  },
  semarsotSanctuary: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 725,
    overflow: "hidden",
    width: "100%",
  },
});

export default SemarsotSanctuary;

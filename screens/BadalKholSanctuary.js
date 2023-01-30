import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const BadalKholSanctuary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.badalkholSanctuary}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Image
        style={[styles.badalkholSanctuaryChild, styles.lineViewLayout]}
        resizeMode="cover"
        source={require("../assets/line-120.png")}
      />
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu51.png")}
        />
      </Pressable>
      <Image
        style={styles.badalkholWildlifeSanctuaryJIcon}
        resizeMode="cover"
        source={require("../assets/badalkholwildlifesanctuaryjashpurbadalkholwildlifesanctuary3-1.png")}
      />
      <Image
        style={[styles.badalkholSanctuaryItem, styles.badalkholLayout]}
        resizeMode="cover"
        source={require("../assets/line-107.png")}
      />
      <Text style={styles.badalkholWildlifeSanctuaryContainer}>
        <Text style={styles.badalkholWildlifeSanctuary}>
          Badalkhol Wildlife Sanctuary is situated at 160 kms north of Raigarh
          and one of the most famous wildlife reserves in Chhattisgarh. 44 % of
          this sanctuary region is filled with dense forests and wildlife
          sanctuaries. The sanctuary is rich in various wildlife species and is
          also considered to be a bird watcher's paradise as it is a home for
          the birds.
        </Text>
      </Text>
      <Image
        style={[styles.badalkholSanctuaryInner, styles.badalkholLayout]}
        resizeMode="cover"
        source={require("../assets/line-162.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector153.png")}
        />
        <Text style={[styles.jashpur, styles.jashpurTypo]}>Jashpur</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector154.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.jashpur1Typo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector155.png")}
        />
        <Text style={[styles.jashpur1, styles.jashpur1Typo]}>Jashpur</Text>
        <Text style={[styles.raigarhRailwayStation, styles.jashpurTypo]}>
          Raigarh Railway Station
        </Text>
        <Image
          style={styles.busIcon}
          resizeMode="cover"
          source={require("../assets/bus.png")}
        />
      </View>
      <Text
        style={[styles.badalkholSanctuary1, styles.yatraTypo]}
      >{`Badalkhol  Sanctuary `}</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineViewLayout: {
    height: 2,
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
  badalkholLayout: {
    width: 300,
    position: "absolute",
  },
  jashpurTypo: {
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
  jashpur1Typo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 28,
    left: 102,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  badalkholSanctuaryChild: {
    top: 85,
    left: 108,
    width: 125,
  },
  yatra: {
    top: 79,
    left: 238,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "79.95%",
    top: "3.4%",
    right: "10.61%",
    bottom: "92.41%",
    width: "9.43%",
    height: "4.2%",
    position: "absolute",
  },
  badalkholWildlifeSanctuaryJIcon: {
    top: 269,
    width: 399,
    height: 243,
    left: 0,
    position: "absolute",
  },
  badalkholSanctuaryItem: {
    top: 540,
    height: 4,
    left: 0,
  },
  badalkholWildlifeSanctuary: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  badalkholWildlifeSanctuaryContainer: {
    top: 566,
    left: 48,
    fontSize: FontSize.size_sm,
    width: 362,
    height: 160,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  badalkholSanctuaryInner: {
    top: 756,
    left: 124,
    height: 0,
  },
  vectorIcon: {
    height: "3.6%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.4%",
    left: "0.99%",
    position: "absolute",
  },
  jashpur: {
    top: 259,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.78%",
    width: "6.29%",
    top: "19.82%",
    bottom: "76.4%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 365,
    width: 266,
  },
  vectorIcon2: {
    height: "4.14%",
    width: "6.62%",
    top: "13.15%",
    bottom: "82.7%",
    left: "0.33%",
  },
  jashpur1: {
    top: 295,
    width: 115,
  },
  raigarhRailwayStation: {
    top: 331,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 837,
    left: 27,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "55.45%",
    width: "71.23%",
    top: "80.02%",
    right: "22.41%",
    bottom: "-35.47%",
    left: "6.37%",
    position: "absolute",
  },
  badalkholSanctuary1: {
    top: 185,
    left: 68,
    fontFamily: FontFamily.cutive,
    width: 336,
    height: 60,
  },
  lineView: {
    top: 224,
    left: 56,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 2,
    width: 315,
  },
  badalkholSanctuary: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 688,
    overflow: "hidden",
    width: "100%",
  },
});

export default BadalKholSanctuary;

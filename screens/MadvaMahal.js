import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MadvaMahal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.madvaMahal}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.madvaMahalChild, styles.madvaBorder]} />
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu5.png")}
        />
      </Pressable>
      <Text style={styles.madvaMahal1}>Madva Mahal</Text>
      <Text style={styles.madwaMahalIs}>
        Madwa Mahal is one of the attractive places in Kabirdham, Chhattisgarh.
        It is an important tourist places in Kawardha, Kabirdham district. It is
        very famous in Kawardha. The Madwa Mahal is a kilometre away from the
        Bhoramdeo temple. It is believed that the mahal was built in 1349 to
        mark the marriage of the Nagwanshi king, Ramchandra Deo and Haihawanshi
        Queen. There is a Shivalinga in this temple.
      </Text>
      <Image
        style={[styles.icon1, styles.icon1Position]}
        resizeMode="cover"
        source={require("../assets/20180815-2.png")}
      />
      <Image
        style={[styles.madvaMahalItem, styles.icon1Position]}
        resizeMode="cover"
        source={require("../assets/line-24.png")}
      />
      <View style={[styles.madvaMahalInner, styles.madvaBorder]} />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
        <Text style={[styles.kawardha, styles.kawardhaTypo]}>Kawardha</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.kawardha1Typo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector14.png")}
        />
        <Text style={[styles.kawardha1, styles.kawardha1Typo]}>Kawardha</Text>
        <Text style={[styles.durgRaipurRailway, styles.kawardhaTypo]}>
          Durg, Raipur Railway Station
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
  madvaBorder: {
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon1Position: {
    left: 0,
    width: 295,
    position: "absolute",
  },
  kawardhaTypo: {
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
  kawardha1Typo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 17,
    left: 82,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    height: 42,
    width: 297,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  madvaMahalChild: {
    top: 81,
    left: 85,
    borderTopWidth: 1,
    width: 124,
    height: 1,
  },
  yatra: {
    top: 72,
    left: 218,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconMenu: {
    left: "85.28%",
    top: "3.14%",
    right: "6.94%",
    bottom: "93.61%",
    width: "7.78%",
    height: "3.24%",
    position: "absolute",
  },
  madvaMahal1: {
    top: 178,
    left: 95,
    width: 162,
    height: 30,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  madwaMahalIs: {
    top: 522,
    fontSize: FontSize.size_sm,
    height: 166,
    width: 295,
    textAlign: "justify",
    left: 28,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  icon1: {
    top: 273,
    height: 185,
  },
  madvaMahalItem: {
    top: 478,
    height: 3,
  },
  madvaMahalInner: {
    top: 790,
    left: 94,
    borderTopWidth: 2,
    height: 2,
    width: 297,
  },
  vectorIcon: {
    height: "3.5%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.5%",
    left: "0.99%",
    position: "absolute",
  },
  kawardha: {
    top: 269,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.68%",
    width: "6.29%",
    top: "19.27%",
    bottom: "77.06%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 375,
    width: 266,
  },
  vectorIcon2: {
    height: "4.03%",
    width: "6.62%",
    top: "12.79%",
    bottom: "83.19%",
    left: "0.33%",
  },
  kawardha1: {
    top: 305,
    width: 115,
  },
  durgRaipurRailway: {
    top: 341,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 868,
    width: 23,
    height: 22,
    left: 28,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "55.89%",
    width: "83.89%",
    top: "81.73%",
    right: "8.33%",
    bottom: "-37.61%",
    left: "7.78%",
    position: "absolute",
  },
  madvaMahal: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 700,
    overflow: "hidden",
    width: "100%",
  },
});

export default MadvaMahal;

import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const SurangTila = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.surangTila}>
      <Text style={styles.surangTilaOriginally}>
        Surang Tila originally a temple and is located in Sirpur, in the
        Mahasamund District of Chhattisgarh, India. The Surang Tila established
        by Mahasivagupta Balarjuna during the 7th Century AD, is constructed in
        the panchayatan style of Temple architecture. It has a main temple in
        the centre containing five sanctums and four other sanctums at each of
        its corners. Four of the samctums in the main temple, each has a
        Shivalinga of a different colour (black, yellow, red and white) for
        worship.
      </Text>
      <View style={[styles.surangTilaChild, styles.lineViewBorder]} />
      <Image
        style={[styles.surangTilaItem, styles.surangPosition]}
        resizeMode="cover"
        source={require("../assets/line-20.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.sirpur, styles.sirpurTypo]}>Sirpur</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.mahasamundTypo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.mahasamund, styles.mahasamundTypo]}>
          Mahasamund
        </Text>
        <Text style={[styles.mahasamundRailwayStation, styles.sirpurTypo]}>
          Mahasamund Railway Station
        </Text>
        <Image
          style={styles.busIcon}
          resizeMode="cover"
          source={require("../assets/bus.png")}
        />
      </View>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.surangTilaInner, styles.surangPosition]} />
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu2.png")}
        />
      </Pressable>
      <Text style={[styles.surangTila1, styles.yatraTypo]}>Surang Tila</Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <Image
        style={styles.surangTila2Icon}
        resizeMode="cover"
        source={require("../assets/surangtila-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineViewBorder: {
    height: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  surangPosition: {
    left: 84,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  sirpurTypo: {
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "93.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mahasamundTypo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  yatraTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  surangTilaOriginally: {
    top: 503,
    left: 21,
    fontSize: FontSize.size_sm,
    width: 279,
    height: 400,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  surangTilaChild: {
    top: 470,
    left: -1,
    width: 226,
  },
  surangTilaItem: {
    top: 827,
    width: 281,
    height: 0,
  },
  vectorIcon: {
    height: "3.32%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.68%",
    left: "0.99%",
    position: "absolute",
  },
  sirpur: {
    top: 292,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.49%",
    width: "6.29%",
    top: "18.26%",
    bottom: "78.26%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 398,
    width: 266,
  },
  vectorIcon2: {
    height: "3.82%",
    width: "6.62%",
    top: "12.12%",
    bottom: "84.07%",
    left: "0.33%",
  },
  mahasamund: {
    top: 328,
    width: 115,
  },
  mahasamundRailwayStation: {
    top: 364,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 939,
    left: 29,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "54.38%",
    width: "83.89%",
    top: "81.5%",
    right: "8.06%",
    bottom: "-35.87%",
    left: "8.06%",
    position: "absolute",
  },
  chhattisgarh: {
    top: 21,
    left: 79,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  surangTilaInner: {
    top: 82,
    borderTopWidth: 1,
    width: 126,
    height: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    left: 84,
  },
  yatra: {
    top: 73,
    left: 216,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "85.83%",
    top: "3.52%",
    right: "6.94%",
    bottom: "93.77%",
    width: "7.22%",
    height: "2.71%",
    position: "absolute",
  },
  surangTila1: {
    top: 179,
    left: 125,
    width: 136,
    height: 27,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
  },
  lineView: {
    top: 217,
    left: 111,
    width: 151,
  },
  surangTila2Icon: {
    top: 252,
    left: 0,
    width: 288,
    height: 188,
    position: "absolute",
  },
  surangTila: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 761,
    overflow: "hidden",
    width: "100%",
  },
});

export default SurangTila;

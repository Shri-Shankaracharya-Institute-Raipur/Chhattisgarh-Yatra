import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Margin } from "../GlobalStyles";

const LaxmanTemple = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.laxmanTemple}>
      <Text style={styles.laxmanTempleInContainer}>
        <Text style={styles.laxmanTempleIn}>
          Laxman Temple in Sirpur was built by the mother of Mahasivagupta
          Balarjuna during the 7th Century AD, dedicated to Lord Vishnu. It is
          regarded as one of the best examples of brick temples in India.
        </Text>
        <Text style={styles.theLaxmanTemple}>
          The Laxman Temple is of great architectural and historical
          significance, which makes it a tourist attraction. The temple has
          intricate and detailed carvings on its wall, which includes Krishna
          Leela symbols, Lord Vishnu himself, and Vaishnava Dwarpal among
          others.
        </Text>
      </Text>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Image
        style={styles.laxmanTempleChild}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu1.png")}
        />
      </Pressable>
      <Text style={[styles.laxmanTemple1, styles.yatraTypo]}>
        Laxman Temple
      </Text>
      <View style={[styles.laxmanTempleItem, styles.laxmanBorder]} />
      <Image
        style={styles.sirpur2Icon}
        resizeMode="cover"
        source={require("../assets/sirpur-2.png")}
      />
      <View style={[styles.laxmanTempleInner, styles.laxmanBorder]} />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-19.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
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
  laxmanBorder: {
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    height: 2,
    position: "absolute",
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
  laxmanTempleIn: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theLaxmanTemple: {
    margin: Margin.m_md,
  },
  laxmanTempleInContainer: {
    top: 482,
    fontSize: FontSize.size_sm,
    width: 276,
    height: 362,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    left: 29,
    position: "absolute",
  },
  chhattisgarh: {
    top: 17,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    left: 83,
    color: Color.white,
    position: "absolute",
  },
  laxmanTempleChild: {
    top: 79,
    left: 84,
    width: 128,
    height: 2,
    position: "absolute",
  },
  yatra: {
    top: 72,
    left: 218,
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
    left: "86.67%",
    top: "3.07%",
    right: "-10.09%",
    bottom: "91.51%",
    width: "23.42%",
    height: "5.42%",
    position: "absolute",
  },
  laxmanTemple1: {
    top: 177,
    width: 188,
    height: 27,
    left: 83,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoSerif,
  },
  laxmanTempleItem: {
    top: 213,
    left: 71,
    width: 201,
  },
  sirpur2Icon: {
    top: 259,
    left: 0,
    width: 253,
    height: 178,
    position: "absolute",
  },
  laxmanTempleInner: {
    top: 457,
    left: -20,
    width: 226,
  },
  lineIcon: {
    top: 806,
    left: 93,
    width: 281,
    height: 0,
    position: "absolute",
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
    width: 23,
    height: 22,
    left: 29,
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
  laxmanTemple: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 761,
    overflow: "hidden",
    width: "100%",
  },
});

export default LaxmanTemple;

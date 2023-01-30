import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const BhoramdeoSanctuary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bhoramdeoSanctuary}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.bhoramdeoSanctuaryChild, styles.lineViewBorder]} />
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu50.png")}
        />
      </Pressable>
      <Image
        style={styles.image3Icon}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={[styles.bhoramdeoSanctuaryItem, styles.bhoramdeoLayout]}
        resizeMode="cover"
        source={require("../assets/line-151.png")}
      />
      <Image
        style={[styles.bhoramdeoSanctuaryInner, styles.bhoramdeoLayout]}
        resizeMode="cover"
        source={require("../assets/line-162.png")}
      />
      <Text style={styles.bhoramdeoWildlifeSanctuaryContainer}>
        <Text style={styles.bhoramdeoWildlifeSanctuary}>
          Bhoramdeo Wildlife Sanctuary is one of the eleven wild life
          sanctuaries of Chhattisgarh state. It is located at Kabirdham
          district. It is named after famous Bhoramdeo temples. Drained by river
          Sakari which also serves as source of drinking water to wild animals.
        </Text>
      </Text>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector150.png")}
        />
        <Text style={[styles.kawardha, styles.kawardhaTypo]}>Kawardha</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector151.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.kawardha1Typo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector152.png")}
        />
        <Text style={[styles.kawardha1, styles.kawardha1Typo]}>Kawardha</Text>
        <Text style={[styles.durgRailwayStation, styles.kawardhaTypo]}>
          Durg Railway Station
        </Text>
        <Image
          style={styles.busIcon}
          resizeMode="cover"
          source={require("../assets/bus.png")}
        />
      </View>
      <Text style={[styles.bhoramdeoSanctuary1, styles.yatraTypo]}>
        Bhoramdeo sanctuary
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
  bhoramdeoLayout: {
    width: 300,
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
    top: 24,
    left: 117,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  bhoramdeoSanctuaryChild: {
    top: 84,
    left: 126,
    borderTopWidth: 1,
    width: 128,
    height: 1,
  },
  yatra: {
    top: 75,
    left: 256,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "82.05%",
    top: "2.67%",
    right: "9.09%",
    bottom: "92.89%",
    width: "8.86%",
    height: "4.44%",
    position: "absolute",
  },
  image3Icon: {
    top: 275,
    width: 399,
    height: 257,
    left: 0,
    position: "absolute",
  },
  bhoramdeoSanctuaryItem: {
    top: 575,
    height: 4,
    left: 0,
  },
  bhoramdeoSanctuaryInner: {
    top: 771,
    left: 150,
    height: 0,
  },
  bhoramdeoWildlifeSanctuary: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  bhoramdeoWildlifeSanctuaryContainer: {
    top: 598,
    left: 62,
    fontSize: FontSize.size_sm,
    width: 342,
    height: 345,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
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
  kawardha: {
    top: 264,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.73%",
    width: "6.29%",
    top: "19.56%",
    bottom: "76.7%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 370,
    width: 266,
  },
  vectorIcon2: {
    height: "4.09%",
    width: "6.62%",
    top: "12.98%",
    bottom: "82.93%",
    left: "0.33%",
  },
  kawardha1: {
    top: 300,
    width: 115,
  },
  durgRailwayStation: {
    top: 336,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 852,
    left: 39,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "55.51%",
    width: "70.4%",
    top: "80.55%",
    right: "20.51%",
    bottom: "-36.06%",
    left: "9.09%",
    position: "absolute",
  },
  bhoramdeoSanctuary1: {
    top: 192,
    left: 64,
    fontFamily: FontFamily.cutive,
    width: 356,
    height: 45,
  },
  lineView: {
    top: 236,
    left: 57,
    borderTopWidth: 2,
    width: 315,
    height: 2,
  },
  bhoramdeoSanctuary: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 696,
    overflow: "hidden",
    width: "100%",
  },
});

export default BhoramdeoSanctuary;

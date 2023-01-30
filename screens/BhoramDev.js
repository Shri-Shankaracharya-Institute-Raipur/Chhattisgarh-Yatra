import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BhoramDev = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bhoramDev}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu16.png")}
        />
      </Pressable>
      <View style={styles.bhoramDevChild} />
      <Image
        style={[styles.bhoramDevItem, styles.bhoramLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.bhoramDevInner, styles.bhoramLayout]}
        resizeMode="cover"
        source={require("../assets/line-162.png")}
      />
      <Image
        style={[styles.lineIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/line-163.png")}
      />
      <Image
        style={[styles.bhoramdeoTemple2Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/bhoramdeo-temple-2.png")}
      />
      <Text style={styles.bhoramDevTemple}>Bhoram Dev Temple</Text>
      <Text style={styles.bhoramdeoTempleOr}>
        Bhoramdeo Temple, or the ‘Khajuraho of Chhattisgarh’, carved on the
        rocky stones in the Nagar style is an ancient Hindu temple dedicated to
        Lord Shiva. Situated in the Kabirdham district of Chhattisgarh, This
        temple was built in the period of 7th to 11th century A.D and is
        beautifully located amidst mountain ranges. The temples are said to be
        built by King Ramchandra of the Nag Dynasty. The Shiva Linga in the
        temple is wonderfully carved and the artistic appeal beckons the
        visitors. The Bhoramdeo temple has a resemblance with the Sun temple of
        Konark and The Khajuraho temple.
      </Text>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector39.png")}
        />
        <Text style={[styles.kawardha, styles.kawardhaTypo]}>Kawardha</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector40.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.kawardha1Typo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector41.png")}
        />
        <Text style={[styles.kawardha1, styles.kawardha1Typo]}>Kawardha</Text>
        <Text style={[styles.raipurRailwayStation, styles.kawardhaTypo]}>
          Raipur Railway Station
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bhoramLayout: {
    width: 300,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
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
    top: 23,
    left: 91,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 77,
    left: 227,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "84.08%",
    top: "2.39%",
    right: "8.22%",
    bottom: "94.34%",
    width: "7.69%",
    height: "3.27%",
    position: "absolute",
  },
  bhoramDevChild: {
    top: 87,
    left: 96,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 124,
    height: 1,
    position: "absolute",
  },
  bhoramDevItem: {
    top: 158,
    left: 23,
    height: 4,
  },
  bhoramDevInner: {
    top: 958,
    left: 123,
    height: 0,
  },
  lineIcon: {
    top: 388,
    width: 296,
    height: 4,
  },
  bhoramdeoTemple2Icon: {
    top: 180,
    width: 323,
    height: 188,
  },
  bhoramDevTemple: {
    top: 131,
    left: 49,
    width: 292,
    height: 49,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  bhoramdeoTempleOr: {
    top: 413,
    left: 39,
    fontSize: FontSize.size_base,
    height: 506,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    width: 300,
    color: Color.white,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.09%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.91%",
    left: "0.99%",
    position: "absolute",
  },
  kawardha: {
    top: 323,
    width: 103,
    height: 14,
  },
  vectorIcon1: {
    height: "3.25%",
    width: "6.29%",
    top: "17%",
    bottom: "79.75%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 429,
    width: 266,
  },
  vectorIcon2: {
    height: "3.55%",
    width: "6.62%",
    top: "11.28%",
    bottom: "85.16%",
    left: "0.33%",
  },
  kawardha1: {
    top: 359,
    width: 115,
  },
  raipurRailwayStation: {
    top: 395,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 1041,
    left: 37,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "51.55%",
    width: "80.11%",
    top: "80.08%",
    right: "10.08%",
    bottom: "-31.63%",
    left: "9.81%",
    position: "absolute",
  },
  bhoramDev: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 863,
    overflow: "hidden",
    width: "100%",
  },
});

export default BhoramDev;

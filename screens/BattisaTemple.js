import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Margin } from "../GlobalStyles";

const BattisaTemple = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.battisaTemple}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu8.png")}
        />
      </Pressable>
      <Text style={styles.battisaTemple1}>Battisa Temple</Text>
      <View style={[styles.battisaTempleChild, styles.lineIconLayout]} />
      <Image
        style={[styles.battisaTempleBarsurDantewadIcon, styles.battisaPosition]}
        resizeMode="cover"
        source={require("../assets/battisatemplebarsurdantewada1-2.png")}
      />
      <Image
        style={[styles.battisaTempleItem, styles.battisaPosition]}
        resizeMode="cover"
        source={require("../assets/line-28.png")}
      />
      <Text style={styles.battisaInHindiContainer}>
        <Text style={styles.battisaInHindi}>
          Battisa in hindi literally means 32 pillared temple. Once the Capital
          of Nagavansh Raja Banasur, Barsur is a fond destination for one who
          love history and ancient sculptures. This tiny town is filled with
          archaeological treasures.
        </Text>
        <Text style={styles.thisTempleIs}>
          This temple is dedicated to Bhagwaan Shiv. As per the inscriptions
          available in the temple, this temple was constructed in 1209 AD (Shaka
          Samvat 1130) by the Ganga Mahadevi, Queen of Nagavanshi ruler
          Someshwara Deva.
        </Text>
      </Text>
      <Image
        style={styles.battisaTempleInner}
        resizeMode="cover"
        source={require("../assets/line-27.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector21.png")}
        />
        <Text style={[styles.barsur, styles.barsurTypo]}>Barsur</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector22.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.dantewadaTypo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector23.png")}
        />
        <Text style={[styles.dantewada, styles.dantewadaTypo]}>Dantewada</Text>
        <Text style={[styles.jagdalpurRailwayStation, styles.barsurTypo]}>
          Jagdalpur Railway Station
        </Text>
        <Image
          style={styles.busIcon}
          resizeMode="cover"
          source={require("../assets/bus.png")}
        />
      </View>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-39.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  lineIconLayout: {
    height: 2,
    position: "absolute",
  },
  battisaPosition: {
    width: 272,
    left: 0,
    position: "absolute",
  },
  barsurTypo: {
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
  dantewadaTypo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 18,
    left: 81,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 71,
    left: 220,
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
    left: "85%",
    top: "2.73%",
    right: "6.94%",
    bottom: "94.2%",
    width: "8.06%",
    height: "3.08%",
    position: "absolute",
  },
  battisaTemple1: {
    top: 193,
    left: 96,
    width: 176,
    height: 30,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  battisaTempleChild: {
    top: 222,
    left: 59,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 2,
    width: 257,
  },
  battisaTempleBarsurDantewadIcon: {
    top: 266,
    height: 182,
  },
  battisaTempleItem: {
    top: 468,
    height: 3,
  },
  battisaInHindi: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  thisTempleIs: {
    margin: Margin.m_md,
  },
  battisaInHindiContainer: {
    top: 496,
    fontSize: FontSize.size_sm,
    width: 277,
    height: 321,
    textAlign: "justify",
    left: 38,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  battisaTempleInner: {
    top: 816,
    left: 60,
    width: 315,
    height: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.46%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.54%",
    left: "0.99%",
    position: "absolute",
  },
  barsur: {
    top: 274,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.63%",
    width: "6.29%",
    top: "19%",
    bottom: "77.37%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 380,
    width: 266,
  },
  vectorIcon2: {
    height: "3.97%",
    width: "6.62%",
    top: "12.61%",
    bottom: "83.42%",
    left: "0.33%",
  },
  dantewada: {
    top: 310,
    width: 115,
  },
  jagdalpurRailwayStation: {
    top: 346,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 882,
    width: 23,
    height: 22,
    left: 38,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "50.73%",
    width: "83.89%",
    top: "74.41%",
    right: "5.56%",
    bottom: "-25.14%",
    left: "10.56%",
    position: "absolute",
  },
  lineIcon: {
    top: 78,
    left: 89,
    width: 123,
  },
  battisaTemple: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 781,
    overflow: "hidden",
    width: "100%",
  },
});

export default BattisaTemple;

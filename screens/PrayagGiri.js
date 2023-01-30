import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PrayagGiri = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.prayagGiri}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={styles.prayagGiriChild} />
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu4.png")}
        />
      </Pressable>
      <Text style={styles.prayagGiriBuddha}>Prayag Giri Buddha Vihar</Text>
      <View style={[styles.prayagGiriItem, styles.lineViewBorder]} />
      <Image
        style={[styles.prayagGiriInner, styles.download152Position]}
        resizeMode="cover"
        source={require("../assets/line-211.png")}
      />
      <Image
        style={[styles.download152, styles.download152Position]}
        resizeMode="cover"
        source={require("../assets/download-15-2.png")}
      />
      <Text style={styles.pragyaGiriIs}>
        Pragya Giri is at Dongargarh, Rajnandgaon district, Chhattisgarh, India.
        It is on a hilltop of 1000 feet. This is a Buddha vihara with a big
        Buddha statue facing east. It needs 225 steps to reach the mountain. On
        the top of the hill there is a garden and descriptions on the rock.
      </Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
        <Text style={[styles.rajnandgaon, styles.rajnandgaonTypo]}>
          Rajnandgaon
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.rajnandgaon1Typo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector11.png")}
        />
        <Text style={[styles.rajnandgaon1, styles.rajnandgaon1Typo]}>
          Rajnandgaon
        </Text>
        <Text
          style={[styles.rajnandgaonRailwayStation, styles.rajnandgaonTypo]}
        >
          Rajnandgaon Railway Station
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
  lineViewBorder: {
    height: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  download152Position: {
    left: 0,
    position: "absolute",
  },
  rajnandgaonTypo: {
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
  rajnandgaon1Typo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 20,
    left: 81,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    height: 42,
    width: 297,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  prayagGiriChild: {
    top: 81,
    left: 83,
    borderTopWidth: 1,
    width: 132,
    height: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  yatra: {
    top: 73,
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
    left: "85.83%",
    top: "3.68%",
    right: "6.67%",
    bottom: "92.86%",
    width: "7.5%",
    height: "3.47%",
    position: "absolute",
  },
  prayagGiriBuddha: {
    top: 177,
    left: 40,
    width: 314,
    height: 38,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  prayagGiriItem: {
    top: 214,
    left: 39,
    width: 295,
  },
  prayagGiriInner: {
    top: 473,
    width: 315,
    height: 3,
  },
  download152: {
    top: 265,
    width: 306,
    height: 185,
  },
  pragyaGiriIs: {
    top: 539,
    fontSize: FontSize.size_sm,
    width: 296,
    height: 348,
    textAlign: "justify",
    left: 32,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  lineView: {
    top: 712,
    left: 78,
    width: 297,
  },
  vectorIcon: {
    height: "3.67%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.33%",
    left: "0.99%",
    position: "absolute",
  },
  rajnandgaon: {
    top: 251,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.85%",
    width: "6.29%",
    top: "20.19%",
    bottom: "75.96%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 357,
    width: 266,
  },
  vectorIcon2: {
    height: "4.22%",
    width: "6.62%",
    top: "13.4%",
    bottom: "82.38%",
    left: "0.33%",
  },
  rajnandgaon1: {
    top: 287,
    width: 115,
  },
  rajnandgaonRailwayStation: {
    top: 323,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 808,
    width: 23,
    height: 22,
    left: 32,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "57.03%",
    width: "83.89%",
    top: "81.09%",
    right: "7.22%",
    bottom: "-38.12%",
    left: "8.89%",
    position: "absolute",
  },
  prayagGiri: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 654,
    overflow: "hidden",
    width: "100%",
  },
});

export default PrayagGiri;

import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const KailashCaves = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.kailashCaves}>
      <Image
        style={styles.kailashCaves2Icon}
        resizeMode="cover"
        source={require("../assets/kailashcaves-2.png")}
      />
      <Image
        style={styles.kailashCavesChild}
        resizeMode="cover"
        source={require("../assets/line-30.png")}
      />
      <Text style={styles.bastarIsA}>
        Bastar is a mysterious land with dense forests, sarpin valleys and
        rivers. Kanger Valley National Park has three exceptional caves, the
        Kailash cave is the oldest cave in this area. The cave was discovered on
        March 22, 1993. In the underground caves of Bastar, the Kailash Cave has
        the earliest limestone formations which are very attractive. The known
        length of this cave is 1000 feet with a depth of 120 feet. Due to
        breathtaking limestone structures, it forms a shapes like Shivlinga.
        Stalacates and stalagmites within the cave give it a replica of Kailash.
        These dripstone structures are also worshiped by locals.
      </Text>
      <Image
        style={styles.kailashCavesItem}
        resizeMode="cover"
        source={require("../assets/line-27.png")}
      />
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.kailashCavesInner, styles.lineViewBorder]} />
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu11.png")}
        />
      </Pressable>
      <Text style={[styles.kailashCaves1, styles.yatraTypo]}>
        Kailash Caves
      </Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector27.png")}
        />
        <Text style={[styles.bastar, styles.bastarTypo]}>Bastar</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector28.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.jagdalpurTypo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector29.png")}
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
  jagdalpurTypo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  kailashCaves2Icon: {
    top: 266,
    height: 206,
    width: 297,
    left: 0,
    position: "absolute",
  },
  kailashCavesChild: {
    top: 495,
    width: 291,
    height: 4,
    left: 0,
    position: "absolute",
  },
  bastarIsA: {
    top: 538,
    fontSize: FontSize.size_sm,
    width: 256,
    height: 380,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    left: 41,
    position: "absolute",
  },
  kailashCavesItem: {
    top: 978,
    left: 71,
    width: 315,
    height: 0,
    position: "absolute",
  },
  chhattisgarh: {
    top: 19,
    left: 80,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    height: 42,
    textAlign: "left",
    color: Color.white,
    width: 297,
    position: "absolute",
  },
  kailashCavesInner: {
    top: 80,
    left: 86,
    borderTopWidth: 1,
    width: 126,
    height: 1,
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
    left: "84.72%",
    top: "3.14%",
    right: "7.5%",
    bottom: "94.47%",
    width: "7.78%",
    height: "2.39%",
    position: "absolute",
  },
  kailashCaves1: {
    top: 191,
    left: 106,
    width: 172,
    height: 36,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
  },
  lineView: {
    top: 226,
    left: 79,
    borderTopWidth: 2,
    width: 203,
    height: 2,
  },
  vectorIcon: {
    height: "3.03%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.97%",
    left: "0.99%",
    position: "absolute",
  },
  bastar: {
    top: 330,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.19%",
    width: "6.29%",
    top: "16.68%",
    bottom: "80.13%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 436,
    width: 266,
  },
  vectorIcon2: {
    height: "3.49%",
    width: "6.62%",
    top: "11.07%",
    bottom: "85.44%",
    left: "0.33%",
  },
  jagdalpur: {
    top: 366,
    width: 115,
  },
  jagdalpurRailwayStation: {
    top: 402,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 1060,
    width: 23,
    height: 22,
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "54.2%",
    width: "83.89%",
    top: "84.49%",
    right: "4.72%",
    bottom: "-38.69%",
    left: "11.39%",
    position: "absolute",
  },
  kailashCaves: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 833,
    overflow: "hidden",
    width: "100%",
  },
});

export default KailashCaves;

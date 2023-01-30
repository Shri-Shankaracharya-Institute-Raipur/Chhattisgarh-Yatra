import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MadaiFestival = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.madaiFestival}>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu43.png")}
        />
      </Pressable>
      <Pressable
        style={styles.chhattisgarh}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Text style={styles.chhattisgarh1}>CHHATTISGARH</Text>
      </Pressable>
      <Text style={styles.yatra}>YATRA</Text>
      <View style={styles.madaiFestivalChild} />
      <Image
        style={[styles.images71, styles.images71Position]}
        resizeMode="cover"
        source={require("../assets/images-7-1.png")}
      />
      <Image
        style={[styles.madaiFestivalItem, styles.images71Position]}
        resizeMode="cover"
        source={require("../assets/line-10.png")}
      />
      <View style={[styles.madaiFestivalInner, styles.lineViewBorder]} />
      <Text style={styles.madaiFestivalIs}>
        Madai Festival is one of many popular festivals of Sanskritik
        Chhattisgarh. Madai reflects the rich culture and tradition of
        Chhattisgarh and is celebrated with great enthusiasm and excitement by
        people belonging to Gond Tribe. Thus, it is a tribal festival that's
        celebrated by the tribes of both the 'Kanker and Bastar' regions.
      </Text>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector133.png")}
        />
        <Text style={[styles.jagdalpur, styles.jagdalpurTypo]}>Jagdalpur</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector134.png")}
        />
        <Text
          style={[
            styles.swamiVivekanandInternational,
            styles.pondryBusStandTypo,
          ]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector135.png")}
        />
        <Text style={[styles.pondryBusStand, styles.pondryBusStandTypo]}>
          Pondry Bus Stand
        </Text>
        <Text style={[styles.jagdalpurRailwayStation, styles.jagdalpurTypo]}>
          Jagdalpur Railway Station
        </Text>
        <Image
          style={styles.busIcon}
          resizeMode="cover"
          source={require("../assets/bus.png")}
        />
      </View>
      <Text style={styles.madaiFestival1}>{`Madai Festival `}</Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  images71Position: {
    left: 0,
    position: "absolute",
  },
  lineViewBorder: {
    height: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  jagdalpurTypo: {
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
  pondryBusStandTypo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "82.31%",
    top: "3.36%",
    right: "8.76%",
    bottom: "93%",
    width: "8.93%",
    height: "3.63%",
    position: "absolute",
  },
  chhattisgarh1: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
  },
  chhattisgarh: {
    left: 81,
    top: 17,
    position: "absolute",
  },
  yatra: {
    top: 69,
    left: 220,
    fontFamily: FontFamily.dancingScript,
    height: 33,
    width: 131,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  madaiFestivalChild: {
    top: 77,
    left: 85,
    borderTopWidth: 1,
    height: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    width: 131,
    position: "absolute",
  },
  images71: {
    top: 255,
    width: 323,
    height: 175,
  },
  madaiFestivalItem: {
    top: 471,
    width: 292,
    height: 4,
  },
  madaiFestivalInner: {
    top: 698,
    left: 63,
    width: 329,
  },
  madaiFestivalIs: {
    top: 503,
    left: 24,
    fontSize: FontSize.size_sm,
    width: 315,
    height: 213,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.83%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.17%",
    left: "0.99%",
    position: "absolute",
  },
  jagdalpur: {
    top: 237,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "4.02%",
    width: "6.29%",
    top: "21.08%",
    bottom: "74.9%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 343,
    width: 266,
  },
  vectorIcon2: {
    height: "4.41%",
    width: "6.62%",
    top: "13.99%",
    bottom: "81.6%",
    left: "0.33%",
  },
  pondryBusStand: {
    top: 273,
    width: 115,
  },
  jagdalpurRailwayStation: {
    top: 309,
    width: 170,
    height: 15,
  },
  busIcon: {
    top: 763,
    left: 31,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "53.19%",
    width: "80.97%",
    top: "74.11%",
    right: "10.72%",
    bottom: "-27.3%",
    left: "8.31%",
    position: "absolute",
  },
  madaiFestival1: {
    top: 168,
    left: 33,
    textAlign: "center",
    width: 307,
    height: 32,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    color: Color.white,
    position: "absolute",
  },
  lineView: {
    top: 199,
    left: 96,
    width: 180,
  },
  madaiFestival: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 674,
    overflow: "hidden",
    width: "100%",
  },
});

export default MadaiFestival;

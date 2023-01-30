import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const RajivLochanTemple = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rajivLochanTemple}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/-icon-menu17.png")}
        />
      </Pressable>
      <View style={styles.rajivLochanTempleChild} />
      <Image
        style={[styles.rajivLochanTempleItem, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={styles.rajivLochanTempleInner}
        resizeMode="cover"
        source={require("../assets/line-154.png")}
      />
      <Image
        style={[styles.lineIcon, styles.iconPosition, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-151.png")}
      />
      <Image
        style={[styles.rajivLochan1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/rajiv-lochan-1.png")}
      />
      <Text style={styles.rajivLochanTemple1}>Rajiv Lochan Temple</Text>
      <Text style={styles.rajivLochanTemple2}>
        Rajiv Lochan Temple is located in Rajim and is famous for its rich
        cultural heritage and the beautiful ancient temples. The holy confluence
        of three rivers Mahanadi (Chitrotpala), Pairi and Sondur, called Triveni
        Sangam is at Rajim. Rajim is also known as the “Prayag” of the
        Chhattisgarh.
      </Text>
      <View style={styles.lineParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-192.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector42.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector43.png")}
        />
        <Text
          style={[
            styles.swamiVivekanandInternational,
            styles.raipurRailwayStationTypo,
          ]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector44.png")}
        />
        <Text
          style={[styles.raipurRailwayStation, styles.raipurRailwayStationTypo]}
        >
          Raipur Railway Station
        </Text>
        <Image
          style={[styles.busIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/bus14.png")}
        />
      </View>
      <Text style={[styles.nawaparaRaipur, styles.raipurTypo]}>
        Nawapara, Raipur
      </Text>
      <Text style={[styles.raipur, styles.raipurTypo]}>Raipur</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    width: 300,
    height: 4,
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "94.52%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  raipurRailwayStationTypo: {
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_2xs,
    left: 32,
    textAlign: "justify",
    color: Color.white,
    position: "absolute",
  },
  raipurTypo: {
    left: 61,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 24,
    left: 93,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 75,
    left: 232,
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconMenu: {
    left: "84.62%",
    top: "2.26%",
    right: "6.9%",
    bottom: "94.85%",
    width: "8.49%",
    height: "2.88%",
    position: "absolute",
  },
  rajivLochanTempleChild: {
    top: 82,
    left: 97,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 130,
    height: 1,
    position: "absolute",
  },
  rajivLochanTempleItem: {
    top: 175,
    left: 39,
    height: 4,
    position: "absolute",
  },
  rajivLochanTempleInner: {
    top: 794,
    left: 109,
    width: 268,
    height: 4,
    position: "absolute",
  },
  lineIcon: {
    top: 429,
    height: 4,
  },
  rajivLochan1Icon: {
    top: 202,
    width: 320,
    height: 198,
  },
  rajivLochanTemple1: {
    top: 144,
    left: 75,
    width: 286,
    height: 58,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  rajivLochanTemple2: {
    top: 470,
    left: 57,
    fontSize: FontSize.size_base,
    width: 264,
    height: 258,
    textAlign: "justify",
    fontFamily: FontFamily.inter,
    color: Color.white,
    position: "absolute",
  },
  groupChild: {
    top: 211,
    left: 65,
    width: 283,
    height: 4,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.14%",
    width: "4.66%",
    top: "0%",
    bottom: "96.86%",
    left: "0.82%",
  },
  vectorIcon1: {
    height: "3.3%",
    width: "5.21%",
    top: "21.52%",
    bottom: "75.18%",
    left: "0.27%",
  },
  swamiVivekanandInternational: {
    top: 411,
    width: 266,
    height: 27,
  },
  vectorIcon2: {
    height: "3.61%",
    width: "5.48%",
    top: "14.14%",
    bottom: "82.25%",
    left: "0%",
  },
  raipurRailwayStation: {
    top: 363,
    width: 192,
    height: 25,
  },
  busIcon: {
    top: 310,
    width: 23,
    height: 22,
    overflow: "hidden",
  },
  lineParent: {
    top: 583,
    left: 29,
    width: 365,
    height: 437,
    position: "absolute",
  },
  nawaparaRaipur: {
    top: 858,
    width: 216,
    height: 46,
  },
  raipur: {
    top: 904,
    width: 210,
    height: 42,
  },
  rajivLochanTemple: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1001,
    overflow: "hidden",
    width: "100%",
  },
});

export default RajivLochanTemple;

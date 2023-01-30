import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const TamorPinglaSanctuary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tamorPinglaSanctuary}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.tamorPinglaSanctuaryChild, styles.lineViewBorder]} />
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu48.png")}
        />
      </Pressable>
      <Image
        style={[styles.image5Icon, styles.image5IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={[styles.tamorPinglaSanctuaryItem, styles.image5IconPosition]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={styles.tamorPinglaSanctuaryInner}
        resizeMode="cover"
        source={require("../assets/line-117.png")}
      />
      <Text style={styles.theTamorPingla}>
        The Tamor Pingla Wildlife Sanctuary which is also located in the Surguja
        District is so called because of the two prominent features of this
        piece of land the Tamor Hill and the Pingla Nalla (stream). Its terrain
        is also marked by the Moran River which passes it to finally drain its
        waters into the Govind Ballabh Pant Sagar in Uttar Pradesh. This is a
        slightly larger sanctuary than the Semarsot Wildlife Sanctuary and
        covers a ground of 608.55 sq. kms. The forest cover consists of a mix of
        Sal and other deciduous trees.
      </Text>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector144.png")}
        />
        <Text style={[styles.surajpur, styles.surajpurTypo]}>Surajpur</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector145.png")}
        />
        <Text style={[styles.ranchiInternationalAirport, styles.ambikpurTypo]}>
          Ranchi International Airport
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector146.png")}
        />
        <Text style={[styles.ambikpur, styles.ambikpurTypo]}>Ambikpur</Text>
        <Text style={[styles.surajpurRailwayStation, styles.surajpurTypo]}>
          Surajpur Railway Station
        </Text>
        <Image
          style={styles.busIcon}
          resizeMode="cover"
          source={require("../assets/bus.png")}
        />
      </View>
      <Text style={[styles.tamorPinglaSanctuary1, styles.yatraTypo]}>
        Tamor Pingla Sanctuary
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
  image5IconPosition: {
    left: 2,
    position: "absolute",
  },
  surajpurTypo: {
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
  ambikpurTypo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 28,
    left: 122,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  tamorPinglaSanctuaryChild: {
    top: 88,
    left: 128,
    borderTopWidth: 1,
    width: 133,
    height: 1,
  },
  yatra: {
    top: 79,
    left: 263,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "82.71%",
    top: "3.11%",
    right: "8.18%",
    bottom: "93.37%",
    width: "9.11%",
    height: "3.52%",
    position: "absolute",
  },
  image5Icon: {
    top: 277,
    width: 400,
    height: 303,
  },
  tamorPinglaSanctuaryItem: {
    top: 608,
    width: 300,
    height: 4,
  },
  tamorPinglaSanctuaryInner: {
    top: 907,
    left: 112,
    width: 316,
    height: 0,
    position: "absolute",
  },
  theTamorPingla: {
    top: 633,
    left: 45,
    fontSize: FontSize.size_sm,
    width: 353,
    height: 262,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.21%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.79%",
    left: "0.99%",
    position: "absolute",
  },
  surajpur: {
    top: 306,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.38%",
    width: "6.29%",
    top: "17.68%",
    bottom: "78.94%",
    left: "0.66%",
  },
  ranchiInternationalAirport: {
    top: 412,
    width: 266,
  },
  vectorIcon2: {
    height: "3.7%",
    width: "6.62%",
    top: "11.73%",
    bottom: "84.57%",
    left: "0.33%",
  },
  ambikpur: {
    top: 342,
    width: 115,
  },
  surajpurRailwayStation: {
    top: 378,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 985,
    left: 59,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "50.91%",
    width: "70.56%",
    top: "77.66%",
    right: "15.65%",
    bottom: "-28.57%",
    left: "13.79%",
    position: "absolute",
  },
  tamorPinglaSanctuary1: {
    top: 206,
    left: 40,
    fontFamily: FontFamily.cutive,
    width: 347,
    height: 71,
  },
  lineView: {
    top: 240,
    left: 39,
    borderTopWidth: 2,
    width: 346,
    height: 2,
  },
  tamorPinglaSanctuary: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 840,
    overflow: "hidden",
    width: "100%",
  },
});

export default TamorPinglaSanctuary;

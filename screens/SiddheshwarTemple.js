import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SiddheshwarTemple = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.siddheshwarTemple}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.siddheshwarTempleChild, styles.siddheshwarBorder]} />
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu3.png")}
        />
      </Pressable>
      <Text style={styles.siddheshwarTemple1}>Siddheshwar Temple</Text>
      <View style={[styles.siddheshwarTempleItem, styles.siddheshwarBorder]} />
      <Text style={styles.siddheshwarTempleThis}>
        Siddheshwar Temple, this Shiva temple is located on the embankment of
        Balasamund pond in Palari village, 25 km away from Balodabazar to Raipur
        Road in Balodabazar district of Chhattisgarh State. This temple was
        built in about 7-8th century AD. Made of brick, this temple is
        west-facing.On the entrance of the temple, river Goddess Ganga and
        Yamuna have been displayed in Tribhangaamudra. The Trinity is marking on
        the head of the door. The view of Shiva wedding is beautifully engraved
        on the Sidhn situated at the entrance and marking of the Asht Dikpal on
        the gate branch. Shivalinga named Siddheshwar is installed in the
        sanctum sanctorum. The shikhar part of this temple is embellished with
        the picturesque, gajmukh and vaalyan shapes which are built within the
        Chaitya Gaavaksh. This is a great specimen of existing Chhattisgarh
        brick-built temples. This monument is protected by the State of
        Chhattisgarh.
      </Text>
      <Image
        style={[styles.download142, styles.download142Position]}
        resizeMode="cover"
        source={require("../assets/download-14-2.png")}
      />
      <Image
        style={[styles.siddheshwarTempleInner, styles.download142Position]}
        resizeMode="cover"
        source={require("../assets/line-21.png")}
      />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-22.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector6.png")}
        />
        <Text style={[styles.palari, styles.palariTypo]}>Palari</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={[styles.swamiVivekanandInternational, styles.palari1Typo]}>
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
        <Text style={[styles.palari1, styles.palari1Typo]}>Palari</Text>
        <Text style={[styles.bhatapararaipurRailwayStati, styles.palariTypo]}>
          Bhatapara,Raipur Railway Station
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
  siddheshwarBorder: {
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  download142Position: {
    width: 250,
    left: 0,
    position: "absolute",
  },
  palariTypo: {
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
  palari1Typo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 16,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    left: 81,
    position: "absolute",
  },
  siddheshwarTempleChild: {
    top: 77,
    borderTopWidth: 1,
    width: 129,
    height: 1,
    left: 81,
    borderStyle: "solid",
  },
  yatra: {
    top: 69,
    left: 219,
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
  },
  iconMenu: {
    left: "85.28%",
    top: "1.9%",
    right: "7.22%",
    bottom: "95.5%",
    width: "7.5%",
    height: "2.6%",
    position: "absolute",
  },
  siddheshwarTemple1: {
    top: 182,
    left: 60,
    width: 255,
    height: 36,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  siddheshwarTempleItem: {
    top: 217,
    left: 47,
    borderTopWidth: 2,
    width: 279,
    height: 2,
  },
  siddheshwarTempleThis: {
    top: 598,
    left: 34,
    fontSize: FontSize.size_sm,
    width: 282,
    height: 392,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  download142: {
    top: 266,
    height: 284,
  },
  siddheshwarTempleInner: {
    top: 573,
    height: 3,
  },
  lineIcon: {
    top: 1165,
    left: 121,
    width: 249,
    height: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.72%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "97.28%",
    left: "0.99%",
    position: "absolute",
  },
  palari: {
    top: 386,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "2.86%",
    width: "6.29%",
    top: "14.96%",
    bottom: "82.18%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 492,
    width: 266,
  },
  vectorIcon2: {
    height: "3.13%",
    width: "6.62%",
    top: "9.93%",
    bottom: "86.94%",
    left: "0.33%",
  },
  palari1: {
    top: 422,
    width: 115,
  },
  bhatapararaipurRailwayStati: {
    top: 458,
    width: 216,
    height: 15,
  },
  busIcon: {
    top: 1253,
    left: 29,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "51.96%",
    width: "83.89%",
    top: "86.01%",
    right: "8.06%",
    bottom: "-37.97%",
    left: "8.06%",
    position: "absolute",
  },
  siddheshwarTemple: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 977,
    overflow: "hidden",
    width: "100%",
  },
});

export default SiddheshwarTemple;

import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <Image
        style={[styles.whatsappImage20221223At1, styles.menuChildLayout1]}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20221223-at-139-2.png")}
      />
      <View
        style={[styles.menuChild, styles.menuPosition, styles.menuChildLayout1]}
      />
      <View style={[styles.menuItem, styles.menuPosition]} />
      <Pressable
        style={styles.discoverNow}
        onPress={() => navigation.navigate("DiscoverNow")}
      >
        <Text style={[styles.discoverNow1, styles.festivals1Typo]}>
          DISCOVER NOW
        </Text>
      </Pressable>
      <Text
        style={[styles.accomodation, styles.mapsLayout, styles.festivals1Typo]}
      >
        ACCOMODATION
      </Text>
      <Pressable
        style={styles.festivals}
        onPress={() => navigation.navigate("Festivals")}
      >
        <Text style={[styles.festivals1, styles.festivals1Typo]}>
          FESTIVALS
        </Text>
      </Pressable>
      <Text style={[styles.maps, styles.mapsTypo, styles.mapsLayout]}>
        MAPS
      </Text>
      <Pressable
        style={styles.planATourContainer}
        onPress={() => navigation.navigate("Accomodation")}
      >
        <Text style={[styles.planATour, styles.mapsTypo]}>PLAN A TOUR</Text>
      </Pressable>
      <Image
        style={[styles.menuInner, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.menuInner, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-33.png")}
      />
      <Image
        style={[styles.menuChild1, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.menuChild2, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.menuChild3, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.menuChild4, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.menuChild5, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-4.png")}
      />
      <Pressable
        style={styles.myAccount}
        onPress={() => navigation.navigate("AccountDetails")}
      >
        <Text style={[styles.myAccount1, styles.festivals1Typo]}>
          MY ACCOUNT
        </Text>
      </Pressable>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector169.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector170.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuChildLayout1: {
    width: 344,
    left: 0,
  },
  menuPosition: {
    height: 800,
    top: 0,
    position: "absolute",
  },
  festivals1Typo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_xl,
  },
  mapsLayout: {
    height: 40,
    position: "absolute",
  },
  mapsTypo: {
    width: 234,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_xl,
  },
  menuChildLayout: {
    height: 1,
    width: 232,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  whatsappImage20221223At1: {
    height: 813,
    top: 0,
    left: 0,
    position: "absolute",
  },
  menuChild: {
    backgroundColor: Color.darkslategray_200,
  },
  menuItem: {
    left: 64,
    width: 280,
    backgroundColor: Color.darkslategray_100,
    height: 800,
  },
  discoverNow1: {
    width: 256,
    height: 34,
  },
  discoverNow: {
    top: 218,
    left: 87,
    position: "absolute",
  },
  accomodation: {
    top: 269,
    width: 252,
    left: 85,
  },
  festivals1: {
    width: 236,
    height: 38,
  },
  festivals: {
    top: 326,
    left: 85,
    position: "absolute",
  },
  maps: {
    top: 380,
    left: 88,
  },
  planATour: {
    height: 45,
  },
  planATourContainer: {
    top: 428,
    left: 86,
    position: "absolute",
  },
  menuInner: {
    top: 262,
    left: 87,
  },
  menuChild1: {
    top: 314,
    left: 88,
  },
  menuChild2: {
    top: 369,
    left: 87,
  },
  menuChild3: {
    top: 530,
    left: 86,
  },
  menuChild4: {
    top: 419,
    left: 87,
  },
  menuChild5: {
    top: 472,
    left: 87,
  },
  myAccount1: {
    width: 229,
    height: 44,
  },
  myAccount: {
    top: 481,
    left: 87,
    position: "absolute",
  },
  ellipseIcon: {
    top: 22,
    width: 44,
    height: 43,
    left: 87,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.13%",
    width: "6.94%",
    top: "3.75%",
    right: "66.11%",
    bottom: "93.12%",
    left: "26.94%",
  },
  vectorIcon1: {
    height: "4.5%",
    width: "10.83%",
    top: "2.62%",
    right: "6.94%",
    bottom: "92.88%",
    left: "82.22%",
  },
  menu: {
    flex: 1,
    width: "100%",
    height: 549,
    overflow: "hidden",
    backgroundColor: Color.darkslategray_100,
  },
});

export default Menu;

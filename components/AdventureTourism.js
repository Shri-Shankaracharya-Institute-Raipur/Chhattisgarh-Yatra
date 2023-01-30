import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AdventureTourism = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adventureTourism, styles.iconLayout1]}>
      <View style={styles.chhattisgarhParent}>
        <Text style={[styles.chhattisgarh, styles.yatraFlexBox]}>
          CHHATTISGARH
        </Text>
        <Text style={[styles.yatra, styles.yatraFlexBox]}>YATRA</Text>
        <Pressable
          style={styles.iconMenu}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/-icon-menu40.png")}
          />
        </Pressable>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-114.png")}
        />
      </View>
      <Pressable
        style={[styles.image44, styles.imagePosition1]}
        onPress={() => navigation.navigate("MMFuncity")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-441.png")}
        />
      </Pressable>
      <Text style={[styles.mMFuncity, styles.punoTypo]}>M M Funcity</Text>
      <Pressable
        style={[styles.image45, styles.imagePosition1]}
        onPress={() => navigation.navigate("WonderLand")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-45.png")}
        />
      </Pressable>
      <Text style={[styles.wonderland, styles.punoTypo]}>Wonderland</Text>
      <Pressable
        style={[styles.image46, styles.imagePosition1]}
        onPress={() => navigation.navigate("JungleSafari")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-46.png")}
        />
      </Pressable>
      <Text style={[styles.jungleSafari, styles.jungleSafariTypo]}>
        Jungle Safari
      </Text>
      <Text style={[styles.jungleSafari, styles.jungleSafariTypo]}>
        Jungle Safari
      </Text>
      <Pressable
        style={[styles.image47, styles.imageLayout]}
        onPress={() => navigation.navigate("Puno")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-47.png")}
        />
      </Pressable>
      <Text style={[styles.puno, styles.punoTypo]}>{`Puno `}</Text>
      <Pressable
        style={[styles.image48, styles.imageLayout]}
        onPress={() => navigation.navigate("BubbleIsland")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-48.png")}
        />
      </Pressable>
      <Text style={[styles.bubbleIslandWater, styles.jungleSafariTypo]}>
        Bubble Island Water Park
      </Text>
      <Pressable
        style={[styles.image49, styles.imagePosition]}
        onPress={() => navigation.navigate("GoKarting")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-49.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image50, styles.imagePosition]}
        onPress={() => navigation.navigate("BungeeJumping")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-50.png")}
        />
      </Pressable>
      <Text style={[styles.bungeeJumping, styles.punoTypo]}>
        Bungee Jumping
      </Text>
      <Text style={[styles.goKarting, styles.punoTypo]}>Go Karting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  yatraFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  imagePosition1: {
    left: 30,
    position: "absolute",
  },
  punoTypo: {
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  jungleSafariTypo: {
    height: 76,
    left: 65,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  imageLayout: {
    width: 322,
    position: "absolute",
  },
  imagePosition: {
    width: 326,
    left: 30,
    position: "absolute",
  },
  chhattisgarh: {
    top: 0,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    height: 41,
    left: 0,
    width: 319,
  },
  yatra: {
    top: 53,
    left: 140,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
  },
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  iconMenu: {
    left: "72.1%",
    top: "21.18%",
    right: "19.75%",
    bottom: "44.03%",
    width: "8.15%",
    height: "34.8%",
    position: "absolute",
  },
  groupChild: {
    top: 60,
    width: 131,
    height: 2,
    left: 0,
    position: "absolute",
  },
  chhattisgarhParent: {
    top: 17,
    height: 85,
    width: 319,
    left: 93,
    position: "absolute",
  },
  image44: {
    top: 174,
    width: 302,
    height: 188,
  },
  mMFuncity: {
    top: 382,
    left: 82,
    width: 273,
    height: 92,
  },
  image45: {
    top: 428,
    width: 312,
    height: 236,
  },
  wonderland: {
    top: 686,
    width: 282,
    height: 96,
    left: 93,
  },
  image46: {
    top: 734,
    width: 309,
    height: 196,
  },
  jungleSafari: {
    top: 950,
    width: 265,
  },
  image47: {
    left: 20,
    top: 1026,
    height: 214,
  },
  puno: {
    top: 1260,
    left: 130,
    height: 72,
    width: 265,
  },
  image48: {
    left: 24,
    top: 1310,
    height: 260,
  },
  bubbleIslandWater: {
    top: 1582,
    width: 281,
  },
  image49: {
    top: 1678,
    height: 315,
  },
  image50: {
    top: 2101,
    height: 228,
  },
  bungeeJumping: {
    top: 2351,
    left: 48,
    height: 65,
    width: 265,
  },
  goKarting: {
    top: 2007,
    width: 275,
    height: 79,
    left: 93,
  },
  adventureTourism: {
    backgroundColor: Color.darkslategray_100,
    width: 375,
    height: 2416,
  },
});

export default AdventureTourism;

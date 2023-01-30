import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const WildLifeSanturies = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wildLifeSanturies}>
      <Text style={[styles.chhattisgarh, styles.yatraFlexBox]}>
        CHHATTISGARH
      </Text>
      <View style={styles.wildLifeSanturiesChild} />
      <Text style={[styles.yatra, styles.yatraFlexBox]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/-icon-menu54.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image1, styles.imagePosition1]}
        onPress={() => navigation.navigate("PamedSanctuary")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/image-110.png")}
        />
      </Pressable>
      <Text style={[styles.pamedSanctuary, styles.sanctuaryTypo1]}>
        PAMED SANCTUARY
      </Text>
      <Pressable
        style={[styles.image2, styles.imagePosition1]}
        onPress={() => navigation.navigate("GomardaSanctuary")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/image-210.png")}
        />
      </Pressable>
      <Text style={[styles.gomardaSanctuary, styles.sanctuaryTypo1]}>
        Gomarda Sanctuary
      </Text>
      <Pressable
        style={[styles.badalkholWildlifeSanctuaryJ, styles.imagePosition1]}
        onPress={() => navigation.navigate("BadalKholSanctuary")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/badalkholwildlifesanctuaryjashpurbadalkholwildlifesanctuary3-11.png")}
        />
      </Pressable>
      <Text
        style={[styles.badalkholSanctuary, styles.sanctuaryTypo1]}
      >{`Badalkhol  Sanctuary `}</Text>
      <Pressable
        style={[styles.image3, styles.imagePosition]}
        onPress={() => navigation.navigate("BhoramdeoSanctuary")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/image-310.png")}
        />
      </Pressable>
      <Text style={[styles.bhoramdeoSanctuary, styles.sanctuaryTypo]}>
        Bhoramdeo sanctuary
      </Text>
      <Pressable
        style={[styles.image4, styles.imagePosition]}
        onPress={() => navigation.navigate("BarnawaparaSanctuary")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/image-410.png")}
        />
      </Pressable>
      <Text style={[styles.barnawaparaSanctuary, styles.sanctuaryTypo]}>
        Barnawapara Sanctuary
      </Text>
      <Pressable
        style={[styles.image5, styles.imagePosition]}
        onPress={() => navigation.navigate("TamorPinglaSanctuary")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/image-52.png")}
        />
      </Pressable>
      <Text style={[styles.tamorPinglaSanctuary, styles.sanctuaryTypo1]}>
        Tamor Pingla Sanctuary
      </Text>
      <Pressable
        style={[styles.image6, styles.imagePosition]}
        onPress={() => navigation.navigate("SemarsotSanctuary")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/image-61.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.semarsotSanctuary,
          styles.semarsotSanctuaryPosition,
          styles.sanctuaryTypo1,
        ]}
      >
        Semarsot Sanctuary
      </Text>
      <Text style={[styles.wildLifeSanturiesContainer, styles.yatraFlexBox]}>
        <Text style={styles.text}>{`      `}</Text>
        <Text style={styles.wildLifeSanturies1}> Wild life Santuries</Text>
      </Text>
      <Image
        style={[styles.wildLifeSanturiesItem, styles.semarsotSanctuaryPosition]}
        resizeMode="cover"
        source={require("../assets/line-131.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector165.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  yatraFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  imagePosition1: {
    width: 271,
    left: 46,
    position: "absolute",
  },
  sanctuaryTypo1: {
    fontFamily: FontFamily.cutive,
    textAlign: "left",
    color: Color.white,
  },
  imagePosition: {
    width: 275,
    left: 42,
    position: "absolute",
  },
  sanctuaryTypo: {
    height: 45,
    fontFamily: FontFamily.cutive,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  semarsotSanctuaryPosition: {
    left: 41,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  chhattisgarh: {
    top: 15,
    left: 77,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 293,
    height: 39,
  },
  wildLifeSanturiesChild: {
    top: 77,
    left: 83,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 128,
    height: 1,
    position: "absolute",
  },
  yatra: {
    top: 67,
    left: 216,
    fontFamily: FontFamily.dancingScript,
    width: 129,
    height: 31,
    fontSize: FontSize.size_lg,
  },
  iconMenu: {
    left: "84.44%",
    top: "1.1%",
    right: "5.83%",
    bottom: "97.44%",
    width: "9.72%",
    height: "1.47%",
    position: "absolute",
  },
  image1: {
    top: 326,
    height: 217,
  },
  pamedSanctuary: {
    top: 552,
    left: 49,
    fontSize: FontSize.size_base,
    width: 273,
    height: 72,
    position: "absolute",
  },
  image2: {
    top: 627,
    height: 211,
  },
  gomardaSanctuary: {
    top: 851,
    width: 332,
    height: 52,
    left: 46,
    fontFamily: FontFamily.cutive,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  badalkholWildlifeSanctuaryJ: {
    top: 934,
    height: 199,
  },
  badalkholSanctuary: {
    top: 1141,
    left: 31,
    width: 336,
    height: 60,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  image3: {
    top: 1209,
    height: 216,
  },
  bhoramdeoSanctuary: {
    top: 1444,
    left: 19,
    width: 356,
  },
  image4: {
    top: 1523,
    height: 202,
  },
  barnawaparaSanctuary: {
    top: 1744,
    left: 7,
    width: 376,
  },
  image5: {
    top: 1820,
    height: 189,
  },
  tamorPinglaSanctuary: {
    top: 2031,
    left: 13,
    width: 347,
    height: 71,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  image6: {
    top: 2102,
    height: 204,
  },
  semarsotSanctuary: {
    top: 2325,
    width: 386,
    height: 49,
    fontSize: FontSize.size_lg,
  },
  text: {
    fontSize: FontSize.size_2xl,
  },
  wildLifeSanturies1: {
    fontSize: FontSize.size_xl,
  },
  wildLifeSanturiesContainer: {
    top: 177,
    left: -29,
    fontFamily: FontFamily.robotoSerif,
    width: 383,
    height: 27,
  },
  wildLifeSanturiesItem: {
    top: 239,
    width: 281,
    height: 3,
  },
  vectorIcon: {
    height: "1.38%",
    width: "9.44%",
    top: "1.22%",
    right: "85.56%",
    bottom: "97.4%",
    left: "5%",
    position: "absolute",
  },
  wildLifeSanturies: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1689,
    overflow: "hidden",
    width: "100%",
  },
});

export default WildLifeSanturies;

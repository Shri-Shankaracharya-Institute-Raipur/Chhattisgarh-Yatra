import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MuseumOfAnthropology = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.museumOfAnthropology, styles.iconLayout]}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.museumOfAnthropologyChild, styles.museumBorder]} />
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu9.png")}
        />
      </Pressable>
      <Image
        style={[styles.t2Icon, styles.t2IconPosition]}
        resizeMode="cover"
        source={require("../assets/32311-1526022529t-2.png")}
      />
      <Text
        style={[
          styles.theZonalAnthropological,
          styles.museumOfAnthropology1Typo,
        ]}
      >
        The Zonal Anthropological museum was established in Jagdalpur in 1972,
        to provide an insight into the culture and lifestyle of the Bastar
        tribe. The museum has a brilliant and well-curated collection of
        ethnographic items that shed light on the life of Bastar tribes.
        Artworks depicting their daily life, sculptures, a variety of objects
        like clothes, footwear, headgear, ornaments, wood carvings, weapons,
        utensils and masks among many others can be seen here. It is an
        excellent window to gain an understanding of the lifestyle of ‘Adivasis’
        of Bastar. Whether or not you’re a history buff, this museum is sure to
        raise your curiosity into the life and culture of tribals
      </Text>
      <Image
        style={[styles.museumOfAnthropologyItem, styles.t2IconPosition]}
        resizeMode="cover"
        source={require("../assets/line-29.png")}
      />
      <Text
        style={[
          styles.museumOfAnthropology1,
          styles.museumOfAnthropology1Typo,
          styles.yatraTypo,
        ]}
      >
        Museum of Anthropology
      </Text>
      <View style={[styles.museumOfAnthropologyInner, styles.museumBorder]} />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-27.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  museumBorder: {
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  yatraTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  t2IconPosition: {
    left: 0,
    position: "absolute",
  },
  museumOfAnthropology1Typo: {
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
    left: 82,
    position: "absolute",
  },
  museumOfAnthropologyChild: {
    top: 80,
    borderTopWidth: 1,
    width: 126,
    height: 1,
    left: 82,
    borderColor: "#fff",
    borderStyle: "solid",
  },
  yatra: {
    top: 71,
    left: 212,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
    color: Color.white,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconMenu: {
    left: "85.56%",
    top: "2.45%",
    right: "6.39%",
    bottom: "95.11%",
    width: "8.06%",
    height: "2.45%",
    position: "absolute",
  },
  t2Icon: {
    top: 260,
    width: 295,
    height: 206,
  },
  theZonalAnthropological: {
    top: 541,
    left: 45,
    fontSize: FontSize.size_sm,
    textAlign: "justify",
    width: 260,
    height: 415,
  },
  museumOfAnthropologyItem: {
    top: 484,
    width: 288,
    height: 5,
  },
  museumOfAnthropology1: {
    top: 189,
    left: 34,
    width: 314,
    height: 30,
  },
  museumOfAnthropologyInner: {
    top: 223,
    left: 31,
    borderTopWidth: 2,
    width: 305,
    height: 2,
  },
  lineIcon: {
    top: 995,
    left: 75,
    width: 315,
    height: 0,
    position: "absolute",
  },
  museumOfAnthropology: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 814,
  },
});

export default MuseumOfAnthropology;

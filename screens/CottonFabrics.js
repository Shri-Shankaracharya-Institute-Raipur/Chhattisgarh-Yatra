import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const CottonFabrics = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cottonFabrics}>
      <Text style={[styles.chhattisgarh, styles.yatraFlexBox]}>
        CHHATTISGARH
      </Text>
      <Text style={[styles.yatra, styles.yatraFlexBox]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu26.png")}
        />
      </Pressable>
      <View style={styles.cottonFabricsChild} />
      <Text style={styles.cottonFabrics1}>Cotton Fabrics</Text>
      <Image
        style={styles.cottonFabricsItem}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.image35Icon, styles.kmParentLayout]}
        resizeMode="cover"
        source={require("../assets/image-35.png")}
      />
      <Image
        style={[styles.cottonFabricsInner, styles.busIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-169.png")}
      />
      <Text style={styles.cottonFabricsAre}>
        Cotton Fabrics are one of the famous and attractive handicrafts made by
        the tribals of Bastar. These are made of Kosa thread which is made from
        a kind of worm found in the forest, hand woven and hand printed by
        tribes who trace their lineage to the 14th century weaver-saint-poet
        Kabir. The hand printing is generally done with the natural vegetable
        dye extracted from ail, found in the forest of Bastar. These fabrics
        include cotton saris – well-known as Bastar Kosa Saree, dress materials
        and drapes.
      </Text>
      <View style={[styles.kmParent, styles.kmParentLayout]}>
        <Text style={styles.km}>245.2 Km</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-198.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector60.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector61.png")}
        />
        <Text style={[styles.bastar, styles.bastarTypo]}>Bastar</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector62.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.jagdalPurTypo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector63.png")}
        />
        <Text style={[styles.jagdalPur, styles.jagdalPurTypo]}>Jagdal Pur</Text>
        <Text style={[styles.raipurJagdalpurRailway, styles.bastarTypo]}>
          Raipur /jagdalpur Railway Station
        </Text>
        <Image
          style={[styles.busIcon, styles.busIconPosition]}
          resizeMode="cover"
          source={require("../assets/bus20.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yatraFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  kmParentLayout: {
    width: 337,
    position: "absolute",
  },
  busIconPosition: {
    left: 0,
    position: "absolute",
  },
  bastarTypo: {
    fontSize: FontSize.size_2xs,
    left: 32,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "94.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  jagdalPurTypo: {
    height: 17,
    fontSize: FontSize.size_2xs,
    left: 32,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 19,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    left: 88,
  },
  yatra: {
    top: 72,
    left: 228,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "86.54%",
    top: "2.58%",
    right: "5.22%",
    bottom: "93.78%",
    width: "8.24%",
    height: "3.64%",
    position: "absolute",
  },
  cottonFabricsChild: {
    top: 79,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 130,
    height: 1,
    left: 88,
    position: "absolute",
  },
  cottonFabrics1: {
    top: 125,
    left: 77,
    fontSize: FontSize.size_xl,
    width: 278,
    height: 60,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  cottonFabricsItem: {
    top: 158,
    left: 55,
    width: 300,
    height: 4,
    position: "absolute",
  },
  image35Icon: {
    top: 177,
    left: 8,
    height: 282,
  },
  cottonFabricsInner: {
    top: 472,
    width: 299,
    height: 4,
  },
  cottonFabricsAre: {
    top: 494,
    left: 37,
    width: 302,
    height: 460,
    textAlign: "justify",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  km: {
    top: 192,
    left: 38,
    width: 79,
    height: 15,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  groupChild: {
    top: 171,
    left: 67,
    width: 270,
    height: 3,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.57%",
    width: "6.68%",
    top: "0%",
    right: "93.32%",
    bottom: "96.43%",
    left: "0%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "4.76%",
    width: "4.55%",
    top: "6.72%",
    right: "94.65%",
    bottom: "88.53%",
    left: "0.8%",
    position: "absolute",
  },
  bastar: {
    top: 232,
    width: 93,
    height: 22,
  },
  vectorIcon2: {
    height: "4.99%",
    width: "5.08%",
    top: "32.88%",
    bottom: "62.13%",
    left: "0.53%",
  },
  swamiVivekanandInternational: {
    top: 347,
    width: 240,
  },
  vectorIcon3: {
    height: "5.47%",
    width: "5.35%",
    top: "24.08%",
    bottom: "70.45%",
    left: "0.27%",
  },
  jagdalPur: {
    top: 271,
    width: 104,
  },
  raipurJagdalpurRailway: {
    top: 310,
    width: 173,
    height: 16,
  },
  busIcon: {
    top: 261,
    width: 21,
    height: 24,
    overflow: "hidden",
  },
  kmParent: {
    top: 759,
    left: 26,
    height: 364,
  },
  cottonFabrics: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1164,
    overflow: "hidden",
    width: "100%",
  },
});

export default CottonFabrics;

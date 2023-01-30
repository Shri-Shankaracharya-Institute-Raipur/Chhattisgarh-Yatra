import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const GodnaArt = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.godnaArt}>
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
          source={require("../assets/-icon-menu29.png")}
        />
      </Pressable>
      <Image
        style={styles.godnaArtChild}
        resizeMode="cover"
        source={require("../assets/line-110.png")}
      />
      <Image
        style={styles.image38Icon}
        resizeMode="cover"
        source={require("../assets/image-38.png")}
      />
      <Text style={styles.godnaArt1}>Godna Art</Text>
      <Image
        style={styles.godnaArtItem}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.godnaArtInner, styles.busIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-169.png")}
      />
      <Text style={styles.godnaIsPossibly}>
        Godna is possibly the most pioneering art form, currently practiced by a
        handful of women in Jangala in Chhattisgarh. Ladies of this village
        paint traditional tattoo motifs on textiles. They use natural color
        obtained from the forest and combine them with acrylic paint to make it
        more stable on fabric.
      </Text>
      <View style={styles.kmParent}>
        <Text style={[styles.km, styles.kmTypo]}>72.2 Km</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-1914.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector68.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector69.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector70.png")}
        />
        <Text style={[styles.swamiVivekanandInternational, styles.durgTypo]}>
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector71.png")}
        />
        <Text style={[styles.durg, styles.durgTypo]}>Durg</Text>
        <Text style={styles.durgRailwayStation}>Durg Railway Station</Text>
        <Image
          style={[styles.busIcon, styles.busIconPosition]}
          resizeMode="cover"
          source={require("../assets/bus22.png")}
        />
      </View>
      <Text style={[styles.rajnandgaon, styles.kmTypo]}>Rajnandgaon</Text>
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
  busIconPosition: {
    left: 0,
    position: "absolute",
  },
  kmTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
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
  durgTypo: {
    height: 27,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 18,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    left: 100,
    color: Color.white,
  },
  yatra: {
    top: 72,
    left: 240,
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
    left: "86.29%",
    top: "2.54%",
    right: "5.91%",
    bottom: "94.35%",
    width: "7.8%",
    height: "3.11%",
    position: "absolute",
  },
  godnaArtChild: {
    top: 78,
    left: 106,
    width: 124,
    height: 2,
    position: "absolute",
  },
  image38Icon: {
    top: 204,
    left: 5,
    width: 302,
    height: 230,
    position: "absolute",
  },
  godnaArt1: {
    top: 136,
    fontSize: FontSize.size_xl,
    width: 294,
    height: 68,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    left: 100,
    position: "absolute",
  },
  godnaArtItem: {
    top: 182,
    width: 300,
    height: 4,
    left: 39,
    position: "absolute",
  },
  godnaArtInner: {
    top: 456,
    width: 299,
    height: 4,
  },
  godnaIsPossibly: {
    top: 492,
    width: 290,
    height: 476,
    textAlign: "justify",
    fontSize: FontSize.size_base,
    left: 39,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  km: {
    top: 29,
    left: 42,
  },
  groupChild: {
    top: -2,
    left: 74,
    width: 280,
    height: 4,
    position: "absolute",
  },
  vectorIcon: {
    height: "8.56%",
    width: "6.68%",
    top: "9.25%",
    right: "93.32%",
    bottom: "82.19%",
    left: "0%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "11.4%",
    width: "4.55%",
    top: "25.34%",
    right: "94.65%",
    bottom: "63.26%",
    left: "0.8%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "11.97%",
    width: "5.08%",
    top: "88.03%",
    bottom: "0%",
    left: "0.53%",
  },
  swamiVivekanandInternational: {
    top: 265,
    width: 266,
  },
  vectorIcon3: {
    height: "13.11%",
    width: "5.35%",
    top: "66.95%",
    bottom: "19.95%",
    left: "0.27%",
  },
  durg: {
    top: 149,
    width: 115,
  },
  durgRailwayStation: {
    top: 209,
    width: 192,
    height: 25,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  busIcon: {
    top: 134,
    width: 23,
    height: 37,
    overflow: "hidden",
  },
  kmParent: {
    top: 764,
    left: 18,
    width: 374,
    height: 292,
    position: "absolute",
  },
  rajnandgaon: {
    top: 848,
    left: 54,
    width: 146,
    height: 23,
  },
  godnaArt: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1182,
    overflow: "hidden",
    width: "100%",
  },
});

export default GodnaArt;

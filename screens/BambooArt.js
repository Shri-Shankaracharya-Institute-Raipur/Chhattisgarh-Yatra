import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const BambooArt = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bambooArt}>
      <Text
        style={[
          styles.chhattisgarh,
          styles.yatraFlexBox,
          styles.chhattisgarhPosition,
        ]}
      >
        CHHATTISGARH
      </Text>
      <Text style={[styles.yatra, styles.yatraLayout, styles.yatraFlexBox]}>
        YATRA
      </Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu27.png")}
        />
      </Pressable>
      <Image
        style={[styles.bambooArtChild, styles.chhattisgarhPosition]}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Image
        style={styles.image36Icon}
        resizeMode="cover"
        source={require("../assets/image-36.png")}
      />
      <Text style={styles.bambooArt1}>Bamboo Art</Text>
      <Image
        style={[styles.bambooArtItem, styles.bambooLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.bambooArtInner, styles.bambooLayout]}
        resizeMode="cover"
        source={require("../assets/line-199.png")}
      />
      <Text style={styles.bambooThicketsAre}>
        Bamboo thickets are common sight in the State and tribals of
        Chhattisgarh have been putting their craftsmanship to work.
        Craftsmanship of Chhattisgarh tribals can be seen from varying articles
        of craft produce they make out of bamboo. Articles for daily as well as
        decorative use are produced by these artisans. Some of the well known
        Bamboo produce include agricultural implements, fishing traps, hunting
        tools and baskets.
      </Text>
      <View style={styles.kmParent}>
        <Text style={styles.km}>245.2 Km</Text>
        <Image
          style={[styles.groupChild, styles.bambooLayout]}
          resizeMode="cover"
          source={require("../assets/line-1910.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector64.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector65.png")}
        />
        <Text style={[styles.bastar, styles.bastarTypo]}>Bastar</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector66.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.jagdalPurTypo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector67.png")}
        />
        <Text style={[styles.jagdalPur, styles.jagdalPurTypo]}>Jagdal Pur</Text>
        <Text style={[styles.raipurJagdalpurRailway, styles.bastarTypo]}>
          Raipur /jagdalpur Railway Station
        </Text>
        <Image
          style={[styles.busIcon, styles.yatraLayout]}
          resizeMode="cover"
          source={require("../assets/bus21.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yatraFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  chhattisgarhPosition: {
    left: 94,
    position: "absolute",
  },
  yatraLayout: {
    height: 32,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bambooLayout: {
    height: 4,
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
    height: 23,
    fontSize: FontSize.size_2xs,
    left: 32,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 16,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
  },
  yatra: {
    top: 69,
    left: 226,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "84.7%",
    top: "1.92%",
    right: "6.86%",
    bottom: "95.28%",
    width: "8.44%",
    height: "2.8%",
    position: "absolute",
  },
  bambooArtChild: {
    width: 126,
    height: 3,
    top: 78,
  },
  image36Icon: {
    top: 182,
    width: 331,
    height: 234,
    left: 0,
    position: "absolute",
  },
  bambooArt1: {
    top: 122,
    left: 71,
    fontSize: FontSize.size_xl,
    width: 274,
    height: 60,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  bambooArtItem: {
    top: 162,
    left: 24,
    width: 300,
  },
  bambooArtInner: {
    top: 432,
    width: 289,
    left: 0,
  },
  bambooThicketsAre: {
    top: 460,
    left: 38,
    width: 304,
    height: 354,
    textAlign: "justify",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  km: {
    top: 25,
    left: 37,
    width: 77,
    height: 40,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  groupChild: {
    top: -2,
    left: 65,
    width: 263,
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
  bastar: {
    width: 90,
    height: 29,
    top: 78,
  },
  vectorIcon2: {
    height: "11.97%",
    width: "5.08%",
    top: "88.03%",
    bottom: "0%",
    left: "0.53%",
  },
  swamiVivekanandInternational: {
    top: 233,
    width: 233,
  },
  vectorIcon3: {
    height: "13.11%",
    width: "5.35%",
    top: "66.95%",
    bottom: "19.95%",
    left: "0.27%",
  },
  jagdalPur: {
    top: 131,
    width: 101,
  },
  raipurJagdalpurRailway: {
    top: 183,
    width: 168,
    height: 22,
  },
  busIcon: {
    top: 117,
    width: 20,
    left: 0,
    overflow: "hidden",
  },
  kmParent: {
    top: 870,
    left: 47,
    width: 328,
    height: 256,
    position: "absolute",
  },
  bambooArt: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1462,
    overflow: "hidden",
    width: "100%",
  },
});

export default BambooArt;

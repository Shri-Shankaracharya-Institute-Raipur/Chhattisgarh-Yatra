import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const WaterFalls = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.waterFalls, styles.iconLayout1]}>
      <Text style={[styles.chhattisgarh, styles.waterfallsFlexBox]}>
        CHHATTISGARH
      </Text>
      <Image
        style={styles.waterFallsChild}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.yatra, styles.waterfallTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/-icon-menu.png")}
        />
      </Pressable>
      <Image
        style={[styles.image7Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-7.png")}
      />
      <Text style={[styles.jatmaiGhatarani, styles.waterfallTypo]}>
        <Text style={styles.text}>{`     `}</Text>
        <Text style={styles.jatmaiGhatarani1}> Jatmai Ghatarani</Text>
      </Text>
      <Image
        style={[styles.image8Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <Text style={[styles.chitrakoteWaterfall, styles.waterfallTypo]}>
        Chitrakote Waterfall
      </Text>
      <Image
        style={[styles.image9Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <Text style={[styles.tirathgarhFalls, styles.waterfallTypo]}>
        Tirathgarh Falls
      </Text>
      <Image
        style={[styles.image10Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-10.png")}
      />
      <Text style={[styles.amritDharaWaterfall, styles.waterfallTypo]}>
        Amrit Dhara Waterfall
      </Text>
      <Image
        style={[styles.image11Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-11.png")}
      />
      <Text style={[styles.tamraGhoomarWaterfalls, styles.waterfallTypo]}>
        Tamra Ghoomar Waterfalls
      </Text>
      <Image
        style={styles.image12Icon}
        resizeMode="cover"
        source={require("../assets/image-12.png")}
      />
      <Text style={[styles.tigerPointWaterfalls, styles.waterfallsTypo]}>
        {" "}
        Tiger Point Waterfalls
      </Text>
      <Image
        style={[styles.image13Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-13.png")}
      />
      <Text style={[styles.siyaDeviWaterfalls, styles.waterfallsTypo]}>
        Siya Devi Waterfalls
      </Text>
      <Image
        style={styles.image14Icon}
        resizeMode="cover"
        source={require("../assets/image-14.png")}
      />
      <Text style={[styles.ranidharaWaterfall, styles.waterfallTypo]}>
        {" "}
        Ranidhara Waterfall
      </Text>
      <Text style={[styles.waterfalls, styles.waterfallsFlexBox]}>
        WATERFALLS
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  waterfallsFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  waterfallTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  iconLayout: {
    width: 331,
    position: "absolute",
  },
  waterfallsTypo: {
    height: 60,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 26,
    left: 73,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
  },
  waterFallsChild: {
    top: 84,
    left: 78,
    width: 128,
    height: 2,
    position: "absolute",
  },
  yatra: {
    top: 76,
    left: 211,
    width: 131,
    height: 33,
    fontFamily: FontFamily.dancingScript,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconMenu: {
    left: "81.08%",
    top: "1.56%",
    right: "10.27%",
    bottom: "97.04%",
    width: "8.65%",
    height: "1.4%",
    position: "absolute",
  },
  image7Icon: {
    top: 204,
    height: 230,
    left: 15,
  },
  text: {
    fontFamily: FontFamily.dancingScript,
  },
  jatmaiGhatarani1: {
    fontFamily: FontFamily.robotoSerif,
  },
  jatmaiGhatarani: {
    top: 444,
    left: 37,
    height: 64,
    width: 352,
  },
  image8Icon: {
    top: 485,
    height: 212,
    left: 15,
  },
  chitrakoteWaterfall: {
    top: 707,
    left: 60,
    width: 360,
    height: 44,
    fontFamily: FontFamily.robotoSerif,
  },
  image9Icon: {
    top: 751,
    height: 235,
    left: 15,
  },
  tirathgarhFalls: {
    top: 996,
    left: 91,
    width: 358,
    fontFamily: FontFamily.robotoSerif,
    height: 42,
  },
  image10Icon: {
    top: 1038,
    height: 228,
    left: 15,
  },
  amritDharaWaterfall: {
    top: 1276,
    left: 49,
    width: 344,
    height: 52,
    fontFamily: FontFamily.robotoSerif,
  },
  image11Icon: {
    top: 1318,
    left: 13,
    height: 194,
  },
  tamraGhoomarWaterfalls: {
    top: 1524,
    left: 28,
    width: 316,
    height: 48,
    fontFamily: FontFamily.robotoSerif,
  },
  image12Icon: {
    top: 1582,
    width: 329,
    height: 188,
    left: 15,
    position: "absolute",
  },
  tigerPointWaterfalls: {
    top: 1791,
    left: 5,
    width: 352,
  },
  image13Icon: {
    top: 1838,
    left: 16,
    height: 237,
  },
  siyaDeviWaterfalls: {
    top: 2085,
    left: 63,
    width: 354,
  },
  image14Icon: {
    top: 2127,
    left: 17,
    width: 328,
    height: 227,
    position: "absolute",
  },
  ranidharaWaterfall: {
    top: 2364,
    left: -10,
    width: 382,
    height: 46,
    fontFamily: FontFamily.robotoSerif,
  },
  waterfalls: {
    top: 144,
    left: 58,
    fontSize: FontSize.size_2xl,
    width: 250,
    height: 32,
    fontFamily: FontFamily.robotoSerif,
  },
  waterFalls: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1715,
  },
});

export default WaterFalls;

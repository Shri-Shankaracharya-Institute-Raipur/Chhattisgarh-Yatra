import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ChandrahashiniDeviTemple = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chandrahashiniDeviTemple}>
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
          source={require("../assets/-icon-menu19.png")}
        />
      </Pressable>
      <View style={styles.chandrahashiniDeviTempleChild} />
      <Image
        style={[
          styles.chandrahashiniDeviTempleItem,
          styles.chandrahashiniLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[
          styles.chandrahashiniDeviTempleInner,
          styles.chandrahashiniLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/line-17.png")}
      />
      <Image
        style={[styles.lineIcon, styles.chandrahashiniLayout]}
        resizeMode="cover"
        source={require("../assets/line-171.png")}
      />
      <Text
        style={[
          styles.chandrahashiniDeviTemple1,
          styles.image19IconLayout,
          styles.deviTypo,
        ]}
      >
        Chandrahashini Devi Temple
      </Text>
      <Image
        style={[styles.image19Icon, styles.image19IconLayout]}
        resizeMode="cover"
        source={require("../assets/image-19.png")}
      />
      <Text style={[styles.chandrahasiniDeviTemple, styles.deviTypo]}>
        Chandrahasini Devi temple is situated on the bank of Mahanadi. A very
        big fate is being organized here every year on the eve of Navratri.It is
        also famous as a tourist place. People from other state like Orissa are
        also visiting this place. Day by day it is becoming a big place for holy
        as well as tourist place.
      </Text>
      <Image
        style={[
          styles.chandrahashiniDeviTempleInner,
          styles.chandrahashiniLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/line-17.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector48.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector49.png")}
      />
      <Text style={styles.swamiVivekanandInternational}>
        Swami Vivekanand International Airpot
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector50.png")}
      />
      <Text
        style={[
          styles.janjgirNailaAndChampa,
          styles.champaTypo,
          styles.janjgirPosition,
        ]}
      >
        Janjgir-Naila and Champa is nearest Railway station
      </Text>
      <Image
        style={styles.busIcon}
        resizeMode="cover"
        source={require("../assets/bus16.png")}
      />
      <Text style={[styles.dabharajanjgirChampa, styles.champaTypo]}>
        DABHARA,janjgir-champa
      </Text>
      <Text
        style={[
          styles.janjgirNailaAndChampa1,
          styles.champaTypo,
          styles.janjgirPosition,
        ]}
      >
        Janjgir-Naila and Champa
      </Text>
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
  chandrahashiniLayout: {
    height: 4,
    position: "absolute",
  },
  image19IconLayout: {
    width: 338,
    position: "absolute",
  },
  deviTypo: {
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
  },
  vectorIconPosition: {
    right: "88.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  champaTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  janjgirPosition: {
    left: 72,
    fontSize: FontSize.size_xs,
  },
  chhattisgarh: {
    top: 19,
    left: 98,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
  },
  yatra: {
    top: 73,
    left: 236,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
    fontSize: FontSize.size_lg,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "85.9%",
    top: "2.26%",
    right: "6.91%",
    bottom: "94.99%",
    width: "7.18%",
    height: "2.75%",
    position: "absolute",
  },
  chandrahashiniDeviTempleChild: {
    top: 81,
    left: 102,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 132,
    height: 1,
    position: "absolute",
  },
  chandrahashiniDeviTempleItem: {
    top: 162,
    left: 38,
    width: 300,
  },
  chandrahashiniDeviTempleInner: {
    top: 713,
    left: 100,
    width: 276,
  },
  lineIcon: {
    top: 409,
    width: 258,
    left: 0,
  },
  chandrahashiniDeviTemple1: {
    top: 125,
    left: 14,
    height: 61,
    fontSize: FontSize.size_lg,
  },
  image19Icon: {
    top: 186,
    height: 200,
    left: 0,
  },
  chandrahasiniDeviTemple: {
    top: 437,
    left: 52,
    fontSize: FontSize.size_base,
    height: 280,
    width: 300,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.28%",
    width: "4.52%",
    top: "58.75%",
    right: "88.3%",
    bottom: "38.96%",
    left: "7.18%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.4%",
    width: "5.05%",
    top: "72.41%",
    bottom: "25.19%",
    left: "6.91%",
  },
  swamiVivekanandInternational: {
    top: 1063,
    fontSize: FontSize.size_2xs,
    width: 266,
    height: 27,
    textAlign: "justify",
    left: 72,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIcon2: {
    height: "2.63%",
    width: "5.32%",
    top: "67.95%",
    bottom: "29.43%",
    left: "6.65%",
  },
  janjgirNailaAndChampa: {
    top: 1009,
    width: 192,
    height: 25,
  },
  busIcon: {
    top: 921,
    left: 26,
    width: 23,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  dabharajanjgirChampa: {
    top: 856,
    left: 68,
    width: 210,
    height: 52,
  },
  janjgirNailaAndChampa1: {
    top: 933,
    width: 256,
    height: 57,
  },
  chandrahashiniDeviTemple: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1001,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChandrahashiniDeviTemple;

import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  View,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Danteshwari = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.danteshwari}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu15.png")}
        />
      </Pressable>
      <View style={styles.danteshwariChild} />
      <Image
        style={[styles.danteshwariItem, styles.danteshwariLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.danteshwariInner, styles.danteshwariLayout]}
        resizeMode="cover"
        source={require("../assets/line-151.png")}
      />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-162.png")}
      />
      <Image
        style={styles.image17Icon}
        resizeMode="cover"
        source={require("../assets/image-17.png")}
      />
      <Text style={styles.danteshwariTemple}>Danteshwari temple</Text>
      <Text style={styles.danteshwariTempleIsContainer}>
        {`Danteshwari Temple is temple dedicated to Goddess Danteshwari, and is one of the 52 `}
        <Text>Shakti Peethas</Text>
        {`, shrines of `}
        <Text>Shakti</Text>
        {`, the divine feminine, spread across `}
        <Text>India</Text>
        {`. The temple built in the 14th century, is situated in `}
        <Text>Dantewada</Text>
        {`, a town situated 80 km from `}
        <Text>Jagdalpur</Text>
        {` `}
        <Text>Tehsil</Text>
        {`, `}
        <Text>Chhattisgarh</Text>
        {`. Dantewada is named after the Goddess Danteshwari, the presiding deity of the earlier `}
        <Text>Kakatiya</Text>
        {` rulers. Traditionally she is the Kuldevi (family goddess) of `}
        <Text>Bastar state</Text>
      </Text>
      <View style={styles.swamiVivekanandInternationalParent}>
        <Text
          style={[styles.swamiVivekanandInternational, styles.dantewada1Typo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Text style={[styles.jagdalpurRailwayStation, styles.dantewadaTypo]}>
          Jagdalpur Railway Station
        </Text>
      </View>
      <Text style={[styles.dantewada, styles.dantewadaTypo]}>Dantewada</Text>
      <Text style={[styles.dantewada1, styles.dantewada1Typo]}>Dantewada</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector36.png")}
      />
      <Image
        style={styles.busIcon}
        resizeMode="cover"
        source={require("../assets/bus.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector38.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  danteshwariLayout: {
    height: 4,
    width: 300,
    position: "absolute",
  },
  dantewada1Typo: {
    height: 10,
    fontSize: FontSize.size_2xs,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  dantewadaTypo: {
    height: 9,
    fontSize: FontSize.size_2xs,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "7.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chhattisgarh: {
    top: 21,
    left: 94,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 76,
    left: 230,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
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
    left: "85.68%",
    top: "2.46%",
    right: "7.26%",
    bottom: "94.16%",
    width: "7.07%",
    height: "3.39%",
    position: "absolute",
  },
  danteshwariChild: {
    top: 84,
    left: 101,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 122,
    height: 1,
    position: "absolute",
  },
  danteshwariItem: {
    top: 167,
    left: 38,
  },
  danteshwariInner: {
    top: 426,
    left: 0,
  },
  lineIcon: {
    top: 836,
    left: 87,
    height: 0,
    width: 300,
    position: "absolute",
  },
  image17Icon: {
    top: 234,
    width: 323,
    height: 172,
    left: 0,
    position: "absolute",
  },
  danteshwariTemple: {
    top: 137,
    left: 61,
    width: 303,
    height: 50,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  danteshwariTempleIsContainer: {
    top: 458,
    left: 19,
    fontSize: FontSize.size_base,
    width: 338,
    height: 348,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  swamiVivekanandInternational: {
    top: 34,
    width: 255,
    left: 0,
  },
  jagdalpurRailwayStation: {
    top: 0,
    width: 174,
    left: 0,
  },
  swamiVivekanandInternationalParent: {
    top: 943,
    height: 44,
    width: 255,
    left: 59,
    position: "absolute",
  },
  dantewada: {
    top: 874,
    width: 85,
    left: 59,
  },
  dantewada1: {
    top: 906,
    width: 77,
    left: 59,
  },
  vectorIcon: {
    height: "1.69%",
    width: "4.51%",
    top: "73.24%",
    right: "87.53%",
    bottom: "25.06%",
    left: "7.96%",
    position: "absolute",
  },
  busIcon: {
    top: 900,
    left: 27,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "1.95%",
    width: "5.31%",
    top: "79.25%",
    right: "87%",
    bottom: "18.8%",
  },
  vectorIcon2: {
    height: "1.78%",
    width: "5.04%",
    top: "82.64%",
    right: "87.27%",
    bottom: "15.58%",
  },
  danteshwari: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 811,
    overflow: "hidden",
    width: "100%",
  },
});

export default Danteshwari;

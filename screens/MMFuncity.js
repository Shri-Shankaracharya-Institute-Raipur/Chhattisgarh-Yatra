import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Margin } from "../GlobalStyles";

const MMFuncity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mmFuncity}>
      <View style={styles.chhattisgarhParent}>
        <Text style={[styles.chhattisgarh, styles.yatraClr]}>CHHATTISGARH</Text>
        <Text style={[styles.yatra, styles.yatraClr]}>YATRA</Text>
        <Pressable
          style={styles.iconMenu}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-menu33.png")}
          />
        </Pressable>
        <View style={styles.groupChild} />
      </View>
      <Image
        style={styles.image44Icon}
        resizeMode="cover"
        source={require("../assets/image-44.png")}
      />
      <Text style={styles.mmFuncity1}>MM Funcity</Text>
      <Image
        style={styles.mmFuncityChild}
        resizeMode="cover"
        source={require("../assets/line-1926.png")}
      />
      <Text style={[styles.text, styles.containerTypo, styles.textPosition]}>
        `
      </Text>
      <View style={styles.timingsMmFunCityIsOpenParent}>
        <Text style={[styles.timingsMmContainer, styles.containerTypo]}>
          <Text style={styles.timingsMm}>
            Timings : MM Fun City is open from 10:30 AM to 7 PM on weekdays and
            from 10:30 AM to 8 PM on weekends (Saturday and Sunday).
          </Text>
          <Text style={styles.restaurantTimings1030Am}>
            Restaurant Timings:10:30 AM to 10:30 PM on all days.
          </Text>
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector100.png")}
        />
        <Text style={[styles.ticketPricesContainer, styles.containerTypo]}>
          <Text style={styles.timingsMm}>Ticket Prices :</Text>
          <Text style={styles.restaurantTimings1030Am}> 450-550/person.</Text>
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector101.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector102.png")}
        />
        <Text
          style={[
            styles.baktaraVillageGodhi,
            styles.containerTypo,
            styles.textPosition,
          ]}
        >
          Baktara Village Godhi Road Nava Gaon, Arang, Chhattisgarh 492101
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yatraClr: {
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  containerTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  textPosition: {
    left: 42,
    fontSize: FontSize.size_base,
  },
  chhattisgarh: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    height: 39,
    textAlign: "left",
    left: 0,
    top: 0,
    width: 319,
  },
  yatra: {
    top: 53,
    left: 137,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 30,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconMenu: {
    left: "71.16%",
    top: "16.86%",
    right: "20.38%",
    bottom: "36.42%",
    width: "8.46%",
    height: "46.72%",
    position: "absolute",
  },
  groupChild: {
    top: 63,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 129,
    height: 1,
    left: 0,
    position: "absolute",
  },
  chhattisgarhParent: {
    top: 17,
    left: 82,
    height: 83,
    width: 319,
    position: "absolute",
  },
  image44Icon: {
    top: 128,
    left: 23,
    width: 302,
    height: 238,
    position: "absolute",
  },
  mmFuncity1: {
    top: 382,
    left: 84,
    fontSize: FontSize.size_xl,
    width: 261,
    height: 70,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  mmFuncityChild: {
    top: 428,
    left: 28,
    width: 300,
    height: 4,
    position: "absolute",
  },
  text: {
    top: 456,
    textAlign: "justify",
    width: 286,
    height: 468,
  },
  timingsMm: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  restaurantTimings1030Am: {
    margin: Margin.m_md,
  },
  timingsMmContainer: {
    left: 39,
    width: 216,
    height: 232,
    textAlign: "left",
    top: 0,
  },
  vectorIcon: {
    height: "3.97%",
    width: "9.5%",
    top: "0%",
    right: "90.11%",
    bottom: "96.03%",
    left: "0.39%",
    position: "absolute",
  },
  ticketPricesContainer: {
    top: 274,
    left: 33,
    whiteSpace: "pre-wrap",
    width: 222,
    height: 52,
    textAlign: "left",
  },
  vectorIcon1: {
    height: "2.16%",
    width: "9.8%",
    top: "43.85%",
    right: "90.2%",
    bottom: "53.99%",
    left: "0%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "4.31%",
    width: "6.67%",
    top: "58.99%",
    right: "88.24%",
    bottom: "36.7%",
    left: "5.1%",
    position: "absolute",
  },
  baktaraVillageGodhi: {
    top: 374,
    width: 197,
    height: 260,
    textAlign: "left",
  },
  timingsMmFunCityIsOpenParent: {
    top: 942,
    left: 29,
    width: 255,
    height: 634,
    position: "absolute",
  },
  mmFuncity: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1434,
    overflow: "hidden",
    width: "100%",
  },
});

export default MMFuncity;

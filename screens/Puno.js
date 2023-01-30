import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Margin } from "../GlobalStyles";

const Puno = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.puno}>
      <Text style={[styles.chhattisgarh, styles.yatraClr]}>CHHATTISGARH</Text>
      <Text style={[styles.yatra, styles.yatraClr]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu36.png")}
        />
      </Pressable>
      <Image
        style={styles.punoChild}
        resizeMode="cover"
        source={require("../assets/line-113.png")}
      />
      <Image
        style={styles.image47Icon}
        resizeMode="cover"
        source={require("../assets/image-47.png")}
      />
      <Text style={styles.puno1}>PUNO</Text>
      <Image
        style={styles.punoItem}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Text style={[styles.inRaipurPuno, styles.inRaipurPunoTypo]}>
        In Raipur, PUNO is a must-visit location if you're looking for a place
        to have a good time with your family. With a variety of fun games and
        activities, this indoor trampoline park enables you to spend as much
        time as possible with your children. Participate in exciting activities
        like the Rope Course, Ninja Course, Slam Dunk, and Donut Slide to have a
        remarkable experience unlike any other.
      </Text>
      <Text style={[styles.timing1230Pm, styles.inRaipurPunoTypo]}>
        Timing- 12:30 PM- 10:00 PM (Available slot timings at an interval of
        every 30 minutes from 12:30am – 8:30pm)
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector100.png")}
      />
      <Text style={[styles.ticketPricesContainer, styles.inRaipurPunoTypo]}>
        <Text style={styles.ticketPrices}>Ticket Prices :</Text>
        <Text style={styles.ticketPrices}> Entry Ticket-</Text>
        <Text style={styles.ticketPrices}> 90 min - 750/adult</Text>
        <Text style={styles.ticketPrices}>120 min - 1050/adult</Text>
        <Text style={styles.ticketPrices}>150 min - 1350/adult.</Text>
        <Text style={styles.ticketPrices}> </Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector101.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector102.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector112.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector112.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector112.png")}
      />
      <Text
        style={[styles.fantasySquare7783, styles.inRaipurPunoTypo]}
      >{`Fantasy Square, 778/3 & 778/52 Opposite Ambuja Mall, Vidhan Sabha Rd, Mowa, Raipur, Chhattisgarh 492007`}</Text>
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
  inRaipurPunoTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "14.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    left: "21.67%",
    right: "74.44%",
    width: "3.89%",
    height: "0.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chhattisgarh: {
    top: 21,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
    left: 85,
  },
  yatra: {
    top: 72,
    left: 222,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconMenu: {
    left: "86.67%",
    top: "2.16%",
    right: "5.28%",
    bottom: "94.98%",
    width: "8.06%",
    height: "2.86%",
    position: "absolute",
  },
  punoChild: {
    top: 79,
    width: 128,
    height: 2,
    left: 85,
    position: "absolute",
  },
  image47Icon: {
    top: 130,
    left: 26,
    width: 322,
    height: 214,
    position: "absolute",
  },
  puno1: {
    top: 360,
    fontSize: FontSize.size_xl,
    width: 274,
    height: 66,
    fontFamily: FontFamily.robotoSerif,
    left: 100,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  punoItem: {
    top: 400,
    left: 24,
    width: 300,
    height: 4,
    position: "absolute",
  },
  inRaipurPuno: {
    top: 427,
    left: 52,
    textAlign: "justify",
    width: 272,
    height: 386,
  },
  timing1230Pm: {
    top: 836,
    left: 92,
    width: 216,
    height: 75,
    textAlign: "left",
  },
  vectorIcon: {
    height: "1.75%",
    width: "6.73%",
    top: "58.26%",
    right: "78.27%",
    bottom: "39.99%",
    left: "15%",
    position: "absolute",
  },
  ticketPrices: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text: {
    margin: Margin.m_md,
  },
  ticketPricesContainer: {
    top: 1007,
    whiteSpace: "pre-wrap",
    width: 214,
    height: 126,
    left: 100,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  vectorIcon1: {
    height: "0.95%",
    width: "6.94%",
    top: "70.94%",
    right: "78.61%",
    bottom: "28.11%",
  },
  vectorIcon2: {
    height: "1.9%",
    width: "4.72%",
    top: "81.05%",
    right: "80.83%",
    bottom: "17.05%",
  },
  vectorIcon3: {
    top: "73.66%",
    bottom: "25.51%",
  },
  vectorIcon4: {
    top: "75.33%",
    bottom: "23.83%",
  },
  vectorIcon5: {
    top: "77%",
    bottom: "22.16%",
  },
  fantasySquare7783: {
    top: 1161,
    left: 88,
    width: 220,
    height: 176,
    textAlign: "left",
  },
  puno: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1435,
    overflow: "hidden",
    width: "100%",
  },
});

export default Puno;

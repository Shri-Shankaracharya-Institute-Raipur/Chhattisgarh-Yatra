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
import { Color, FontSize, FontFamily, Margin } from "../GlobalStyles";

const BubbleIsland = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bubbleIsland}>
      <Text style={[styles.chhattisgarh, styles.yatraClr]}>CHHATTISGARH</Text>
      <Text style={[styles.yatra, styles.yatraClr]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu37.png")}
        />
      </Pressable>
      <View style={styles.bubbleIslandChild} />
      <Image
        style={styles.image48Icon}
        resizeMode="cover"
        source={require("../assets/image-48.png")}
      />
      <Text style={styles.bubbleIslandWater}>Bubble Island Water Park</Text>
      <Image
        style={[styles.bubbleIslandItem, styles.bubbleIslandItemPosition]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <View
        style={[
          styles.theBestPlaceForFunAmusemWrapper,
          styles.bubbleIslandItemPosition,
        ]}
      >
        <Text
          style={[styles.theBestPlaceContainer, styles.timingEveryday1000Typo]}
        >
          <Text style={styles.theBestPlace}>
            The best place for fun, amusement, and relaxation for you and your
            entire family as well as your friends and coworkers is A S FUN.
            tucked up against a lush slope about two kilometres from Bilaspur's
            main settlement. For "u" to spend leisure time in a luxurious
            setting with top-notch amenities, A S Fun is the perfect location.
          </Text>
          <Text
            style={styles.fromEngagingIn}
          >{`From engaging in energising sports to amusing our guests, A S Fun provides a full range of amenities. We provide you with the freedom and room to unwind however you like. This is an introduction. The Salvo The Spa, Illume The Disc, Gym, and other amenities are part of the exclusive club "The Patricians." "Classic Cuisine Celebration" with "Moti- Mahal" and "Bikano," "Bubble Island," a single location for amusements/waterpark & entertainment`}</Text>
        </Text>
      </View>
      <Text style={[styles.timingEveryday1000, styles.timingEveryday1000Typo]}>
        Timing- Everyday 10.00 AM – 07.00 PM
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector100.png")}
      />
      <Text style={[styles.ticketPricesContainer, styles.containerTypo]}>
        <Text style={styles.theBestPlace}>Ticket Prices :</Text>
        <Text style={styles.theBestPlace}> Adult (PER HEAD) – Rs. 540.00</Text>
        <Text style={styles.fromEngagingIn}>
          Childran (PER HEAD) – Rs. 440.00
        </Text>
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
      <Text style={[styles.aSFunContainer, styles.containerTypo]}>
        <Text style={styles.theBestPlace}>
          A S Fun Pvt Ltd, Sirgitti, Bilaspur-Chhattisgarh - 495004, Sector C
          Industrial Area, Sirgitti
        </Text>
        <Text style={styles.fromEngagingIn}>
          <Text>Water Parks ,</Text>
          {` `}
          <Text>Amusement Parks</Text>
        </Text>
      </Text>
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
  bubbleIslandItemPosition: {
    left: 36,
    position: "absolute",
  },
  timingEveryday1000Typo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  containerTypo: {
    left: 94,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "3.89%",
    height: "0.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chhattisgarh: {
    top: 16,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
    left: 86,
  },
  yatra: {
    top: 67,
    left: 218,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "86.67%",
    top: "2.24%",
    right: "6.11%",
    bottom: "93.68%",
    width: "7.22%",
    height: "4.08%",
    position: "absolute",
  },
  bubbleIslandChild: {
    top: 76,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 128,
    height: 1,
    left: 86,
    position: "absolute",
  },
  image48Icon: {
    top: 130,
    left: 26,
    width: 322,
    height: 260,
    position: "absolute",
  },
  bubbleIslandWater: {
    top: 400,
    left: 88,
    fontSize: FontSize.size_xl,
    width: 267,
    height: 76,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  bubbleIslandItem: {
    top: 484,
    width: 300,
    height: 4,
  },
  theBestPlace: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  fromEngagingIn: {
    margin: Margin.m_md,
  },
  theBestPlaceContainer: {
    top: 2,
    left: 10,
    textAlign: "justify",
    width: 316,
    height: 628,
  },
  theBestPlaceForFunAmusemWrapper: {
    top: 497,
    width: 326,
    height: 718,
    overflow: "hidden",
  },
  timingEveryday1000: {
    top: 1161,
    left: 84,
    width: 216,
    height: 75,
    textAlign: "left",
  },
  vectorIcon: {
    height: "1.41%",
    width: "6.73%",
    top: "64.9%",
    right: "80.49%",
    bottom: "33.7%",
    left: "12.78%",
    position: "absolute",
  },
  ticketPricesContainer: {
    top: 1262,
    width: 222,
    height: 122,
  },
  vectorIcon1: {
    height: "0.77%",
    width: "6.94%",
    top: "71.16%",
    right: "79.44%",
    bottom: "28.08%",
    left: "13.61%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "1.53%",
    width: "4.72%",
    top: "78.2%",
    right: "78.06%",
    bottom: "20.27%",
    left: "17.22%",
    position: "absolute",
  },
  aSFunContainer: {
    top: 1400,
    width: 197,
    height: 237,
  },
  vectorIcon3: {
    top: "72.5%",
    right: "75.56%",
    bottom: "26.83%",
    left: "20.56%",
  },
  vectorIcon4: {
    top: "74.73%",
    right: "74.72%",
    bottom: "24.59%",
    left: "21.39%",
  },
  bubbleIsland: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1789,
    overflow: "hidden",
    width: "100%",
  },
});

export default BubbleIsland;

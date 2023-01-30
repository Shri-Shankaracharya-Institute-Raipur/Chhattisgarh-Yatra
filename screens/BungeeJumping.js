import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Margin } from "../GlobalStyles";

const BungeeJumping = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bungeeJumping}>
      <Image
        style={styles.image50Icon}
        resizeMode="cover"
        source={require("../assets/image-50.png")}
      />
      <Text style={[styles.bungeeJumping1, styles.yatraClr]}>
        Bungee Jumping
      </Text>
      <Image
        style={styles.bungeeJumpingChild}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Text style={[styles.locatedInThe, styles.containerTypo]}>
        Located in the wilderness, Jagdalpur is the perfect place for any nature
        lovers. It is rich in natural flora and fauna. Thus, it is an amazing
        place to go bungee jumping. Bungee jumping is not for the weak hearts.
        Considered to be one of the crazy, adventurous sports in chhattisgarh,
        Bungee Jumping in Jagdalpur is one of the best in India. While the place
        is pleasant to be visited at any time of the year, it is advisable to go
        Bungee Jumping during October to March. The average height of the jump
        would be 30 meters.
      </Text>
      <Text style={[styles.timing1000amT0Container, styles.containerTypo]}>
        <Text
          style={styles.timing1000amT0}
        >{`Timing- 10.00am t0        `}</Text>
        <Text style={styles.pmAccording}> 4.00pm. (according to slots)</Text>
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector126.png")}
      />
      <Text style={[styles.ticketPricesContainer, styles.containerTypo]}>
        <Text style={styles.timing1000amT0}>Ticket Prices :</Text>
        <Text style={styles.timing1000amT0}>
          {" "}
          Approximate price: The cost for bungee jumping in Jagdalpur will total
          up to approximately Rs. 300 to 500.
        </Text>
        <Text style={styles.pmAccording}>
          Best time to visit: Though one can go for this sport anytime
          throughout the year and have a pleasant experience, but the
          recommended time to try bungee jumping in Jagdalpur will be in between
          the months of October and March.
        </Text>
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector127.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector128.png")}
      />
      <Text style={[styles.jagdalpur, styles.containerTypo]}>Jagdalpur.</Text>
      <View style={styles.chhattisgarhParent}>
        <Text style={[styles.chhattisgarh, styles.yatraClr]}>CHHATTISGARH</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-114.png")}
        />
        <Text style={[styles.yatra, styles.yatraClr]}>YATRA</Text>
        <Pressable
          style={styles.iconMenu}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-menu39.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector129.png")}
        />
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
  containerTypo: {
    fontSize: FontSize.size_base,
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  image50Icon: {
    top: 146,
    left: 19,
    width: 326,
    height: 228,
    position: "absolute",
  },
  bungeeJumping1: {
    top: 390,
    left: 54,
    fontSize: FontSize.size_xl,
    width: 265,
    height: 65,
    textAlign: "left",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
  },
  bungeeJumpingChild: {
    top: 446,
    left: 37,
    width: 300,
    height: 4,
    position: "absolute",
  },
  locatedInThe: {
    top: 468,
    left: 24,
    textAlign: "justify",
    width: 313,
    height: 550,
  },
  timing1000amT0: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pmAccording: {
    margin: Margin.m_md,
  },
  timing1000amT0Container: {
    top: 914,
    left: 75,
    whiteSpace: "pre-wrap",
    width: 216,
    height: 75,
    textAlign: "left",
  },
  vectorIcon: {
    height: "1.75%",
    width: "6.73%",
    top: "53.14%",
    right: "80.49%",
    bottom: "45.11%",
    left: "12.78%",
    position: "absolute",
  },
  ticketPricesContainer: {
    top: 1015,
    left: 85,
    width: 222,
    height: 122,
    textAlign: "left",
  },
  vectorIcon1: {
    height: "0.95%",
    width: "6.94%",
    top: "59.19%",
    right: "79.17%",
    bottom: "39.86%",
    left: "13.89%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "1.91%",
    width: "4.72%",
    top: "90.23%",
    right: "80.28%",
    bottom: "7.86%",
    left: "15%",
    position: "absolute",
  },
  jagdalpur: {
    top: 1552,
    left: 110,
    width: 197,
    height: 108,
    textAlign: "left",
  },
  chhattisgarh: {
    top: 0,
    left: 68,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 274,
    height: 44,
    textAlign: "left",
  },
  groupChild: {
    top: 57,
    left: 69,
    width: 131,
    height: 2,
    position: "absolute",
  },
  yatra: {
    top: 51,
    left: 205,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 121,
    height: 34,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  iconMenu: {
    left: "88.15%",
    top: "5.37%",
    right: "0%",
    bottom: "44.86%",
    width: "11.85%",
    height: "49.78%",
    position: "absolute",
  },
  vectorIcon3: {
    height: "44.12%",
    width: "10.12%",
    top: "16.68%",
    right: "89.88%",
    bottom: "39.2%",
    left: "0%",
    position: "absolute",
  },
  chhattisgarhParent: {
    top: 12,
    left: 8,
    width: 346,
    height: 85,
    position: "absolute",
  },
  bungeeJumping: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1803,
    overflow: "hidden",
    width: "100%",
  },
});

export default BungeeJumping;

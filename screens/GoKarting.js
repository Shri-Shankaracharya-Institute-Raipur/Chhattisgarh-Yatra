import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Margin } from "../GlobalStyles";

const GoKarting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.goKarting}>
      <Text style={[styles.chhattisgarh, styles.yatraClr]}>CHHATTISGARH</Text>
      <Text style={[styles.yatra, styles.yatraClr]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu38.png")}
        />
      </Pressable>
      <View style={styles.goKartingChild} />
      <Image
        style={styles.image49Icon}
        resizeMode="cover"
        source={require("../assets/image-49.png")}
      />
      <Text style={styles.goKarting1}>Go Karting</Text>
      <Image
        style={styles.goKartingItem}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Text style={[styles.goKartingIs, styles.containerTypo]}>
        Go Karting is one of the happening adventure sports in Chhattisgarh. Go
        Karting is one splendid, adventure experience for people of all ages.
        While Bungee can be desirable only for hardcore adventurous people, Go
        Karting is for anyone who loves to have fun. Raipur, Chhattisgarh is the
        best place to go karting. While there are a lot of places where you can
        do go karting, you need to pick the best among those.
      </Text>
      <Text style={[styles.timing1100amT0Container, styles.containerTypo]}>
        <Text
          style={styles.timing1100amT0}
        >{`Timing- 11.00am t0        `}</Text>
        <Text style={styles.pm}>{`                 11.00pm. `}</Text>
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector100.png")}
      />
      <Text style={[styles.ticketPricesContainer, styles.containerTypo]}>
        <Text style={styles.timing1100amT0}>Ticket Prices :</Text>
        <Text style={styles.timing1100amT0}>Gear :200-2500</Text>
        <Text style={styles.timing1100amT0}>Practice:250-500 per day</Text>
        <Text style={styles.pm}>Race:350-700 per day</Text>
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
      <Text style={[styles.area36ClubContainer, styles.containerTypo]}>
        <Text style={styles.timing1100amT0}>Area 36 Club</Text>
        <Text style={styles.pm}>
          VIP Road, Mana, raipur-chhattisgarh - 492015, Airport Road
        </Text>
      </Text>
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
  vectorIconLayout: {
    left: "26.39%",
    right: "69.72%",
    width: "3.89%",
    height: "0.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chhattisgarh: {
    top: 11,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
    left: 76,
  },
  yatra: {
    top: 68,
    left: 213,
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
    left: "85.56%",
    top: "1.67%",
    right: "6.67%",
    bottom: "95.61%",
    width: "7.78%",
    height: "2.72%",
    position: "absolute",
  },
  goKartingChild: {
    top: 76,
    left: 81,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 127,
    height: 1,
    position: "absolute",
  },
  image49Icon: {
    top: 130,
    left: 17,
    width: 326,
    height: 315,
    position: "absolute",
  },
  goKarting1: {
    top: 461,
    left: 88,
    fontSize: FontSize.size_xl,
    width: 275,
    height: 79,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  goKartingItem: {
    top: 501,
    left: 45,
    width: 300,
    height: 4,
    position: "absolute",
  },
  goKartingIs: {
    top: 515,
    textAlign: "justify",
    width: 267,
    height: 416,
    left: 76,
  },
  timing1100amT0: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pm: {
    margin: Margin.m_md,
  },
  timing1100amT0Container: {
    top: 947,
    left: 114,
    whiteSpace: "pre-wrap",
    width: 216,
    height: 75,
    textAlign: "left",
  },
  vectorIcon: {
    height: "1.75%",
    width: "6.73%",
    top: "65.99%",
    right: "72.16%",
    bottom: "32.25%",
    left: "21.11%",
    position: "absolute",
  },
  ticketPricesContainer: {
    top: 1048,
    left: 124,
    width: 222,
    height: 122,
    textAlign: "left",
  },
  vectorIcon1: {
    height: "0.95%",
    width: "6.94%",
    top: "72.54%",
    right: "72.22%",
    bottom: "26.5%",
    left: "20.83%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "1.9%",
    width: "4.72%",
    top: "82.86%",
    right: "73.33%",
    bottom: "15.24%",
    left: "21.94%",
    position: "absolute",
  },
  vectorIcon3: {
    top: "75.05%",
    bottom: "24.11%",
  },
  vectorIcon4: {
    top: "76.86%",
    bottom: "22.3%",
  },
  vectorIcon5: {
    top: "79.86%",
    bottom: "19.3%",
  },
  area36ClubContainer: {
    top: 1183,
    left: 110,
    width: 200,
    height: 188,
    textAlign: "left",
  },
  goKarting: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1435,
    overflow: "hidden",
    width: "100%",
  },
});

export default GoKarting;

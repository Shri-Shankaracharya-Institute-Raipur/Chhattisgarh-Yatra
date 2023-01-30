import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Margin } from "../GlobalStyles";

const WonderLand = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wonderland}>
      <Text style={[styles.chhattisgarh, styles.yatraClr]}>CHHATTISGARH</Text>
      <Text style={[styles.yatra, styles.yatraClr]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu34.png")}
        />
      </Pressable>
      <Image
        style={styles.wonderlandChild}
        resizeMode="cover"
        source={require("../assets/line-111.png")}
      />
      <Image
        style={styles.image45Icon}
        resizeMode="cover"
        source={require("../assets/image-45.png")}
      />
      <Text style={styles.wonderland1}>Wonderland</Text>
      <Image
        style={styles.wonderlandItem}
        resizeMode="cover"
        source={require("../assets/line-1926.png")}
      />
      <Text style={[styles.wonderlandParkIsContainer, styles.containerTypo]}>
        <Text style={styles.wonderlandParkIs}>
          wonderland park is your one-stop destination for unlimited fun,
          laughter and joys. This place with its fantastic environment and
          sceneries has been known to attract not just local people but all
          those who are visiting Raipur.
        </Text>
        <Text style={styles.whetherYouAre}>
          Whether you are someone who enjoys the thrill of twisted and turned
          water slides or someone who loves spending hours in the pool with
          their loved ones, this place has everything to offer. With a state of
          the art and updated pool and rides not just for the adults but for the
          kids as well, this place, by all means, is a must-visit.
        </Text>
      </Text>
      <Text style={[styles.amTo600Container, styles.amTo600ContainerTypo]}>
        <Text style={styles.wonderlandParkIs}>10:00 AM to 6:00 PM</Text>
        <Text style={styles.whetherYouAre}>Everyday</Text>
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector100.png")}
      />
      <Text style={[styles.ticketPricesContainer, styles.containerTypo]}>
        <Text style={styles.wonderlandParkIs}>Ticket Prices :</Text>
        <Text style={styles.whetherYouAre}> 450-550/person.</Text>
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector101.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector102.png")}
      />
      <Text style={[styles.es2IndraprasthaColony, styles.amTo600ContainerTypo]}>
        ES2, Indraprastha Colony, Raipur, Opposite Honda Showroom, Chhattisgarh
        492013
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
  amTo600ContainerTypo: {
    left: 77,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "10.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chhattisgarh: {
    top: 13,
    left: 82,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
  },
  yatra: {
    top: 66,
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
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconMenu: {
    left: "85.56%",
    top: "1.81%",
    right: "6.39%",
    bottom: "95.4%",
    width: "8.06%",
    height: "2.79%",
    position: "absolute",
  },
  wonderlandChild: {
    top: 73,
    left: 89,
    width: 121,
    height: 2,
    position: "absolute",
  },
  image45Icon: {
    top: 127,
    left: 33,
    width: 312,
    height: 236,
    position: "absolute",
  },
  wonderland1: {
    top: 383,
    left: 96,
    fontSize: FontSize.size_xl,
    width: 282,
    height: 96,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  wonderlandItem: {
    top: 428,
    left: 39,
    width: 300,
    height: 4,
    position: "absolute",
  },
  wonderlandParkIs: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  whetherYouAre: {
    margin: Margin.m_md,
  },
  wonderlandParkIsContainer: {
    top: 467,
    left: 36,
    textAlign: "justify",
    width: 295,
    height: 480,
  },
  amTo600Container: {
    top: 1081,
    width: 216,
    height: 50,
  },
  vectorIcon: {
    height: "1.75%",
    width: "6.73%",
    top: "74.63%",
    right: "82.44%",
    bottom: "23.61%",
  },
  ticketPricesContainer: {
    top: 1151,
    left: 95,
    whiteSpace: "pre-wrap",
    width: 222,
    height: 52,
    textAlign: "left",
  },
  vectorIcon1: {
    height: "0.95%",
    width: "6.94%",
    top: "80.98%",
    right: "82.22%",
    bottom: "18.07%",
  },
  vectorIcon2: {
    height: "1.9%",
    width: "4.72%",
    top: "86.55%",
    right: "83.61%",
    bottom: "11.54%",
    left: "11.67%",
    position: "absolute",
  },
  es2IndraprasthaColony: {
    top: 1241,
    width: 240,
    height: 132,
  },
  wonderland: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1435,
    overflow: "hidden",
    width: "100%",
  },
});

export default WonderLand;

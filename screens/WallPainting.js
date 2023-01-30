import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const WallPainting = () => {
  return (
    <View style={styles.wallPainting}>
      <Text style={styles.wallPainting1}>WALL PAINTING</Text>
      <Image
        style={[styles.wallPaintingChild, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.wallPaintingItem, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/line-169.png")}
      />
      <Image
        style={styles.image42Icon}
        resizeMode="cover"
        source={require("../assets/image-42.png")}
      />
      <Text style={styles.eachPaintingInContainer}>
        <Text style={styles.eachPaintingIn}>
          Each painting in Chhattisgarh is associated with a ritual or
          tradition. These priceless artefacts depict images of the tribes,
          their culture and lifestyle. This art is very special to the tribes of
          Chhattisgarh and an indispensable part of each occasion, from child
          birth to marriages.Tourists visiting Chhattisgarh are left mesmerised
          at the sight of these paintings and they often take this part of
          Chhattisgarh’s rich heritage with them.
        </Text>
      </Text>
      <View style={styles.lineParent}>
        <Image
          style={[styles.groupChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/line-1923.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector68.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector69.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector70.png")}
        />
        <Text
          style={[
            styles.swamiVivekanandInternational,
            styles.raipurdurgRailwayStationTypo,
          ]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector71.png")}
        />
        <Text
          style={[
            styles.raipurdurgRailwayStation,
            styles.raipurdurgRailwayStationTypo,
          ]}
        >
          Raipur/Durg Railway Station
        </Text>
        <Image
          style={[styles.busIcon, styles.busIconLayout]}
          resizeMode="cover"
          source={require("../assets/bus22.png")}
        />
      </View>
      <Text style={[styles.km, styles.kmTypo]}>335.9 Km</Text>
      <Text style={[styles.sarguja, styles.kmTypo]}>Sarguja</Text>
      <Text style={[styles.raipurdurg, styles.busIconLayout, styles.kmTypo]}>
        Raipur,Durg
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 4,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    right: "94.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  raipurdurgRailwayStationTypo: {
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  busIconLayout: {
    height: 37,
    position: "absolute",
  },
  kmTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
  },
  wallPainting1: {
    top: 123,
    left: 38,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  wallPaintingChild: {
    top: 163,
    width: 300,
    left: 45,
    height: 4,
  },
  wallPaintingItem: {
    top: 467,
    width: 299,
    left: 0,
  },
  image42Icon: {
    top: 186,
    width: 355,
    height: 236,
    left: 0,
    position: "absolute",
  },
  eachPaintingIn: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  eachPaintingInContainer: {
    top: 487,
    height: 376,
    textAlign: "justify",
    fontSize: FontSize.size_base,
    width: 300,
    left: 45,
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  groupChild: {
    top: -2,
    left: 74,
    width: 281,
  },
  vectorIcon: {
    height: "8.56%",
    width: "6.68%",
    top: "9.25%",
    right: "93.32%",
    bottom: "82.19%",
    left: "0%",
  },
  vectorIcon1: {
    height: "11.4%",
    width: "4.55%",
    top: "25.34%",
    right: "94.65%",
    bottom: "63.26%",
    left: "0.8%",
  },
  vectorIcon2: {
    height: "11.97%",
    width: "5.08%",
    top: "88.03%",
    bottom: "0%",
    left: "0.53%",
  },
  swamiVivekanandInternational: {
    top: 265,
    width: 266,
    height: 27,
  },
  vectorIcon3: {
    height: "13.11%",
    width: "5.35%",
    top: "66.95%",
    bottom: "19.95%",
    left: "0.27%",
  },
  raipurdurgRailwayStation: {
    top: 209,
    width: 192,
    height: 25,
  },
  busIcon: {
    top: 134,
    width: 23,
    left: 0,
    overflow: "hidden",
  },
  lineParent: {
    top: 885,
    left: 24,
    width: 374,
    height: 292,
    position: "absolute",
  },
  km: {
    top: 907,
    left: 80,
    width: 204,
    height: 30,
    position: "absolute",
  },
  sarguja: {
    top: 957,
    left: 78,
    width: 160,
    height: 35,
    position: "absolute",
  },
  raipurdurg: {
    top: 1019,
    left: 84,
    width: 168,
  },
  wallPainting: {
    backgroundColor: Color.darkslategray_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 1217,
    overflow: "hidden",
  },
});

export default WallPainting;

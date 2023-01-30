import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const PamedSanctuary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pamedSanctuary}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.pamedSanctuaryChild, styles.pamedBorder]} />
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={[styles.iconMenu, styles.iconPosition]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu53.png")}
        />
      </Pressable>
      <Image
        style={[styles.image1Icon, styles.image1IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.pamedSanctuaryItem, styles.image1IconPosition]}
        resizeMode="cover"
        source={require("../assets/line-109.png")}
      />
      <Text style={styles.gomardaSanctuary}>Gomarda Sanctuary</Text>
      <Text style={styles.gomardaSanctuary}>Gomarda Sanctuary</Text>
      <View style={[styles.pamedSanctuaryInner, styles.pamedBorder]} />
      <View style={styles.rectangleView} />
      <Text style={styles.thePamedWildlife}>
        The Pamed Wildlife Sanctuary is an important wildlife reserve placed in
        Dantewada spread over an area of 262 sq km. Pamed Wildlife Sanctuary has
        some precious trees like Sal and teak. There are mixed forests creating
        a different aura about the place. Here you find the chital or the
        spotted deer, Indian Gazelle and the chinkara. Those who are interested
        in wildlife will never forget the images of the deer running all around
        the sanctuary.
      </Text>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-1112.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector160.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector161.png")}
      />
      <Text
        style={[
          styles.swamiVivekanandInternational,
          styles.jagdalpurRailwayStationTypo,
        ]}
      >
        Swami Vivekanand International Airpot
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector162.png")}
      />
      <Text style={[styles.pondryBusStand, styles.bijapurTypo]}>
        Pondry Bus Stand
      </Text>
      <Text
        style={[
          styles.jagdalpurRailwayStation,
          styles.jagdalpurRailwayStationTypo,
        ]}
      >
        Jagdalpur Railway Station
      </Text>
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector163.png")}
      />
      <Text style={[styles.bijapur, styles.bijapurTypo]}>Bijapur</Text>
      <Text style={styles.pamedSanctuary1}>PAMED SANCTUARY</Text>
      <Image
        style={[styles.vectorIcon4, styles.iconLayout, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector164.png")}
      />
      <View style={styles.arrowCircleLeft} />
    </View>
  );
};

const styles = StyleSheet.create({
  pamedBorder: {
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  iconPosition: {
    bottom: "92.71%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  image1IconPosition: {
    left: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "87.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  jagdalpurRailwayStationTypo: {
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_2xs,
    left: 66,
    textAlign: "justify",
    color: Color.white,
    position: "absolute",
  },
  bijapurTypo: {
    width: 115,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_2xs,
    left: 66,
    textAlign: "justify",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 22,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    left: 115,
    position: "absolute",
  },
  pamedSanctuaryChild: {
    top: 81,
    borderTopWidth: 1,
    width: 133,
    height: 1,
    left: 115,
    borderColor: "#fff",
    borderStyle: "solid",
  },
  yatra: {
    top: 73,
    left: 253,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
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
    left: "82.71%",
    top: "3.1%",
    right: "7.86%",
    width: "9.43%",
    height: "4.2%",
  },
  image1Icon: {
    top: 280,
    width: 335,
    height: 215,
  },
  pamedSanctuaryItem: {
    top: 514,
    width: 286,
    height: 4,
  },
  gomardaSanctuary: {
    top: 698,
    left: 44,
    width: 332,
    height: 52,
    fontFamily: FontFamily.cutive,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  pamedSanctuaryInner: {
    top: 235,
    left: 74,
    borderTopWidth: 2,
    width: 280,
    height: 2,
  },
  rectangleView: {
    width: 343,
    height: 286,
    top: 539,
    left: 0,
    position: "absolute",
    backgroundColor: Color.darkslategray_100,
  },
  thePamedWildlife: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    width: 325,
    height: 261,
    textAlign: "justify",
    left: 81,
    top: 539,
    color: Color.white,
    position: "absolute",
  },
  lineIcon: {
    top: 752,
    left: 108,
    width: 329,
    height: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "2%",
    width: "4.01%",
    top: "80.62%",
    right: "88.21%",
    bottom: "17.38%",
    left: "7.78%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.1%",
    width: "4.48%",
    top: "91.61%",
    bottom: "6.29%",
    left: "7.55%",
  },
  swamiVivekanandInternational: {
    top: 922,
    width: 266,
    height: 16,
  },
  vectorIcon2: {
    height: "2.3%",
    width: "4.72%",
    top: "87.91%",
    bottom: "9.79%",
    left: "7.31%",
  },
  pondryBusStand: {
    top: 852,
    height: 16,
  },
  jagdalpurRailwayStation: {
    top: 888,
    width: 170,
    height: 15,
  },
  vectorIcon3: {
    height: "2.2%",
    width: "5.42%",
    top: "84.22%",
    right: "87.5%",
    bottom: "13.59%",
    left: "7.08%",
    position: "absolute",
  },
  bijapur: {
    top: 815,
    height: 10,
  },
  pamedSanctuary1: {
    top: 200,
    fontSize: FontSize.size_base,
    width: 273,
    height: 72,
    left: 81,
    fontFamily: FontFamily.cutive,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  vectorIcon4: {
    height: "3.8%",
    width: "8.88%",
    top: "3.5%",
    right: "79.44%",
    left: "11.68%",
  },
  arrowCircleLeft: {
    top: 131,
    left: 75,
    backgroundColor: Color.gray,
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  pamedSanctuary: {
    flex: 1,
    height: 688,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.darkslategray_100,
  },
});

export default PamedSanctuary;

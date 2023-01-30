import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const WoodCarving = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.woodCarving}>
      <View style={styles.chhattisgarhParent}>
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
            source={require("../assets/-icon-menu31.png")}
          />
        </Pressable>
        <View style={styles.groupChild} />
      </View>
      <Text style={styles.woodCarving1}>WOOD CARVING</Text>
      <Image
        style={[styles.woodCarvingChild, styles.woodLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.woodCarvingItem, styles.woodLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={styles.image43Icon}
        resizeMode="cover"
        source={require("../assets/image-43.png")}
      />
      <Text style={styles.theWoodcarvingArtContainer}>
        <Text style={styles.theWoodcarvingArt}>
          The woodcarving art has been flourishing in Chhattisgarh from time
          immemorial and one can find beautifully carved wooden products
          designed by the craftsman of the State. The skillful craftsmen of the
          State carve beautiful wooden Ceilings, doors, lintels etc using
          different kinds of wood like shisham, teak, dhudi, sal and kikar. The
          craftsmen also make pipes, masks, doors, window frames and sculptures.
        </Text>
      </Text>
      <Image
        style={[styles.woodCarvingInner, styles.woodLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector68.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
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
          styles.jagdalpurRailwayStationTypo,
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
          styles.jagdalpurRailwayStation,
          styles.jagdalpurRailwayStationTypo,
        ]}
      >
        Jagdalpur Railway Station
      </Text>
      <Image
        style={styles.busIcon}
        resizeMode="cover"
        source={require("../assets/bus22.png")}
      />
      <Text style={styles.km}>246.8 Km</Text>
      <Text style={[styles.bastar, styles.bastarTypo]}>Bastar</Text>
      <Text style={[styles.jagdalpur, styles.bastarTypo]}>Jagdalpur</Text>
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
  woodLayout: {
    height: 4,
    width: 300,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "89.82%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  jagdalpurRailwayStationTypo: {
    fontSize: FontSize.size_2xs,
    left: 55,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  bastarTypo: {
    left: 75,
    fontSize: FontSize.size_sm,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 0,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    height: 41,
    left: 0,
    width: 319,
  },
  yatra: {
    top: 52,
    left: 137,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "71.16%",
    top: "14.29%",
    right: "17.55%",
    bottom: "32.28%",
    width: "11.29%",
    height: "53.43%",
    position: "absolute",
  },
  groupChild: {
    top: 63,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 131,
    height: 1,
    left: 0,
    position: "absolute",
  },
  chhattisgarhParent: {
    top: 16,
    left: 109,
    height: 84,
    width: 319,
    position: "absolute",
  },
  woodCarving1: {
    top: 131,
    left: 63,
    fontSize: FontSize.size_2xl,
    width: 309,
    height: 68,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  woodCarvingChild: {
    top: 181,
    left: 72,
  },
  woodCarvingItem: {
    top: 513,
    left: 7,
  },
  image43Icon: {
    top: 216,
    width: 328,
    height: 282,
    left: 0,
    position: "absolute",
  },
  theWoodcarvingArt: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theWoodcarvingArtContainer: {
    top: 526,
    left: 58,
    fontSize: FontSize.size_base,
    width: 277,
    height: 446,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  woodCarvingInner: {
    top: 925,
    left: 93,
  },
  vectorIcon: {
    height: "2.01%",
    width: "6.36%",
    top: "76.63%",
    right: "88.8%",
    bottom: "21.37%",
    left: "4.83%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.67%",
    width: "4.33%",
    top: "80.4%",
    right: "90.08%",
    bottom: "16.93%",
    left: "5.6%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "2.81%",
    width: "4.83%",
    top: "95.1%",
    bottom: "2.09%",
    left: "5.34%",
  },
  swamiVivekanandInternational: {
    top: 1192,
    width: 266,
    height: 27,
  },
  vectorIcon3: {
    height: "3.07%",
    width: "5.09%",
    top: "90.16%",
    bottom: "6.77%",
    left: "5.09%",
  },
  jagdalpurRailwayStation: {
    top: 1136,
    width: 192,
    height: 25,
  },
  busIcon: {
    top: 1061,
    left: 19,
    width: 23,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  km: {
    top: 955,
    left: 67,
    width: 210,
    height: 34,
    fontSize: FontSize.size_sm,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  bastar: {
    top: 997,
    width: 172,
    height: 37,
  },
  jagdalpur: {
    top: 1073,
    width: 202,
    height: 49,
  },
  woodCarving: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1245,
    overflow: "hidden",
    width: "100%",
  },
});

export default WoodCarving;

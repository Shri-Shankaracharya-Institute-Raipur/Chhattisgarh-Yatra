import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SomnathTemple = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.somnathTemple}>
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
            source={require("../assets/-icon-menu22.png")}
          />
        </Pressable>
        <View style={styles.groupChild} />
      </View>
      <Image
        style={styles.somnathTempleChild}
        resizeMode="cover"
        source={require("../assets/line-169.png")}
      />
      <Image
        style={[styles.somnathTempleItem, styles.itemLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Text style={[styles.somnathTemple1, styles.somnathTemple1Typo]}>
        Somnath Temple
      </Text>
      <Image
        style={styles.image22Icon}
        resizeMode="cover"
        source={require("../assets/image-22.png")}
      />
      <Text style={[styles.somnathTempleSituated, styles.raipur116KmLayout]}>
        somnath Temple situated at Simona of Raipur, Chhattisgarh. The temple is
        dedicated to Lord Shiva. The temple has got many attractions like the
        festival Shivaratri, Shivnatha and Kharun river sangam. As the temple is
        dwell with the Sangam, boating is also facilitated. The deity is offered
        with dhup, deep, aarti, pooja and prasad. The temple is as famous as the
        Somnath Temple of Gujarat. The temple looks amazing during the festivals
        and on special occasions.
      </Text>
      <View style={[styles.lineParent, styles.busIconPosition]}>
        <Image
          style={[styles.groupItem, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/line-196.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector54.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector55.png")}
        />
        <Text
          style={[
            styles.swamiVivekanandInternational,
            styles.raipurRailwayStationTypo,
          ]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector56.png")}
        />
        <Text
          style={[styles.raipurRailwayStation, styles.raipurRailwayStationTypo]}
        >
          Raipur Railway Station
        </Text>
        <Image
          style={[styles.busIcon, styles.busIconPosition]}
          resizeMode="cover"
          source={require("../assets/bus15.png")}
        />
      </View>
      <Text style={[styles.simgaChhattisgarh493101, styles.somnathTemple1Typo]}>
        Simga, Chhattisgarh 493101, India
      </Text>
      <Text style={[styles.raipur116Km, styles.raipur116KmLayout]}>
        Raipur (116 km ), Rajnandgaon (133 km), Jabalpur (220 km) Bus Stations
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
  itemLayout: {
    width: 300,
    position: "absolute",
  },
  somnathTemple1Typo: {
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  raipur116KmLayout: {
    width: 314,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  busIconPosition: {
    left: 2,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "94.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  raipurRailwayStationTypo: {
    fontSize: FontSize.size_2xs,
    left: 36,
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
    textAlign: "left",
    left: 0,
    width: 319,
  },
  yatra: {
    top: 52,
    left: 140,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "70.85%",
    top: "4.67%",
    right: "20.06%",
    bottom: "66.7%",
    width: "9.09%",
    height: "28.63%",
    position: "absolute",
  },
  groupChild: {
    top: 62,
    left: 7,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 128,
    height: 1,
    position: "absolute",
  },
  chhattisgarhParent: {
    top: 16,
    left: 98,
    height: 84,
    width: 319,
    position: "absolute",
  },
  somnathTempleChild: {
    top: 465,
    width: 299,
    height: 4,
    left: 0,
    position: "absolute",
  },
  somnathTempleItem: {
    top: 189,
    left: 38,
    height: 4,
  },
  somnathTemple1: {
    top: 140,
    left: 91,
    width: 288,
    height: 62,
    fontSize: FontSize.size_lg,
  },
  image22Icon: {
    top: 222,
    width: 320,
    height: 216,
    left: 0,
    position: "absolute",
  },
  somnathTempleSituated: {
    top: 492,
    left: 28,
    height: 580,
    textAlign: "justify",
    width: 314,
    fontSize: FontSize.size_lg,
  },
  groupItem: {
    top: 1053,
    left: 76,
    height: 0,
  },
  vectorIcon: {
    height: "4.01%",
    width: "4.55%",
    top: "0%",
    right: "94.65%",
    bottom: "95.99%",
    left: "0.8%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "4.21%",
    width: "5.08%",
    top: "22.06%",
    bottom: "73.73%",
    left: "0.53%",
  },
  swamiVivekanandInternational: {
    top: 543,
    width: 266,
    height: 27,
  },
  vectorIcon2: {
    height: "4.61%",
    width: "5.35%",
    top: "14.64%",
    bottom: "80.75%",
    left: "0.27%",
  },
  raipurRailwayStation: {
    top: 487,
    width: 192,
    height: 25,
  },
  busIcon: {
    top: 1185,
    width: 23,
    height: 37,
    overflow: "hidden",
  },
  lineParent: {
    top: 773,
    width: 374,
    height: 570,
  },
  simgaChhattisgarh493101: {
    top: 1125,
    left: 31,
    fontSize: FontSize.size_base,
    width: 195,
    height: 46,
  },
  raipur116Km: {
    top: 1199,
    left: 39,
    fontSize: FontSize.size_sm,
    height: 47,
    textAlign: "left",
  },
  somnathTemple: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1001,
    overflow: "hidden",
    width: "100%",
  },
});

export default SomnathTemple;

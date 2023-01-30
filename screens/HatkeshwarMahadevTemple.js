import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Margin } from "../GlobalStyles";

const HatkeshwarMahadevTemple = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.hatkeshwarMahadevTemple}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu20.png")}
        />
      </Pressable>
      <Image
        style={styles.hatkeshwarMahadevTempleChild}
        resizeMode="cover"
        source={require("../assets/line-11.png")}
      />
      <Image
        style={styles.hatkeshwarMahadevTempleItem}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.hatkeshwarMahadevTempleInner, styles.groupChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-167.png")}
      />
      <Image
        style={[styles.lineIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/line-172.png")}
      />
      <Text style={styles.hatkeshwarMahadevTempleContainer}>
        <Text style={styles.hatkeshwarMahadev}>{`Hatkeshwar Mahadev `}</Text>
        <Text style={styles.temple}> Temple</Text>
      </Text>
      <Image
        style={[styles.image20Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-20.png")}
      />
      <Text style={styles.hatkeshwarMahadevTemple1}>
        Hatkeshwar Mahadev Temple is one of the most sacred pilgrimage
        destinations in central India dedicated to Lord Shiva worshipped as Lord
        Hatakeshwar. The temple was built by Hajiraj Naik during the rule of
        Brahmadeo Rai, son of King Ramachandra of Kalchuri dynasty in 1402..it
        is Located 5 kms from Raipur on the banks of River Kharun, Chhattisgarh
      </Text>
      <View style={[styles.lineParent, styles.busIconPosition]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-167.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector51.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector52.png")}
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
          source={require("../assets/vector53.png")}
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
      <Text style={[styles.kharunNadiraipur, styles.raipurTypo]}>
        Kharun nadi,Raipur
      </Text>
      <Text style={[styles.raipur, styles.raipurTypo]}>Raipur</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildLayout: {
    width: 271,
    height: 4,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  busIconPosition: {
    left: 31,
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
  raipurTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 16,
    left: 95,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 68,
    left: 234,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
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
    left: "85.64%",
    top: "1.85%",
    right: "6.91%",
    bottom: "95.61%",
    width: "7.45%",
    height: "2.54%",
    position: "absolute",
  },
  hatkeshwarMahadevTempleChild: {
    top: 76,
    left: 97,
    width: 128,
    height: 3,
    position: "absolute",
  },
  hatkeshwarMahadevTempleItem: {
    top: 189,
    left: 49,
    width: 300,
    height: 4,
    position: "absolute",
  },
  hatkeshwarMahadevTempleInner: {
    top: 961,
    left: 105,
  },
  lineIcon: {
    top: 463,
    width: 293,
    height: 4,
  },
  hatkeshwarMahadev: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  temple: {
    margin: Margin.m_md,
  },
  hatkeshwarMahadevTempleContainer: {
    top: 125,
    left: 76,
    whiteSpace: "pre-wrap",
    width: 329,
    height: 46,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  image20Icon: {
    top: 213,
    width: 320,
    height: 216,
  },
  hatkeshwarMahadevTemple1: {
    top: 501,
    left: 24,
    width: 327,
    height: 428,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    color: Color.white,
    position: "absolute",
  },
  groupChild: {
    top: 249,
    left: 74,
  },
  vectorIcon: {
    height: "4.21%",
    width: "4.55%",
    top: "0%",
    right: "94.65%",
    bottom: "95.79%",
    left: "0.8%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "4.43%",
    width: "5.08%",
    top: "23.18%",
    bottom: "72.39%",
    left: "0.53%",
  },
  swamiVivekanandInternational: {
    top: 516,
    width: 266,
    height: 27,
  },
  vectorIcon2: {
    height: "4.85%",
    width: "5.35%",
    top: "15.38%",
    bottom: "79.77%",
    left: "0.27%",
  },
  raipurRailwayStation: {
    top: 459,
    width: 192,
    height: 25,
  },
  busIcon: {
    top: 1097,
    width: 23,
    height: 37,
    overflow: "hidden",
  },
  lineParent: {
    top: 712,
    width: 374,
    height: 543,
  },
  kharunNadiraipur: {
    top: 1043,
    left: 70,
    width: 189,
    height: 27,
  },
  raipur: {
    top: 1098,
    left: 64,
    width: 149,
    height: 49,
  },
  hatkeshwarMahadevTemple: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1001,
    overflow: "hidden",
    width: "100%",
  },
});

export default HatkeshwarMahadevTemple;

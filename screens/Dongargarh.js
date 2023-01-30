import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Dongargarh = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dongargarh}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu13.png")}
        />
      </Pressable>
      <View style={styles.dongargarhChild} />
      <Image
        style={[styles.dongargarhItem, styles.dongargarhLayout]}
        resizeMode="cover"
        source={require("../assets/line-14.png")}
      />
      <Image
        style={[styles.dongargarhInner, styles.dongargarhLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <Image
        style={styles.image15Icon}
        resizeMode="cover"
        source={require("../assets/image-15.png")}
      />
      <Text style={styles.dongargarh1}>Dongargarh</Text>
      <Text style={styles.dongargarhIsThe}>
        Dongargarh is the main tourist as well as pilgrimage of the district.
        The famous temple of MAA BAMLESHWARI is on a hilltop of 1600 feet in the
        town of Dongargarh. This temple is referred as BADI BAMLESHWARI. Another
        temple at ground level is situated about 1/2 kms. from the main temple
        complex. This temple is referred as CHHOTI BAMLESHWARI. Lakhs of people
        from in and around Chhattisgarh flock the shrine during the Navratras of
        Kavar (during Dusshera) and Chaitra (during Ramnavmi).
      </Text>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector30.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector31.png")}
        />
        <Text
          style={[
            styles.swamiVivekanandInternational,
            styles.durgRailwayStationTypo,
          ]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector32.png")}
        />
        <Text
          style={[styles.durgRailwayStation, styles.durgRailwayStationTypo]}
        >
          Durg Railway Station
        </Text>
        <Image
          style={styles.busIcon}
          resizeMode="cover"
          source={require("../assets/bus.png")}
        />
      </View>
      <Text style={[styles.dongargarh2, styles.dongargarh2Typo]}>
        Dongargarh
      </Text>
      <Text style={[styles.rajnandgaon, styles.dongargarh2Typo]}>
        Rajnandgaon
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  dongargarhLayout: {
    height: 4,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "93.29%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  durgRailwayStationTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "justify",
    left: 32,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  dongargarh2Typo: {
    left: 57,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 19,
    left: 97,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 315,
    height: 42,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 73,
    left: 231,
    fontFamily: FontFamily.dancingScript,
    width: 139,
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
    left: "85.41%",
    top: "2.51%",
    right: "7.71%",
    bottom: "94.93%",
    width: "6.87%",
    height: "2.56%",
    position: "absolute",
  },
  dongargarhChild: {
    top: 81,
    left: 98,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 126,
    height: 1,
    position: "absolute",
  },
  dongargarhItem: {
    top: 415,
    width: 284,
    left: 0,
  },
  dongargarhInner: {
    top: 869,
    left: 77,
    width: 300,
  },
  lineIcon: {
    top: 180,
    left: 72,
    width: 251,
    height: 2,
    position: "absolute",
  },
  image15Icon: {
    top: 202,
    width: 325,
    height: 198,
    left: 0,
    position: "absolute",
  },
  dongargarh1: {
    top: 151,
    left: 120,
    width: 292,
    height: 51,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  dongargarhIsThe: {
    top: 434,
    fontSize: FontSize.size_base,
    width: 314,
    height: 423,
    textAlign: "justify",
    left: 32,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.12%",
    width: "5.7%",
    top: "0%",
    bottom: "96.88%",
    left: "1.01%",
  },
  vectorIcon1: {
    height: "3.27%",
    width: "6.38%",
    top: "20.26%",
    right: "92.95%",
    bottom: "76.47%",
    left: "0.67%",
    position: "absolute",
  },
  swamiVivekanandInternational: {
    top: 414,
    width: 266,
    height: 27,
  },
  vectorIcon2: {
    height: "3.58%",
    width: "6.71%",
    top: "14.02%",
    bottom: "82.39%",
    left: "0%",
  },
  durgRailwayStation: {
    top: 377,
    width: 192,
    height: 25,
  },
  busIcon: {
    top: 954,
    left: 25,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "48.73%",
    width: "79.05%",
    top: "69.02%",
    right: "14.32%",
    bottom: "-17.75%",
    left: "6.63%",
    position: "absolute",
  },
  dongargarh2: {
    top: 917,
    width: 200,
    height: 50,
  },
  rajnandgaon: {
    top: 960,
    width: 189,
    height: 30,
  },
  dongargarh: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 905,
    overflow: "hidden",
    width: "100%",
  },
});

export default Dongargarh;

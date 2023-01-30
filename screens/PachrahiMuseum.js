import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PachrahiMuseum = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pachrahiMuseum}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={styles.pachrahiMuseumChild} />
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu6.png")}
        />
      </Pressable>
      <Text style={styles.pachrahiMuseum1}>Pachrahi Museum</Text>
      <View style={[styles.pachrahiMuseumItem, styles.lineViewBorder]} />
      <Image
        style={[styles.download162, styles.download162Position]}
        resizeMode="cover"
        source={require("../assets/download-16-2.png")}
      />
      <Image
        style={[styles.pachrahiMuseumInner, styles.download162Position]}
        resizeMode="cover"
        source={require("../assets/line-25.png")}
      />
      <Text style={styles.archaeologicalSiteOf}>
        Archaeological site of Pachrahi district headquarter Kabirdham, about 45
        km from Vikaskhand bordla. At the distance of the Hap is situated on the
        right bank of the river. Under the Directorate, Culture and Archeology,
        Raipur (2007 to 2011), excavation of Pacharahi, rich in cultures and
        festivals of Kaluchuri and Phaning Dynasty, has been completed. A site
        museum has been established by the Directorate of Culture and Archeology
        on the site of the Purshartha, with the purpose of making public and
        general researchers, historians, archaeologists and tourists aware of
        the antiquities and compiled ancient religions in excavation. These
        available antiquities, statues have been displayed in various books.
      </Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector15.png")}
        />
        <Text style={[styles.pachrahi, styles.pachrahiTypo]}>Pachrahi</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector16.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.kavardhaTypo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
        <Text style={[styles.kavardha, styles.kavardhaTypo]}>Kavardha</Text>
        <Text style={[styles.durgRailwayStation, styles.pachrahiTypo]}>
          Durg Railway Station
        </Text>
        <Image
          style={styles.busIcon}
          resizeMode="cover"
          source={require("../assets/bus.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  lineViewBorder: {
    height: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  download162Position: {
    width: 267,
    left: 0,
    position: "absolute",
  },
  pachrahiTypo: {
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "93.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kavardhaTypo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 20,
    left: 87,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    height: 42,
    width: 297,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  pachrahiMuseumChild: {
    top: 84,
    left: 95,
    borderTopWidth: 1,
    width: 125,
    height: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  yatra: {
    top: 76,
    left: 224,
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
    left: "86.67%",
    top: "2.99%",
    right: "6.67%",
    bottom: "94.03%",
    width: "6.67%",
    height: "2.98%",
    position: "absolute",
  },
  pachrahiMuseum1: {
    top: 188,
    left: 74,
    width: 212,
    height: 32,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  pachrahiMuseumItem: {
    top: 219,
    left: 73,
    width: 214,
  },
  download162: {
    top: 275,
    height: 177,
  },
  pachrahiMuseumInner: {
    top: 473,
    height: 3,
  },
  archaeologicalSiteOf: {
    top: 492,
    left: 34,
    fontSize: FontSize.size_sm,
    width: 281,
    height: 283,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  lineView: {
    top: 931,
    left: 80,
    width: 297,
  },
  vectorIcon: {
    height: "3.16%",
    width: "5.63%",
    top: "0%",
    right: "93.38%",
    bottom: "96.84%",
    left: "0.99%",
    position: "absolute",
  },
  pachrahi: {
    top: 311,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.32%",
    width: "6.29%",
    top: "17.4%",
    bottom: "79.28%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 417,
    width: 266,
  },
  vectorIcon2: {
    height: "3.64%",
    width: "6.62%",
    top: "11.54%",
    bottom: "84.82%",
    left: "0.33%",
  },
  kavardha: {
    top: 347,
    width: 115,
  },
  durgRailwayStation: {
    top: 383,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 999,
    left: 28,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "55.42%",
    width: "83.89%",
    top: "84.7%",
    right: "8.33%",
    bottom: "-40.12%",
    left: "7.78%",
    position: "absolute",
  },
  pachrahiMuseum: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 781,
    overflow: "hidden",
    width: "100%",
  },
});

export default PachrahiMuseum;

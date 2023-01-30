import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Ratanpur = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ratanpur}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu14.png")}
        />
      </Pressable>
      <View style={styles.ratanpurChild} />
      <Image
        style={[styles.ratanpurItem, styles.groupChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-151.png")}
      />
      <Image
        style={styles.ratanpurInner}
        resizeMode="cover"
        source={require("../assets/line-161.png")}
      />
      <Text style={styles.ratanpur1}>
        <Text style={styles.ratanpur2}>Ratanpur</Text>
      </Text>
      <Image
        style={styles.image16Icon}
        resizeMode="cover"
        source={require("../assets/image-16.png")}
      />
      <Text style={styles.mahamayaDeviSituated}>
        Mahamaya Devi. Situated at 25 km away from the city of Bilaspur
        (Chhattisgarh) on the Bilaspur-Ambikapur state highway, the Mandir and
        the relics of scores of ancillary temples, domes, palaces and forts, now
        rundown by the time and natural forces – seem to tell a story. Once the
        capital of the Kalchuri kings, Ratanpur has almost a millennium of
        history.
      </Text>
      <View style={styles.lineParent}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-191.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector33.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector34.png")}
        />
        <Text
          style={[
            styles.swamiVivekanandInternational,
            styles.busIconLayout,
            styles.bilaslpurRailwayStationTypo,
          ]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector35.png")}
        />
        <Text
          style={[
            styles.bilaslpurRailwayStation,
            styles.bilaslpurRailwayStationTypo,
          ]}
        >
          Bilaslpur Railway Station
        </Text>
        <Image
          style={[styles.busIcon, styles.busIconLayout]}
          resizeMode="cover"
          source={require("../assets/bus11.png")}
        />
      </View>
      <Text style={[styles.ratanpurbilaspur, styles.bilaspurTypo]}>
        Ratanpur,Bilaspur
      </Text>
      <Text style={[styles.bilaspur, styles.bilaspurTypo]}>Bilaspur</Text>
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
    height: 4,
    position: "absolute",
  },
  busIconLayout: {
    height: 24,
    position: "absolute",
  },
  bilaslpurRailwayStationTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
  },
  bilaspurTypo: {
    left: 50,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 19,
    left: 96,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 75,
    left: 231,
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
    left: "84.62%",
    top: "2.63%",
    right: "7.43%",
    bottom: "94.66%",
    width: "7.96%",
    height: "2.71%",
    position: "absolute",
  },
  ratanpurChild: {
    top: 83,
    left: 102,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 121,
    height: 1,
    position: "absolute",
  },
  ratanpurItem: {
    top: 443,
    width: 300,
    left: 0,
  },
  ratanpurInner: {
    top: 160,
    left: 38,
    width: 205,
    height: 5,
    position: "absolute",
  },
  ratanpur2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  ratanpur1: {
    top: 130,
    left: 86,
    width: 291,
    height: 52,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  image16Icon: {
    top: 182,
    width: 280,
    height: 243,
    left: 0,
    position: "absolute",
  },
  mahamayaDeviSituated: {
    top: 472,
    left: 26,
    fontSize: FontSize.size_base,
    width: 326,
    height: 265,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  groupChild: {
    top: 184,
    left: 69,
    width: 290,
  },
  vectorIcon: {
    height: "3.62%",
    width: "4.57%",
    top: "0%",
    right: "94.87%",
    bottom: "96.38%",
    left: "0.56%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "3.8%",
    width: "5.11%",
    top: "21.71%",
    right: "94.35%",
    bottom: "74.5%",
    left: "0.54%",
    position: "absolute",
  },
  swamiVivekanandInternational: {
    top: 384,
    left: 37,
    width: 276,
  },
  vectorIcon2: {
    height: "4.16%",
    width: "5.38%",
    top: "13.97%",
    right: "94.34%",
    bottom: "81.87%",
    left: "0.28%",
    position: "absolute",
  },
  bilaslpurRailwayStation: {
    top: 350,
    left: 36,
    width: 254,
    height: 22,
    position: "absolute",
  },
  busIcon: {
    top: 293,
    width: 22,
    left: 0,
    overflow: "hidden",
  },
  lineParent: {
    top: 560,
    left: 14,
    width: 359,
    height: 408,
    position: "absolute",
  },
  ratanpurbilaspur: {
    top: 826,
    width: 188,
    height: 29,
  },
  bilaspur: {
    top: 865,
    width: 182,
    height: 19,
  },
  ratanpur: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 862,
    overflow: "hidden",
    width: "100%",
  },
});

export default Ratanpur;

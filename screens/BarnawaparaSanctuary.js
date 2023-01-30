import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const BarnawaparaSanctuary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.barnawaparaSanctuary}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.barnawaparaSanctuaryChild, styles.lineViewBorder]} />
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/-icon-menu49.png")}
        />
      </Pressable>
      <Image
        style={[styles.barnawaparaSanctuaryItem, styles.barnawaparaLayout]}
        resizeMode="cover"
        source={require("../assets/line-151.png")}
      />
      <Image
        style={[styles.barnawaparaSanctuaryInner, styles.barnawaparaLayout]}
        resizeMode="cover"
        source={require("../assets/line-162.png")}
      />
      <Image
        style={styles.image4Icon}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <View
        style={[styles.barnawaparaSanctuaryIsLocat, styles.busIconPosition]}
      >
        <Text style={styles.barnawaparaSanctuaryIs}>
          Barnawapara Sanctuary is located in the northern part of Mahasamund
          district of Chhattisgarh, Barnawapara is Wildlife Sanctuary is one of
          the most important wildlife sanctuaries in the region. Established in
          1976 under Wildlife Protection Act of 1972, the sanctuary is
          relatively a small one covering an area of only 245 sq kms. The
          topography of the region comprises flat and hilly terrain with
          altitudes ranging between 265-400 mts. The Barnawapara Wildlife
          Sanctuary is known for its lush green vegetation's and unique
          wildlife.
        </Text>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector147.png")}
        />
        <Text style={[styles.sirpur, styles.sirpurTypo]}>Sirpur</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector148.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.mahasamundTypo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector149.png")}
        />
        <Text style={[styles.mahasamund, styles.mahasamundTypo]}>
          Mahasamund
        </Text>
        <Text style={[styles.mahasamundRailwayStation, styles.sirpurTypo]}>
          Mahasamund Railway Station
        </Text>
        <Image
          style={[styles.busIcon, styles.busIconPosition]}
          resizeMode="cover"
          source={require("../assets/bus34.png")}
        />
      </View>
      <Text style={[styles.barnawaparaSanctuary1, styles.yatraTypo]}>
        Barnawapara Sanctuary
      </Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineViewBorder: {
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  yatraTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  barnawaparaLayout: {
    width: 300,
    position: "absolute",
  },
  busIconPosition: {
    left: 69,
    position: "absolute",
  },
  sirpurTypo: {
    fontSize: FontSize.size_2xs,
    left: 40,
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
  mahasamundTypo: {
    height: 19,
    fontSize: FontSize.size_2xs,
    left: 40,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 23,
    left: 123,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 43,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  barnawaparaSanctuaryChild: {
    top: 83,
    left: 127,
    borderTopWidth: 1,
    width: 133,
    height: 1,
  },
  yatra: {
    top: 75,
    left: 264,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 34,
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconMenu: {
    left: "82.75%",
    top: "2.37%",
    right: "7.93%",
    bottom: "94.19%",
    width: "9.32%",
    height: "3.44%",
    position: "absolute",
  },
  barnawaparaSanctuaryItem: {
    top: 587,
    height: 4,
    left: 0,
  },
  barnawaparaSanctuaryInner: {
    top: 940,
    left: 162,
    height: 0,
  },
  image4Icon: {
    top: 280,
    width: 400,
    height: 264,
    left: 0,
    position: "absolute",
  },
  barnawaparaSanctuaryIs: {
    left: "0%",
    fontSize: FontSize.size_sm,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    top: "0%",
    height: "100%",
    color: Color.white,
    position: "absolute",
    width: "100%",
  },
  barnawaparaSanctuaryIsLocat: {
    top: 631,
    width: 342,
    height: 281,
  },
  vectorIcon: {
    height: "3.62%",
    width: "5.63%",
    right: "93.38%",
    bottom: "96.38%",
    left: "0.99%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sirpur: {
    top: 313,
    width: 115,
    height: 24,
  },
  vectorIcon1: {
    height: "3.8%",
    width: "6.29%",
    top: "19.91%",
    bottom: "76.29%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 442,
    width: 298,
  },
  vectorIcon2: {
    height: "4.16%",
    width: "6.62%",
    top: "13.21%",
    bottom: "82.62%",
    left: "0.33%",
  },
  mahasamund: {
    top: 357,
    width: 129,
  },
  mahasamundRailwayStation: {
    top: 400,
    width: 215,
    height: 18,
  },
  busIcon: {
    top: 1010,
    width: 26,
    height: 27,
    overflow: "hidden",
  },
  vectorParent: {
    height: "54.88%",
    width: "78.79%",
    top: "79.05%",
    right: "5.13%",
    bottom: "-33.93%",
    left: "16.08%",
    position: "absolute",
  },
  barnawaparaSanctuary1: {
    top: 203,
    left: 53,
    fontFamily: FontFamily.cutive,
    width: 376,
    height: 45,
  },
  lineView: {
    top: 234,
    left: 42,
    borderTopWidth: 2,
    width: 346,
    height: 2,
  },
  barnawaparaSanctuary: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 840,
    overflow: "hidden",
    width: "100%",
  },
});

export default BarnawaparaSanctuary;

import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Margin } from "../GlobalStyles";

const MamaBhanjaTemple = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mamaBhanjaTemple}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.mamaBhanjaTempleChild, styles.mamaBorder]} />
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu7.png")}
        />
      </Pressable>
      <Text style={styles.mamaBhanjaTemple1}>Mama Bhanja Temple</Text>
      <View style={[styles.mamaBhanjaTempleItem, styles.mamaBorder]} />
      <Image
        style={[styles.mamaBhanjaTempleAmm2Icon, styles.mamaPosition]}
        resizeMode="cover"
        source={require("../assets/mama-bhanja-temple--amm-2.png")}
      />
      <Text style={styles.theMamaBhanjaContainer}>
        <Text style={styles.theMamaBhanja}>
          The Mama Bhanja Temple is a temple of Lord Shiva is located in
          Dantewada district of Chhattisgarh. The temple is attributed to the
          two members of the family of Naga dynasty, the maternal uncle (Mama)
          and the nephew (Bhanja), from where it gets its name. It is visited by
          a lot of devotees all around the year. Other than being a place of
          worship, it also has an interesting architecture.
        </Text>
        <Text style={styles.theTempleIs}>
          The temple is fifty feet high. The temple is built upon a moulded
          base. It has been well protected over the years with the help of a
          curvilinear shikara that stands above it, protecting it. The mandapa,
          however, being quite ancient, has suffered the torment of weather and
          time, over the years.
        </Text>
      </Text>
      <Image
        style={[styles.mamaBhanjaTempleInner, styles.mamaPosition]}
        resizeMode="cover"
        source={require("../assets/line-26.png")}
      />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-27.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector18.png")}
        />
        <Text style={[styles.barsur, styles.barsurTypo]}>Barsur</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector19.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.dantewadaTypo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector20.png")}
        />
        <Text style={[styles.dantewada, styles.dantewadaTypo]}>Dantewada</Text>
        <Text style={[styles.jagdalpurRailwayStation, styles.barsurTypo]}>
          Jagdalpur Railway Station
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
  mamaBorder: {
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mamaPosition: {
    left: 0,
    position: "absolute",
  },
  barsurTypo: {
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
  dantewadaTypo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 21,
    left: 80,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    height: 42,
    width: 297,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  mamaBhanjaTempleChild: {
    top: 85,
    left: 86,
    borderTopWidth: 1,
    width: 124,
    height: 1,
  },
  yatra: {
    top: 77,
    left: 219,
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
    left: "85%",
    top: "3.43%",
    right: "7.5%",
    bottom: "93.93%",
    width: "7.5%",
    height: "2.64%",
    position: "absolute",
  },
  mamaBhanjaTemple1: {
    top: 186,
    left: 54,
    width: 251,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    height: 42,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  mamaBhanjaTempleItem: {
    top: 218,
    left: 49,
    borderTopWidth: 2,
    width: 257,
    height: 2,
  },
  mamaBhanjaTempleAmm2Icon: {
    top: 251,
    width: 250,
    height: 192,
  },
  theMamaBhanja: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theTempleIs: {
    margin: Margin.m_md,
  },
  theMamaBhanjaContainer: {
    top: 499,
    left: 29,
    fontSize: FontSize.size_sm,
    height: 336,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    width: 297,
    color: Color.white,
    position: "absolute",
  },
  mamaBhanjaTempleInner: {
    top: 464,
    width: 243,
    height: 3,
  },
  lineIcon: {
    top: 941,
    left: 93,
    width: 315,
    height: 0,
    position: "absolute",
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
  barsur: {
    top: 311,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.32%",
    width: "6.29%",
    top: "17.38%",
    bottom: "79.3%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 417,
    width: 266,
  },
  vectorIcon2: {
    height: "3.63%",
    width: "6.62%",
    top: "11.54%",
    bottom: "84.83%",
    left: "0.33%",
  },
  dantewada: {
    top: 347,
    width: 115,
  },
  jagdalpurRailwayStation: {
    top: 383,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 1000,
    left: 24,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "55.46%",
    width: "83.89%",
    top: "84.78%",
    right: "9.44%",
    bottom: "-40.24%",
    left: "6.67%",
    position: "absolute",
  },
  mamaBhanjaTemple: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 781,
    overflow: "hidden",
    width: "100%",
  },
});

export default MamaBhanjaTemple;

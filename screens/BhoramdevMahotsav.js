import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BhoramdevMahotsav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bhoramdevMahotsav}>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/-icon-menu42.png")}
        />
      </Pressable>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/line-32.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.bhoramdevMahotsavChild,
          styles.bhoramdeoTemple11IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/line-151.png")}
      />
      <View style={[styles.bhoramdevMahotsavItem, styles.bhoramdevBorder]} />
      <Text style={styles.bhoramdeoMahotsavIs}>
        Bhoramdeo Mahotsav is celebrated every year. It is celebrated in the
        last week of the month of March, and it is best for you to plan to visit
        the temple when the festival is celebrated in Chhattisgarh.The festival
        offers a soulful experience to the visitors at the temple and offers
        them to explore the rich culture of the people and their local
        traditions. Maikal hills are one of the attractions for the tourists if
        you are a wildlife lover.
      </Text>
      <Image
        style={[
          styles.bhoramdeoTemple11Icon,
          styles.bhoramdeoTemple11IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/1519424712-bhoramdeotemple1-1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector130.png")}
      />
      <Text style={[styles.kabirdham, styles.kabirdhamTypo]}>KabirDham</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector131.png")}
      />
      <Text
        style={[
          styles.swamiVivekanandInternational,
          styles.kawardhaBusStandTypo,
        ]}
      >
        Swami Vivekanand International Airpot
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector132.png")}
      />
      <Text style={[styles.kawardhaBusStand, styles.kawardhaBusStandTypo]}>
        Kawardha Bus Stand
      </Text>
      <Text style={[styles.durgRailwayStation, styles.kabirdhamTypo]}>
        Durg Railway Station
      </Text>
      <Image
        style={styles.busIcon}
        resizeMode="cover"
        source={require("../assets/bus.png")}
      />
      <Text style={styles.bhoramdevFestival}>Bhoramdev Festival</Text>
      <View style={[styles.bhoramdevMahotsavInner, styles.bhoramdevBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  bhoramdeoTemple11IconPosition: {
    width: 300,
    left: 0,
    position: "absolute",
  },
  bhoramdevBorder: {
    height: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  kabirdhamTypo: {
    fontSize: FontSize.size_2xs,
    left: 65,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "86.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kawardhaBusStandTypo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 65,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  iconMenu: {
    left: "83.65%",
    top: "3.36%",
    right: "7.69%",
    bottom: "93%",
    width: "8.66%",
    height: "3.63%",
    position: "absolute",
  },
  chhattisgarh: {
    top: 17,
    left: 84,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 69,
    left: 224,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  wrapper: {
    left: 90,
    top: 77,
    width: 129,
    height: 1,
    position: "absolute",
  },
  bhoramdevMahotsavChild: {
    top: 459,
    height: 4,
  },
  bhoramdevMahotsavItem: {
    top: 732,
    left: 71,
    width: 329,
  },
  bhoramdeoMahotsavIs: {
    top: 481,
    fontSize: FontSize.size_sm,
    width: 315,
    height: 213,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    left: 29,
    color: Color.white,
    position: "absolute",
  },
  bhoramdeoTemple11Icon: {
    top: 254,
    height: 171,
  },
  vectorIcon: {
    height: "2.04%",
    width: "4.56%",
    top: "77.68%",
    right: "86.86%",
    bottom: "20.29%",
    left: "8.58%",
    position: "absolute",
  },
  kabirdham: {
    top: 771,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "2.14%",
    width: "5.09%",
    top: "88.89%",
    bottom: "8.97%",
    left: "8.31%",
  },
  swamiVivekanandInternational: {
    top: 877,
    width: 266,
  },
  vectorIcon2: {
    height: "2.34%",
    width: "5.36%",
    top: "85.12%",
    bottom: "12.54%",
    left: "8.04%",
  },
  kawardhaBusStand: {
    top: 807,
    width: 147,
  },
  durgRailwayStation: {
    top: 843,
    width: 170,
    height: 15,
  },
  busIcon: {
    top: 798,
    width: 23,
    height: 22,
    left: 29,
    position: "absolute",
    overflow: "hidden",
  },
  bhoramdevFestival: {
    top: 170,
    left: 34,
    textAlign: "center",
    width: 305,
    height: 36,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    color: Color.white,
    position: "absolute",
  },
  bhoramdevMahotsavInner: {
    top: 200,
    left: 69,
    width: 236,
  },
  bhoramdevMahotsav: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 674,
    overflow: "hidden",
    width: "100%",
  },
});

export default BhoramdevMahotsav;

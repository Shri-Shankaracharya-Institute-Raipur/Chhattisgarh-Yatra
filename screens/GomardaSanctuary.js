import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const GomardaSanctuary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gomardaSanctuary}>
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={[styles.gomardaSanctuaryChild, styles.gomardaLayout]}
        resizeMode="cover"
        source={require("../assets/line-172.png")}
      />
      <Image
        style={[styles.gomardaSanctuaryItem, styles.gomardaLayout]}
        resizeMode="cover"
        source={require("../assets/line-121.png")}
      />
      <Text style={styles.gomardaWildlifeSanctuary}>
        Gomarda Wildlife Sanctuary is another of the wildlife sanctuaries in
        Chhattisgarh and it is located near Sarangarh town in Raigarh. It is the
        natural habitat of a number of rare species and is one of the exotic
        places. Gomarda Wildlife Sanctuary is the abode of other species like
        the Nilgiri, Sambars, Gaurs, Barking Deer, Chausingha, Muntjac, Sloth
        Bear, Wild Boar, Dhole or the wild dog and the Jackel.
      </Text>
      <Image
        style={styles.gomardaSanctuaryInner}
        resizeMode="cover"
        source={require("../assets/line-1111.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector156.png")}
        />
        <Text style={[styles.sarangarh, styles.sarangarhTypo]}>Sarangarh</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector157.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.sarangarh1Typo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector158.png")}
        />
        <Text style={[styles.sarangarh1, styles.sarangarh1Typo]}>
          Sarangarh
        </Text>
        <Text style={[styles.raigarhRailwayStation, styles.sarangarhTypo]}>
          Raigarh Railway Station
        </Text>
        <Image
          style={styles.busIcon}
          resizeMode="cover"
          source={require("../assets/bus.png")}
        />
      </View>
      <Text
        style={[
          styles.gomardaSanctuary1,
          styles.yatraFlexBox,
          styles.yatraTypo,
        ]}
      >
        Gomarda Sanctuary
      </Text>
      <View style={styles.chhattisgarhParent}>
        <Text style={[styles.chhattisgarh, styles.yatraFlexBox]}>
          CHHATTISGARH
        </Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-114.png")}
        />
        <Text style={[styles.yatra, styles.yatraFlexBox, styles.yatraTypo]}>
          YATRA
        </Text>
        <Pressable
          style={[styles.iconMenu, styles.iconPosition]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-menu52.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector159.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gomardaLayout: {
    height: 4,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    top: "0%",
    position: "absolute",
  },
  sarangarhTypo: {
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "93.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sarangarh1Typo: {
    height: 16,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  yatraFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatraTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  image2Icon: {
    top: 279,
    width: 399,
    height: 246,
    left: 0,
    position: "absolute",
  },
  gomardaSanctuaryChild: {
    top: 545,
    width: 293,
    left: 0,
  },
  gomardaSanctuaryItem: {
    top: 221,
    width: 261,
    left: 77,
  },
  gomardaWildlifeSanctuary: {
    top: 568,
    fontSize: FontSize.size_sm,
    width: 363,
    height: 200,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    left: 42,
    position: "absolute",
  },
  gomardaSanctuaryInner: {
    top: 770,
    left: 113,
    width: 329,
    height: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.55%",
    width: "5.63%",
    right: "93.38%",
    bottom: "96.45%",
    left: "0.99%",
  },
  sarangarh: {
    top: 266,
    width: 103,
    height: 20,
  },
  vectorIcon1: {
    height: "3.72%",
    width: "6.29%",
    top: "19.5%",
    bottom: "76.78%",
    left: "0.66%",
  },
  swamiVivekanandInternational: {
    top: 372,
    width: 266,
  },
  vectorIcon2: {
    height: "4.08%",
    width: "6.62%",
    top: "12.94%",
    bottom: "82.98%",
    left: "0.33%",
  },
  sarangarh1: {
    top: 302,
    width: 115,
  },
  raigarhRailwayStation: {
    top: 338,
    width: 192,
    height: 15,
  },
  busIcon: {
    top: 857,
    left: 19,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "56.35%",
    width: "71.23%",
    top: "82.02%",
    right: "24.29%",
    bottom: "-38.37%",
    left: "4.48%",
    position: "absolute",
  },
  gomardaSanctuary1: {
    top: 187,
    fontFamily: FontFamily.cutive,
    width: 332,
    height: 52,
    left: 77,
  },
  chhattisgarh: {
    top: 3,
    left: 68,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 274,
    height: 44,
  },
  groupChild: {
    top: 60,
    left: 69,
    width: 131,
    height: 2,
    position: "absolute",
  },
  yatra: {
    top: 54,
    left: 205,
    fontFamily: FontFamily.dancingScript,
    width: 121,
    height: 34,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "88.15%",
    right: "0%",
    bottom: "65.64%",
    width: "11.85%",
    height: "34.36%",
  },
  vectorIcon3: {
    height: "30.46%",
    width: "10.12%",
    top: "7.81%",
    right: "89.88%",
    bottom: "61.73%",
    left: "0%",
    position: "absolute",
  },
  chhattisgarhParent: {
    top: 22,
    width: 346,
    height: 88,
    left: 42,
    position: "absolute",
  },
  gomardaSanctuary: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 688,
    overflow: "hidden",
    width: "100%",
  },
});

export default GomardaSanctuary;

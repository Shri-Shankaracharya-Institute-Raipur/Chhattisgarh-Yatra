import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const WroughtIron = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wroughtIron}>
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
          source={require("../assets/-icon-menu29.png")}
        />
      </Pressable>
      <View style={styles.wroughtIronChild} />
      <Image
        style={styles.image39Icon}
        resizeMode="cover"
        source={require("../assets/image-39.png")}
      />
      <Text style={styles.wroughtIron1}>Wrought iron</Text>
      <Image
        style={[styles.wroughtIronItem, styles.kmParentPosition]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.wroughtIronInner, styles.busIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-169.png")}
      />
      <Text style={styles.lohaShilpOr}>
        {" "}
        Loha Shilp or the use of wrought iron to create dark raw forms of the
        metal artifacts and figurines is another craft form of Chhattisgarh. The
        raw material used for this craft is mostly recycled scrap iron. Things
        like lamps, candle stands, effigies of musicians, toys, figurines, and
        deities are the typical products made out of this craft.
      </Text>
      <View style={[styles.kmParent, styles.kmParentPosition]}>
        <Text style={[styles.km, styles.kmTypo]}>226.8 Km</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-1915.png")}
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
            styles.kondagaonDistrictTypo,
            styles.jagdalpurRailwayStationPosition,
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
            styles.kondagaonDistrictTypo,
            styles.jagdalpurRailwayStationPosition,
          ]}
        >
          Jagdalpur Railway Station
        </Text>
        <Image
          style={[styles.busIcon, styles.busIconPosition]}
          resizeMode="cover"
          source={require("../assets/bus22.png")}
        />
      </View>
      <Text style={[styles.kondagaon, styles.kmTypo]}>Kondagaon</Text>
      <Text style={[styles.kondagaonDistrict, styles.kondagaonDistrictTypo]}>
        Kondagaon District
      </Text>
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
  kmParentPosition: {
    left: 24,
    position: "absolute",
  },
  busIconPosition: {
    left: 0,
    position: "absolute",
  },
  kmTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "94.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kondagaonDistrictTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  jagdalpurRailwayStationPosition: {
    left: 36,
    fontSize: FontSize.size_2xs,
  },
  chhattisgarh: {
    top: 19,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    left: 86,
  },
  yatra: {
    top: 72,
    left: 218,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 28,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "86.67%",
    top: "2.96%",
    right: "5.28%",
    bottom: "93.93%",
    width: "8.06%",
    height: "3.11%",
    position: "absolute",
  },
  wroughtIronChild: {
    top: 80,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 126,
    height: 1,
    left: 86,
    position: "absolute",
  },
  image39Icon: {
    top: 206,
    left: 2,
    width: 297,
    height: 160,
    position: "absolute",
  },
  wroughtIron1: {
    top: 144,
    left: 55,
    fontSize: FontSize.size_xl,
    width: 250,
    height: 48,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  wroughtIronItem: {
    top: 188,
    width: 300,
    height: 4,
  },
  wroughtIronInner: {
    top: 378,
    width: 299,
    height: 4,
  },
  lohaShilpOr: {
    top: 402,
    left: 43,
    width: 269,
    height: 300,
    textAlign: "justify",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  km: {
    top: 29,
    left: 42,
  },
  groupChild: {
    top: -2,
    left: 74,
    width: 262,
    height: 4,
    position: "absolute",
  },
  vectorIcon: {
    height: "8.56%",
    width: "6.68%",
    top: "9.25%",
    right: "93.32%",
    bottom: "82.19%",
    left: "0%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "11.4%",
    width: "4.55%",
    top: "25.34%",
    right: "94.65%",
    bottom: "63.26%",
    left: "0.8%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "11.97%",
    width: "5.08%",
    top: "88.03%",
    bottom: "0%",
    left: "0.53%",
  },
  swamiVivekanandInternational: {
    top: 265,
    width: 266,
    height: 27,
  },
  vectorIcon3: {
    height: "13.11%",
    width: "5.35%",
    top: "66.95%",
    bottom: "19.95%",
    left: "0.27%",
  },
  jagdalpurRailwayStation: {
    top: 209,
    width: 192,
    height: 25,
  },
  busIcon: {
    top: 134,
    width: 23,
    height: 37,
    overflow: "hidden",
  },
  kmParent: {
    top: 758,
    width: 374,
    height: 292,
  },
  kondagaon: {
    top: 836,
    left: 65,
    width: 168,
    height: 29,
  },
  kondagaonDistrict: {
    top: 898,
    left: 67,
    width: 202,
    height: 31,
  },
  wroughtIron: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1182,
    overflow: "hidden",
    width: "100%",
  },
});

export default WroughtIron;

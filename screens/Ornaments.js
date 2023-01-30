import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Ornaments = () => {
  return (
    <View style={styles.ornaments}>
      <Text style={styles.ornaments1}>
        <Text style={styles.ornaments2}>Ornaments</Text>
      </Text>
      <Image
        style={styles.ornamentsChild}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.ornamentsItem, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/line-204.png")}
      />
      <Image
        style={[styles.image40Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-40.png")}
      />
      <Text style={styles.jewelryFromChhattisgarh}>
        Jewelry from Chhattisgarh is available in a variety of gold, silver,
        bronze and mixed metal. Ornament made out of beads, cowries and feathers
        are part of tribal costumes. Tribal men and women wear traditional
        ornaments.
      </Text>
      <View style={styles.kmParent}>
        <Text style={styles.km}>226.8 Km</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-193.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector68.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
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
            styles.jagdalpurRailwayStationTypo,
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
            styles.jagdalpurRailwayStationTypo,
          ]}
        >
          Jagdalpur Railway Station
        </Text>
        <Image
          style={[styles.busIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/bus22.png")}
        />
      </View>
      <Text
        style={[styles.kondagaonbarkaijagdalpur, styles.kondagaonDistrictTypo]}
      >
        Kondagaon,Barkai,Jagdalpur
      </Text>
      <Text style={[styles.kondagaonDistrict, styles.kondagaonDistrictTypo]}>
        <Text style={styles.ornaments2}>Kondagaon District</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    right: "94.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  jagdalpurRailwayStationTypo: {
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  kondagaonDistrictTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "justify",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  ornaments2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  ornaments1: {
    top: 133,
    left: 81,
    fontSize: FontSize.size_2xl,
    width: 310,
    height: 76,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  ornamentsChild: {
    top: 181,
    left: 40,
    width: 300,
    height: 4,
    position: "absolute",
  },
  ornamentsItem: {
    top: 481,
    width: 231,
    height: 4,
  },
  image40Icon: {
    width: 299,
    height: 250,
    top: 209,
  },
  jewelryFromChhattisgarh: {
    top: 509,
    left: 49,
    width: 269,
    height: 314,
    textAlign: "justify",
    fontSize: FontSize.size_base,
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  km: {
    top: 29,
    left: 42,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  groupChild: {
    top: -2,
    left: 74,
    width: 284,
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
  },
  vectorIcon1: {
    height: "11.4%",
    width: "4.55%",
    top: "25.34%",
    right: "94.65%",
    bottom: "63.26%",
    left: "0.8%",
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
    width: 192,
    height: 25,
    top: 209,
  },
  busIcon: {
    top: 134,
    width: 23,
    height: 37,
    overflow: "hidden",
  },
  kmParent: {
    top: 749,
    left: 21,
    width: 374,
    height: 292,
    position: "absolute",
  },
  kondagaonbarkaijagdalpur: {
    top: 825,
    left: 59,
    width: 281,
    height: 31,
  },
  kondagaonDistrict: {
    top: 887,
    left: 61,
    width: 238,
    height: 33,
  },
  ornaments: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    width: "100%",
    height: 1133,
    overflow: "hidden",
  },
});

export default Ornaments;

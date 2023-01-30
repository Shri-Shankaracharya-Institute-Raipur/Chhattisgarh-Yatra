import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const RajimKumbh = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rajimKumbh, styles.iconLayout]}>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu44.png")}
        />
      </Pressable>
      <Pressable
        style={styles.chhattisgarh}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Text style={[styles.chhattisgarh1, styles.yatraFlexBox]}>
          CHHATTISGARH
        </Text>
      </Pressable>
      <Text style={[styles.yatra, styles.yatraFlexBox]}>YATRA</Text>
      <View style={styles.rajimKumbhChild} />
      <Image
        style={[styles.rajimKumbhItem, styles.rajimKumbhItemPosition]}
        resizeMode="cover"
        source={require("../assets/line-10.png")}
      />
      <View style={[styles.rajimKumbhInner, styles.lineViewBorder]} />
      <Text style={[styles.rajimKumbhIs, styles.rajimTypo]}>
        Rajim Kumbh is a Hindu pilgrimage held every year in Rajim of Raipur
        district of Chhattisgarh. During the fair huge number of people and
        saints gather at Rajim. Rajim Kumbh starts from Magh Purnima and
        continues for 15 days. Rajim Kumbh Mela in 2023 will start on Feb 15
        (Wednesday) - Mar 01 (Wednesday). There are hordes of religious
        preachers and saints from every nook and corner of country. These saints
        stay in special cottages made in sandy field amid Triveni Sangam.
      </Text>
      <Image
        style={[
          styles.istockphoto477260677612x612Icon,
          styles.rajimKumbhItemPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/istockphoto477260677612x612-1.png")}
      />
      <Text style={[styles.rajimKumbhMela, styles.rajimTypo]}>
        Rajim Kumbh Mela
      </Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  yatraFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  rajimKumbhItemPosition: {
    left: 0,
    position: "absolute",
  },
  lineViewBorder: {
    height: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  rajimTypo: {
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconMenu: {
    left: "82.31%",
    top: "3.26%",
    right: "9.12%",
    bottom: "92.97%",
    width: "8.58%",
    height: "3.77%",
    position: "absolute",
  },
  chhattisgarh1: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
  },
  chhattisgarh: {
    left: 81,
    top: 18,
    position: "absolute",
  },
  yatra: {
    top: 69,
    left: 219,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  rajimKumbhChild: {
    top: 78,
    left: 87,
    borderTopWidth: 1,
    width: 128,
    height: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  rajimKumbhItem: {
    top: 471,
    width: 292,
    height: 4,
  },
  rajimKumbhInner: {
    top: 769,
    left: 67,
    width: 329,
  },
  rajimKumbhIs: {
    top: 485,
    left: 29,
    fontSize: FontSize.size_sm,
    textAlign: "justify",
    width: 315,
    height: 213,
  },
  istockphoto477260677612x612Icon: {
    top: 260,
    width: 339,
    height: 178,
  },
  rajimKumbhMela: {
    top: 168,
    left: 30,
    textAlign: "center",
    width: 309,
    height: 36,
    fontSize: FontSize.size_lg,
  },
  lineView: {
    top: 203,
    left: 70,
    width: 233,
  },
  rajimKumbh: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 674,
  },
});

export default RajimKumbh;

import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const RajimKumbh1 = () => {
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
          source={require("../assets/-icon-menu45.png")}
        />
      </Pressable>
      <Text style={[styles.chhattisgarh, styles.yatraFlexBox]}>
        CHHATTISGARH
      </Text>
      <Text style={[styles.yatra, styles.yatraTypo, styles.yatraFlexBox]}>
        YATRA
      </Text>
      <View style={styles.rajimKumbhChild} />
      <Image
        style={styles.rajimKumbhItem}
        resizeMode="cover"
        source={require("../assets/line-10.png")}
      />
      <View style={[styles.rajimKumbhInner, styles.lineViewBorder]} />
      <Text
        style={[styles.thisIsAn, styles.thisIsAnLayout, styles.thisIsAnTypo]}
      >
        This is an all over into a million times, mega festival for tourists and
        locals to see the performances by national and international famed
        artists as well as local and tribal artists.This historic event takes
        place in January and has been held at the complex of the Laxmana Temple.
      </Text>
      <Image
        style={[styles.birjuMaharaj1Icon, styles.thisIsAnLayout]}
        resizeMode="cover"
        source={require("../assets/birjumaharaj-1.png")}
      />
      <Text
        style={[
          styles.sirpurCulturalFestival,
          styles.thisIsAnTypo,
          styles.yatraTypo,
        ]}
      >
        Sirpur Cultural Festival
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
  yatraTypo: {
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  lineViewBorder: {
    height: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  thisIsAnLayout: {
    width: 315,
    position: "absolute",
  },
  thisIsAnTypo: {
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconMenu: {
    left: "83.38%",
    top: "3.72%",
    right: "8.31%",
    bottom: "91.88%",
    width: "8.31%",
    height: "4.4%",
    position: "absolute",
  },
  chhattisgarh: {
    top: 20,
    left: 84,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    position: "absolute",
  },
  yatra: {
    top: 72,
    left: 224,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
  },
  rajimKumbhChild: {
    top: 81,
    left: 91,
    borderTopWidth: 1,
    width: 129,
    height: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  rajimKumbhItem: {
    top: 471,
    width: 292,
    height: 4,
    left: 0,
    position: "absolute",
  },
  rajimKumbhInner: {
    top: 657,
    left: 61,
    width: 329,
  },
  thisIsAn: {
    top: 485,
    left: 29,
    fontSize: FontSize.size_sm,
    textAlign: "justify",
    height: 213,
  },
  birjuMaharaj1Icon: {
    top: 261,
    height: 176,
    left: 0,
  },
  sirpurCulturalFestival: {
    top: 162,
    left: 38,
    textAlign: "center",
    width: 309,
    height: 34,
  },
  lineView: {
    top: 195,
    left: 59,
    width: 268,
  },
  rajimKumbh: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 609,
  },
});

export default RajimKumbh1;

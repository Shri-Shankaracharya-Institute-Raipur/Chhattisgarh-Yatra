import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const BastarDussehra = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bastarDussehra, styles.iconLayout]}>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu41.png")}
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
      <Image
        style={styles.bastarDussehraChild}
        resizeMode="cover"
        source={require("../assets/line-3.png")}
      />
      <Image
        style={[styles.download122, styles.download122Position]}
        resizeMode="cover"
        source={require("../assets/download-12-2.png")}
      />
      <Image
        style={[styles.bastarDussehraItem, styles.download122Position]}
        resizeMode="cover"
        source={require("../assets/line-8.png")}
      />
      <View style={[styles.bastarDussehraInner, styles.lineViewBorder]} />
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <Text
        style={[styles.bastarDussherraCelebratedContainer, styles.bastarTypo]}
      >
        {`Bastar Dussherra celebrated is a grand festival celebrated in `}
        <Text>Jagdalpur</Text>. It has its own uniqueness in the way it is
        celebrated . The 500 years old festival lasts for 75 days, starting with
        the dark moon day in the month of Shravan and ending with the thirteenth
        day of the bright moon in the month of Ashwin.
      </Text>
      <Text style={[styles.bastarDussehraFestival, styles.bastarTypo]}>
        Bastar Dussehra Festival
      </Text>
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
  download122Position: {
    left: 0,
    position: "absolute",
  },
  lineViewBorder: {
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    height: 2,
    position: "absolute",
  },
  bastarTypo: {
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
    top: "3%",
    right: "8.76%",
    bottom: "93.26%",
    width: "8.93%",
    height: "3.74%",
    position: "absolute",
  },
  chhattisgarh1: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
  },
  chhattisgarh: {
    left: 76,
    top: 17,
    position: "absolute",
  },
  yatra: {
    top: 68,
    left: 215,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  bastarDussehraChild: {
    top: 76,
    left: 78,
    width: 133,
    height: 2,
    position: "absolute",
  },
  download122: {
    top: 270,
    width: 360,
    height: 200,
  },
  bastarDussehraItem: {
    top: 502,
    width: 287,
    height: 4,
  },
  bastarDussehraInner: {
    top: 198,
    left: 53,
    width: 290,
  },
  lineView: {
    top: 732,
    left: 51,
    width: 329,
  },
  bastarDussherraCelebratedContainer: {
    top: 548,
    left: 23,
    fontSize: FontSize.size_sm,
    textAlign: "justify",
    width: 315,
    height: 213,
  },
  bastarDussehraFestival: {
    top: 167,
    left: 29,
    textAlign: "center",
    width: 311,
    height: 32,
    fontSize: FontSize.size_lg,
  },
  bastarDussehra: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 664,
  },
});

export default BastarDussehra;

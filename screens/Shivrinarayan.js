import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Shivrinarayan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.shivrinarayan}>
      <View style={styles.chhattisgarhParent}>
        <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
        <Text style={styles.yatra}>YATRA</Text>
        <Pressable
          style={styles.iconMenu}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-menu18.png")}
          />
        </Pressable>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Image
        style={[styles.shivrinarayanChild, styles.shivrinarayanLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.shivrinarayanItem, styles.shivrinarayanLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.shivrinarayanInner, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-17.png")}
      />
      <Text style={styles.shivrinarayanTemple}>Shivrinarayan Temple</Text>
      <Image
        style={[styles.image18Icon, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/image-18.png")}
      />
      <Text style={[styles.heLaxminarayanTemple, styles.nawagarh2Typo]}>
        he Laxminarayan Temple was built by the kings of Hayhay Vansh during the
        age of 11th century on the bank of Mahanadi at Shivarinarayan Nagar.
        According Hindu mythology from the age of Ramayana shabri aasharma is
        situated here. The temple of Shivarinarayan is a great piece work
        Vaishanav Shaili by the Vaishnav community. During Magh purnima a grand
        fate is being organized here. It is a place of worth watching for the
        tourists.
      </Text>
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-193.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector45.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector46.png")}
      />
      <Text style={[styles.swamiVivekanandInternational, styles.nawagarh2Typo]}>
        Swami Vivekanand International Airpot
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector47.png")}
      />
      <Image
        style={styles.busIcon}
        resizeMode="cover"
        source={require("../assets/bus15.png")}
      />
      <Text style={[styles.nawagarh, styles.nawagarhPosition]}>
        <Text style={styles.text}>{`: `}</Text>
        <Text style={styles.nawagarh1}>NAWAGARH</Text>
      </Text>
      <Text style={[styles.janjgirNailaAndChampa, styles.nawagarhPosition]}>
        Janjgir-Naila and Champa is nearest Railway station
      </Text>
      <Text style={[styles.nawagarh2, styles.nawagarh2Typo]}>Nawagarh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  shivrinarayanLayout: {
    height: 4,
    width: 300,
    position: "absolute",
  },
  lineIconPosition: {
    top: 832,
    height: 4,
    position: "absolute",
  },
  nawagarh2Typo: {
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "82.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nawagarhPosition: {
    left: 91,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 2,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
    color: Color.white,
    left: 0,
    position: "absolute",
  },
  yatra: {
    top: 60,
    left: 140,
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
    left: "63.89%",
    top: "0%",
    right: "0%",
    bottom: "43.73%",
    width: "36.11%",
    height: "56.27%",
    position: "absolute",
  },
  groupChild: {
    top: 66,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 127,
    height: 1,
  },
  chhattisgarhParent: {
    top: 14,
    left: 96,
    width: 360,
    height: 92,
    position: "absolute",
  },
  shivrinarayanChild: {
    top: 398,
    left: 7,
  },
  shivrinarayanItem: {
    top: 167,
    left: 55,
  },
  shivrinarayanInner: {
    left: 100,
    width: 276,
  },
  shivrinarayanTemple: {
    top: 126,
    left: 71,
    width: 303,
    height: 48,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  image18Icon: {
    top: 194,
    width: 320,
    height: 174,
  },
  heLaxminarayanTemple: {
    top: 425,
    left: 41,
    height: 332,
    fontSize: FontSize.size_base,
    width: 300,
    textAlign: "justify",
  },
  lineIcon: {
    left: 92,
    width: 284,
  },
  vectorIcon: {
    height: "2.28%",
    width: "4.52%",
    top: "78.86%",
    right: "82.71%",
    bottom: "18.86%",
    left: "12.77%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.4%",
    width: "5.05%",
    top: "96.71%",
    bottom: "0.9%",
    left: "12.5%",
  },
  swamiVivekanandInternational: {
    top: 1417,
    left: 81,
    width: 266,
    height: 27,
    fontSize: FontSize.size_2xs,
  },
  vectorIcon2: {
    height: "2.63%",
    width: "5.32%",
    top: "91.63%",
    bottom: "5.75%",
    left: "12.23%",
  },
  busIcon: {
    top: 1240,
    left: 47,
    width: 23,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_2xs,
  },
  nawagarh1: {
    fontSize: FontSize.size_base,
  },
  nawagarh: {
    top: 1157,
    width: 196,
    height: 52,
  },
  janjgirNailaAndChampa: {
    top: 1329,
    width: 245,
    height: 58,
    fontSize: FontSize.size_base,
  },
  nawagarh2: {
    top: 1229,
    left: 97,
    width: 174,
    fontSize: FontSize.size_base,
    height: 48,
  },
  shivrinarayan: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1001,
    overflow: "hidden",
    width: "100%",
  },
});

export default Shivrinarayan;

import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homepage, styles.iconLayout]}>
      <Image
        style={[styles.whatsappImage20221223At1, styles.homepageChildPosition]}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20221223-at-139-1.png")}
      />
      <View style={[styles.homepageChild, styles.homepageChildPosition]} />
      <View style={styles.iconMenuParent}>
        <Pressable
          style={styles.iconMenu}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-menu56.png")}
          />
        </Pressable>
        <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
        <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
        <View style={styles.groupChild} />
      </View>
      <View style={styles.iconMenuParent}>
        <Pressable
          style={styles.iconMenu}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-menu56.png")}
          />
        </Pressable>
        <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
        <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
        <View style={styles.groupChild} />
      </View>
      <Pressable
        style={[styles.homepageInner, styles.innerLayout]}
        onPress={() => navigation.navigate("DiscoverNow")}
      >
        <View style={[styles.groupInner, styles.innerLayout]} />
      </Pressable>
      <Text style={[styles.discoverNow, styles.yatraTypo]}>DISCOVER NOW!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  homepageChildPosition: {
    width: 370,
    left: 0,
    top: 0,
    position: "absolute",
  },
  yatraTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  innerLayout: {
    height: 46,
    width: 281,
    position: "absolute",
  },
  whatsappImage20221223At1: {
    height: 846,
  },
  homepageChild: {
    borderRadius: 2,
    backgroundColor: Color.darkslategray_200,
    height: 800,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconMenu: {
    left: "84.8%",
    top: "0%",
    right: "0%",
    bottom: "64.02%",
    width: "15.2%",
    height: "35.98%",
    position: "absolute",
  },
  chhattisgarh: {
    top: 3,
    left: 3,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 64,
    left: 169,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
  },
  groupChild: {
    top: 80,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 149,
    height: 1,
    left: 0,
    position: "absolute",
  },
  iconMenuParent: {
    height: "17.72%",
    width: "93.13%",
    top: "1.38%",
    right: "3.89%",
    bottom: "80.91%",
    left: "2.97%",
    position: "absolute",
  },
  groupInner: {
    backgroundColor: "rgba(59, 83, 53, 0)",
    left: 0,
    top: 0,
    width: 281,
  },
  homepageInner: {
    top: 377,
    left: 45,
  },
  discoverNow: {
    top: 383,
    left: 85,
    fontFamily: FontFamily.glory,
    width: 285,
    height: 59,
  },
  homepage: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 550,
  },
});

export default Homepage;

import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const RamMandir = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.ramMandir, styles.iconLayout]}>
      <View style={styles.chhattisgarhWrapper}>
        <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      </View>
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu23.png")}
        />
      </Pressable>
      <View style={styles.ramMandirChild} />
      <Image
        style={[styles.ramMandirItem, styles.ramLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.ramMandirInner, styles.ramLayout]}
        resizeMode="cover"
        source={require("../assets/line-169.png")}
      />
      <Text
        style={[styles.ramMandir1, styles.ramMandir1Typo, styles.yatraTypo]}
      >
        <Text style={styles.ramMandir2}>Ram Mandir</Text>
      </Text>
      <Image
        style={styles.image23Icon}
        resizeMode="cover"
        source={require("../assets/image-23.png")}
      />
      <Text style={styles.hindusWorshipLord}>
        Hindus worship Lord Ram at the Ram Mandir in Raipur. It is one of
        Raipur's well-known temples. In Chhattisgarh's Raipur, it can be found
        on VIP Road. Construction of the impressive temple, which cost about 15
        crores and took five years to complete, was overseen by the Ram Mandir
        Committee. The 108-foot-tall temple was constructed by hundreds of
        artisans from Rajasthan and Odisha. On the stones on the inner and
        outside walls, numerous manifestations of Lord Vishnu have been
        skillfully carved.
      </Text>
      <Text
        style={[
          styles.mphvv7VishalNagar,
          styles.raipurTypo,
          styles.ramMandir1Typo,
        ]}
      >
        6MPH+VV7, Vishal Nagar, Raipur, Chhattisgarh 492012
      </Text>
      <Text style={[styles.raipur, styles.raipurPosition, styles.raipurTypo]}>
        Raipur
      </Text>
      <Text style={[styles.raipurJunction, styles.raipurPosition]}>
        {" "}
        Raipur junction.
      </Text>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-38.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  yatraTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  ramLayout: {
    height: 4,
    position: "absolute",
  },
  ramMandir1Typo: {
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  raipurTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  raipurPosition: {
    width: 209,
    left: 49,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 0,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    textAlign: "left",
    color: Color.white,
    left: 0,
    height: 41,
    width: 319,
    position: "absolute",
  },
  chhattisgarhWrapper: {
    top: 20,
    height: 41,
    width: 319,
    left: 94,
    position: "absolute",
  },
  yatra: {
    top: 76,
    left: 227,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
    color: Color.white,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconMenu: {
    left: "85.11%",
    top: "2.13%",
    right: "6.12%",
    bottom: "94.78%",
    width: "8.78%",
    height: "3.09%",
    position: "absolute",
  },
  ramMandirChild: {
    top: 85,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 129,
    height: 1,
    left: 94,
    position: "absolute",
  },
  ramMandirItem: {
    top: 175,
    left: 14,
    width: 300,
  },
  ramMandirInner: {
    top: 496,
    width: 299,
    left: 0,
  },
  ramMandir2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  ramMandir1: {
    top: 145,
    left: 88,
    width: 291,
    height: 64,
  },
  image23Icon: {
    top: 229,
    width: 333,
    height: 233,
    left: 0,
    position: "absolute",
  },
  hindusWorshipLord: {
    top: 527,
    fontSize: 21,
    width: 277,
    height: 445,
    textAlign: "justify",
    left: 49,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  mphvv7VishalNagar: {
    top: 1199,
    left: 43,
    width: 321,
    height: 36,
  },
  raipur: {
    top: 1266,
    height: 45,
  },
  raipurJunction: {
    top: 1320,
    fontSize: FontSize.size_2xs,
    height: 33,
    textAlign: "justify",
  },
  lineIcon: {
    top: 1101,
    left: 116,
    width: 260,
    height: 0,
    position: "absolute",
  },
  ramMandir: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1001,
  },
});

export default RamMandir;

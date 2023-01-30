import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Margin } from "../GlobalStyles";

const DuddhadhariTemple = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.duddhadhariTemple, styles.iconLayout]}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu21.png")}
        />
      </Pressable>
      <View style={styles.duddhadhariTempleChild} />
      <Image
        style={[styles.duddhadhariTempleItem, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={styles.duddhadhariTempleInner}
        resizeMode="cover"
        source={require("../assets/line-162.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-151.png")}
      />
      <Image
        style={styles.image21Icon}
        resizeMode="cover"
        source={require("../assets/image-21.png")}
      />
      <Text style={styles.duddhadhariTemple1}>Duddhadhari Temple</Text>
      <Text style={styles.aHinduTempleContainer}>
        <Text style={styles.aHinduTemple}>
          A Hindu temple dedicated to Lord Rama, Dudhadhari temple boasts
          original Ramayana-era sculptures, making it one of the rarest of its
          kind in the country. Built by Kalchuri ruler Jait Singh in the 17th
          century, the structure’s outer walls feature exquisite sculptures
          related to Lord Rama.
        </Text>
        <Text style={styles.aLegendGoes}>
          A legend goes that the temple is named after an ardent devotee of Lord
          Hanumana, Swami Balbhadra Das, who was dudh-ahari, meaning he survived
          on milk alone. It is said that a cow called Surhi used to bathe the
          idol here in its milk and Lord Hanuman's devotee used to drink that
          milk as prasad (divine offering). That is how he acquired the title
          dudh-ahari.
        </Text>
      </Text>
      <Text style={[styles.raipur, styles.raipurTypo]}>Raipur</Text>
      <Text style={[styles.raipurBusStation, styles.raipurTypo]}>
        Raipur bus station
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  lineIconLayout: {
    height: 4,
    width: 300,
    position: "absolute",
  },
  raipurTypo: {
    left: 68,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 18,
    left: 97,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 72,
    left: 234,
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
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconMenu: {
    left: "85.9%",
    top: "2.13%",
    right: "6.38%",
    bottom: "95.47%",
    width: "7.71%",
    height: "2.4%",
    position: "absolute",
  },
  duddhadhariTempleChild: {
    top: 79,
    left: 103,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 125,
    height: 1,
    position: "absolute",
  },
  duddhadhariTempleItem: {
    top: 163,
    left: 55,
  },
  duddhadhariTempleInner: {
    top: 1013,
    left: 149,
    height: 0,
    width: 300,
    position: "absolute",
  },
  lineIcon: {
    top: 442,
    left: 0,
  },
  image21Icon: {
    top: 203,
    left: 8,
    width: 320,
    height: 200,
    position: "absolute",
  },
  duddhadhariTemple1: {
    top: 127,
    left: 65,
    width: 279,
    height: 82,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  aHinduTemple: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  aLegendGoes: {
    margin: Margin.m_md,
  },
  aHinduTempleContainer: {
    top: 479,
    left: 29,
    textAlign: "justify",
    width: 317,
    height: 504,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  raipur: {
    top: 1065,
    width: 166,
    height: 40,
  },
  raipurBusStation: {
    top: 1127,
    width: 190,
    height: 54,
  },
  duddhadhariTemple: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1001,
  },
});

export default DuddhadhariTemple;

import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const BellMetal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bellMetal}>
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
          source={require("../assets/-icon-menu28.png")}
        />
      </Pressable>
      <View style={styles.bellMetalChild} />
      <Text style={styles.bellMetalDhokra}>BELL METAL (DHOKRA)</Text>
      <Image
        style={styles.bellMetalItem}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.image37Icon, styles.kmParentPosition]}
        resizeMode="cover"
        source={require("../assets/image-37.png")}
      />
      <Image
        style={[styles.bellMetalInner, styles.busIconPosition]}
        resizeMode="cover"
        source={require("../assets/line-169.png")}
      />
      <Text style={styles.bastarAndRaigarh}>
        Bastar and Raigarh districts of Chhattisgarh are popular for crafting
        bell metal handicrafts using brass, and bronze. Tribes like ‘Ghawas’ of
        Bastar and ‘Jharas’ of Raigarh mainly practice this art form, also known
        as Dhokra art. This is done with lost wax technique or hollow casting.
      </Text>
      <View style={[styles.kmParent, styles.kmParentPosition]}>
        <Text style={styles.km}>245.2 Km</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-1912.png")}
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
        <Text style={[styles.bastar, styles.bastarTypo]}>Bastar</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector70.png")}
        />
        <Text
          style={[styles.swamiVivekanandInternational, styles.jagdalPurTypo]}
        >
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector71.png")}
        />
        <Text style={[styles.jagdalPur, styles.jagdalPurTypo]}>Jagdal Pur</Text>
        <Text style={[styles.raipurJagdalpurRailway, styles.bastarTypo]}>
          Raipur /jagdalpur Railway Station
        </Text>
        <Image
          style={[styles.busIcon, styles.busIconPosition]}
          resizeMode="cover"
          source={require("../assets/bus22.png")}
        />
      </View>
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
    height: 292,
    left: 0,
    position: "absolute",
  },
  busIconPosition: {
    left: 0,
    position: "absolute",
  },
  bastarTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "justify",
    left: 36,
    fontFamily: FontFamily.robotoSerif,
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
  jagdalPurTypo: {
    height: 27,
    fontSize: FontSize.size_2xs,
    textAlign: "justify",
    left: 36,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 13,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    left: 95,
  },
  yatra: {
    top: 65,
    left: 233,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "86.29%",
    top: "1.92%",
    right: "6.18%",
    bottom: "95.83%",
    width: "7.53%",
    height: "2.25%",
    position: "absolute",
  },
  bellMetalChild: {
    top: 76,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 129,
    height: 1,
    left: 95,
    position: "absolute",
  },
  bellMetalDhokra: {
    top: 126,
    left: 90,
    fontSize: FontSize.size_xl,
    width: 312,
    height: 76,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  bellMetalItem: {
    top: 200,
    width: 300,
    height: 4,
    left: 36,
    position: "absolute",
  },
  image37Icon: {
    top: 222,
    width: 345,
  },
  bellMetalInner: {
    top: 532,
    width: 299,
    height: 4,
  },
  bastarAndRaigarh: {
    top: 556,
    left: 49,
    width: 255,
    height: 356,
    textAlign: "justify",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  km: {
    top: 29,
    left: 42,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  groupChild: {
    top: -2,
    left: 74,
    width: 298,
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
  bastar: {
    top: 89,
    width: 103,
    height: 33,
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
  },
  vectorIcon3: {
    height: "13.11%",
    width: "5.35%",
    top: "66.95%",
    bottom: "19.95%",
    left: "0.27%",
  },
  jagdalPur: {
    top: 149,
    width: 115,
  },
  raipurJagdalpurRailway: {
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
    top: 868,
    width: 374,
  },
  bellMetal: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1462,
    overflow: "hidden",
    width: "100%",
  },
});

export default BellMetal;

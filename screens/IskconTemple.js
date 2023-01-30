import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const IskconTemple = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iskconTemple}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Text style={[styles.yatra, styles.yatraTypo]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu24.png")}
        />
      </Pressable>
      <View style={styles.iskconTempleChild} />
      <Image
        style={[styles.iskconTempleItem, styles.iskconLayout]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[
          styles.iskconTempleInner,
          styles.busIconPosition,
          styles.iskconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/line-151.png")}
      />
      <Text style={[styles.iskconTemple1, styles.yatraTypo]}>
        Iskcon Temple
      </Text>
      <Image
        style={styles.image24Icon}
        resizeMode="cover"
        source={require("../assets/image-24.png")}
      />
      <Text style={styles.iskconRaipurIs}>
        ISKCON RAIPUR is a temple, monastery and spiritual community with over
        5,000 members across Raipur(CG), dedicated to the practice of
        bhakti-yoga or loving service to Krishna, the Supreme Person (God).
      </Text>
      <View style={styles.lineParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/line-192.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector57.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector58.png")}
        />
        <Text style={styles.swamiVivekanandInternational}>
          Swami Vivekanand International Airpot
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector59.png")}
        />
        <Text style={[styles.raipurJunction, styles.raipurTypo1]}>
          {" "}
          Raipur junction.
        </Text>
        <Image
          style={[styles.busIcon, styles.busIconPosition]}
          resizeMode="cover"
          source={require("../assets/bus19.png")}
        />
      </View>
      <Text style={[styles.raipurJunction1, styles.raipurTypo1]}>
        {" "}
        Raipur junction.
      </Text>
      <Text style={[styles.tatibandhRaipur, styles.raipurTypo]}>
        Tatibandh ,Raipur
      </Text>
      <Text style={[styles.raipur, styles.raipurTypo]}>{`Raipur `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  yatraTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iskconLayout: {
    width: 300,
    height: 4,
  },
  busIconPosition: {
    left: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "94.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  raipurTypo1: {
    height: 25,
    width: 192,
    fontSize: FontSize.size_2xs,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  raipurTypo: {
    height: 33,
    width: 229,
    left: 56,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 24,
    left: 92,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 75,
    left: 232,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMenu: {
    left: "84.84%",
    top: "2.82%",
    right: "6.91%",
    bottom: "93.55%",
    width: "8.24%",
    height: "3.63%",
    position: "absolute",
  },
  iskconTempleChild: {
    top: 85,
    left: 102,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 123,
    height: 1,
    position: "absolute",
  },
  iskconTempleItem: {
    top: 167,
    left: 38,
    height: 4,
    position: "absolute",
  },
  iskconTempleInner: {
    top: 419,
    height: 4,
  },
  iskconTemple1: {
    top: 133,
    left: 104,
    fontFamily: FontFamily.inter,
    width: 272,
    height: 52,
  },
  image24Icon: {
    top: 189,
    left: 3,
    width: 320,
    height: 212,
    position: "absolute",
  },
  iskconRaipurIs: {
    top: 447,
    left: 44,
    width: 287,
    height: 196,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_base,
    color: Color.white,
    position: "absolute",
  },
  groupChild: {
    top: 155,
    left: 74,
    width: 283,
    height: 4,
    position: "absolute",
  },
  vectorIcon: {
    height: "5.09%",
    width: "4.55%",
    top: "0%",
    right: "94.65%",
    bottom: "94.91%",
    left: "0.8%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "5.35%",
    width: "5.08%",
    top: "28.02%",
    bottom: "66.63%",
    left: "0.53%",
  },
  swamiVivekanandInternational: {
    top: 422,
    width: 266,
    height: 27,
    fontSize: FontSize.size_2xs,
    left: 36,
    textAlign: "justify",
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIcon2: {
    height: "5.86%",
    width: "5.35%",
    top: "18.59%",
    bottom: "75.55%",
    left: "0.27%",
  },
  raipurJunction: {
    top: 366,
    left: 36,
    height: 25,
    width: 192,
  },
  busIcon: {
    top: 291,
    width: 23,
    height: 37,
    overflow: "hidden",
  },
  lineParent: {
    top: 508,
    left: 19,
    width: 374,
    height: 449,
    position: "absolute",
  },
  raipurJunction1: {
    top: 854,
    left: 55,
  },
  tatibandhRaipur: {
    top: 728,
  },
  raipur: {
    top: 783,
  },
  iskconTemple: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 853,
    overflow: "hidden",
    width: "100%",
  },
});

export default IskconTemple;

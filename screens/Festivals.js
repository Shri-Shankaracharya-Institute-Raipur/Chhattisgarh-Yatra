import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Festivals = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.festivals}>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu46.png")}
        />
      </Pressable>
      <Pressable
        style={styles.chhattisgarh}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Text style={styles.chhattisgarh1}>CHHATTISGARH</Text>
      </Pressable>
      <Text style={styles.yatra}>YATRA</Text>
      <View style={styles.festivalsChild} />
      <Text style={styles.festivals1}>FESTIVALS</Text>
      <Pressable
        style={styles.download121}
        onPress={() => navigation.navigate("BastarDussehra")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/download-12-1.png")}
        />
      </Pressable>
      <Text style={[styles.bastarDussehraFestival, styles.festivalTypo]}>
        Bastar Dussehra Festival
      </Text>
      <Pressable
        style={styles.images41}
        onPress={() => navigation.navigate("BhoramdevMahotsav")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/images-4-1.png")}
        />
      </Pressable>
      <Text style={[styles.bhoramdevFestival, styles.rajimKumbhMelaTypo]}>
        Bhoramdev Festival
      </Text>
      <Pressable
        style={styles.images51}
        onPress={() => navigation.navigate("MadaiFestival")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/images-5-1.png")}
        />
      </Pressable>
      <Text
        style={[styles.madaiFestival, styles.festivalTypo]}
      >{`Madai Festival `}</Text>
      <Pressable
        style={[styles.images61, styles.images61Layout]}
        onPress={() => navigation.navigate("RajimKumbh")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/images-6-1.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.rajimKumbhMela,
          styles.images61Layout,
          styles.rajimKumbhMelaTypo,
        ]}
      >
        Rajim Kumbh Mela
      </Text>
      <Pressable
        style={styles.download131}
        onPress={() => navigation.navigate("RajimKumbh1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/download-13-1.png")}
        />
      </Pressable>
      <Text style={[styles.sirpurCulturalFestival, styles.images61Layout]}>
        Sirpur Cultural Festival
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  festivalTypo: {
    height: 32,
    left: 28,
    textAlign: "center",
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    color: Color.white,
    position: "absolute",
  },
  rajimKumbhMelaTypo: {
    height: 36,
    left: 34,
    textAlign: "center",
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    color: Color.white,
  },
  images61Layout: {
    width: 309,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  iconMenu: {
    left: "82.43%",
    top: "1.87%",
    right: "8.43%",
    bottom: "95.97%",
    width: "9.14%",
    height: "2.17%",
    position: "absolute",
  },
  chhattisgarh1: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
  },
  chhattisgarh: {
    left: 77,
    top: 19,
    position: "absolute",
  },
  yatra: {
    top: 71,
    left: 214,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  festivalsChild: {
    top: 80,
    left: 82,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 129,
    height: 1,
    position: "absolute",
  },
  festivals1: {
    top: 199,
    left: 87,
    fontSize: FontSize.size_2xl,
    width: 218,
    height: 55,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  download121: {
    top: 273,
    height: 172,
    width: 307,
    left: 32,
    position: "absolute",
  },
  bastarDussehraFestival: {
    top: 459,
    width: 311,
  },
  images41: {
    top: 529,
    height: 162,
    width: 307,
    left: 32,
    position: "absolute",
  },
  bhoramdevFestival: {
    top: 701,
    width: 305,
    position: "absolute",
  },
  images51: {
    top: 775,
    height: 180,
    left: 34,
    width: 307,
    position: "absolute",
  },
  madaiFestival: {
    top: 974,
    width: 307,
  },
  images61: {
    top: 1058,
    height: 183,
    left: 32,
  },
  rajimKumbhMela: {
    top: 1257,
  },
  download131: {
    top: 1341,
    width: 308,
    height: 184,
    left: 32,
    position: "absolute",
  },
  sirpurCulturalFestival: {
    top: 1543,
    left: 30,
    height: 34,
    textAlign: "center",
    width: 309,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    color: Color.white,
  },
  festivals: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1140,
    overflow: "hidden",
    width: "100%",
  },
});

export default Festivals;

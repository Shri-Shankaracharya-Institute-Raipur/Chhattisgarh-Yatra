import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Heritage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.heritage}>
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <View style={[styles.heritageChild, styles.heritageBorder]} />
      <Text style={styles.yatra}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu12.png")}
        />
      </Pressable>
      <Image
        style={[styles.heritageItem, styles.pressablePosition]}
        resizeMode="cover"
        source={require("../assets/line-13.png")}
      />
      <View style={[styles.heritageInner, styles.heritageBorder]} />
      <Text style={[styles.heritageSites, styles.heritageSitesTypo]}>
        HERITAGE SITES
      </Text>
      <Pressable
        style={[styles.pressable, styles.pressablePosition]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/20211023-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.sirpur1, styles.sirpur1Position]}
        onPress={() => navigation.navigate("LaxmanTemple")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/sirpur-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.surangTila1, styles.sirpur1Position]}
        onPress={() => navigation.navigate("SurangTila")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/surangtila-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.download141}
        onPress={() => navigation.navigate("SiddheshwarTemple")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/download-14-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.download151, styles.images91Position]}
        onPress={() => navigation.navigate("PrayagGiri")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/download-15-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.images91, styles.images91Position]}
        onPress={() => navigation.navigate("Dongargarh")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/images-9-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable1, styles.images91Position]}
        onPress={() => navigation.navigate("MadvaMahal")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/20180815-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.download161}
        onPress={() => navigation.navigate("PachrahiMuseum")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/download-16-1.png")}
        />
      </Pressable>
      <Text style={styles.mahantGhasidasMuseum}>Mahant Ghasidas Museum</Text>
      <Pressable
        style={styles.mamaBhanjaTempleAmm1}
        onPress={() => navigation.navigate("MamaBhanjaTemple")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/mama-bhanja-temple--amm-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.battisaTempleBarsurDantewad}
        onPress={() => navigation.navigate("BattisaTemple")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/battisatemplebarsurdantewada1-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.t1, styles.t1Layout]}
        onPress={() => navigation.navigate("MuseumOfAnthropology")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/32311-1526022529t-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.kutumbsarGufa1, styles.t1Layout]}
        onPress={() => navigation.navigate("KutumsarCaves")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/kutumbsar-gufa-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.kailashCaves1, styles.t1Layout]}
        onPress={() => navigation.navigate("KailashCaves")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/kailashcaves-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.ed6b7eb2a5afa7e356726d30fd4dda}
        onPress={() => navigation.navigate("Ratanpur")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/ed6b7eb2a5afa7e356726d30fd4dda8c-1.png")}
        />
      </Pressable>
      <Text style={[styles.laxmanTemple, styles.surangTilaTypo]}>
        Laxman Temple
      </Text>
      <Text style={[styles.surangTila, styles.surangTilaTypo]}>
        Surang Tila
      </Text>
      <Text style={[styles.siddheshwarTemple, styles.kailashCavesTypo]}>
        Siddheshwar Temple
      </Text>
      <Text
        style={[
          styles.prayagGiriBuddha,
          styles.prayagGiriBuddhaLayout,
          styles.heritageSitesTypo,
        ]}
      >
        Prayag Giri Buddha Vihar
      </Text>
      <Text style={[styles.bambleshwariTemple, styles.kutumsarCavesTypo]}>
        Bambleshwari Temple
      </Text>
      <Text style={[styles.madvaMahal, styles.madvaMahalTypo]}>
        Madva Mahal
      </Text>
      <Text style={[styles.pachrahiMuseum, styles.pachrahiMuseumTypo]}>
        Pachrahi Museum
      </Text>
      <Text style={[styles.mamaBhanjaTemple, styles.heritageSitesTypo]}>
        Mama Bhanja Temple
      </Text>
      <Text style={[styles.battisaTemple, styles.madvaMahalTypo]}>
        Battisa Temple
      </Text>
      <Text
        style={[
          styles.museumOfAnthropology,
          styles.madvaMahalTypo,
          styles.prayagGiriBuddhaLayout,
        ]}
      >
        Museum of Anthropology
      </Text>
      <Text style={[styles.kutumsarCaves, styles.kutumsarCavesTypo]}>
        Kutumsar Caves
      </Text>
      <Text style={[styles.kailashCaves, styles.kailashCavesTypo]}>
        Kailash Caves
      </Text>
      <Text style={[styles.danteshwariTemple, styles.pachrahiMuseumTypo]}>
        Danteshwari Temple
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heritageBorder: {
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  pressablePosition: {
    left: 66,
    position: "absolute",
  },
  heritageSitesTypo: {
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  sirpur1Position: {
    left: 71,
    width: 212,
    position: "absolute",
  },
  images91Position: {
    width: 238,
    left: 61,
    position: "absolute",
  },
  t1Layout: {
    width: 237,
    position: "absolute",
  },
  surangTilaTypo: {
    height: 27,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  kailashCavesTypo: {
    height: 36,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  prayagGiriBuddhaLayout: {
    width: 314,
    left: 32,
  },
  kutumsarCavesTypo: {
    height: 28,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  madvaMahalTypo: {
    height: 30,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  pachrahiMuseumTypo: {
    height: 32,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 20,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    left: 79,
    position: "absolute",
  },
  heritageChild: {
    top: 82,
    borderTopWidth: 1,
    width: 128,
    height: 1,
    left: 79,
    borderColor: "#fff",
    borderStyle: "solid",
  },
  yatra: {
    top: 74,
    left: 216,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  iconMenu: {
    left: "84.72%",
    top: "0.82%",
    right: "7.5%",
    bottom: "98.31%",
    width: "7.78%",
    height: "0.87%",
    position: "absolute",
  },
  heritageItem: {
    top: 238,
    width: 221,
    height: 4,
  },
  heritageInner: {
    top: 208,
    left: 425,
    borderTopWidth: 2,
    width: 312,
    height: 2,
  },
  heritageSites: {
    top: 209,
    width: 211,
    height: 41,
    left: 74,
  },
  pressable: {
    top: 277,
    height: 206,
    width: 212,
  },
  sirpur1: {
    top: 560,
    height: 141,
  },
  surangTila1: {
    top: 791,
    height: 128,
  },
  download141: {
    left: 104,
    top: 998,
    width: 145,
    height: 168,
    position: "absolute",
  },
  download151: {
    top: 1261,
    height: 140,
  },
  images91: {
    top: 1503,
    height: 142,
  },
  pressable1: {
    top: 1742,
    height: 120,
  },
  download161: {
    left: 62,
    top: 1947,
    width: 236,
    height: 147,
    position: "absolute",
  },
  mahantGhasidasMuseum: {
    top: 489,
    width: 310,
    height: 20,
    left: 32,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  mamaBhanjaTempleAmm1: {
    left: 88,
    top: 2209,
    width: 184,
    height: 268,
    position: "absolute",
  },
  battisaTempleBarsurDantewad: {
    top: 2590,
    width: 241,
    height: 152,
    left: 59,
    position: "absolute",
  },
  t1: {
    top: 2824,
    height: 176,
    left: 59,
  },
  kutumbsarGufa1: {
    top: 3120,
    height: 134,
    left: 58,
  },
  kailashCaves1: {
    top: 3388,
    height: 126,
    left: 58,
  },
  ed6b7eb2a5afa7e356726d30fd4dda: {
    top: 3648,
    width: 205,
    height: 212,
    left: 74,
    position: "absolute",
  },
  laxmanTemple: {
    top: 707,
    left: 83,
    width: 188,
  },
  surangTila: {
    top: 925,
    left: 109,
    width: 136,
  },
  siddheshwarTemple: {
    top: 1172,
    width: 255,
    left: 61,
    height: 36,
  },
  prayagGiriBuddha: {
    top: 1407,
    height: 38,
  },
  bambleshwariTemple: {
    top: 1660,
    width: 288,
    left: 58,
  },
  madvaMahal: {
    top: 1868,
    left: 99,
    width: 162,
  },
  pachrahiMuseum: {
    top: 2100,
    left: 76,
    width: 212,
  },
  mamaBhanjaTemple: {
    top: 2483,
    width: 251,
    left: 58,
    height: 42,
  },
  battisaTemple: {
    top: 2750,
    left: 101,
    width: 176,
  },
  museumOfAnthropology: {
    top: 3008,
  },
  kutumsarCaves: {
    top: 3264,
    left: 81,
    width: 198,
  },
  kailashCaves: {
    top: 3524,
    left: 91,
    width: 172,
  },
  danteshwariTemple: {
    top: 3870,
    width: 245,
    left: 58,
  },
  heritage: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 2762,
    overflow: "hidden",
    width: "100%",
  },
});

export default Heritage;

import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import AdventureTourism from "../components/AdventureTourism";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const DiscoverNow = () => {
  const [place1ImageVisible, setPlace1ImageVisible] = useState(false);
  const navigation = useNavigation();

  const openPlace1Image = useCallback(() => {
    setPlace1ImageVisible(true);
  }, []);

  const closePlace1Image = useCallback(() => {
    setPlace1ImageVisible(false);
  }, []);
  return (
    <>
      <View style={styles.discoverNow}>
        <Pressable
          style={styles.barnawaparaWildlifeSanctuary}
          onPress={() => navigation.navigate("WildLifeSanturies")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/barnawaparawildlifesanctuary-1.png")}
          />
        </Pressable>
        <Text
          style={[styles.chhattisgarh, styles.yatraFlexBox, styles.templesTypo]}
        >
          CHHATTISGARH
        </Text>
        <View style={styles.discoverNowChild} />
        <Text style={[styles.yatra, styles.yatraFlexBox]}>YATRA</Text>
        <Pressable
          style={[styles.chitrakotFalls1, styles.templePosition]}
          onPress={() => navigation.navigate("WaterFalls")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/chitrakot-falls-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.danteshwariTemple1, styles.templePosition]}
          onPress={() => navigation.navigate("Heritage")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/danteshwaritemple-1.png")}
          />
        </Pressable>
        <Text
          style={[styles.waterFalls, styles.yatraFlexBox, styles.templesTypo]}
        >
          Water Falls
        </Text>
        <Text
          style={[styles.heritage, styles.yatraFlexBox, styles.templesTypo]}
        >
          Heritage
        </Text>
        <Pressable
          style={[styles.bhoramdeoTemple1, styles.templePosition]}
          onPress={() => navigation.navigate("Temples")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/bhoramdeo-temple-1.png")}
          />
        </Pressable>
        <Text
          style={[styles.temples, styles.yatraFlexBox, styles.templesTypo]}
        >{`          Temples `}</Text>
        <Pressable
          style={[styles.art1, styles.templePosition]}
          onPress={() => navigation.navigate("ArtAndCraft")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/art-1.png")}
          />
        </Pressable>
        <Text
          style={[styles.artAndCraft, styles.yatraFlexBox, styles.templesTypo]}
        >
          Art and Craft
        </Text>
        <Pressable
          style={[styles.place1, styles.templePosition]}
          onPress={openPlace1Image}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/place-1.png")}
          />
        </Pressable>
        <Text
          style={[
            styles.wildLifeSanturiesContainer,
            styles.yatraFlexBox,
            styles.templesTypo,
          ]}
        >
          <Text style={styles.text}>{`      `}</Text>
          <Text style={styles.wildLifeSanturies}> Wild life Santuries</Text>
        </Text>
        <Pressable
          style={styles.iconMenu}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/-icon-menu55.png")}
          />
        </Pressable>
        <Text
          style={[
            styles.adventureTourism,
            styles.yatraFlexBox,
            styles.templesTypo,
          ]}
        >
          <Text style={styles.text1}>{`       `}</Text>
          <Text style={styles.wildLifeSanturies}> Adventure Tourism</Text>
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector168.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={place1ImageVisible}>
        <View style={styles.place1ImageOverlay}>
          <Pressable style={styles.place1ImageBg} onPress={closePlace1Image} />
          <AdventureTourism onClose={closePlace1Image} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  place1ImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  place1ImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  yatraFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  templesTypo: {
    fontFamily: FontFamily.imbue,
    color: Color.white,
  },
  templePosition: {
    width: 326,
    left: 14,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  barnawaparaWildlifeSanctuary: {
    left: 16,
    top: 133,
    width: 328,
    height: 167,
    position: "absolute",
  },
  chhattisgarh: {
    top: 21,
    fontSize: FontSize.size_3xl,
    width: 275,
    height: 45,
    left: 65,
  },
  discoverNowChild: {
    top: 82,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 138,
    height: 1,
    left: 65,
    position: "absolute",
  },
  yatra: {
    top: 73,
    left: 206,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 121,
    height: 36,
  },
  chitrakotFalls1: {
    top: 353,
    height: 168,
  },
  icon2: {
    borderRadius: 5,
  },
  danteshwariTemple1: {
    top: 585,
    height: 208,
  },
  waterFalls: {
    top: 521,
    left: 116,
    width: 162,
    height: 54,
    fontSize: FontSize.size_2xl,
  },
  heritage: {
    top: 795,
    left: 142,
    width: 96,
    height: 55,
    fontSize: FontSize.size_xl,
  },
  bhoramdeoTemple1: {
    top: 840,
    height: 190,
  },
  temples: {
    top: 1032,
    left: 103,
    fontSize: FontSize.size_xl,
  },
  art1: {
    top: 1080,
    height: 179,
  },
  artAndCraft: {
    top: 1269,
    left: 125,
    width: 155,
    fontSize: FontSize.size_xl,
  },
  place1: {
    top: 1317,
    height: 238,
  },
  text: {
    fontSize: FontSize.size_2xl,
  },
  wildLifeSanturies: {
    fontSize: FontSize.size_xl,
  },
  wildLifeSanturiesContainer: {
    top: 301,
    left: 52,
    width: 301,
    height: 27,
  },
  iconMenu: {
    left: "82.78%",
    top: "1.87%",
    right: "6.85%",
    bottom: "95.64%",
    width: "10.37%",
    height: "2.49%",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_base,
  },
  adventureTourism: {
    top: 1565,
    left: 68,
    width: 218,
    height: 59,
  },
  vectorIcon: {
    height: "1.93%",
    width: "8.61%",
    top: "2.18%",
    right: "87.78%",
    bottom: "95.89%",
    left: "3.61%",
    position: "absolute",
  },
  discoverNow: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1104,
    overflow: "hidden",
    width: "100%",
  },
});

export default DiscoverNow;

import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ArtAndCraft = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.artAndCraft}>
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
          source={require("../assets/-icon-menu32.png")}
        />
      </Pressable>
      <View style={styles.artAndCraftChild} />
      <Pressable
        style={[styles.image25, styles.imageLayout1]}
        onPress={() => navigation.navigate("CottonFabrics")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-25.png")}
        />
      </Pressable>
      <Text
        style={[styles.cottonFabrics, styles.bambooArtLayout, styles.artTypo]}
      >
        Cotton Fabrics
      </Text>
      <Pressable
        style={[styles.image26, styles.imageLayout1]}
        onPress={() => navigation.navigate("BambooArt")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-26.png")}
        />
      </Pressable>
      <Text style={[styles.bambooArt, styles.bambooArtLayout, styles.artTypo]}>
        Bamboo Art
      </Text>
      <Pressable
        style={[styles.image27, styles.imageLayout1]}
        onPress={() => navigation.navigate("BellMetal")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-27.png")}
        />
      </Pressable>
      <Text style={[styles.bellMetalDhokra, styles.ornamentsTypo]}>
        BELL METAL (DHOKRA)
      </Text>
      <Pressable
        style={[styles.image28, styles.imageLayout1]}
        onPress={() => navigation.navigate("GodnaArt")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-28.png")}
        />
      </Pressable>
      <Text style={[styles.godnaArt, styles.artTypo]}>Godna Art</Text>
      <Pressable
        style={[styles.image29, styles.imageLayout1]}
        onPress={() => navigation.navigate("WroughtIron")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-29.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.wroughtIronLoha,
          styles.terracottaTypo,
          styles.bambooArtLayout,
        ]}
      >
        WROUGHT IRON (LOHA SHILP)
      </Text>
      <Pressable
        style={[styles.image30, styles.imageLayout]}
        onPress={() => navigation.navigate("Ornaments")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-30.png")}
        />
      </Pressable>
      <Text style={[styles.ornaments, styles.ornamentsTypo]}>
        <Text style={styles.ornaments1}>Ornaments</Text>
      </Text>
      <Pressable
        style={[styles.image31, styles.imageLayout1]}
        onPress={() => navigation.navigate("Terracotta")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-311.png")}
        />
      </Pressable>
      <Text style={[styles.terracotta, styles.terracottaTypo]}>Terracotta</Text>
      <Pressable
        style={[styles.image32, styles.imageLayout]}
        onPress={() => navigation.navigate("Tumba")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-32.png")}
        />
      </Pressable>
      <Text style={[styles.tumba, styles.artTypo]}>TUMBA</Text>
      <Pressable
        style={styles.image33}
        onPress={() => navigation.navigate("WallPainting")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-33.png")}
        />
      </Pressable>
      <Text style={[styles.wallPainting, styles.woodCarvingTypo]}>
        WALL PAINTING
      </Text>
      <Pressable
        style={[styles.image34, styles.imageLayout1]}
        onPress={() => navigation.navigate("WoodCarving")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-34.png")}
        />
      </Pressable>
      <Text style={[styles.woodCarving, styles.woodCarvingTypo]}>
        WOOD CARVING
      </Text>
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
    height: "100%",
    width: "100%",
  },
  imageLayout1: {
    width: 331,
    position: "absolute",
  },
  bambooArtLayout: {
    height: 60,
    fontSize: FontSize.size_xl,
  },
  artTypo: {
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  ornamentsTypo: {
    height: 76,
    fontFamily: FontFamily.robotoSerif,
    left: 83,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  terracottaTypo: {
    width: 314,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  imageLayout: {
    height: 248,
    width: 331,
    left: 26,
    position: "absolute",
  },
  woodCarvingTypo: {
    left: 39,
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 18,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    left: 93,
  },
  yatra: {
    top: 73,
    left: 230,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  iconMenu: {
    left: "84.99%",
    top: "0.75%",
    right: "6.43%",
    bottom: "98.05%",
    width: "8.58%",
    height: "1.2%",
    position: "absolute",
  },
  artAndCraftChild: {
    top: 79,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 128,
    height: 1,
    left: 93,
    position: "absolute",
  },
  image25: {
    top: 162,
    height: 216,
    left: 26,
  },
  cottonFabrics: {
    top: 398,
    width: 278,
    left: 83,
    height: 60,
    fontFamily: FontFamily.robotoSerif,
  },
  image26: {
    top: 458,
    height: 244,
    left: 26,
  },
  bambooArt: {
    top: 722,
    left: 99,
    width: 274,
  },
  image27: {
    left: 21,
    top: 782,
    height: 288,
  },
  bellMetalDhokra: {
    top: 1070,
    width: 312,
    fontSize: FontSize.size_xl,
    height: 76,
  },
  image28: {
    top: 1184,
    height: 310,
    left: 26,
  },
  godnaArt: {
    top: 1512,
    left: 101,
    width: 294,
    height: 68,
    fontSize: FontSize.size_2xl,
  },
  image29: {
    top: 1600,
    height: 218,
    left: 26,
  },
  wroughtIronLoha: {
    top: 1836,
    left: 65,
  },
  image30: {
    top: 1946,
  },
  ornaments1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  ornaments: {
    top: 2214,
    width: 310,
    fontSize: FontSize.size_2xl,
  },
  image31: {
    top: 2290,
    height: 204,
    left: 26,
  },
  terracotta: {
    top: 2514,
    left: 91,
    height: 72,
    fontSize: FontSize.size_2xl,
  },
  image32: {
    top: 2606,
  },
  tumba: {
    top: 2872,
    left: 120,
    width: 236,
    height: 56,
    fontSize: FontSize.size_2xl,
  },
  image33: {
    top: 2928,
    width: 330,
    height: 278,
    left: 26,
    position: "absolute",
  },
  wallPainting: {
    top: 3226,
  },
  image34: {
    top: 3342,
    height: 308,
    left: 26,
  },
  woodCarving: {
    top: 3670,
    width: 309,
    height: 68,
  },
  artAndCraft: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 3738,
    overflow: "hidden",
    width: "100%",
  },
});

export default ArtAndCraft;

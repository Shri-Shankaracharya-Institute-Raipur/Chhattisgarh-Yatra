import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const Temples = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.temples}>
      <Text
        style={[
          styles.chhattisgarh,
          styles.templeFlexBox,
          styles.chhattisgarhPosition,
        ]}
      >
        CHHATTISGARH
      </Text>
      <Text style={[styles.yatra, styles.templeFlexBox]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-menu25.png")}
        />
      </Pressable>
      <View style={[styles.templesChild, styles.ramMandirPosition]} />
      <Pressable
        style={[styles.image15, styles.imageLayout1]}
        onPress={() => navigation.navigate("Dongargarh")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-151.png")}
        />
      </Pressable>
      <Text style={[styles.dongargarh, styles.templeFlexBox]}>
        <Text style={styles.text}>
          <Text
            style={styles.text1}
          >{`                                 `}</Text>
          <Text>{`   `}</Text>
        </Text>
        <Text style={styles.dongargarh1}>
          <Text style={styles.dongargarh2}>Dongargarh</Text>
        </Text>
      </Text>
      <Pressable
        style={styles.image16}
        onPress={() => navigation.navigate("Ratanpur")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-161.png")}
        />
      </Pressable>
      <Text style={[styles.ratanpur, styles.templeFlexBox]}>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.dongargarh2}>Ratanpur</Text>
      </Text>
      <Pressable
        style={[styles.image17, styles.imageLayout1]}
        onPress={() => navigation.navigate("Danteshwari")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-17.png")}
        />
      </Pressable>
      <Text style={styles.danteshwariTemple}> Danteshwari Temple</Text>
      <Pressable
        style={[styles.bhoramdeoTemple2, styles.imageLayout1]}
        onPress={() => navigation.navigate("BhoramDev")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/bhoramdeo-temple-21.png")}
        />
      </Pressable>
      <Text style={[styles.bhoramDevTemple, styles.templeTypo1]}>
        Bhoram dev Temple
      </Text>
      <Pressable
        style={[styles.rajivLochan1, styles.imagePosition]}
        onPress={() => navigation.navigate("RajivLochanTemple")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rajiv-lochan-1.png")}
        />
      </Pressable>
      <Text style={[styles.rajivLochanTemple, styles.templeFlexBox]}>
        Rajiv Lochan Temple
      </Text>
      <Pressable
        style={[styles.image18, styles.imagePosition]}
        onPress={() => navigation.navigate("Shivrinarayan")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-18.png")}
        />
      </Pressable>
      <Text style={[styles.shivrinarayan, styles.templeFlexBox]}>
        Shivrinarayan
      </Text>
      <Pressable
        style={[styles.image19, styles.imagePosition]}
        onPress={() => navigation.navigate("ChandrahashiniDeviTemple")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-191.png")}
        />
      </Pressable>
      <Text
        style={[styles.chandrahasiniDeviTempleContainer, styles.templeFlexBox]}
      >
        <Text style={styles.chandrahasiniDevi}>{`Chandrahasini Devi    `}</Text>
        <Text style={styles.temple}> Temple</Text>
      </Text>
      <Pressable
        style={[styles.image20, styles.imageLayout]}
        onPress={() => navigation.navigate("HatkeshwarMahadevTemple")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-20.png")}
        />
      </Pressable>
      <Text
        style={[styles.hatkeshwarMahadevTempleContainer, styles.templeTypo]}
      >
        <Text style={styles.chandrahasiniDevi}>Hatkeshwar Mahadev</Text>
        <Text style={styles.temple}> Temple</Text>
      </Text>
      <Pressable
        style={[styles.image21, styles.imagePosition]}
        onPress={() => navigation.navigate("DuddhadhariTemple")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-211.png")}
        />
      </Pressable>
      <Text style={[styles.duddhadhariTemple, styles.templeTypo1]}>
        Duddhadhari Temple
      </Text>
      <Pressable
        style={[styles.image22, styles.imageLayout]}
        onPress={() => navigation.navigate("SomnathTemple")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-221.png")}
        />
      </Pressable>
      <Text style={[styles.somnathTemple, styles.templeTypo]}>
        Somnath Temple
      </Text>
      <Pressable
        style={[styles.image23, styles.imagePosition]}
        onPress={() => navigation.navigate("RamMandir")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-231.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.ramMandir,
          styles.ramMandirPosition,
          styles.templeFlexBox,
        ]}
      >{`Ram Mandir `}</Text>
      <Pressable
        style={[styles.image24, styles.imagePosition]}
        onPress={() => navigation.navigate("IskconTemple")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/image-241.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.iskconTemple,
          styles.templeFlexBox,
          styles.chhattisgarhPosition,
        ]}
      >
        Iskcon Temple
      </Text>
      <Text style={[styles.temples1, styles.templeFlexBox]}>TEMPLES</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  templeFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  chhattisgarhPosition: {
    left: 92,
    color: Color.white,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  ramMandirPosition: {
    left: 97,
    position: "absolute",
  },
  imageLayout1: {
    width: 323,
    position: "absolute",
  },
  templeTypo1: {
    left: 73,
    fontFamily: FontFamily.cutive,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  imagePosition: {
    width: 320,
    left: 34,
    position: "absolute",
  },
  imageLayout: {
    height: 216,
    width: 320,
    left: 34,
    position: "absolute",
  },
  templeTypo: {
    height: 54,
    left: 73,
    fontFamily: FontFamily.cutive,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 21,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
  },
  yatra: {
    top: 76,
    left: 231,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  iconMenu: {
    left: "84.64%",
    top: "0.89%",
    right: "7.01%",
    bottom: "98%",
    width: "8.36%",
    height: "1.11%",
    position: "absolute",
  },
  templesChild: {
    top: 85,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 125,
    height: 1,
  },
  image15: {
    top: 324,
    height: 179,
    left: 32,
  },
  text1: {
    fontSize: FontSize.size_2xs,
  },
  text: {
    fontFamily: FontFamily.robotoSerif,
  },
  dongargarh2: {
    fontFamily: FontFamily.cutive,
  },
  dongargarh1: {
    fontSize: FontSize.size_base,
  },
  dongargarh: {
    top: 518,
    left: 0,
    width: 336,
    height: 34,
    position: "absolute",
  },
  image16: {
    top: 559,
    width: 302,
    height: 178,
    left: 32,
    position: "absolute",
  },
  ratanpur: {
    top: 737,
    left: 115,
    width: 264,
    height: 50,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  image17: {
    left: 31,
    top: 774,
    height: 172,
  },
  danteshwariTemple: {
    top: 971,
    width: 334,
    height: 58,
    left: 34,
    fontFamily: FontFamily.cutive,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  bhoramdeoTemple2: {
    top: 1010,
    height: 184,
    left: 32,
  },
  bhoramDevTemple: {
    top: 1214,
    width: 337,
    height: 64,
  },
  rajivLochan1: {
    top: 1258,
    height: 198,
  },
  rajivLochanTemple: {
    top: 1481,
    left: 79,
    width: 298,
    height: 44,
    fontFamily: FontFamily.cutive,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  image18: {
    top: 1525,
    height: 174,
  },
  shivrinarayan: {
    top: 1722,
    left: 122,
    width: 324,
    height: 37,
    fontFamily: FontFamily.cutive,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  image19: {
    top: 1766,
    height: 192,
  },
  chandrahasiniDevi: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  temple: {
    margin: Margin.m_md,
  },
  chandrahasiniDeviTempleContainer: {
    top: 1976,
    left: 88,
    width: 273,
    height: 42,
    whiteSpace: "pre-wrap",
    fontFamily: FontFamily.cutive,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  image20: {
    top: 2048,
  },
  hatkeshwarMahadevTempleContainer: {
    top: 2282,
    width: 253,
    whiteSpace: "pre-wrap",
  },
  image21: {
    top: 2343,
    height: 200,
  },
  duddhadhariTemple: {
    top: 2573,
    width: 257,
    height: 56,
  },
  image22: {
    top: 2622,
  },
  somnathTemple: {
    top: 2856,
    width: 312,
  },
  image23: {
    top: 2910,
    height: 233,
  },
  ramMandir: {
    top: 3161,
    width: 308,
    height: 51,
    fontFamily: FontFamily.cutive,
    fontSize: FontSize.size_base,
  },
  image24: {
    top: 3200,
    height: 212,
  },
  iskconTemple: {
    top: 3430,
    width: 317,
    height: 46,
    fontFamily: FontFamily.cutive,
    fontSize: FontSize.size_base,
  },
  temples1: {
    top: 212,
    left: 101,
    fontSize: FontSize.size_2xl,
    width: 278,
    height: 48,
    fontFamily: FontFamily.robotoSerif,
    position: "absolute",
  },
  temples: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 2388,
    overflow: "hidden",
    width: "100%",
  },
});

export default Temples;

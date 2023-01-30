import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Margin } from "../GlobalStyles";

const JungleSafari = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.jungleSafari}>
      <Text style={[styles.chhattisgarh, styles.yatraClr]}>CHHATTISGARH</Text>
      <Text style={[styles.yatra, styles.yatraClr]}>YATRA</Text>
      <Pressable
        style={styles.iconMenu}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/-icon-menu35.png")}
        />
      </Pressable>
      <Image
        style={styles.jungleSafariChild}
        resizeMode="cover"
        source={require("../assets/line-112.png")}
      />
      <Image
        style={styles.image46Icon}
        resizeMode="cover"
        source={require("../assets/image-46.png")}
      />
      <Text style={styles.jungleSafari1}>Jungle Safari</Text>
      <Image
        style={styles.jungleSafariItem}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <View style={styles.theJungleSafariIsSituated}>
        <Text
          style={[
            styles.theJungleSafari,
            styles.theJungleSafariTypo,
            styles.vectorIconPosition,
            styles.iconLayout1,
          ]}
        >
          The Jungle Safari is situated in Naya Raipur's sector-39. About 35
          kilometres and 15 kilometres, respectively, separate Naya Raipur from
          Raipur's Swami Vivekanand Airport. The Nandanvan Jungle Safari's full
          800 Acre property is a lovely green setting. A variety of native plant
          types contribute to the greenery and help to create a natural
          environment for the animals. Its 130-acre "Khandwa Reservoir" is home
          to a variety of migrating bird species. Herbivore, Bear, Tiger, and
          Lion Safaris have all been constructed. The planned zoo will house 32
          additional animal species.
        </Text>
      </View>
      <View style={styles.timing1000amT0400pmAcParent}>
        <Text
          style={[styles.timing1000amT0Container, styles.theJungleSafariTypo]}
        >
          <Text
            style={styles.timing1000amT0}
          >{`Timing- 10.00am t0        `}</Text>
          <Text style={styles.pmAccording}> 4.00pm. (according to slots)</Text>
        </Text>
        <Image
          style={[
            styles.vectorIcon,
            styles.vectorIconPosition,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/vector100.png")}
        />
        <Text
          style={[styles.ticketPricesContainer, styles.sector39KhanduwaTypo]}
        >
          <Text style={styles.timing1000amT0}>Ticket Prices :</Text>
          <Text style={styles.timing1000amT0}> Safari Charge:</Text>
          <Text style={styles.timing1000amT0}> Rs.25 to 150.</Text>
          <Text style={styles.timing1000amT0}>{`  ZOO Charges: `}</Text>
          <Text style={styles.pmAccording}> Rs 25-50.</Text>
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector101.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector102.png")}
        />
        <Text style={[styles.sector39Khanduwa, styles.sector39KhanduwaTypo]}>
          Sector 39, Khanduwa, Atal Nagar-Nava Raipur, Chhattisgarh 493661
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yatraClr: {
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  theJungleSafariTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    color: Color.white,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "0%",
    top: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  sector39KhanduwaTypo: {
    left: 48,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  chhattisgarh: {
    top: 17,
    left: 83,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.imbue,
    width: 319,
    height: 41,
    textAlign: "left",
  },
  yatra: {
    top: 70,
    left: 219,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dancingScript,
    width: 141,
    height: 32,
    textAlign: "left",
  },
  iconMenu: {
    left: "85.83%",
    top: "2.23%",
    right: "6.11%",
    bottom: "95.48%",
    width: "8.06%",
    height: "2.29%",
    position: "absolute",
  },
  jungleSafariChild: {
    top: 76,
    left: 86,
    width: 126,
    height: 2,
    position: "absolute",
  },
  image46Icon: {
    top: 146,
    left: 22,
    width: 309,
    height: 196,
    position: "absolute",
  },
  jungleSafari1: {
    top: 358,
    left: 69,
    fontSize: FontSize.size_xl,
    width: 259,
    height: 42,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  jungleSafariItem: {
    top: 414,
    left: 36,
    width: 300,
    height: 4,
    position: "absolute",
  },
  theJungleSafari: {
    textAlign: "justify",
  },
  theJungleSafariIsSituated: {
    top: 447,
    left: 45,
    width: 286,
    height: 499,
    position: "absolute",
  },
  timing1000amT0: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pmAccording: {
    margin: Margin.m_md,
  },
  timing1000amT0Container: {
    top: 0,
    left: 38,
    width: 216,
    height: 75,
    whiteSpace: "pre-wrap",
    textAlign: "left",
  },
  vectorIcon: {
    height: "7.25%",
    width: "8.97%",
    right: "91.03%",
    bottom: "92.75%",
    position: "absolute",
  },
  ticketPricesContainer: {
    top: 101,
    width: 222,
    height: 122,
    whiteSpace: "pre-wrap",
  },
  vectorIcon1: {
    height: "3.94%",
    width: "9.26%",
    top: "32.28%",
    right: "89.63%",
    bottom: "63.78%",
    left: "1.11%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "7.88%",
    width: "6.3%",
    top: "68.59%",
    right: "87.78%",
    bottom: "23.53%",
    left: "5.93%",
    position: "absolute",
  },
  sector39Khanduwa: {
    top: 239,
    width: 197,
    height: 108,
  },
  timing1000amT0400pmAcParent: {
    top: 1004,
    left: 53,
    width: 270,
    height: 347,
    position: "absolute",
  },
  jungleSafari: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 1435,
    overflow: "hidden",
    width: "100%",
  },
});

export default JungleSafari;

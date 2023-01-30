import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <View
        style={[styles.signUpChild, styles.signPosition, styles.signLayout1]}
      />
      <View
        style={[styles.signUpItem, styles.signPosition, styles.signLayout1]}
      />
      <View style={[styles.signUpInner, styles.addressPosition]} />
      <View
        style={[styles.rectangleView, styles.signPosition, styles.signLayout1]}
      />
      <Image
        style={[styles.whatsappImage20221223At1, styles.signPosition]}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20221223-at-139-4.png")}
      />
      <View style={styles.signUpChild1} />
      <Text style={styles.chhattisgarh}>CHHATTISGARH</Text>
      <Text style={styles.yatra}>YATRA</Text>
      <View style={styles.lineView} />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector136.png")}
      />
      <View style={styles.signUpChild2} />
      <Text style={[styles.name, styles.dobTypo]}>Name</Text>
      <View style={[styles.signUpChild3, styles.contactNoPosition]} />
      <Text
        style={[styles.contactNo, styles.contactNoPosition, styles.dobTypo]}
      >
        Contact no-
      </Text>
      <View style={[styles.signUpChild4, styles.dobPosition]} />
      <Text style={[styles.eMail, styles.eMailPosition, styles.dobTypo]}>
        E-mail-
      </Text>
      <View style={[styles.signUpChild5, styles.eMailPosition]} />
      <Text style={[styles.dob, styles.dobPosition, styles.dobTypo]}>
        D.O.B-
      </Text>
      <View style={styles.signUpChild6} />
      <Text style={[styles.address, styles.dobTypo, styles.addressPosition]}>
        Address-
      </Text>
      <View style={[styles.signUpChild7, styles.signLayout]} />
      <Text style={[styles.signUp1, styles.signLayout, styles.dobTypo]}>
        SIGN UP
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signPosition: {
    height: 800,
    left: 0,
    top: 0,
    position: "absolute",
  },
  signLayout1: {
    width: 360,
    height: 800,
    left: 0,
  },
  addressPosition: {
    left: 34,
    position: "absolute",
  },
  dobTypo: {
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
  },
  contactNoPosition: {
    width: 293,
    left: 34,
    position: "absolute",
  },
  dobPosition: {
    height: 72,
    left: 31,
    position: "absolute",
  },
  eMailPosition: {
    left: 39,
    height: 72,
    position: "absolute",
  },
  signLayout: {
    height: 60,
    position: "absolute",
  },
  signUpChild: {
    backgroundColor: Color.darkslategray_200,
  },
  signUpItem: {
    backgroundColor: "rgba(38, 94, 25, 0.55)",
  },
  signUpInner: {
    top: 60,
    width: 213,
    height: 152,
    backgroundColor: Color.darkslategray_200,
  },
  rectangleView: {
    backgroundColor: "rgba(50, 74, 44, 0.94)",
  },
  whatsappImage20221223At1: {
    width: 382,
    height: 800,
    left: 0,
  },
  signUpChild1: {
    left: -11,
    width: 371,
    height: 813,
    backgroundColor: Color.darkslategray_200,
    top: 0,
    position: "absolute",
  },
  chhattisgarh: {
    top: 13,
    left: 11,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  yatra: {
    top: 74,
    left: 177,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  lineView: {
    top: 90,
    left: 8,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 149,
    height: 1,
    position: "absolute",
  },
  vectorIcon: {
    height: "5%",
    width: "10.73%",
    top: "4.25%",
    right: "3.71%",
    bottom: "90.75%",
    left: "85.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signUpChild2: {
    top: 180,
    left: 20,
    width: 288,
    height: 75,
    backgroundColor: Color.darkslategray_200,
    position: "absolute",
  },
  name: {
    top: 182,
    left: 37,
    width: 290,
    height: 78,
    position: "absolute",
  },
  signUpChild3: {
    top: 273,
    height: 80,
    backgroundColor: Color.darkslategray_200,
  },
  contactNo: {
    top: 278,
    height: 75,
  },
  signUpChild4: {
    top: 371,
    width: 277,
    backgroundColor: Color.darkslategray_200,
  },
  eMail: {
    top: 383,
    width: 279,
  },
  signUpChild5: {
    top: 466,
    width: 269,
    backgroundColor: Color.darkslategray_200,
  },
  dob: {
    top: 485,
    width: 274,
  },
  signUpChild6: {
    top: 568,
    width: 313,
    height: 83,
    left: 31,
    backgroundColor: Color.darkslategray_200,
    position: "absolute",
  },
  address: {
    top: 569,
    width: 310,
    height: 82,
  },
  signUpChild7: {
    top: 677,
    left: 97,
    width: 175,
    backgroundColor: Color.darkslategray_100,
  },
  signUp1: {
    top: 679,
    left: 118,
    width: 177,
  },
  signUp: {
    flex: 1,
    width: "100%",
    height: 550,
    overflow: "hidden",
    backgroundColor: Color.darkslategray_100,
  },
});

export default SignUp;

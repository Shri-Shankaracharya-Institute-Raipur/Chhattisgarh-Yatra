import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SignIn = () => {
  return (
    <View style={styles.signIn}>
      <Image
        style={[styles.whatsappImage20221223At1, styles.signInChildLayout]}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20221223-at-139-3.png")}
      />
      <View style={[styles.signChildBg, styles.signInChildLayout]} />
      <Text style={[styles.chhattisgarh, styles.yatraFlexBox]}>
        CHHATTISGARH
      </Text>
      <Text style={[styles.yatra, styles.yatraFlexBox]}>YATRA</Text>
      <View style={styles.signInItem} />
      <Image
        style={styles.signInInner}
        resizeMode="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <View style={[styles.rectangleView, styles.signChildBg]} />
      <View style={[styles.signInChild1, styles.signChildPosition]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector137.png")}
      />
      <Image
        style={styles.userCircleIcon}
        resizeMode="cover"
        source={require("../assets/usercircle.png")}
      />
      <Text style={[styles.username, styles.signIn1Typo]}>Username</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector138.png")}
      />
      <Text style={[styles.password, styles.signUpTypo]}>Password</Text>
      <Image
        style={styles.mapsicleMapIcon}
        resizeMode="cover"
        source={require("../assets/mapsicle-map1.png")}
      />
      <Text style={[styles.signIn1, styles.signIn1Typo]}>SIGN IN</Text>
      <View style={[styles.signInChild2, styles.signChildBg]} />
      <Text style={[styles.forgotPassword, styles.forgotPasswordTypo]}>
        Forgot Password
      </Text>
      <Text style={[styles.loginWithSocial, styles.forgotPasswordTypo]}>
        Login with Social media account
      </Text>
      <View style={[styles.signInChild3, styles.signChildBg]} />
      <Image
        style={[styles.facebookSquareIcon, styles.userLockLayout]}
        resizeMode="cover"
        source={require("../assets/facebooksquare.png")}
      />
      <View style={[styles.userLock, styles.userLockLayout]} />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector139.png")}
      />
      <Image
        style={styles.googlePlusGIcon}
        resizeMode="cover"
        source={require("../assets/googleplusg.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector140.png")}
      />
      <View style={[styles.signInChild4, styles.signChildPosition]} />
      <Text style={[styles.signUp, styles.signUpTypo]}>SIGN UP</Text>
      <Image
        style={styles.image51Icon}
        resizeMode="cover"
        source={require("../assets/image-51.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signInChildLayout: {
    height: 800,
    width: 360,
    left: 0,
    top: 0,
  },
  yatraFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  signChildBg: {
    backgroundColor: Color.darkslategray_200,
    position: "absolute",
  },
  signChildPosition: {
    backgroundColor: Color.darkslategray_100,
    left: 115,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signIn1Typo: {
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  signUpTypo: {
    left: 129,
    fontFamily: FontFamily.robotoSerif,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  forgotPasswordTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoSerif,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  userLockLayout: {
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "15.13%",
    top: "78.88%",
    height: "6%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  whatsappImage20221223At1: {
    position: "absolute",
  },
  chhattisgarh: {
    top: 12,
    left: 20,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.imbue,
    width: 297,
    height: 42,
  },
  yatra: {
    top: 73,
    left: 177,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.dancingScript,
    width: 131,
    height: 33,
  },
  signInItem: {
    top: 89,
    left: 8,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 149,
    height: 1,
    position: "absolute",
  },
  signInInner: {
    top: 215,
    left: 47,
    width: 270,
    height: 68,
    position: "absolute",
  },
  rectangleView: {
    top: 319,
    left: 45,
    height: 70,
    width: 272,
  },
  signInChild1: {
    top: 400,
    width: 127,
    height: 55,
  },
  vectorIcon: {
    height: "5%",
    width: "10.73%",
    top: "4.13%",
    right: "3.71%",
    bottom: "90.88%",
    left: "85.56%",
  },
  userCircleIcon: {
    top: 226,
    left: 63,
    width: 38,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  username: {
    top: 233,
    left: 125,
    width: 205,
    height: 46,
  },
  vectorIcon1: {
    height: "4.38%",
    width: "10.56%",
    top: "39.88%",
    right: "71.94%",
    bottom: "55.75%",
    left: "17.5%",
  },
  password: {
    top: 318,
    width: 179,
    height: 61,
  },
  mapsicleMapIcon: {
    top: 33,
    left: 3059,
    width: 2000,
    height: 2000,
    position: "absolute",
  },
  signIn1: {
    top: 415,
    height: 75,
    left: 131,
    width: 272,
  },
  signInChild2: {
    top: 490,
    left: 133,
    width: 96,
    height: 30,
  },
  forgotPassword: {
    top: 503,
    width: 94,
    height: 17,
    left: 131,
  },
  loginWithSocial: {
    top: 562,
    left: 75,
    width: 195,
    height: 30,
  },
  signInChild3: {
    top: 554,
    left: 73,
    width: 199,
    height: 38,
  },
  facebookSquareIcon: {
    left: 272,
    top: 606,
  },
  userLock: {
    top: 625,
    left: 57,
    backgroundColor: Color.gray,
  },
  vectorIcon2: {
    width: "13.33%",
    right: "82.5%",
    left: "4.17%",
  },
  googlePlusGIcon: {
    top: 631,
    left: 148,
    width: 50,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon3: {
    width: "12.5%",
    right: "8.61%",
    left: "78.89%",
  },
  signInChild4: {
    top: 705,
    width: 123,
    height: 54,
  },
  signUp: {
    top: 719,
    width: 220,
    height: 52,
  },
  image51Icon: {
    left: -520,
    width: 407,
    height: 748,
    top: 606,
    position: "absolute",
  },
  signIn: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 550,
    overflow: "hidden",
  },
});

export default SignIn;

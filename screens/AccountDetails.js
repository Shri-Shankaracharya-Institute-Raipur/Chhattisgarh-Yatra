import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AccountDetails = () => {
  return (
    <View style={styles.accountDetails}>
      <Image
        style={styles.accountDetailsChild}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iconPerson, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-person.png")}
      />
      <View style={[styles.accountDetailsItem, styles.accountLayout]} />
      <View style={[styles.accountDetailsInner, styles.accountLayout]} />
      <View style={[styles.lineView, styles.accountLayout]} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.email, styles.nameTypo]}>Email</Text>
      <Text style={[styles.contactNumber, styles.nameTypo]}>
        Contact Number
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector166.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector167.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  accountLayout: {
    height: 1,
    width: 377,
    borderTopWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
  },
  nameTypo: {
    height: 17,
    width: 130,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  accountDetailsChild: {
    top: 113,
    left: 70,
    width: 218,
    height: 218,
    position: "absolute",
  },
  iconPerson: {
    height: "18.57%",
    width: "40.86%",
    top: "17.13%",
    right: "29.65%",
    bottom: "64.31%",
    left: "29.49%",
  },
  accountDetailsItem: {
    top: 487,
    left: 34,
  },
  accountDetailsInner: {
    top: 701,
    left: 36,
  },
  lineView: {
    top: 589,
    left: 34,
  },
  name: {
    top: 400,
    left: 36,
  },
  email: {
    top: 499,
    left: 34,
  },
  contactNumber: {
    top: 601,
    left: 34,
  },
  vectorIcon: {
    height: "3.63%",
    width: "8.11%",
    top: "37.25%",
    right: "33.33%",
    bottom: "59.13%",
    left: "58.56%",
  },
  vectorIcon1: {
    height: "5%",
    width: "10.36%",
    top: "2.63%",
    right: "5.99%",
    bottom: "92.38%",
    left: "83.65%",
  },
  accountDetails: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    width: "100%",
    height: 550,
    overflow: "hidden",
  },
});

export default AccountDetails;

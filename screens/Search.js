import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Search = () => {
  return <View style={styles.search} />;
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: Color.gray,
    flex: 1,
    width: "100%",
    height: 18,
    overflow: "hidden",
  },
});

export default Search;

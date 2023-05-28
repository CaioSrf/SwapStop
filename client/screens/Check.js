import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Check = () => {
  return (
    <View style={styles.check}>
      <Image
        style={styles.checkChild}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <View style={[styles.checkItem, styles.checkLayout]} />
      <View style={[styles.checkInner, styles.checkLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  checkLayout: {
    transform: [
      {
        rotate: "-42.21deg",
      },
    ],
    width: 28,
    borderRadius: Border.br_5xl,
    position: "absolute",
    backgroundColor: Color.white,
  },
  checkChild: {
    top: 306,
    left: 86,
    width: 188,
    height: 188,
    position: "absolute",
  },
  checkItem: {
    top: 400,
    left: 124,
    height: 73,
  },
  checkInner: {
    top: 380,
    left: 243,
    height: 100,
  },
  check: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Check;

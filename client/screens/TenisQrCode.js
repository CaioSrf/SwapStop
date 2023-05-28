import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TenisQrCode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tenisqrcode}>
      <View style={styles.barranotificaes}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>19:30</Text>
      </View>
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("TenisPix")}
      >
        <View style={[styles.botovoltarChild, styles.botovoltarLayout]} />
        <View style={[styles.botovoltarItem, styles.botovoltarLayout]} />
      </Pressable>
      <Text style={[styles.tnis, styles.textTypo]}>Tênis</Text>
      <Text style={[styles.detalhes, styles.r20000Typo]}>Detalhes</Text>
      <Text style={[styles.r20000, styles.r20000Typo]}>R$ 200,00</Text>
      <Pressable
        style={styles.image30}
        onPress={() => navigation.navigate("Check")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-30.png")}
        />
      </Pressable>
      <Text style={[styles.qrCode, styles.qrCodeTypo]}>QR CODE</Text>
      <Text style={[styles.cliqueNoQrcode, styles.qrCodeTypo]}>
        // Clique no QrCode
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  botovoltarLayout: {
    transform: [
      {
        rotate: "45deg",
      },
    ],
    height: 6,
    width: 20,
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  r20000Typo: {
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  qrCodeTypo: {
    textAlign: "center",
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
    color: Color.black,
    position: "absolute",
  },
  vectorIcon: {
    top: "6.67%",
    right: "7.23%",
    bottom: "6.67%",
    left: "87.28%",
    height: "86.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
  },
  vectorIcon1: {
    top: "0%",
    right: "14.45%",
    bottom: "13.33%",
    left: "80.06%",
    height: "86.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
  },
  vectorIcon2: {
    height: "43.33%",
    top: "27.47%",
    right: "0%",
    bottom: "29.2%",
    left: "94.51%",
  },
  text: {
    height: "73.33%",
    width: "14.16%",
    top: "26.67%",
    left: "0%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
  },
  barranotificaes: {
    height: "1.88%",
    width: "89.44%",
    top: "1.63%",
    right: "5%",
    bottom: "96.5%",
    left: "5.56%",
    position: "absolute",
  },
  botovoltarChild: {
    top: 10,
    left: 4,
  },
  botovoltarItem: {
    top: 14,
    left: 0,
  },
  botovoltar: {
    top: 72,
    left: 34,
    width: 18,
    height: 28,
    position: "absolute",
  },
  tnis: {
    top: 128,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.redHatTextBold,
    left: 52,
  },
  detalhes: {
    top: 168,
    fontSize: FontSize.size_4xl,
    left: 52,
  },
  r20000: {
    top: 148,
    left: 202,
    fontSize: 23,
    width: 140,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image30: {
    left: 66,
    top: 345,
    width: 228,
    height: 228,
    position: "absolute",
  },
  qrCode: {
    top: 318,
    left: 126,
    fontFamily: FontFamily.redHatDisplayRegular,
  },
  cliqueNoQrcode: {
    top: 621,
    left: 81,
    fontStyle: "italic",
    fontFamily: FontFamily.redHatDisplayRegularItalic,
  },
  tenisqrcode: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TenisQrCode;

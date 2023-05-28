import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const FoneDetalhes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fonedetalhes}>
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
        <Text style={styles.text}>19:30</Text>
      </View>
      <View style={[styles.barrainferior, styles.barrainferiorLayout]}>
        <View style={[styles.barrainferiorChild, styles.barrainferiorLayout]} />
        <Text style={[styles.jblTune710bt, styles.avanarTypo]}>
          JBL Tune 710BT
        </Text>
        <Text style={[styles.r40000, styles.r40000Typo]}>R$ 400,00</Text>
      </View>
      <Image
        style={styles.fonedetalhesChild}
        contentFit="cover"
        source={require("../assets/rectangle-128.png")}
      />
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("HomeEletrnicos")}
      >
        <View style={[styles.botovoltarChild, styles.botovoltarLayout]} />
        <View style={[styles.botovoltarItem, styles.botovoltarLayout]} />
      </Pressable>
      <Text style={[styles.jblTune710bt1, styles.jblTune710bt1Typo]}>
        JBL Tune 710BT
      </Text>
      <Text style={[styles.detalhesDoProduto, styles.jblTune710bt1Typo]}>
        Detalhes do produto
      </Text>
      <Pressable
        style={styles.botoavanar}
        onPress={() => navigation.navigate("FoneEscPag")}
      >
        <View style={[styles.botoavanarChild, styles.botoavanarBg]} />
        <View style={[styles.botoavanarItem, styles.botoavanarBg]} />
        <Text style={[styles.avanar, styles.avanarTypo]}>AVANÇAR</Text>
      </Pressable>
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
  barrainferiorLayout: {
    height: 190,
    width: 360,
    left: 0,
    position: "absolute",
  },
  avanarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    fontSize: 23,
    fontWeight: "700",
    position: "absolute",
  },
  r40000Typo: {
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
  },
  botovoltarLayout: {
    transform: [
      {
        rotate: "45deg",
      },
    ],
    height: 6,
    width: 20,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.darkviolet,
    position: "absolute",
  },
  jblTune710bt1Typo: {
    fontSize: FontSize.size_4xl,
    left: 52,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  botoavanarBg: {
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_3xs,
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
    textAlign: "left",
    fontWeight: "700",
    color: Color.black,
    position: "absolute",
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
  barrainferiorChild: {
    top: 0,
    backgroundColor: Color.thistle,
  },
  jblTune710bt: {
    top: 27,
    left: 86,
    color: Color.black,
    textAlign: "center",
  },
  r40000: {
    top: 64,
    left: 122,
    fontSize: 23,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  barrainferior: {
    top: 610,
  },
  fonedetalhesChild: {
    top: 67,
    left: 65,
    width: 231,
    height: 268,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  botovoltarChild: {
    left: 4,
    top: 10,
  },
  botovoltarItem: {
    top: 14,
    left: 0,
    height: 6,
    width: 20,
    borderRadius: Border.br_7xs,
  },
  botovoltar: {
    top: 72,
    left: 34,
    width: 18,
    height: 28,
    position: "absolute",
  },
  jblTune710bt1: {
    top: 352,
    width: 243,
    fontFamily: FontFamily.redHatTextBold,
    fontSize: FontSize.size_4xl,
    left: 52,
    fontWeight: "700",
  },
  detalhesDoProduto: {
    top: 409,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
  },
  botoavanarChild: {
    top: 17,
    left: 21,
    width: 235,
    height: 42,
  },
  botoavanarItem: {
    top: -3,
    left: -3,
    borderStyle: "solid",
    borderColor: "#6f3e81",
    borderWidth: 3,
    width: 283,
    height: 56,
  },
  avanar: {
    left: 78,
    color: Color.white,
    top: 10,
  },
  botoavanar: {
    top: 719,
    left: 42,
    width: 277,
    height: 59,
    position: "absolute",
  },
  fonedetalhes: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default FoneDetalhes;

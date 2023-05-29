import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const TnDetalhes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tndetalhes}>
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
        <Text style={[styles.text, styles.textFlexBox]}>19:30</Text>
      </View>
      <View style={[styles.barrainferior, styles.barrainferiorLayout]}>
        <View style={[styles.barrainferiorChild, styles.barrainferiorLayout]} />
        <Text style={[styles.supremeXNba, styles.avanarTypo]}>
          Supreme X NBA X Air Force 1 Mid 07
        </Text>
        <Text style={[styles.r30000, styles.r30000Typo]}>R$ 300,00</Text>
      </View>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group2.png")}
      />
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("HomeSapatos")}
      >
        <View style={[styles.botovoltarChild, styles.botovoltarLayout]} />
        <View style={[styles.botovoltarItem, styles.botovoltarLayout]} />
      </Pressable>
      <Text style={[styles.supremeXNba1, styles.supremeXNba1Typo]}>
        Supreme X NBA X Air Force 1 Mid 07
      </Text>
      <Text style={[styles.detalhesDoProduto, styles.supremeXNba1Typo]}>
        Detalhes do produto
      </Text>
      <Pressable
        style={styles.botoavanar}
        onPress={() => navigation.navigate("TnEscPag")}
      >
        <View style={[styles.botoavanarChild, styles.botoavanarLayout]} />
        <View style={[styles.botoavanarItem, styles.botoavanarLayout]} />
        <Text style={[styles.avanar, styles.r30000Typo1]}>AVANÇAR</Text>
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
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
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
    fontWeight: "700",
  },
  r30000Typo: {
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
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  supremeXNba1Typo: {
    fontSize: FontSize.size_4xl,
    left: 52,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  botoavanarLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkviolet,
    position: "absolute",
  },
  r30000Typo1: {
    fontSize: 23,
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
    fontWeight: "700",
    textAlign: "left",
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
  supremeXNba: {
    top: 27,
    left: 37,
    fontSize: FontSize.size_mid,
    width: 287,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  r30000: {
    top: 69,
    left: 120,
    width: 117,
    fontSize: 23,
    position: "absolute",
    textAlign: "left",
    color: Color.black,
  },
  barrainferior: {
    top: 610,
  },
  maskGroupIcon: {
    top: 81,
    left: 65,
    width: 230,
    height: 241,
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
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
  },
  botovoltar: {
    top: 72,
    left: 34,
    width: 18,
    height: 28,
    position: "absolute",
  },
  supremeXNba1: {
    top: 352,
    width: 243,
    fontFamily: FontFamily.redHatTextBold,
    fontSize: FontSize.size_4xl,
    left: 52,
    fontWeight: "700",
  },
  detalhesDoProduto: {
    top: 416,
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
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  botoavanar: {
    top: 719,
    left: 42,
    width: 277,
    height: 59,
    position: "absolute",
  },
  tndetalhes: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default TnDetalhes;

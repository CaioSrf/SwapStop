import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Procurar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.procurar}>
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
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("HomeNerd")}
      >
        <View style={styles.botovoltarChild} />
        <View style={styles.botovoltarItem} />
      </Pressable>
      <View style={styles.procurarChild} />
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <Text style={[styles.produtoOuLoja, styles.tnis1Typo]}>
        produto ou loja
      </Text>
      <Pressable
        style={[styles.tnis, styles.tnisLayout]}
        onPress={() => navigation.navigate("TenisDetalhes")}
      >
        <View style={[styles.tnisChild, styles.childPosition]} />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group6.png")}
        />
        <Text style={[styles.tnis1, styles.tnis1FlexBox]}>Tênis</Text>
        <Text style={styles.r20000}>R$ 200,00</Text>
      </Pressable>
      <Pressable
        style={[styles.supreme, styles.supremeLayout]}
        onPress={() => navigation.navigate("TnDetalhes")}
      >
        <View style={[styles.supremeChild, styles.supremeLayout]} />
        <Image
          style={[styles.supremeItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-130.png")}
        />
        <Text
          style={[styles.supremeXNba, styles.comboDe37Typo]}
        >{`Supreme X NBA X 
Air Force 1 Mid 07`}</Text>
        <Text style={[styles.r30000, styles.r30000Typo]}>R$ 300,00</Text>
      </Pressable>
      <Pressable
        style={[styles.combo, styles.supremeLayout]}
        onPress={() => navigation.navigate("ComboDetalhes")}
      >
        <View style={[styles.supremeChild, styles.supremeLayout]} />
        <Image
          style={[styles.comboItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-115.png")}
        />
        <Text style={[styles.comboDe37, styles.r400000Position]}>
          Combo de 37 jogos
        </Text>
        <Text style={[styles.r400000, styles.r400000Position]}>R$ 4000,00</Text>
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
    position: "absolute",
  },
  tnis1Typo: {
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  tnisLayout: {
    height: 190,
    width: 298,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.thistle,
    borderRadius: Border.br_2xs,
    top: 0,
    left: 0,
  },
  tnis1FlexBox: {
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  supremeLayout: {
    width: 296,
    height: 190,
    position: "absolute",
  },
  itemLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  comboDe37Typo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  r30000Typo: {
    top: 95,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
  },
  r400000Position: {
    left: 148,
    textAlign: "left",
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
    fontWeight: "700",
    color: Color.black,
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
  botovoltarItem: {
    top: 14,
    left: 0,
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
  botovoltar: {
    top: 72,
    left: 34,
    width: 18,
    height: 28,
    position: "absolute",
  },
  procurarChild: {
    top: 112,
    left: 48,
    borderRadius: 25,
    backgroundColor: Color.gainsboro_200,
    width: 265,
    height: 53,
    position: "absolute",
  },
  searchIcon: {
    top: 125,
    left: 265,
    width: 26,
    height: 26,
    position: "absolute",
  },
  produtoOuLoja: {
    top: 124,
    left: 73,
    fontSize: 22,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  tnisChild: {
    height: 190,
    width: 298,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 30,
    left: 25,
    width: 125,
    height: 131,
    position: "absolute",
  },
  tnis1: {
    top: 64,
    left: 194,
    fontSize: 23,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  r20000: {
    top: 94,
    left: 167,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 23,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  tnis: {
    top: 189,
    left: 31,
  },
  supremeChild: {
    backgroundColor: Color.thistle,
    borderRadius: Border.br_2xs,
    top: 0,
    left: 0,
  },
  supremeItem: {
    top: 31,
    left: 23,
    width: 121,
    height: 129,
  },
  supremeXNba: {
    top: 57,
    left: 160,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  r30000: {
    left: 165,
    fontSize: 23,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  supreme: {
    top: 403,
    left: 33,
    width: 296,
  },
  comboItem: {
    top: 26,
    left: 17,
    width: 119,
    height: 138,
  },
  comboDe37: {
    top: 65,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  r400000: {
    fontSize: FontSize.size_4xl,
    top: 95,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
  },
  combo: {
    top: 617,
    left: 33,
    width: 296,
  },
  procurar: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Procurar;

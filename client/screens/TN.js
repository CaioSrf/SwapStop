import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tn}>
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
      <Image
        style={[styles.vectorIcon3, styles.image32Position]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Pressable
        style={[styles.home, styles.homeLayout]}
        onPress={() => navigation.navigate("HomeSapatos")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.search, styles.homeLayout]}
        onPress={() => navigation.navigate("Procurar")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.shoppingCart, styles.homeLayout]}
        onPress={() => navigation.navigate("Histrico")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/shopping-cart.png")}
        />
      </Pressable>
      <View style={[styles.barralateral, styles.image32Position]} />
      <Pressable
        style={styles.botolateral}
        onPress={() => navigation.navigate("Perfil")}
      >
        <View style={[styles.botolateralChild, styles.botolateralLayout]} />
        <View style={[styles.botolateralItem, styles.botolateralLayout]} />
      </Pressable>
      <Text style={[styles.tenistyles, styles.produtosTypo]}>TeniStyles</Text>
      <Text style={[styles.produtos, styles.produtosTypo]}>Produtos</Text>
      <Pressable
        style={[styles.image32, styles.image32Position]}
        onPress={() => navigation.navigate("Notificaes")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-32.png")}
        />
      </Pressable>
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
        <Text style={[styles.tnis1, styles.tnis1Typo]}>Tênis</Text>
        <Text style={[styles.r20000, styles.r20000Typo]}>R$ 200,00</Text>
      </Pressable>
      <Pressable
        style={[styles.supreme, styles.supremeLayout]}
        onPress={() => navigation.navigate("TnDetalhes")}
      >
        <View style={[styles.supremeChild, styles.supremeLayout]} />
        <Image style={styles.supremeItem} contentFit="cover" />
        <Text style={[styles.supremeXNba, styles.tnis1Typo]}>{`Supreme X NBA X 
Air Force 1 Mid 07`}</Text>
        <Text style={[styles.r30000, styles.r20000Typo]}>R$ 300,00</Text>
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
  image32Position: {
    top: 52,
    position: "absolute",
  },
  homeLayout: {
    height: 42,
    width: 42,
    top: 727,
    position: "absolute",
  },
  botolateralLayout: {
    height: 6,
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
    left: 0,
    position: "absolute",
  },
  produtosTypo: {
    fontFamily: FontFamily.redHatTextBold,
    left: 33,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  tnisLayout: {
    height: 190,
    width: 298,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.thistle,
    borderRadius: Border.br_2xs,
    left: 0,
    top: 0,
  },
  tnis1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  r20000Typo: {
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 23,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  supremeLayout: {
    width: 296,
    height: 190,
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
  vectorIcon3: {
    left: 156,
    width: 48,
    height: 48,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  home: {
    left: 51,
  },
  search: {
    left: 159,
  },
  shoppingCart: {
    left: 267,
  },
  barralateral: {
    left: -142,
    backgroundColor: Color.darkslateblue_100,
    width: 142,
    height: 748,
  },
  botolateralChild: {
    top: 0,
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
    left: 0,
    width: 34,
  },
  botolateralItem: {
    top: 10,
    width: 28,
  },
  botolateral: {
    top: 65,
    left: 22,
    height: 16,
    width: 34,
    position: "absolute",
  },
  tenistyles: {
    top: 165,
    fontSize: 29,
    color: Color.darkviolet,
  },
  produtos: {
    top: 216,
    fontSize: 22,
    color: Color.black,
    fontFamily: FontFamily.redHatTextBold,
  },
  image32: {
    left: 311,
    width: 31,
    height: 31,
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
    textAlign: "center",
  },
  r20000: {
    top: 94,
    left: 167,
  },
  tnis: {
    top: 258,
    left: 31,
  },
  supremeChild: {
    backgroundColor: Color.thistle,
    borderRadius: Border.br_2xs,
    left: 0,
    top: 0,
  },
  supremeItem: {
    top: 31,
    left: 23,
    borderRadius: Border.br_3xs,
    width: 121,
    height: 129,
    position: "absolute",
  },
  supremeXNba: {
    top: 57,
    left: 160,
    fontSize: FontSize.size_sm,
  },
  r30000: {
    top: 95,
    left: 165,
  },
  supreme: {
    top: 472,
    left: 33,
    width: 296,
  },
  tn: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TN;

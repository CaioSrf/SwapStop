import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeSapatos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homesapatos}>
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
        style={[styles.vectorIcon3, styles.notificaoPosition]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.homeIcon, styles.searchLayout]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Pressable
        style={[styles.search, styles.searchLayout]}
        onPress={() => navigation.navigate("Procurar")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.shoppingCart, styles.searchLayout]}
        onPress={() => navigation.navigate("Histrico")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/shopping-cart.png")}
        />
      </Pressable>
      <View style={[styles.barralateral, styles.notificaoPosition]} />
      <Pressable
        style={styles.botolateral}
        onPress={() => navigation.navigate("Perfil")}
      >
        <View style={[styles.botolateralChild, styles.botolateralLayout]} />
        <View style={[styles.botolateralItem, styles.botolateralLayout]} />
      </Pressable>
      <Text style={[styles.lojas, styles.lojasTypo]}>Lojas</Text>
      <Text style={[styles.produtos, styles.lojasTypo]}>Produtos</Text>
      <Pressable
        style={[styles.notificao, styles.notificaoPosition]}
        onPress={() => navigation.navigate("Notificaes")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-32.png")}
        />
      </Pressable>
      <Image
        style={styles.lojagamesIcon}
        contentFit="cover"
        source={require("../assets/lojagames.png")}
      />
      <Image
        style={styles.lojasapatoIcon}
        contentFit="cover"
        source={require("../assets/lojasapato.png")}
      />
      <Pressable
        style={[styles.tnis, styles.tnisLayout]}
        onPress={() => navigation.navigate("TenisDetalhes")}
      >
        <View style={[styles.tnisChild, styles.tnisLayout]} />
        <Image
          style={styles.supremeItemPosition}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Text style={[styles.tnis1, styles.tnis1Typo]}>Tênis</Text>
        <Text style={[styles.r20000, styles.r20000Typo]}>R$ 200,00</Text>
      </Pressable>
      <Pressable
        style={[styles.supreme, styles.tnisLayout]}
        onPress={() => navigation.navigate("TnDetalhes")}
      >
        <View style={[styles.tnisChild, styles.tnisLayout]} />
        <Image
          style={[styles.supremeItem, styles.supremeItemPosition]}
          contentFit="cover"
        />
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
  notificaoPosition: {
    top: 52,
    position: "absolute",
  },
  searchLayout: {
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
  lojasTypo: {
    color: Color.darkviolet,
    fontFamily: FontFamily.redHatTextBold,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  tnisLayout: {
    height: 190,
    width: 151,
    position: "absolute",
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
    top: 161,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  supremeItemPosition: {
    height: 117,
    width: 100,
    left: 26,
    top: 11,
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
    color: Color.black,
    fontWeight: "700",
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
  homeIcon: {
    left: 51,
  },
  icon: {
    height: "100%",
    width: "100%",
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
  lojas: {
    top: 115,
    left: 130,
    fontSize: FontSize.size_19xl,
  },
  produtos: {
    top: 451,
    left: 28,
    fontSize: FontSize.size_9xl,
  },
  notificao: {
    left: 311,
    width: 31,
    height: 31,
  },
  lojagamesIcon: {
    top: 186,
    left: 301,
    width: 180,
    height: 224,
    position: "absolute",
  },
  lojasapatoIcon: {
    top: 175,
    left: 81,
    width: 198,
    height: 246,
    position: "absolute",
  },
  tnisChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.thistle,
    width: 151,
    left: 0,
    top: 0,
  },
  tnis1: {
    top: 143,
    left: 57,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  r20000: {
    left: 41,
  },
  tnis: {
    left: 18,
    top: 509,
    width: 151,
  },
  supremeItem: {
    borderRadius: Border.br_3xs,
  },
  supremeXNba: {
    top: 133,
    left: 32,
    fontSize: 10,
  },
  r30000: {
    left: 40,
  },
  supreme: {
    left: 192,
    top: 509,
    width: 151,
  },
  homesapatos: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeSapatos;

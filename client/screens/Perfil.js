import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Perfil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfil}>
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
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.homeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Image
        style={[styles.searchIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Image
        style={[styles.shoppingCartIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/shopping-cart.png")}
      />
      <View style={styles.barralateral} />
      <Text style={[styles.text1, styles.textTypo]}>+55 12 345678901</Text>
      <Text style={[styles.text2, styles.textTypo]}>********</Text>
      <Text style={[styles.jorgealmeidagmailcom, styles.sairPosition]}>
        jorgealmeida@gmail.com
      </Text>
      <Pressable
        style={styles.botolateral}
        onPress={() => navigation.navigate("HomeNerd")}
      >
        <View style={[styles.botolateralChild, styles.botolateralLayout]} />
        <View style={[styles.botolateralItem, styles.botolateralLayout]} />
      </Pressable>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.jorgeAlmeida, styles.eMailTypo]}>Jorge Almeida</Text>
      <Text style={[styles.eMail, styles.eMailPosition]}>E-mail</Text>
      <Text style={[styles.nmero, styles.eMailPosition]}>Número</Text>
      <Text style={[styles.senha, styles.eMailPosition]}>Senha</Text>
      <Pressable
        style={[styles.cartesCadastrados, styles.eMailPosition]}
        onPress={() => navigation.navigate("Cartoes")}
      >
        <Text style={styles.eMailTypo}>Cartões Cadastrados</Text>
      </Pressable>
      <Pressable
        style={[styles.sair, styles.sairPosition]}
        onPress={() => navigation.navigate("Abertura")}
      >
        <Text style={styles.eMailTypo}>Sair</Text>
      </Pressable>
      <View style={[styles.perfilChild, styles.perfilLayout]} />
      <View style={[styles.perfilItem, styles.perfilLayout]} />
      <View style={[styles.perfilInner, styles.perfilLayout]} />
      <View style={[styles.rectangleView, styles.perfilLayout]} />
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
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
  iconLayout: {
    height: 42,
    width: 42,
    top: 727,
    position: "absolute",
  },
  textTypo: {
    color: Color.white,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 22,
    textAlign: "left",
  },
  sairPosition: {
    left: 53,
    position: "absolute",
  },
  botolateralLayout: {
    transform: [
      {
        rotate: "45deg",
      },
    ],
    height: 6,
    width: 34,
    borderRadius: Border.br_7xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  eMailTypo: {
    fontFamily: FontFamily.redHatTextBold,
    color: Color.white,
    fontSize: 22,
    textAlign: "left",
    fontWeight: "700",
  },
  eMailPosition: {
    left: 52,
    position: "absolute",
  },
  perfilLayout: {
    height: 4,
    width: 261,
    backgroundColor: Color.mediumorchid_200,
    left: 48,
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
    color: Color.black,
    textAlign: "left",
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
    top: 65,
    left: 266,
    width: 48,
    height: 48,
    position: "absolute",
  },
  homeIcon: {
    left: 51,
  },
  searchIcon: {
    left: 159,
  },
  shoppingCartIcon: {
    left: 267,
  },
  barralateral: {
    top: 52,
    backgroundColor: Color.darkslateblue_200,
    width: 360,
    height: 748,
    left: 0,
    position: "absolute",
  },
  text1: {
    top: 409,
    left: 50,
    color: Color.white,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 22,
    position: "absolute",
  },
  text2: {
    top: 517,
    left: 50,
    color: Color.white,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 22,
    position: "absolute",
  },
  jorgealmeidagmailcom: {
    top: 301,
    color: Color.white,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 22,
    textAlign: "left",
  },
  botolateralChild: {
    top: 0,
    left: 4,
  },
  botolateralItem: {
    top: 24,
    left: 0,
  },
  botolateral: {
    top: 64,
    left: 319,
    width: 28,
    height: 28,
    position: "absolute",
  },
  image1Icon: {
    top: 92,
    left: 117,
    width: 124,
    height: 124,
    position: "absolute",
  },
  jorgeAlmeida: {
    top: 216,
    left: 98,
    position: "absolute",
  },
  eMail: {
    top: 264,
    fontFamily: FontFamily.redHatTextBold,
    color: Color.white,
    fontSize: 22,
    textAlign: "left",
    fontWeight: "700",
  },
  nmero: {
    top: 372,
    fontFamily: FontFamily.redHatTextBold,
    color: Color.white,
    fontSize: 22,
    textAlign: "left",
    fontWeight: "700",
  },
  senha: {
    top: 480,
    fontFamily: FontFamily.redHatTextBold,
    color: Color.white,
    fontSize: 22,
    textAlign: "left",
    fontWeight: "700",
  },
  cartesCadastrados: {
    top: 581,
  },
  sair: {
    top: 652,
  },
  perfilChild: {
    top: 349,
  },
  perfilItem: {
    top: 457,
  },
  perfilInner: {
    top: 558,
  },
  rectangleView: {
    top: 629,
  },
  image2Icon: {
    top: 224,
    left: 273,
    width: 14,
    height: 14,
    position: "absolute",
  },
  perfil: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Perfil;

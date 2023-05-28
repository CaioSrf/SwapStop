import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const TenisHiper = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tenishiper}>
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
        <Text style={styles.tnis}>Tênis</Text>
        <Text style={[styles.r20000, styles.r20000Typo]}>R$ 200,00</Text>
      </View>
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("TenisDetalhes")}
      >
        <View style={[styles.botovoltarChild, styles.botovoltarLayout]} />
        <View style={[styles.botovoltarItem, styles.botovoltarLayout]} />
      </Pressable>
      <Text style={[styles.tnis1, styles.tnis1Position]}>Tênis</Text>
      <Text style={[styles.detalhes, styles.tnis1Position]}>Detalhes</Text>
      <Pressable
        style={styles.botoavanar}
        onPress={() => navigation.navigate("Check")}
      >
        <View style={[styles.botoavanarChild, styles.botoavanarLayout]} />
        <View style={[styles.botoavanarItem, styles.botoavanarLayout]} />
        <Text style={styles.comprar}>COMPRAR</Text>
      </Pressable>
      <Text style={[styles.r200001, styles.r20000Typo]}>R$ 200,00</Text>
      <Pressable
        style={[styles.pix, styles.pixLayout]}
        onPress={() => navigation.navigate("TenisPix")}
      >
        <Image
          style={[styles.pixChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Text style={[styles.pix1, styles.pix1Typo]}>Pix</Text>
        <Image
          style={[styles.image9Icon, styles.pixLayout]}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </Pressable>
      <View style={[styles.catocrdito, styles.iconLayout]}>
        <Image
          style={[styles.catocrditoChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={[styles.cartoDeCrdito, styles.pix1Typo]}>
          Cartão de crédito ou débito
        </Text>
        <Image
          style={styles.catocrditoItem}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
      </View>
      <Text style={[styles.formaDePagamento, styles.pix1Typo]}>
        Forma de Pagamento
      </Text>
      <Pressable
        style={[styles.visa, styles.visaLayout]}
        onPress={() => navigation.navigate("TenisVisa")}
      >
        <View style={[styles.visaChild, styles.visaChildPosition]} />
        <Image
          style={[styles.image24Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-24.png")}
        />
        <View style={[styles.visaItem, styles.visaChildPosition]} />
      </Pressable>
      <Pressable
        style={[styles.hipercard, styles.visaLayout]}
        onPress={() => navigation.navigate("TenisCartes")}
      >
        <View style={[styles.hipercardChild, styles.visaChildPosition]} />
        <Image
          style={[styles.image28Icon, styles.image28IconPosition]}
          contentFit="cover"
          source={require("../assets/image-28.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.mastercard, styles.visaLayout]}
        onPress={() => navigation.navigate("TenisMaster")}
      >
        <View style={[styles.mastercardChild, styles.visaChildPosition]} />
        <Image
          style={[styles.image29Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-29.png")}
        />
        <View style={[styles.visaItem, styles.visaChildPosition]} />
      </Pressable>
      <Pressable
        style={[styles.adicionar, styles.visaLayout]}
        onPress={() => navigation.navigate("NovoCartoTenis")}
      >
        <View style={[styles.adicionarChild, styles.visaChildPosition]} />
        <Image
          style={styles.adicionarItem}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <Text style={styles.text1}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  barrainferiorLayout: {
    height: 190,
    width: 360,
    left: 0,
    position: "absolute",
  },
  r20000Typo: {
    width: 140,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 23,
    textAlign: "left",
    color: Color.black,
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
  tnis1Position: {
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
  pixLayout: {
    height: 21,
    position: "absolute",
  },
  childLayout: {
    height: 17,
    width: 17,
    left: 0,
    position: "absolute",
  },
  pix1Typo: {
    fontFamily: FontFamily.redHatTextSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    position: "absolute",
  },
  visaLayout: {
    width: 66,
    position: "absolute",
  },
  visaChildPosition: {
    borderRadius: Border.br_lgi,
    width: 66,
    top: 0,
    left: 0,
    position: "absolute",
  },
  image28IconPosition: {
    left: 4,
    top: 10,
  },
  vectorIcon: {
    top: "6.67%",
    right: "7.23%",
    bottom: "6.67%",
    left: "87.28%",
    width: "5.49%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "86.67%",
  },
  vectorIcon1: {
    top: "0%",
    right: "14.45%",
    bottom: "13.33%",
    left: "80.06%",
    width: "5.49%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "86.67%",
  },
  vectorIcon2: {
    height: "43.33%",
    top: "27.47%",
    right: "0%",
    bottom: "29.2%",
    left: "94.51%",
    width: "5.49%",
    maxHeight: "100%",
    maxWidth: "100%",
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
  barrainferiorChild: {
    backgroundColor: Color.thistle,
    top: 0,
  },
  tnis: {
    top: 34,
    left: 142,
    width: 74,
    textAlign: "center",
    fontSize: 23,
    fontFamily: FontFamily.redHatTextBold,
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  r20000: {
    top: 64,
    left: 110,
  },
  barrainferior: {
    top: 610,
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
  tnis1: {
    top: 128,
    fontSize: FontSize.size_11xl,
    left: 52,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  detalhes: {
    top: 168,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    left: 52,
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
  comprar: {
    left: 74,
    color: Color.white,
    top: 10,
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    fontSize: 23,
    fontWeight: "700",
    position: "absolute",
  },
  botoavanar: {
    top: 719,
    left: 42,
    width: 277,
    height: 59,
    position: "absolute",
  },
  r200001: {
    top: 148,
    left: 202,
  },
  pixChild: {
    top: 2,
  },
  pix1: {
    letterSpacing: -1,
    fontSize: FontSize.size_mini,
    left: 55,
    fontFamily: FontFamily.redHatTextSemibold,
    top: 1,
  },
  image9Icon: {
    left: 28,
    width: 21,
    top: 0,
  },
  pix: {
    top: 464,
    left: 32,
    width: 75,
  },
  catocrditoChild: {
    top: 1,
  },
  vectorIcon3: {
    height: "80%",
    width: "9.65%",
    top: "10%",
    right: "77.68%",
    bottom: "10%",
    left: "12.67%",
  },
  cartoDeCrdito: {
    letterSpacing: -1,
    fontSize: FontSize.size_mini,
    left: 55,
    fontFamily: FontFamily.redHatTextSemibold,
    top: 0,
  },
  catocrditoItem: {
    top: 3,
    left: 2,
    width: 13,
    height: 13,
    position: "absolute",
  },
  catocrdito: {
    top: 276,
    left: 30,
    width: 221,
  },
  formaDePagamento: {
    top: 226,
    left: 27,
    fontSize: FontSize.size_7xl,
    letterSpacing: -1.8,
  },
  visaChild: {
    backgroundColor: Color.plum_100,
    height: 44,
  },
  image24Icon: {
    top: 11,
    left: 8,
    width: 49,
  },
  visaItem: {
    backgroundColor: Color.gainsboro_300,
    height: 44,
  },
  visa: {
    top: 303,
    height: 44,
    left: 58,
    width: 66,
  },
  hipercardChild: {
    backgroundColor: Color.lightpink,
    height: 44,
  },
  image28Icon: {
    width: 58,
    height: 24,
    position: "absolute",
  },
  hipercard: {
    top: 354,
    height: 44,
    left: 58,
    width: 66,
  },
  mastercardChild: {
    backgroundColor: Color.lightsalmon,
    height: 44,
  },
  image29Icon: {
    top: 12,
    left: 15,
    width: 36,
  },
  mastercard: {
    top: 405,
    height: 44,
    left: 58,
    width: 66,
  },
  adicionarChild: {
    backgroundColor: Color.gainsboro_200,
    height: 56,
  },
  adicionarItem: {
    top: 9,
    left: 14,
    width: 38,
    height: 38,
    position: "absolute",
  },
  text1: {
    top: 6,
    left: 23,
    fontSize: FontSize.size_15xl,
    letterSpacing: -2.4,
    fontFamily: FontFamily.redHatDisplaySemibold,
    color: Color.lime,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  adicionar: {
    top: 348,
    left: 207,
    height: 56,
  },
  tenishiper: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default TenisHiper;

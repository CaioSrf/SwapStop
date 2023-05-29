import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const TnPix = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tnpix}>
      <View style={[styles.barrainferior, styles.barrainferiorLayout]}>
        <View style={[styles.barrainferiorChild, styles.barrainferiorLayout]} />
        <Text style={[styles.r30000, styles.r30000FlexBox]}>R$ 300,00</Text>
        <Text style={[styles.supremeXNba, styles.supremeTypo]}>
          Supreme X NBA X Air Force 1 Mid 07
        </Text>
      </View>
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
        onPress={() => navigation.navigate("TnDetalhes")}
      >
        <View style={[styles.botovoltarChild, styles.botovoltarLayout]} />
        <View style={[styles.botovoltarItem, styles.botovoltarLayout]} />
      </Pressable>
      <View style={[styles.pix, styles.pixLayout]}>
        <Image
          style={[styles.pixChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={styles.pixItem}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Text style={[styles.pix1, styles.pix1Typo]}>Pix</Text>
        <Image
          style={[styles.image9Icon, styles.pixLayout]}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </View>
      <Pressable
        style={styles.catocrdito}
        onPress={() => navigation.navigate("TnCartes")}
      >
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
      </Pressable>
      <Text style={[styles.formaDePagamento, styles.pix1Typo]}>
        Forma de Pagamento
      </Text>
      <Pressable
        style={styles.botoavanar}
        onPress={() => navigation.navigate("TnQrCode")}
      >
        <View style={[styles.botoavanarChild, styles.botoavanarLayout]} />
        <View style={[styles.botoavanarItem, styles.botoavanarLayout]} />
        <Text style={[styles.avanar, styles.supremeTypo]}>AVANÇAR</Text>
      </Pressable>
      <Text style={[styles.supremeX, styles.supremeXTypo]}>Supreme X ...</Text>
      <Text style={[styles.detalhes, styles.supremeXTypo]}>Detalhes</Text>
      <Text style={[styles.r300001, styles.textFlexBox]}>R$ 300,00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  barrainferiorLayout: {
    height: 190,
    width: 360,
    left: 0,
    position: "absolute",
  },
  r30000FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  supremeTypo: {
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
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
  botoavanarLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkviolet,
    position: "absolute",
  },
  supremeXTypo: {
    fontSize: FontSize.size_4xl,
    left: 52,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  barrainferiorChild: {
    backgroundColor: Color.thistle,
    top: 0,
  },
  r30000: {
    top: 68,
    left: 122,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 23,
  },
  supremeXNba: {
    top: 26,
    left: 37,
    fontSize: FontSize.size_mid,
    width: 287,
    textAlign: "center",
    position: "absolute",
    color: Color.black,
  },
  barrainferior: {
    top: 610,
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
    fontWeight: "700",
    textAlign: "left",
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
  pixChild: {
    top: 2,
  },
  pixItem: {
    top: 4,
    left: 2,
    width: 13,
    height: 13,
    position: "absolute",
  },
  pix1: {
    letterSpacing: -1,
    fontSize: FontSize.size_mini,
    left: 55,
    fontFamily: FontFamily.redHatTextSemibold,
    fontWeight: "600",
    top: 1,
  },
  image9Icon: {
    left: 28,
    width: 21,
    top: 0,
  },
  pix: {
    top: 309,
    width: 75,
    left: 30,
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
    fontWeight: "600",
    top: 0,
  },
  catocrdito: {
    top: 276,
    width: 221,
    height: 20,
    left: 30,
    position: "absolute",
  },
  formaDePagamento: {
    top: 226,
    left: 27,
    fontSize: FontSize.size_7xl,
    letterSpacing: -1.8,
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
    position: "absolute",
    fontSize: 23,
  },
  botoavanar: {
    top: 719,
    left: 42,
    width: 277,
    height: 59,
    position: "absolute",
  },
  supremeX: {
    top: 128,
    width: 174,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  detalhes: {
    top: 168,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
  },
  r300001: {
    top: 148,
    left: 215,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 23,
  },
  tnpix: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default TnPix;

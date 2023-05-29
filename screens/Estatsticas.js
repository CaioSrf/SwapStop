import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Estatsticas = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.estatsticas}>
      <View style={styles.estatsticasChild} />
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
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("PerfilLoja")}
      >
        <View style={[styles.botovoltarChild, styles.botovoltarLayout]} />
        <View style={[styles.botovoltarItem, styles.botovoltarLayout]} />
      </Pressable>
      <Text style={styles.estatsticas1}>Estatísticas</Text>
      <Text style={[styles.lucro, styles.lucroTypo]}>Lucro</Text>
      <View style={[styles.estatsticasItem, styles.estatsticasBg]} />
      <View style={[styles.estatsticasInner, styles.estatsticasBg]} />
      <Text style={[styles.r50000, styles.lucroTypo]}>R$ 500,00</Text>
      <Text style={[styles.nmeroDeVendas, styles.lucroTypo]}>
        Número de vendas
      </Text>
      <Text style={[styles.jan, styles.janTypo]}>Jan</Text>
      <Text style={[styles.fev, styles.janTypo]}>Fev</Text>
      <Text style={[styles.mar, styles.janTypo]}>Mar</Text>
      <Text style={[styles.abr, styles.janTypo]}>Abr</Text>
      <Text style={[styles.mai, styles.janTypo]}>Mai</Text>
      <Text style={[styles.jun, styles.janTypo]}>Jun</Text>
      <View style={styles.rectangleView} />
      <View
        style={[styles.estatsticasChild1, styles.estatsticasChildPosition]}
      />
      <View
        style={[styles.estatsticasChild2, styles.estatsticasChildPosition]}
      />
      <View
        style={[styles.estatsticasChild3, styles.estatsticasChildPosition]}
      />
      <View
        style={[styles.estatsticasChild4, styles.estatsticasChildPosition]}
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
  lucroTypo: {
    fontSize: FontSize.size_9xl,
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  estatsticasBg: {
    backgroundColor: Color.palegreen,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  janTypo: {
    textAlign: "right",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.redHatTextBold,
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  estatsticasChildPosition: {
    height: 23,
    left: 115,
    position: "absolute",
  },
  estatsticasChild: {
    top: 399,
    left: 28,
    borderRadius: Border.br_xs,
    backgroundColor: "#f8f8f8",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#a6a5a5",
    borderWidth: 1,
    width: 304,
    height: 318,
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
  estatsticas1: {
    top: 71,
    left: 123,
    fontSize: 22,
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  lucro: {
    top: 124,
    left: 140,
  },
  estatsticasItem: {
    top: 204,
    left: 73,
    width: 214,
    height: 65,
  },
  estatsticasInner: {
    top: 185,
    left: 43,
    width: 274,
    height: 83,
  },
  r50000: {
    top: 208,
    left: 66,
  },
  nmeroDeVendas: {
    top: 325,
    left: 38,
  },
  jan: {
    top: 442,
    left: 67,
    textAlign: "right",
    fontSize: FontSize.size_base,
  },
  fev: {
    top: 485,
    left: 69,
  },
  mar: {
    top: 528,
    left: 66,
  },
  abr: {
    top: 571,
    left: 67,
    textAlign: "right",
    fontSize: FontSize.size_base,
  },
  mai: {
    top: 614,
    left: 68,
  },
  jun: {
    top: 657,
    left: 66,
  },
  rectangleView: {
    top: 424,
    left: 112,
    backgroundColor: Color.gainsboro_200,
    width: 3,
    height: 267,
    position: "absolute",
  },
  estatsticasChild1: {
    top: 440,
    backgroundColor: "#88ec98",
    width: 90,
  },
  estatsticasChild2: {
    top: 484,
    backgroundColor: "#ec8888",
    width: 71,
  },
  estatsticasChild3: {
    backgroundColor: "#88bcec",
    width: 142,
    top: 528,
  },
  estatsticasChild4: {
    top: 572,
    backgroundColor: "#ecd688",
    width: 13,
  },
  estatsticas: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Estatsticas;

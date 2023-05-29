import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Cartoes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cartoes}>
      <Pressable
        style={styles.botaovoltar}
        onPress={() => navigation.navigate("Perfil")}
      >
        <View style={styles.botaovoltarChild} />
        <View style={styles.botaovoltarItem} />
      </Pressable>
      <Text style={[styles.seusCartoes, styles.seusCartoesTypo]}>
        Seus Cartões
      </Text>
      <View style={[styles.cartoesChild, styles.cartoesLayout]} />
      <View style={[styles.cartoesItem, styles.cartoesLayout]} />
      <View style={[styles.cartoesInner, styles.cartoesLayout]} />
      <Image
        style={[styles.image24Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-241.png")}
      />
      <Text style={[styles.jorgeAlmeida, styles.jorgeTypo]}>Jorge Almeida</Text>
      <Text style={[styles.jorgeAlmeida1, styles.jorgeTypo]}>
        Jorge Almeida
      </Text>
      <Text style={[styles.jorgeAlmeida2, styles.jorgeTypo]}>
        Jorge Almeida
      </Text>
      <Image
        style={[styles.image26Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-26.png")}
      />
      <Image
        style={[styles.image29Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-26.png")}
      />
      <Image
        style={[styles.image30Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-26.png")}
      />
      <Image
        style={[styles.image28Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-281.png")}
      />
      <Image
        style={styles.image29Icon1}
        contentFit="cover"
        source={require("../assets/image-29.png")}
      />
      <Pressable
        style={[styles.adicionar, styles.adicionarLayout]}
        onPress={() => navigation.navigate("NovoCarto")}
      >
        <View style={[styles.adicionarChild, styles.adicionarLayout]} />
        <Text style={[styles.adicionar1, styles.seusCartoesTypo]}>
          Adicionar
        </Text>
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
  seusCartoesTypo: {
    fontFamily: FontFamily.redHatTextBold,
    fontSize: 22,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  cartoesLayout: {

    height: 275,
    width: 137,
    left: 115,
    borderRadius: Border.br_4xs,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    position: "absolute",
  },
  iconPosition: {
    height: 22,
    left: 214,
    position: "absolute",
  },
  jorgeTypo: {
    left: 66,
    fontFamily: FontFamily.redHatTextBold,
    fontSize: 22,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 26,
    width: 26,
    left: 66,
    position: "absolute",
  },
  adicionarLayout: {
    height: 57,
    width: 265,
    position: "absolute",
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
  botaovoltarChild: {
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
  botaovoltarItem: {
    left: 0,
    top: 14,
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
  botaovoltar: {
    top: 72,
    left: 34,
    width: 18,
    height: 28,
    position: "absolute",
  },
  seusCartoes: {
    top: 71,
    left: 107,
  },
  // roxo
  cartoesChild: {
    top: 90,
    backgroundColor: Color.plum_100,
  },
  //vermelho
  cartoesItem: {
    top: 250,
    backgroundColor: Color.lightpink,
  },
  //laranja
  cartoesInner: {
    top: 400,
    backgroundColor: Color.lightsalmon,
  },
  image24Icon: {
    top: 173,
    width: 55,
  },
  jorgeAlmeida: {
    top: 246,
    color: "#6f3e81",
  },
  jorgeAlmeida1: {
    top: 403,
    color: "#d52328",
  },
  jorgeAlmeida2: {
    top: 556,
    color: "#ff5f00",
  },
  image26Icon: {
    top: 171,
  },
  image29Icon: {
    top: 327,
  },
  image30Icon: {
    top: 481,
  },
  image28Icon: {
    top: 328,
    width: 53,
  },
  image29Icon1: {
    top: 484,
    left: 223,
    width: 36,
    height: 20,
    position: "absolute",
  },
  adicionarChild: {
    top: 0,
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_4xs,
    height: 57,
    width: 265,
    left: 0,
  },
  adicionar1: {
    left: 79,
    top: 14,
    fontFamily: FontFamily.redHatTextBold,
    fontSize: 22,
  },
  // add
  adicionar: {
    top: 620,
    left: 47,
  },
  cartoes: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Cartoes;

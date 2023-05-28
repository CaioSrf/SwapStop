import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const DetalhePikachu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detalhepikachu}>
      <View style={[styles.barrainferior, styles.barrainferiorLayout]}>
        <View style={[styles.barrainferiorChild, styles.barrainferiorLayout]} />
        <View style={[styles.puxadorinferior, styles.botovoltarLayout1]}>
          <View style={styles.puxadorinferiorChild} />
          <View style={styles.puxadorinferior1}>
            <View style={styles.puxadorinferiorItem} />
            <View style={styles.puxadorinferiorInner} />
          </View>
        </View>
      </View>
      <View style={[styles.combo, styles.comboLayout]}>
        <View style={[styles.comboChild, styles.comboChildPosition]} />
        <Image
          style={styles.comboItem}
          contentFit="cover"
          source={require("../assets/rectangle-115.png")}
        />
        <Text style={[styles.comboDe37, styles.textFlexBox]}>
          Combo de 37 jogos
        </Text>
        <Text style={[styles.r400000, styles.r30000Typo1]}>R$ 4000,00</Text>
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
      <Image
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <View style={[styles.pikachu, styles.pikachuLayout]}>
        <View style={[styles.rectanglepikachu, styles.pikachuLayout]} />
        <Image
          style={styles.fotopikachuIcon}
          contentFit="cover"
          source={require("../assets/fotopikachu.png")}
        />
        <Text style={[styles.pikachuDePelcia, styles.r30000Typo]}>
          Pikachu de pelúcia
        </Text>
        <Text style={[styles.r30000, styles.r30000Typo]}>R$ 300,00</Text>
        <Text style={[styles.nomeDoProduto, styles.produtoTypo]}>
          Nome do produto:
        </Text>
        <Text style={[styles.descrioDoProduto, styles.produtoTypo]}>
          Descrição do produto:
        </Text>
        <Text style={[styles.preoDoProduto, styles.produtoTypo]}>
          Preço do produto:
        </Text>
        <Image
          style={styles.pikachuChild}
          contentFit="cover"
          source={require("../assets/ellipse-22.png")}
        />
        <Image
          style={styles.photoCameraInterfaceSymbol}
          contentFit="cover"
          source={require("../assets/photo-camera-interface-symbol-for-button.png")}
        />
        <View style={styles.pikachuItem} />
      </View>
      <Pressable
        style={[styles.botovoltar, styles.botovoltarLayout1]}
        onPress={() => navigation.navigate("HomeVendedor")}
      >
        <View style={[styles.botovoltarChild, styles.botovoltarLayout]} />
        <View style={[styles.botovoltarItem, styles.botovoltarLayout]} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  barrainferiorLayout: {
    width: 315,
    position: "absolute",
  },
  botovoltarLayout1: {
    height: 28,
    position: "absolute",
  },
  comboLayout: {
    height: 190,
    width: 296,
    position: "absolute",
  },
  comboChildPosition: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.thistle,
    top: 0,
    left: 0,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  r30000Typo1: {
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
    position: "absolute",
    overflow: "hidden",
  },
  pikachuLayout: {
    height: 538,
    width: 322,
    position: "absolute",
  },
  r30000Typo: {
    fontSize: FontSize.size_base,
    left: 46,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  produtoTypo: {
    fontSize: FontSize.size_xl,
    left: 33,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
    position: "absolute",
  },
  botovoltarLayout: {
    height: 6,
    width: 20,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  barrainferiorChild: {
    top: 16,
    height: 24,
    left: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    width: 315,
  },
  puxadorinferiorChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.thistle,
    height: 28,
    width: 32,
    top: 0,
    left: 0,
    position: "absolute",
  },
  puxadorinferiorItem: {
    top: 5,
    height: 3,
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
    width: 12,
    left: 0,
    position: "absolute",
  },
  puxadorinferiorInner: {
    top: 12,
    left: 5,
    borderRadius: Border.br_7xl,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    height: 3,
    backgroundColor: Color.darkviolet,
    width: 12,
    position: "absolute",
  },
  puxadorinferior1: {
    top: 8,
    left: 10,
    height: 12,
    width: 12,
    position: "absolute",
  },
  puxadorinferior: {
    left: 141,
    width: 32,
    top: 0,
    height: 28,
  },
  barrainferior: {
    top: 800,
    left: 22,
    height: 40,
  },
  comboChild: {
    height: 190,
    width: 296,
    position: "absolute",
  },
  comboItem: {
    top: 26,
    left: 17,
    borderRadius: Border.br_3xs,
    width: 119,
    height: 138,
    position: "absolute",
  },
  comboDe37: {
    top: 65,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
    color: Color.black,
    left: 148,
  },
  r400000: {
    top: 95,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    left: 148,
  },
  combo: {
    top: 823,
    left: 32,
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
  vectorIcon3: {
    top: 52,
    left: 156,
    width: 48,
    height: 48,
    position: "absolute",
  },
  rectanglepikachu: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.thistle,
    top: 0,
    left: 0,
  },
  fotopikachuIcon: {
    top: 31,
    left: 98,
    width: 123,
    height: 143,
    position: "absolute",
  },
  pikachuDePelcia: {
    top: 255,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  r30000: {
    top: 461,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
  },
  nomeDoProduto: {
    top: 225,
  },
  descrioDoProduto: {
    top: 289,
  },
  preoDoProduto: {
    top: 430,
  },
  pikachuChild: {
    top: 144,
    left: 183,
    width: 52,
    height: 53,
    position: "absolute",
  },
  photoCameraInterfaceSymbol: {
    top: 151,
    left: 192,
    width: 28,
    height: 29,
    position: "absolute",
  },
  pikachuItem: {
    top: 326,
    backgroundColor: Color.gray_200,
    width: 231,
    height: 91,
    left: 46,
    position: "absolute",
  },
  pikachu: {
    top: 169,
    left: 20,
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
  },
  detalhepikachu: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
  },
});

export default DetalhePikachu;

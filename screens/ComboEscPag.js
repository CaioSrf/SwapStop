import * as React from "react";
import { StyleSheet, View, Text, Pressable, CheckBox } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const ComboEscPag = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  return (
    <View style={styles.comboescpag}>
      <View style={[styles.barrainferior, styles.barrainferiorLayout]}>
        <View style={[styles.barrainferiorChild, styles.barrainferiorLayout]} />
        <Text style={[styles.comboDe37, styles.comprarTypo]}>
          Combo de 37 jogos
        </Text>
        <Text style={[styles.r400000, styles.textFlexBox]}>R$ 4000,00</Text>
      </View>
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("ComboDetalhes")}
      >
        <View style={[styles.botovoltarChild, styles.botovoltarLayout]} />
        <View style={[styles.botovoltarItem, styles.botovoltarLayout]} />
      </Pressable>
      <Text style={[styles.comboDe371, styles.detalhesTypo]}>
        Combo de 37...
      </Text>
      <Text style={[styles.detalhes, styles.detalhesTypo]}>Detalhes</Text>
      <View style={styles.botoavanar}>
        <View style={[styles.botoavanarChild, styles.botoavanarBg]} />
        <View style={[styles.botoavanarItem, styles.botoavanarBg]} />
        <Text style={[styles.comprar, styles.comprarTypo]}>COMPRAR</Text>
      </View>
      <Text style={[styles.r4000001, styles.textFlexBox]}>R$ 4000,00</Text>
      <Pressable
        style={[styles.pix, styles.pixLayout]}
        onPress={() => navigation.navigate("ComboPix")}
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
      <Pressable
        style={styles.catocrdito}
        onPress={() => navigation.navigate("ComboEscCartes")}
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
  comprarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
    fontSize: 23,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
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
  detalhesTypo: {
    fontSize: FontSize.size_4xl,
    left: 52,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  botoavanarBg: {
    backgroundColor: Color.darkgray_200,
    borderRadius: Border.br_3xs,
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
  barrainferiorChild: {
    backgroundColor: Color.thistle,
    top: 0,
  },
  comboDe37: {
    top: 27,
    left: 71,
    color: Color.black,
    textAlign: "center",
  },
  r400000: {
    top: 64,
    left: 114,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: 23,
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
  comboDe371: {
    top: 128,
    width: 174,
    fontFamily: FontFamily.redHatTextBold,
    left: 52,
    fontWeight: "700",
  },
  detalhes: {
    top: 168,
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
    borderColor: "#5d5d5d",
    borderWidth: 3,
    width: 283,
    height: 56,
  },
  comprar: {
    left: 74,
    color: Color.white,
    top: 10,
  },
  botoavanar: {
    top: 719,
    left: 42,
    width: 277,
    height: 59,
    position: "absolute",
  },
  r4000001: {
    top: 148,
    left: 208,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: 23,
  },
  pixChild: {
    top: 2,
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
  comboescpag: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ComboEscPag;

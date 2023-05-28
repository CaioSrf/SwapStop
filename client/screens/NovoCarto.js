import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const NovoCartao = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.NovoCartao}>
      <View style={[styles.nmerodocartao, styles.apelidoLayout]}>
        <View style={[styles.apelidoChild, styles.childPosition]} />
        <Image
          style={[styles.debitCardIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/debit-card.png")}
        />
      </View>
      <Text style={[styles.nmeroDoCartao, styles.pas1Typo]}>Número do cartão</Text>
      <View style={[styles.datadevenc, styles.cvvLayout]}>
        <View style={[styles.cvvChild, styles.cvvLayout]} />
        <Text style={[styles.porExemploConta, styles.brasilTypo]}>MM/AA</Text>
        <Image
          style={styles.helpIcon}
          contentFit="cover"
          source={require("../assets/help.png")}
        />
      </View>
      <Text style={[styles.dataDeVenc, styles.cvv1Typo]}>Data de venc.</Text>
      <View style={[styles.cvv, styles.cvvLayout]}>
        <View style={[styles.cvvChild, styles.cvvLayout]} />
        <Text style={[styles.porExemploConta, styles.brasilTypo]}>123</Text>
        <Image
          style={styles.helpIcon}
          contentFit="cover"
          source={require("../assets/help.png")}
        />
      </View>
      <Text style={[styles.cvv1, styles.cvv1Typo]}>CVV</Text>
      <View style={[styles.pas, styles.apelidoLayout]}>
        <View style={[styles.apelidoChild, styles.childPosition]} />
        <Text style={[styles.brasil, styles.brasilTypo]}>Brasil</Text>
        <Image
          style={[styles.image36Icon, styles.iconLayout]}
          contentFit="cover"
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <Text style={[styles.pas1, styles.pas1Typo]}>País</Text>
      <View style={[styles.apelido, styles.apelidoLayout]}>
        <View style={[styles.apelidoChild, styles.childPosition]} />
        <Text style={[styles.porExemploConta, styles.brasilTypo]}>
          por exemplo, conta conjunta ou cartão corporativo.
        </Text>
      </View>
      <Text style={[styles.apelidoOpcional, styles.pas1Typo]}>
        Apelido (opcional)
      </Text>
      <Pressable
        style={styles.avanar}
        onPress={() => navigation.navigate("Cartoes")}
      >
        <View style={styles.avanarChild} />
        <Text style={[styles.avanar1, styles.avanar1Typo]}>avançar</Text>
      </Pressable>
      <Text style={[styles.novoCartao, styles.avanar1Typo]}>Novo Cartão</Text>
      <Pressable
        style={styles.botaovoltar}
        onPress={() => navigation.navigate("Cartoes")}
      >
        <View style={styles.botaovoltarChild} />
        <View style={styles.botaovoltarItem} />
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
  avanar1Typo: {
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
    position: "absolute",
  },
  apelidoLayout: {
    height: 34,
    width: 285,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.gainsboro_100,
    top: 0,
    left: 0,
    borderRadius: Border.br_7xs,
  },
  brasilTypo: {
    fontFamily: FontFamily.redHatDisplayRegular,
    letterSpacing: -1,
    fontSize: FontSize.size_sm,
    top: 9,
    textAlign: "left",
    position: "absolute",
  },
  pas1Typo: {
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.redHatDisplayRegular,
    color: Color.black,
    position: "absolute",
  },
  iconLayout: {
    width: 26,
    position: "absolute",
  },
  cvvLayout: {
    width: 134,
    height: 34,
    position: "absolute",
  },
  cvv1Typo: {
    top: 239,
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.redHatDisplayRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
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
  botaovoltarChild: {
    top: 10,
    left: 4,
    transform: [
      {
        rotate: "45deg",
      },
    ],
    height: 6,
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
    width: 20,
    position: "absolute",
  },
  botaovoltarItem: {
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
  botaovoltar: {
    top: 72,
    left: 34,
    width: 18,
    height: 28,
    position: "absolute",
  },
  novoCartao: {
    top: 71,
    left: 111,
    fontSize: 22,
    textAlign: "center",
    color: Color.black,
  },
  avanarChild: {
    top: 0,
    height: 47,
    width: 285,
    left: 0,
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  avanar1: {
    top: 6,
    left: 100,
    fontSize: 24,
    letterSpacing: -1.7,
    color: Color.white,
    textAlign: "left",
  },
  avanar: {
    top: 640,
    left: 39,
    height: 47,
    width: 285,
    position: "absolute",
  },
  apelidoChild: {
    height: 34,
    width: 285,
    position: "absolute",
  },
  porExemploConta: {
    color: Color.darkgray_100,
    left: 11,
  },
  apelido: {
    top: 457,
    left: 36,
  },
  apelidoOpcional: {
    top: 425,
    left: 36,
    textAlign: "left",
  },
  brasil: {
    left: 53,
    color: Color.gray_300,
  },
  image36Icon: {
    top: 8,
    height: 19,
    left: 11,
  },
  vectorIcon3: {
    height: "26.47%",
    width: "4.91%",
    top: "38.24%",
    right: "5.61%",
    bottom: "35.29%",
    left: "89.47%",
  },
  pas: {
    top: 364,
    left: 36,
  },
  pas1: {
    top: 332,
    left: 36,
    textAlign: "left",
  },
  cvvChild: {
    backgroundColor: Color.gainsboro_100,
    top: 0,
    left: 0,
    borderRadius: Border.br_7xs,
  },
  helpIcon: {
    top: 7,
    left: 104,
    height: 20,
    width: 20,
    position: "absolute",
  },
  cvv: {
    left: 187,
    top: 271,
    width: 134,
  },
  cvv1: {
    left: 187,
  },
  datadevenc: {
    top: 271,
    width: 134,
    left: 36,
  },
  dataDeVenc: {
    left: 36,
  },
  debitCardIcon: {
    top: 4,
    left: 8,
    height: 26,
  },
  nmerodocartao: {
    top: 182,
    left: 36,
  },
  nmeroDoCartao: {
    top: 150,
    left: 38,
    textAlign: "center",
  },
  novocartao: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NovoCartao;

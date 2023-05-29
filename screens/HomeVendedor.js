import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeVendedor = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homevendedor}>
      <Image
        style={[styles.vectorIcon3, styles.image32Position]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Pressable
        style={styles.botolateral}
        onPress={() => navigation.navigate("PerfilLoja")}
      >
        <View style={[styles.botolateralChild, styles.botolateralLayout]} />
        <View style={[styles.botolateralItem, styles.botolateralLayout]} />
      </Pressable>
      <Pressable
        style={[styles.image32, styles.image32Position]}
        onPress={() => navigation.navigate("NotificaesVendedor")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-32.png")}
        />
      </Pressable>
      <Text style={[styles.suaLoja, styles.eGamesTypo]}>Sua Loja</Text>
      <Text style={[styles.eGames, styles.eGamesTypo]}>E-games</Text>
      <Pressable
        style={[styles.pikachu, styles.comboLayout]}
        onPress={() => navigation.navigate("DetalhePikachu")}
      >
        <View style={[styles.rectanglepikachu, styles.rectanglepikachuBg]} />
        <Image
          style={styles.fotopikachuIcon}
          contentFit="cover"
          source={require("../assets/fotopikachu1.png")}
        />
        <Text style={[styles.pikachuDePelcia, styles.comboDe37Typo]}>
          Pikachu de pelúcia
        </Text>
        <Text style={[styles.r30000, styles.r30000Typo]}>R$ 300,00</Text>
      </Pressable>
      <Pressable
        style={[styles.combo, styles.comboLayout]}
        onPress={() => navigation.navigate("DetalheCombo")}
      >
        <View style={[styles.rectanglepikachu, styles.rectanglepikachuBg]} />
        <Image
          style={styles.fotocomboIcon}
          contentFit="cover"
          source={require("../assets/rectangle-115.png")}
        />
        <Text style={[styles.comboDe37, styles.comboDe37Typo]}>
          Combo de 37 jogos
        </Text>
        <Text style={[styles.r400000, styles.r30000Typo]}>R$ 4000,00</Text>
      </Pressable>
      <Text style={styles.produtos}>Produtos</Text>
      <Pressable
        style={[styles.barrainferior, styles.barrainferiorLayout]}
        onPress={() => navigation.navigate("AdicionarProduto")}
      >
        <View style={[styles.barrainferiorChild, styles.barrainferiorLayout]} />
        <View style={[styles.puxadorinferior, styles.puxadorinferiorLayout1]}>
          <View
            style={[styles.puxadorinferiorChild, styles.puxadorinferiorLayout1]}
          />
          <View style={styles.puxadorinferior1}>
            <View
              style={[styles.puxadorinferiorItem, styles.puxadorinferiorLayout]}
            />
            <View
              style={[
                styles.puxadorinferiorInner,
                styles.puxadorinferiorLayout,
              ]}
            />
          </View>
        </View>
      </Pressable>
      <View style={[styles.barralateral, styles.image32Position]} />
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
  botolateralLayout: {
    height: 6,
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
    left: 0,
    position: "absolute",
  },
  eGamesTypo: {
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
    position: "absolute",
  },
  comboLayout: {
    height: 190,
    width: 296,
    position: "absolute",
  },
  rectanglepikachuBg: {
    backgroundColor: Color.thistle,
    left: 0,
  },
  comboDe37Typo: {
    fontSize: FontSize.size_sm,
    left: 148,
    fontFamily: FontFamily.redHatTextBold,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  r30000Typo: {
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  barrainferiorLayout: {
    width: 700,
    position: "absolute",
  },
  puxadorinferiorLayout1: {
    height: 28,
    width: 32,
    top: 0,
    position: "absolute",
  },
  puxadorinferiorLayout: {
    height: 3,
    width: 12,
    backgroundColor: Color.darkviolet,
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
  vectorIcon3: {
    left: 156,
    width: 48,
    height: 48,
  },
  botolateralChild: {
    top: 0,
    width: 34,
  },
  botolateralItem: {
    top: 10,
    width: 28,
  },
  botolateral: {
    left: 22,
    height: 16,
    width: 34,
    top: 65,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image32: {
    left: 311,
    width: 31,
    height: 31,
  },
  suaLoja: {
    top: 115,
    left: 100,
    fontSize: FontSize.size_19xl,
    color: Color.darkviolet,
  },
  eGames: {
    top: 173,
    left: 125,
    fontSize: FontSize.size_6xl,
    color: Color.black,
    textAlign: "center",
  },
  rectanglepikachu: {
    borderRadius: Border.br_2xs,
    height: 190,
    width: 296,
    position: "absolute",
    top: 0,
  },
  fotopikachuIcon: {
    top: 24,
    left: 16,
    width: 123,
    height: 143,
    position: "absolute",
  },
  pikachuDePelcia: {
    top: 77,
  },
  r30000: {
    top: 98,
    left: 155,
  },
  pikachu: {
    top: 259,
    left: 28,
  },
  fotocomboIcon: {
    top: 26,
    left: 17,
    borderRadius: Border.br_3xs,
    width: 119,
    height: 138,
    position: "absolute",
  },
  comboDe37: {
    top: 65,
  },
  r400000: {
    top: 95,
    left: 148,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xl,
  },
  combo: {
    top: 471,
    left: 28,
  },
  produtos: {
    top: 217,
    fontSize: 22,
    left: 28,
    fontFamily: FontFamily.redHatTextBold,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  barrainferiorChild: {
    top: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 24,
    left: 0,
    width: 315,
    backgroundColor: Color.white,
  },
  puxadorinferiorChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.thistle,
    left: 0,
  },
  puxadorinferiorItem: {
    top: 5,
    borderRadius: Border.br_7xs,
    height: 3,
    left: 0,
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
  },
  barrainferior: {
    top: 675,
    left: 23,
    height: 40,
    width: 315,
  },
  barralateral: {
    left: -142,
    backgroundColor: Color.darkslateblue_100,
    width: 142,
    height: 748,
  },
  homevendedor: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default HomeVendedor;

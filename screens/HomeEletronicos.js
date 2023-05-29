import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeEletronicos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeeletrnicos}>
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
        style={[styles.vectorIcon3, styles.image32Position]}
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
      <View style={[styles.barralateral, styles.image32Position]} />
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
        style={[styles.image32, styles.image32Position]}
        onPress={() => navigation.navigate("Notificaes")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-32.png")}
        />
      </Pressable>
      <Image
        style={styles.hitechIcon}
        contentFit="cover"
        source={require("../assets/hitech.png")}
      />
      <Image
        style={styles.lojagamesIcon}
        contentFit="cover"
        source={require("../assets/lojagames1.png")}
      />
      <Pressable
        style={[styles.notebook, styles.notebookLayout]}
        onPress={() => navigation.navigate("NotebookDetalhes")}
      >
        <View style={[styles.notebookChild, styles.notebookLayout]} />
        <Image
          style={styles.foneItemPosition}
          contentFit="cover"
          source={require("../assets/mask-group8.png")}
        />
        <Text style={styles.notebookDell}>Notebook DELL</Text>
        <Text style={[styles.r300000, styles.r40000Typo]}>R$ 3000,00</Text>
      </Pressable>
      <Pressable
        style={[styles.fone, styles.notebookLayout]}
        onPress={() => navigation.navigate("FoneDetalhes")}
      >
        <View style={[styles.notebookChild, styles.notebookLayout]} />
        <Image
          style={[styles.foneItem, styles.foneItemPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-1151.png")}
        />
        <Text style={styles.notebookDell}>JBL Tune 710BT</Text>
        <Text style={[styles.r40000, styles.r40000Typo]}>R$ 400,00</Text>
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
  image32Position: {
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
  notebookLayout: {
    height: 190,
    width: 151,
    position: "absolute",
  },
  r40000Typo: {
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    top: 161,
    fontSize: FontSize.size_sm,
    color: Color.black,
    position: "absolute",
  },
  foneItemPosition: {
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
  image32: {
    left: 311,
    width: 31,
    height: 31,
  },
  hitechIcon: {
    top: 175,
    left: 81,
    width: 198,
    height: 246,
    position: "absolute",
  },
  lojagamesIcon: {
    top: 186,
    width: 180,
    height: 224,
    left: 0,
    position: "absolute",
  },
  notebookChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.thistle,
    left: 0,
    top: 0,
  },
  notebookDell: {
    top: 143,
    left: 20,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.redHatTextBold,
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  r300000: {
    left: 36,
    textAlign: "center",
  },
  notebook: {
    left: 17,
    top: 498,
    width: 151,
  },
  foneItem: {
    borderRadius: Border.br_3xs,
  },
  r40000: {
    left: 40,
    textAlign: "left",
  },
  fone: {
    left: 191,
    top: 498,
    width: 151,
  },
  homeeletrnicos: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeEletronicos;

import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const VendedorComprador = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.vendedorcomprador}>
      <Pressable
        style={[styles.vendedor, styles.vendedorPosition]}
        onPress={() => navigation.navigate("EntrarVendedor")}
      >
        <View style={styles.vendedorChild} />
        <View style={styles.vendedorItem} />
        <Text style={[styles.vendedorTexto, styles.vocTypo]}>VENDEDOR</Text>
      </Pressable>
      <Pressable
        style={[styles.comprador, styles.vendedorPosition]}
        onPress={() => navigation.navigate("EntrarComprador")}
      >
        <View style={styles.vendedorChild} />
        <View style={styles.vendedorItem} />
        <Text style={[styles.compradorTexto, styles.vocTypo]}>COMPRADOR</Text>
      </Pressable>
      <Image
        style={styles.swapstopIcon}
        contentFit="cover"
        source={require("../assets/vector13.png")}
      />
      <Text style={[styles.voce, styles.vocTypo]}>Você é:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vendedorPosition: {
    left: "12.53%",
    right: "12.53%",
    width: "74.93%",
    height: "8%",
    position: "absolute",
  },
  vocTypo: {
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
    position: "absolute",
    overflow: "hidden",
  },
  vendedorChild: {
    height: "69.23%",
    width: "88.26%",
    top: "30.77%",
    right: "5.34%",
    bottom: "0%",
    left: "6.41%",
    backgroundColor: Color.mediumorchid_100,
    borderRadius: Border.br_smi,
    position: "absolute",
  },
  vendedorItem: {
    height: "100%",
    bottom: "15.38%",
    left: "0%",
    right: "0%",
    top: "0%",
    backgroundColor: Color.mediumorchid_100,
    borderRadius: Border.br_smi,
    position: "absolute",
    width: "100%",
  },
  vendedorTexto: {
    left: "30.96%",
    color: Color.whitesmoke_100,
    fontSize: FontSize.size_lg,
    top: "24.62%",
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
  },
  vendedor: {
    top: "50%",
  },
  compradorTexto: {
    left: "27.76%",
    color: Color.whitesmoke_100,
    fontSize: FontSize.size_lg,
    top: "24.62%",
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
  },
  comprador: {
    top: "61%",
  },
  swapstopIcon: {
    top: "20.33%",
    left: "35.75%",
    width: 102,
    height: 102,
    position: "absolute",
  },
  voce: {
    top: "39.33%",
    left: "36%",
    fontSize: FontSize.size_11xl,
    color: Color.darkorchid,
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
  },
  text: {
    height: "73.33%",
    width: "14.16%",
    top: "26.67%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    color: Color.black,
    textAlign: "left",
    fontWeight: "700",
    left: "0%",
    position: "absolute",
  },
  vendedorcomprador: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowRadius: 90,
    elevation: 40,
    shadowOpacity: 100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default VendedorComprador;

import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Abertura = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.abertura}>
      <Pressable
        style={styles.botaocomecar}
        onPress={() => navigation.navigate("VendedorComprador")}
      >
        <View style={styles.botaocomecarItem} />
        <Text style={[styles.comecar, styles.comecarTypo]}>COMEÇAR</Text>
      </Pressable>
      <Image
        style={styles.swapstopText}
        contentFit="cover"
        source={require("../assets/swapstop-store.png")}
      />
      <Image
        style={styles.swapstopIcon}
        contentFit="cover"
        source={require("../assets/vector14.png")}
      />
      <Text style={[styles.bemVindo, styles.comecarTypo]}>Bem vindo!</Text>
      <View style={styles.barranotificacoes}>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  bemVindo: {
    top: "13.80%",
    left: "30%",
    fontSize: FontSize.size_11xl,
    color: Color.darkorchid,
  },
    swapstopText: {
    top: 387,
    left: 46,
    width: 282,
    height: 28,
    position: "absolute",
  },
  swapstopIcon: {
    top: 224,
    left: "32%",
    width: 138,
    height: 138,
    position: "absolute",
  },
  comecarTypo: {
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
  abertura: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
  botaocomecarItem: {
    height: "100%",
    backgroundColor: Color.mediumorchid_100,
    borderRadius: Border.br_smi,
    position: "absolute",
    width: "100%",
  },
  botaocomecar: {
    height: "8%",
    width: "74.93%",
    top: "77.46%",
    right: "12.53%",
    bottom: "14.53%",
    position: "absolute",
  }, 
  comecar: {
    width: "35%",
    top: "24.62%",
    left: "31.32%",
    fontSize: FontSize.size_lg,
    color: Color.whitesmoke_100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Abertura;

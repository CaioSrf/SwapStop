import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesingIcon from '@expo/vector-icons/AntDesign';
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { createPurchase } from "../firebase-helpers/purchases/createPurchase";

export function QrCode() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  const produto = params?.produto;
  const metodoPagamento = params?.metodoPagamento;

  function handlePay() {
    createPurchase({
      product: produto,
      paymentMethod: metodoPagamento,
    })
    navigation.navigate("Check")
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.goBack()}
      >
        <AntDesingIcon
          name="left"
          color={Color.darkviolet}
          size={34}
          style={{ marginLeft: 10 }}
        />
      </Pressable>


      <View style={{
        width: '100%',
        alignItems: 'center',
        marginTop: 40
      }}>
        <Text
          style={{
            fontSize: FontSize.size_11xl,
            fontFamily: FontFamily.redHatTextBold,
            color: Color.black,
            fontWeight: "700",
          }}
        >
          {produto?.name}
        </Text>
        <Text
          style={{
            fontSize: FontSize.size_4xl, fontFamily: FontFamily.redHatTextMedium,
            fontWeight: "500",
            textAlign: "left",
            color: Color.black,
          }}
        >
          {produto?.description}
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontFamily: FontFamily.redHatTextMedium,
            fontWeight: "500",
            textAlign: "left",
            color: Color.black,
          }}
        >
          R$ {produto?.price.toFixed(2)}
        </Text>
      </View>

      <Pressable
        style={styles.qdCodeContainer}
        onPress={handlePay}
      >
        <Text style={{
          fontFamily: FontFamily.redHatDisplayRegular,
          letterSpacing: -1.8,
          fontSize: FontSize.size_7xl,
          color: Color.black,
        }}
        >
          QR CODE
        </Text>
        <Image
          style={{
            height: 228,
            width: 228,
          }}
          contentFit="cover"
          source={require("../assets/image-30.png")}
        />
        <Text
          style={{
            fontStyle: "italic",
            fontFamily: FontFamily.redHatDisplayRegularItalic,
            textAlign: "center",
            letterSpacing: -1.8,
            fontSize: FontSize.size_7xl,
            color: Color.black,
            marginTop: 20
          }}
        >
        // Clique no QrCode
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
  textTypo: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
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
  qrCodeTypo: {
    textAlign: "center",
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
    color: Color.black,
    position: "absolute",
  },
  r30000Typo: {
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
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

  },
  icon: {
    height: "100%",
    width: "100%",
  },
  qdCodeContainer: {
    marginTop: 40,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  qrCode: {
    top: 318,
    left: 126,
    fontFamily: FontFamily.redHatDisplayRegular,
  },
  pikachu: {
    top: 128,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.redHatTextBold,
    left: 52,
  },
  detalhes: {
    top: 168,
    fontSize: FontSize.size_4xl,
    left: 52,
  },
  r30000: {
    top: 148,
    left: 202,
    fontSize: 23,
    width: 140,
  },
  cliqueNoQrcode: {
    top: 621,
    left: 81,
    fontStyle: "italic",
    fontFamily: FontFamily.redHatDisplayRegularItalic,
  },
  container: {
    backgroundColor: Color.white,
    flex: 1,
    paddingTop: 30
  },
});

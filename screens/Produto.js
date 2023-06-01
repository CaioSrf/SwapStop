import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import AntDesingIcon from '@expo/vector-icons/AntDesign';
import { handleImage } from "../utils/handleImage";

const SCREEN = Dimensions.get('window')

export function Produto({ }) {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  const produto = params?.produto;
  const profile = params?.profile;

  const isVendedor = profile?.type === 'vendedor';

  function handleNext() {
    navigation.navigate('Pagamento', {
      produto
    })
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
      >
        <AntDesingIcon
          name="left"
          color={Color.darkviolet}
          size={34}
          style={{ marginLeft: 10 }}
        />
      </Pressable>

      <Image
        style={{
          width: SCREEN.width * 0.6,
          height: SCREEN.width * 0.6 * 1.2,
          borderRadius: 20,
          alignSelf: 'center'
        }}
        contentFit="cover"
        source={handleImage(produto.id)}
      />

      <Text style={styles.title}>
        {produto?.name}
      </Text>
      <Text style={styles.subtitle}>
        {produto?.description}
      </Text>



      <View style={styles.footer}>
        <Text style={[styles.pikachuDePelcia, styles.avanarTypo]}>
          {produto?.name}
        </Text>
        <Text style={[styles.r30000, styles.r30000Typo]}>R$ {produto?.price.toFixed(2)}</Text>
        {!isVendedor && <Pressable
          style={styles.botoavanar}
          onPress={handleNext}
        >
          <View style={styles.nextButton}>
            <Text style={styles.nextButtonText}>AVANÇAR</Text>
          </View>
        </Pressable>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
    marginVertical: 8
  },
  subtitle: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.black,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
    overflow: "hidden",
  },
  barrainferiorLayout: {
    height: 190,
    width: 360,
  },
  avanarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    fontSize: 23,
    fontWeight: "700",
  },
  r30000Typo: {
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
  },
  botovoltarPosition: {
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
  },
  pikachuDePelcia1Position: {
    textAlign: "left",
    color: Color.black,
  },
  botoavanarLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkviolet,
  },
  vectorIcon: {
    bottom: "6.67%",
    height: "86.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
  },
  vectorIcon1: {
    bottom: "13.33%",
    height: "86.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
  },
  vectorIcon2: {
    height: "43.33%",
    bottom: "29.2%",
  },
  text: {
    height: "73.33%",
    width: "14.16%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    fontWeight: "700",
    color: Color.black,
  },
  barranotificaes: {
    height: "1.88%",
    width: "89.44%",
    bottom: "96.5%",
  },
  barrainferiorChild: {
    backgroundColor: Color.thistle,
  },
  pikachuDePelcia: {
    color: Color.black,
    textAlign: "center",
  },
  r30000: {
    fontSize: 23,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
  },
  barrainferior: {
  },
  maskGroupIcon: {
    width: 233,
    height: 271,
  },
  botovoltarChild: {
  },
  botovoltarItem: {
    height: 6,
    width: 20,
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
  },
  botovoltar: {
    width: 18,
    height: 28,
  },
  pikachuDePelcia1: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  detalhesDoProduto: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
  },
  botoavanarChild: {
    width: 235,
    height: 42,
  },
  botoavanarItem: {
    borderStyle: "solid",
    borderColor: "#6f3e81",
    borderWidth: 3,
    width: 283,
    height: 56,
  },
  avanar: {
    color: Color.white,
  },
  botoavanar: {
    width: 277,
    height: 59,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Color.white,
  },
  footer: {
    backgroundColor: Color.thistle,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 24,
    gap: 6
  },
  nextButton: {
    padding: 10,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'purple',
    backgroundColor: Color.darkviolet,
    elevation: 20,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowColor: 'purple',
    shadowOpacity: 0.4,
    shadowRadius: 10
  },
  nextButtonText: {
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    fontSize: 23,
    fontWeight: "700",
    color: Color.white,
  }
});

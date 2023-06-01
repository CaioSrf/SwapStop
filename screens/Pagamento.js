import * as React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import AntDesingIcon from '@expo/vector-icons/AntDesign';
import { handleImage } from "../utils/handleImage";


const SCREEN = Dimensions.get('window')

export function Pagamento() {
  const navigation = useNavigation();
  const [metodoPagamento, setMetodoPagamento] = React.useState('');
  const route = useRoute();
  const params = route.params;
  const produto = params?.produto;

  function handleNavigatePay() {
    navigation.navigate("QrCode", {
      produto,
      metodoPagamento
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



      <View style={{ padding: 20, gap: 20 }}>
        <View style={{ flexDirection: 'row', gap: 10, width: SCREEN.width - 40, overflow: 'hidden' }}>
          <Image
            source={handleImage(produto?.id)}
            style={{ width: SCREEN.width * 0.36, height: SCREEN.width * 0.36, borderRadius: 20 }}
            contentFit="cover"
          />
          <View >
            <Text
              style={styles.produtoName}
              numberOfLines={2}
            >
              {produto?.name}
            </Text>
            <Text style={styles.detalhes}>{produto?.description}</Text>
            <Text style={[styles.r300001, styles.textFlexBox]}>R$ {produto?.price.toFixed(2)}</Text>
          </View>
        </View>

        <Text style={[styles.formaDePagamento, styles.pix1Typo]}>
          Forma de Pagamento
        </Text>

        <Pressable
          className='pix'
          onPress={() => setMetodoPagamento(prev => prev === 'pix' ? '' : 'pix')}
          style={{
            flexDirection: 'row',
            width: '100%',
            backgroundColor: metodoPagamento === 'pix' ? Color.thistle : Color.white,
            padding: 10,
            gap: 6,
            borderRadius: 8
          }}
        >
          <Image
            style={{ width: 22, height: 22 }}
            contentFit="cover"
            source={require("../assets/image-9.png")}
          />
          <Text style={[styles.pix1, styles.pix1Typo]}>Pix</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.pikachuDePelcia, styles.avanarTypo]}>
          {produto?.name}
        </Text>
        <Text style={[styles.r30000, styles.r30000Typo]}>R$ {produto?.price.toFixed(2)}</Text>
        <Pressable
          style={{ ...styles.botoavanar, opacity: !metodoPagamento ? 0.4 : 1 }}
          onPress={handleNavigatePay}
          disabled={!metodoPagamento}
        >
          <View style={styles.nextButton}>
            <Text style={styles.nextButtonText}>COMPRAR</Text>
          </View>
        </Pressable>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  produtoName: {
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
    color: Color.black,
    width: (SCREEN.width - 40 - 20) * 0.6,
  },
  barrainferiorLayout: {
    height: 190,
    width: 360,
  },
  avanarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
    fontSize: 23,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
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
  },
  pixLayout: {
    height: 21,
  },
  childLayout: {
    height: 17,
    width: 17,
  },
  pix1Typo: {
    fontFamily: FontFamily.redHatTextSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
  },
  botoavanarLayout: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkviolet,
  },
  pikachuPosition: {
    textAlign: "left",
    color: Color.black,
  },
  barrainferiorChild: {
    backgroundColor: Color.thistle,
  },
  pikachuDePelcia: {
    color: Color.black,
    textAlign: "center",
  },
  r30000: {
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: 23,
  },
  barrainferior: {
  },
  vectorIcon: {
    width: "5.49%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "86.67%",
  },
  vectorIcon1: {
    width: "5.49%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "86.67%",
  },
  vectorIcon2: {
    height: "43.33%",
    width: "5.49%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text: {
    height: "73.33%",
    width: "14.16%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
  },
  barranotificaes: {
    height: "1.88%",
    width: "89.44%",
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
  pixChild: {
  },
  pixItem: {
    width: 13,
    height: 13,
  },
  pix1: {
    letterSpacing: -1,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.redHatTextSemibold,
    fontWeight: "600",
  },
  image9Icon: {
    width: 21,
  },
  pix: {
    width: 75,
  },
  catocrditoChild: {
  },
  vectorIcon3: {
    height: "80%",
    width: "9.65%",
  },
  cartoDeCrdito: {
    letterSpacing: -1,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.redHatTextSemibold,
    fontWeight: "600",
  },
  catocrdito: {
    width: 221,
    height: 20,
  },
  formaDePagamento: {
    fontSize: FontSize.size_7xl,
    letterSpacing: -1.8,
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
  pikachu: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  detalhes: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    width: (SCREEN.width - 40 - 20) * 0.6,
    textAlign: "left",
    color: Color.black,
  },
  r300001: {
    width: 140,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: 23,
  },
  container: {
    backgroundColor: Color.white,
    flex: 1,
    paddingTop: 30
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

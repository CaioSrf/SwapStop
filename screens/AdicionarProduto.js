import * as React from "react";
import { useState } from "react";
import { Image, TextInput } from "react-native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AdicionarProduto = ({close}) => {
  const navigation = useNavigation();
  const [nomeProduto, setNomeProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState("");
  const [fotosProduto, setFotosProduto] = useState([]);

  const adicionarFoto = () => {
    // Implement logic to add photos to the 'fotosProduto' state
  };

  return (
    <View style={styles.adicionarproduto}>

      <View style={[styles.barrainferior, styles.barrainferiorPosition]}>
        <View
          style={[styles.barrainferiorChild, styles.barrainferiorPosition]}
        />
        <Pressable
          style={[styles.puxadorinferior, styles.vectorIcon3Layout]}
          onPress={close}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/puxadorinferior.png")}
          />
        </Pressable>
        <Text style={[styles.r, styles.rTypo]}>R$</Text>
        <View style={styles.barrainferiorItem} />
        <Text style={[styles.novoProduto, styles.rTypo]}>Novo Produto</Text>
        <Text style={[styles.nomeDoProduto, styles.produtoTypo]}>
          Nome do produto:
        </Text>

          <View style={[styles.rectangleViewBorder, styles.barrainferiorInner]}>
            <TextInput
            style={styles.input}
            value={nomeProduto}
            onChangeText={setNomeProduto}
            placeholder="Digite o nome do produto"
          />
        </View>
        <Text style={[styles.descricaoDoProduto, styles.produtoTypo]}>
          Descrição do produto:
        </Text>
        
        <Text style={[styles.fotoDoProduto, styles.produtoTypo]}>
          Foto do produto:
        </Text>
        <Text style={[styles.precoDoProduto, styles.produtoTypo]}>
          Preço do produto:
        </Text>
        <View style={[styles.barrainferiorInner, styles.rectangleViewBorder]} />
        <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
        <Text style={[styles.text1, styles.rTypo]}>--,--</Text>
        
        <View style={[styles.barrainferiorChild1, styles.barrainferiorLayout]}>
          <TextInput
            style={styles.input}
            value={descricaoProduto}
            onChangeText={setDescricaoProduto}
            placeholder="Digite a descrição do produto"
          />
        </View>

        <View
          style={[styles.barrainferiorChild3, styles.barrainferiorChildLayout]}
        />
        <Image
          style={styles.photoCameraInterfaceSymbol}
          contentFit="cover"
          source={require("../assets/photo-camera-interface-symbol-for-button.png")}
        />
        <Pressable>
        <View
          style={[styles.barrainferiorChild5, styles.barrainferiorChildBg]}
        />
        <Text style={[styles.postar, styles.rTypo]}>POSTAR</Text>
        </Pressable>
        
      </View>
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
  vectorIcon3Layout: {
    height: 28,
    position: "absolute",
  },
  barrainferiorPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  rTypo: {
    fontFamily: FontFamily.redHatTextBold,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  produtoTypo: {
    fontSize: FontSize.size_lg,
    left: 22,
    fontFamily: FontFamily.redHatTextBold,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  // Nome do produto
  rectangleViewBorder: {
    height: 39,
    borderWidth: 1,
    borderColor: "#cc3efd",
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  // descrição do produto
  barrainferiorLayout: {
    width: 314,
    left: 22,
  },
  barrainferiorChildLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  barrainferiorChildBg: {
    backgroundColor: Color.darkgray_200,
    borderRadius: Border.br_3xs,
    position: "absolute",
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
    left: 297,
    width: 28,
    top: 61,
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
    height: 703,
    backgroundColor: Color.white,
    width: 360,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  puxadorinferior: {
    left: 163,
    top: 0,
    width: 32,
  },
  r: {
    left: 33,
    top: 338,
    fontSize: FontSize.size_6xl,
    color: Color.black,
  },
  barrainferiorItem: {
    left: 94,
    backgroundColor: Color.thistle,
    width: 168,
    height: 10,
    top: 61,
    position: "absolute",
  },
  novoProduto: {
    top: 42,
    left: 90,
    color: Color.black,
    fontSize: FontSize.size_6xl,
  },
  nomeDoProduto: {
    top: 94,
  },
  descricaoDoProduto: {
    top: 176,
  },
  fotoDoProduto: {
    top: 393,
  },
  precoDoProduto: {
    top: 311,
  },
  barrainferiorInner: {
    top: 118,
    width: 314,
    left: 22,
  },
  rectangleView: {
    top: 335,
    left: 79,
    width: 109,
  },
  barrainferiorChild1: {
    top: 200,
    height: 92,
    borderWidth: 1,
    borderColor: "#cc3efd",
    borderRadius: Border.br_6xs,
    width: 314,
    borderStyle: "solid",
    position: "absolute",
  },
  text1: {
    left: 107,
    top: 338,
    fontSize: FontSize.size_6xl,
    color: Color.black,
  },
  barrainferiorChild2: {
    top: 468,
    left: 71,
    backgroundColor: "#9c7da7",
    width: 218,
    height: 105,
  },
  barrainferiorChild3: {
    top: 436,
    left: 47,
    backgroundColor: "#c1c1c1",
    width: 266,
    height: 129,
  },
  //
  photoCameraInterfaceSymbol: {
    top: 486,
    left: 166,
    height: 29,
    width: 28,
    position: "absolute",
  },
  barrainferiorChild5: {
    top: 604,
    left: 57,
    borderColor: "#5d5d5d",
    borderWidth: 3,
    width: 245,
    height: 51,
    borderStyle: "solid",
    backgroundColor: Color.darkgray_200,
  },
  postar: {
    top: 612,
    left: 128,
    color: Color.white,
  },

  adicionarproduto: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AdicionarProduto;

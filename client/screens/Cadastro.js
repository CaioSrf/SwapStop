import * as React from "react";
import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Cadastro = () => {
  const navigation = useNavigation();

  return (
    
    <View style={styles.cadastro}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <Pressable
        style={styles.vocJTemContainer}
        onPress={() => navigation.navigate("EntrarComprador")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>
          <Text style={styles.vocJTemContainer1}>
            <Text style={styles.vocJTem}>{`Você já tem uma conta? `}</Text>
            <Text style={styles.entrar}>Entrar</Text>
          </Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.botocomecar}
        onPress={() => navigation.navigate("EntrarComprador")}
      >
        <View style={[styles.botaocomecarChild, styles.botaocomecarBg]} />
        <View style={[styles.botaocomecarItem, styles.botaocomecarBg]} />
        <Text style={[styles.criarConta, styles.criarContaTypo]}>
          CRIAR CONTA
        </Text>
      </Pressable>
      <Text style={[styles.vamosRealizarO, styles.criarContaTypo]}>
        Vamos realizar o cadastro?
      </Text>

      <View style={[styles.nomecompleto, styles.confirmarsenhaLayout]}>
      <View
          style={[styles.confirmarsenhaChild, styles.confirmarsenhaLayout]}
        />
        <TextInput style={styles.input} placeholder="Digite seu nome completo" />
      </View>


      <View style={[styles.eMail, styles.confirmarsenhaLayout]}>
        <View
          style={[styles.confirmarsenhaChild, styles.confirmarsenhaLayout]}
        />
        <TextInput style={styles.input} placeholder="Digite seu email" />
      </View>

      <View style={[styles.numero, styles.confirmarsenhaLayout]}>
        <View
          style={[styles.confirmarsenhaChild, styles.confirmarsenhaLayout]}
        />
        <TextInput style={styles.input} placeholder="Digite seu número" />
      </View>

      <View style={[styles.senha, styles.confirmarsenhaLayout]}>
        <View
          style={[styles.confirmarsenhaChild, styles.confirmarsenhaLayout]}
        />
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
        <Image
          style={styles.visualyImpairedIcon}
          contentFit="cover"
          source={require("../assets/visualy-impaired.png")}
        />
      </View>
      <View style={[styles.confirmarsenha, styles.confirmarsenhaLayout]}>
        <View
          style={[styles.confirmarsenhaChild, styles.confirmarsenhaLayout]}
        />
        <TextInput style={styles.input} placeholder="Confirme sua senha" secureTextEntry={true} />

        <Image
          style={styles.visualyImpairedIcon}
          contentFit="cover"
          source={require("../assets/visualy-impaired.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  botaocomecarBg: {
    backgroundColor: Color.mediumorchid_100,
    borderRadius: Border.br_smi,
    position: "absolute",
  },
  criarContaTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  confirmarsenhaLayout: {
    height: 60,
    width: 283,
    position: "absolute",
  },
  senhaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  numero1Typo: {
    top: 22,
    textAlign: "left",
    color: Color.darkgray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },

  text: {
    height: "7.27%",
    width: "66.93%",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
  },
  vocJTemContainer: {
    left: "15.47%",
    top: "92.36%",
    position: "absolute",
  },
  botaocomecarChild: {
    height: "69.23%",
    width: "88.18%",
    top: "30.77%",
    right: "5.41%",
    bottom: "0%",
    left: "6.42%",
  },
  botaocomecarItem: {
    height: "100%",
    backgroundColor: Color.mediumorchid_100,
    borderRadius: Border.br_smi,
    position: "absolute",
    width: "106%",
  },
  criarConta: {
    top: "30%",
    left: "30.41%",
    color: Color.gray_100,
  },
  botocomecar: {
    height: "8%",
    width: "74.93%",
    top: "90.46%",
    right: "12.53%",
    bottom: "14.53%",
    position: "absolute",
  },
  confirmarsenhaChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: "#c75eeb",
    borderWidth: 4,
  },
  confirmarSenha: {
    top: 21,
    color: Color.darkgray_100,
    left: 21,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  visualyImpairedIcon: {
    top: 14,
    left: 232,
    width: 32,
    height: 32,
    position: "absolute",
  },
  confirmarsenha: {
    top: 575,
    left: 46,
    width: 283,
  },
  senha1: {
    top: 23,
    color: Color.darkgray_100,
    left: 21,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  senha: {
    top: 503,
    left: 46,
    width: 283,
  },
  numero1: {
    left: 23,
  },
  numero: {
    top: 431,
    left: 46,
    width: 283,
  },
  eMail: {
    top: 359,
    left: 46,
    width: 283,
  },
  nomeCompleto: {
    left: 20,
  },
  nomecompleto: {
    top: 287,
    left: 46,
    width: 283,
  },
  vamosRealizarO: {
    height: "4.93%",
    width: "71.73%",
    top: "30.42%",
    left: "14.13%",
    justifyContent: "center",
    color: Color.black,
    alignItems: "center",
    display: "flex",
  },
  logoIcon: {
    top: 77,
    left: 80,
    width: 216,
    height: 147,
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
  text1: {
    height: "73.33%",
    width: "14.16%",
    top: "26.67%",
    fontSize: FontSize.size_xs,
    left: "0%",
    color: Color.black,
  },
  cadastro: {
    backgroundColor: Color.gray_100,
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
  textFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  input: {
    height: 60,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
});

export default Cadastro;

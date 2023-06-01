import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, Pressable, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { AuthContext } from "../context/AuthContext";

export const Entrar = () => {
  const navigation = useNavigation();
  const { handleSignIn } = React.useContext(AuthContext);
  const [MostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const route = useRoute();
  const params = route.params;


  const isFormComplete = () => {
    return email !== "" && senha !== "";
  };

  const handleLogin = async () => {
    if (!isFormComplete()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    handleSignIn(email, senha);
  };

  function navigateSignup() {
    navigation.navigate("Cadastro", {
      type: params?.type
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.entrarvendedor}>
          <Pressable
            style={styles.crieUmaContaContainer}
            onPress={navigateSignup}
          >
            <Text style={styles.textTypo}>
              <Text style={styles.crieUma}>{`Crie uma `}</Text>
              <Text style={styles.contaNova}>Nova Conta</Text>
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.botaocomecar,
              !isFormComplete() && styles.disabledButton,
            ]}
            onPress={handleLogin}
            disabled={!isFormComplete()}
          >
            <View style={[styles.botaocomecarChild, styles.botaocomecarBg]} />
            <View style={[styles.botaocomecarItem, styles.botaocomecarBg]} />
            <Text style={[styles.entrar, styles.textTypo]}>ENTRAR</Text>
          </Pressable>

          <Pressable
            style={styles.esqueceuASenhaContainer}
            onPress={() => navigation.navigate("EsqueciSenha")}
          >
            <Text style={[styles.esqueceuASenhaText, styles.textTypo]}>
              Esqueceu a senha?
            </Text>
          </Pressable>

          <View style={[styles.email, styles.senhaLayout]}>
            <View style={[styles.senhaChild, styles.senhaLayout]} />
            <TextInput
              style={[styles.input, styles.senha1, styles.text1Typo]}
              placeholder="E-mail"
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={[styles.senha, styles.senhaLayout]}>
            <View style={[styles.senhaChild, styles.senhaLayout]} />
            <TextInput
              style={[styles.input1, styles.senha1, styles.text1Typo]}
              placeholder="Senha"
              secureTextEntry={!MostrarSenha}
              onChangeText={(text) => setSenha(text)}
            />
            <TouchableOpacity
              style={styles.mostrarsenhaIcon}
              onPress={() => setMostrarSenha(!MostrarSenha)}
            >
              <Image
                style={styles.visualyImpairedIcon}
                resizeMode="cover"
                source={require("../assets/visualy-impaired.png")}
              />
            </TouchableOpacity>
          </View>

          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  botaocomecarBg: {
    backgroundColor: Color.mediumorchid_100,
    borderRadius: Border.br_smi,
    position: "absolute",
  },

  textTypo: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.redHatTextBold,
  },
  senhaLayout: {
    height: 60,
    width: 289,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
    width: 300,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
    position: "absolute",
    overflow: "hidden",
  },
  botaovoltarLayout: {
    transform: [
      {
        rotate: "45deg",
      },
    ],
    height: 6,
    width: 5,
    backgroundColor: Color.darkviolet,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  crieUma: {
    color: Color.black,
  },
  contaNova: {
    color: Color.cornflowerblue,
  },
  crieUmaContaContainer: {
    left: "25.07%",
    top: "74.99%",
    position: "absolute",
  },
  botaocomecarItem: {
    height: "100%",
    backgroundColor: Color.mediumorchid_100,
    borderRadius: Border.br_smi,
    position: "absolute",
    width: "100%",
  },
  entrar: {
    top: "25%",
    left: "35%",
    color: Color.gray_100,
    position: "absolute",
  },
  botaocomecar: {
    height: "7%",
    width: "81.6%",
    top: "65.57%",
    right: "26.33%",
    left: "11.07%",
    position: "absolute",
  },
  disabledButton: {
    opacity: 0.8,
  },
  esqueceuASenhaContainer: {
    left: "26.93%",
    top: "57.50%",
    position: "absolute",
    color: Color.cornflowerblue,
  },
  senhaChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: "#c75eeb",
    borderWidth: 4,
    left: 0,
  },
  vectorIcon: {
    top: 104,
    left: 107,
    width: 160,
    height: 160,
    position: "absolute",
  },
  email: {
    top: 318,
    left: 43,
    width: 289,
  },
  senha: {
    top: 388,
    left: 43,
    width: 289,
  },
  senha1: {
    top: 19,
    left: 24,
    fontSize: FontSize.size_mid,
    color: Color.darkgray_100,
    fontFamily: FontFamily.redHatTextBold,
    textAlign: "left",
  },
  visualyImpairedIcon: {
    left: 236,
    width: 32,
    height: 32,
    top: 14,
    position: "absolute",
  },
  text1: {
    height: "73.33%",
    width: "14.16%",
    top: "26.67%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    left: "0%",
    color: Color.black,
  },
  botaovoltarChild: {
    top: 10,
    left: 4,
  },
  botaovoltarItem: {
    top: 14,
    left: 0,
  },
  botaovoltar: {
    top: 72,
    left: 34,
    width: 18,
    height: 28,
    position: "absolute",
  },
  entrarvendedor: {
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
});


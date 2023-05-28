import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const EsqueciSenha = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const isEmailValid = email.includes("@");

  const handlePress = () => {
    if (isEmailValid) {
      navigation.navigate("VendedorComprador");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.esquecisenha}>
        <Text style={[styles.esteSiteContainer, styles.textinhoLayout]}>
          <Text style={styles.esteSite}>{`Este site é protegido pelo hCaptcha e está sujeito a sua `}</Text>
          <Text style={styles.enviarTypo}>Política de Privacidade</Text>
          <Text style={styles.esteSite}>{` e `}</Text>
          <Text style={styles.enviarTypo}>Termos de Uso.</Text>
          <Text style={styles.esteSite}>.</Text>
        </Text>
        <Pressable
          style={[styles.enviaresqueceusenha, !isEmailValid && styles.disabled]}
          onPress={handlePress}
          disabled={!isEmailValid}
        >
          <View style={[styles.enviaresqueceusenhaChild, styles.childLayout]} />
          <Text style={[styles.enviar, styles.enviarTypo]}>ENVIAR</Text>
        </Pressable>

        <View style={[styles.esquecisenhaChild, styles.childLayout]}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <Text style={[styles.eMailLogin, styles.emailClr]}>E-mail / Login</Text>
        <View style={[styles.textinho, styles.textinhoLayout]}>

          <Text style={[styles.esqueceuASenha, styles.esqueceuASenhaPosition]}>
            Esqueceu a senha?
          </Text>

          <Text style={[styles.informeSeuEMail, styles.textinhoLayout]}>
            Informe seu e-mail ou login e enviaremos instruções para você criar
            sua senha.
          </Text>
        </View>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  esquecisenha: {
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
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  childLayout: {
    borderRadius: Border.br_7xs,
    height: 48,
    width: 282,
    position: "absolute",
  },
  enviaresqueceusenha: {
    top: 554,
    height: 48,
    width: 282,
    left: 47,
    position: "absolute",
  },
  disabled: {
    opacity: 0.5,
  },
  enviar: {
    top: 13,
    left: 107,
    color: Color.white,
    textAlign: "left",
    fontSize: 17,
    position: "absolute",
  },
  esquecisenhaChild: {
    top: 460,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    left: 47,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  eMailLogin: {
    top: 422,
    fontSize: 19,
    fontFamily: FontFamily.redHatTextRegular,
    textAlign: "left",
    left: 50,
    position: "absolute",
  },
  esqueceuASenha: {
    fontSize: 25,
    left: 0,
    fontFamily: FontFamily.redHatTextRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  textinhoChild: {
    top: 47,
    borderRadius: Border.br_4xs,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    height: 2,
    left: 0,
  },
  informeSeuEMail: {
    top: 63,
    left: 0,
    fontFamily: FontFamily.redHatTextRegular,
    textAlign: "left",
    color: Color.black,
    fontSize: 17,
  },
  textinho: {
    top: 270,
    height: 129,
    left: 50,
  },
  logoIcon: {
    top: 77,
    left: 80,
    width: 216,
    height: 147,
    position: "absolute",
  },
  esteSiteContainer: {
    top: 649,
    textAlign: "left",
    color: Color.black,
    fontSize: 17,
    left: 50,
  },
  enviarTypo: {
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  emailClr: {
    color: Color.black,
    textAlign: "left",
  },
  esteSite: {
    fontFamily: FontFamily.redHatTextRegular,
  },
  textinhoLayout: {
    width: 279,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
    position: "absolute",
    overflow: "hidden",
  },
  enviaresqueceusenhaChild: {
    backgroundColor: Color.darkviolet,
    left: 0,
    top: 0,
  },
});

export default EsqueciSenha;

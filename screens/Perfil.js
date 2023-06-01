import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { AuthContext } from '../context/AuthContext';
import { getProfile } from '../firebase-helpers/profile/getProfile'
import AntDesignIcons from '@expo/vector-icons/AntDesign'

const Perfil = ({ close }) => {
  const { user, handleSignOut } = React.useContext(AuthContext)
  const [profile, setProfile] = React.useState({});

  React.useEffect(() => {
    if (profile?.name) {
      return
    }
    getProfile(user.uid)
      .then(fetchedProfile => {
        setProfile(fetchedProfile)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <View style={{ padding: 40, flex: 1 }}>
      <Pressable
        style={styles.botolateral}
        onPress={close}
      >
        <AntDesignIcons name="close" size={34} style={{ color: 'white', zIndex: 999 }} />
      </Pressable>

      <ScrollView style={styles.perfil}>


        <Image
          style={styles.profileImage}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
          <Text style={[styles.eMailTypo, { width: 165, textAlign: 'center' }]}>{profile?.name}</Text>
          <Image
            id="lapis"
            style={styles.image2Icon}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
        </View>
        <View style={styles.section}>
          <Text style={[styles.eMail]}>E-mail</Text>
          <Text style={[styles.jorgealmeidagmailcom]}>
            {profile?.email}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.nmero]}>Número</Text>
          <Text style={[styles.text1, styles.textTypo]}>{profile?.number}</Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.senha]}>Senha</Text>
          <Text style={[styles.text2, styles.textTypo]}>********</Text>
        </View>


        <Pressable
          onPress={handleSignOut}
        >
          <Text style={{...styles.eMailTypo, textAlign: 'center'}}>Sair</Text>
        </Pressable>


      </ScrollView >
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.white,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 22,
    textAlign: "left",
  },
  sairPosition: {
  },
  botolateralLayout: {
    transform: [
      {
        rotate: "45deg",
      },
    ],
    height: 6,
    width: 34,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.white,
  },
  eMailTypo: {
    fontFamily: FontFamily.redHatTextBold,
    color: Color.white,
    fontSize: 22,
    textAlign: "left",
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 10,
  },

  perfilLayout: {
    height: 4,
    width: 261,
    backgroundColor: Color.mediumorchid_200,
  },

  text: {
    height: "73.33%",
    width: "14.16%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    color: Color.black,
    textAlign: "left",
    fontWeight: "700",
  },

  text1: {
    color: Color.white,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 22,
  },
  text2: {
    color: Color.white,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 22,
  },
  jorgealmeidagmailcom: {
    color: Color.white,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 22,
    textAlign: "left",
  },


  botolateral: {
    alignSelf: "flex-end",
    width: 28,
    height: 28,
  },
  profileImage: {
    alignSelf: 'center',
    width: 124,
    height: 124,
  },

  eMail: {
    fontFamily: FontFamily.redHatTextBold,
    color: Color.white,
    fontSize: 22,
    textAlign: "left",
    fontWeight: "700",
  },
  nmero: {
    fontFamily: FontFamily.redHatTextBold,
    color: Color.white,
    fontSize: 22,
    textAlign: "left",
    fontWeight: "700",
  },
  senha: {
    fontFamily: FontFamily.redHatTextBold,
    color: Color.white,
    fontSize: 22,
    textAlign: "left",
    fontWeight: "700",
  },

  image2Icon: {
    marginTop: -14,
    width: 14,
    height: 14,
  },
  perfil: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomColor: Color.gainsboro_300,
    borderBottomWidth: 4
  }
});

export default Perfil;

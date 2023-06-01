import React, { Fragment, useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Pressable, Text, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { data } from '../data/data';
import { handleImage } from '../utils/handleImage';
import { useNavigation } from '@react-navigation/core';
import AntDesignIcon from '@expo/vector-icons/AntDesign'
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome'
import ReactNativeModal from 'react-native-modal';
import Perfil from './Perfil';
import { getProfile } from '../firebase-helpers/profile/getProfile';
import { AuthContext } from '../context/AuthContext';
import AdicionarProduto from './AdicionarProduto';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SCREEN = Dimensions.get('screen');
const SLIDER_HEIGHT = SLIDER_WIDTH * 1.3;
const ITEM_WIDTH = SLIDER_WIDTH * 0.58;

const carouselItems = data.shops

function carouselCardItem({ item, index }) {
  const handleStorePress = () => {
    console.log("Navegar para a loja com ID:", item.lojaId);
  }
  return (

    <TouchableOpacity style={styles.carouselCard} onPress={handleStorePress} key={index}>
      <Image style={styles.image} source={{ uri: item.imgURL }} />
    </TouchableOpacity>
  );
}

export default function HomeVendedor() {
  const { user } = useContext(AuthContext);
  const [currentShop, setCurrentShop] = React.useState(1);
  const currentProducts = data.products.filter(prod => prod.lojaId === currentShop);
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false)
  const [modalCadatro, setModalCadatro] = useState(false)
  const loja = data.shops.find(shop => shop.lojaId === currentShop);
  const [profile, setProfile] = useState({});

  function handleOpenProduct(produto) {
    navigation.navigate("Produto", { produto, profile })
  }

  useEffect(() => {
    if (user?.uid) {
      getProfile(user.uid)
        .then(prof => setProfile(prof))
        .catch(err => console.log(err))
    }
  }, [user?.uid])

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 24,
          marginBottom: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 14
        }}
      >
        <AntDesignIcon name='bars' size={34} color={Color.darkviolet} onPress={() => setModalOpen(prev => !prev)} />
        <Image
          style={[styles.vectorIcon3, styles.image32Position]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Pressable
          onPress={() => navigation.navigate("NotificaesVendedor")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-32.png")}
          />
        </Pressable>
      </View>

      <Text style={styles.title}>Sua Loja</Text>

      <Text style={{ ...styles.subtitle, textAlign: 'center', marginLeft: 0 }}>{loja.name}</Text>

      <View style={{ maxHeight: SLIDER_WIDTH }}>

      </View>

      <Text style={{ ...styles.subtitle, fontSize: 24 }}>Produtos</Text>

      <View style={styles.products}>

        {currentProducts.map(prod => (
          <Pressable
            key={prod.id}
            style={styles.product}
            onPress={() => handleOpenProduct(prod)}
          >
            <Image
              style={styles.productImage}
              contentFit="cover"
              source={handleImage(prod.id)}
            />
            <View style={styles.productDescriptions}>
              <Text style={styles.productName}>{prod.name}</Text>
              <Text style={[styles.price]}>R$ {prod.price.toFixed(2)}</Text>
            </View>
          </Pressable>
        ))
        }
      </View>



      <ReactNativeModal
        isVisible={modalOpen}
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        swipeDirection={'left'}
        onDismiss={() => setModalOpen(false)}
        onSwipeComplete={() => setModalOpen(false)}
        style={{ margin: 0 }}
      >
        <View style={{ flex: 1, backgroundColor: Color.darkviolet }}>
          <Perfil close={() => setModalOpen(false)} />
        </View>
      </ReactNativeModal>

      <ReactNativeModal
        isVisible={modalCadatro}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        swipeDirection={'down'}
        onDismiss={() => setModalCadatro(false)}
        onSwipeComplete={() => setModalCadatro(false)}
        style={{ margin: 0 }}
      >
        <View style={{ flex: 1, backgroundColor: Color.darkviolet }}>
          <AdicionarProduto close={() => setModalCadatro(false)} />
        </View>
      </ReactNativeModal>

      <View style={{
        flex: 1,
        borderColor: Color.gray_200,
        borderBottomWidth: 4,
        opacity: 0.5,
        marginHorizontal: 20,
        position: 'absolute',
        bottom: 30,
        width: SCREEN.width - 40,
        alignItems: 'center',
      }} >

        <Pressable
          onPress={() => setModalCadatro(true)}
          style={{
            backgroundColor: Color.darkviolet,
            paddingVertical: 6,
            paddingHorizontal: 14,
            borderRadius: 20,
            marginBottom: -24,
          }}
        >
          <FontAwesomeIcon name='plus' size={30} />
        </Pressable>

      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  carouselCard: {
    width: ITEM_WIDTH,
  },
  image: {
    height: SCREEN.width * 0.7,
    borderRadius: 8,
  },
  title: {
    color: Color.darkviolet,
    fontFamily: FontFamily.redHatTextBold,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_19xl,
  },
  subtitle: {
    color: Color.black,
    fontFamily: FontFamily.redHatTextBold,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    marginLeft: 20,
    marginVertical: 10
  },
  products: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'space-evenly'
  },
  product: {
    width: SCREEN.width * 0.40,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.thistle,
    padding: 10,
    marginBottom: 20
  },
  productImage: {
    width: SCREEN.width * 0.34,
    height: SCREEN.width * 0.34 * 1.2,
    borderRadius: Border.br_3xs,
    alignSelf: 'center'
  },
  productDescriptions: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 6,
  },
  price: {
    textAlign: 'center'
  }
});
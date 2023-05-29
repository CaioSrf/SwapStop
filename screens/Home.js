import React from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Pressable, Text  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.88;

const carouselItems = [
  {
    imgURL: "https://www.socialbauru.com.br/wp-content/uploads/2021/01/no-rules-bauru4-1024x768.jpg",
    lojaId: 1,
  },
  {
    imgURL: "https://powerdesign.com.br/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-26-at-23.30.25-1.jpeg",
    lojaId: 2,
  },
  {
    imgURL: "https://w8p3z7h5.stackpathcdn.com/wp-content/uploads/2015/09/Onde-comprar-eletronicos-em-Miami_.jpg ",
    lojaId: 3,  
  },
];

function carouselCardItem({ item, index }) {
  const handleStorePress = () => {
    console.log("Navegar para a loja com ID:", item.storeId); 

  }
  return (
    
    <TouchableOpacity style={styles.carouselCard} onPress={handleStorePress} key={index}>
      <Image style={styles.image} source={{ uri: item.imgURL }} />
    </TouchableOpacity>
  );
}

export function Home() {
  return (
    <View style={styles.container}>
      <Carousel
        data={carouselItems}
        renderItem={carouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        layout={'default'}
        layoutCardOffset={9}
        inactiveSlideOpacity={0.7}
        inactiveSlideScale={0.9}
        loop={true}
      />
      <View style={[styles.barralateral, styles.image32Position]} />
       <Pressable
        style={styles.botolateral}
        onPress={() => navigation.navigate("Perfil")}
      >
      </Pressable>
        <View style={[styles.botolateralChild, styles.botolateralLayout]} />
        <View style={[styles.botolateralItem, styles.botolateralLayout]} />
        <Text style={[styles.lojas, styles.lojasTypo]}>Lojas</Text>
        <Text style={[styles.produtos, styles.lojasTypo]}>Produtos</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  carouselCard: {
    width: ITEM_WIDTH,
  },
  image: {
    top: 120,
    height: 380,
    borderRadius: 8,
  },

  lojasTypo: {
    color: Color.darkviolet,
    fontFamily: FontFamily.redHatTextBold,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  lojas: {
    top: 45,
    left: 130,
    fontSize: FontSize.size_19xl,
  },
  produtos: {
    top: 505,
    left: 28,
    fontSize: FontSize.size_9xl,
  },
  
});

export default Home;

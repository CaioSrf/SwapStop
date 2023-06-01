import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { FlatList } from "react-native-gesture-handler";
import { data } from "../data/data";
import { listenPurchases } from "../firebase-helpers/purchases/listPurchases";
import { handleImage } from "../utils/handleImage";

const Histrico = () => {
  const [purchases, setPurchases] = React.useState([]);
  const lojas = data.shops;

  React.useEffect(() => {
    const unsubscribe = listenPurchases((fetchedPurchases) => {
      setPurchases(fetchedPurchases);
    })

    return () => unsubscribe();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Histórico de Compra
      </Text>

      <View style={styles.content}>
        <FlatList
          data={purchases}
          renderItem={({ item }) => (
            <View key={item?.id} style={styles.card}>
              <Image
                source={handleImage(item?.productId)}
                style={styles.cardImage}
                contentFit="cover"
              />
              <View style={{ alignItems: 'flex-end', }}>
                <Text style={{ color: Color.black, fontSize: 20 }}>
                  {item?.productName}
                </Text>
                <Text style={{ color: Color.black, fontSize: 14 }}>
                  {item?.paymentMethod}
                </Text>
                <Text style={{ color: Color.black, fontSize: 24 }}>
                  R$ {item?.price}
                </Text>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <View style={styles.container}>
              <Image
                style={styles.shoppingCartIcon}
                contentFit="cover"
                source={require("../assets/shopping-cart1.png")}
              />
              <Text style={styles.title}>
                Seu histórico está vazio
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingTop: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 20,
    marginBottom: 12,
    backgroundColor: Color.thistle,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
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
  title: {
    fontFamily: FontFamily.redHatTextBold,
    fontSize: 22,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
  },
  histricoTypo: {
    fontFamily: FontFamily.redHatTextBold,
    fontSize: 22,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
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
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
  },
  barranotificaes: {
    height: "1.88%",
    width: "89.44%",
    top: "1.63%",
    right: "5%",
    bottom: "96.5%",
    left: "5.56%",
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
    top: 72,
    left: 34,
    width: 18,
    height: 28,
  },
  histricoDeCompra: {
    top: 71,
    left: 90,
  },
  shoppingCartIcon: {
    alignSelf: "center",
    marginTop: 80,
    width: 172,
    height: 172,
    marginBottom: 20
  },
  seuHistricoEst: {
    top: 442,
    left: 51,
  },
  container: {
    backgroundColor: Color.white,
    flex: 1,
    paddingTop: 40,
  },
});

export default Histrico;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, FlatList, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { data } from '../data/data'
import { handleImage } from "../utils/handleImage";

const Procurar = () => {
  const navigation = useNavigation();
  const products = data.products;
  const [searchText, setSearchText] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  function handleOpenProduct(produto) {
    navigation.navigate("Produto", { produto })
  }

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const productsFiltereds = products.filter(prod => (
        (prod?.name.toLocaleLowerCase())
          .includes(
            (searchText.trim()).toLocaleLowerCase()
          )
      ));
      setFilteredProducts(productsFiltereds);
    }, 300)

    return () => clearTimeout(timeout);
  }, [searchText])

  return (
    <View style={styles.container}>
      <View style={styles.procurarChild} >
        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="produto"
        />
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search1.png")}
        />
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <Pressable key={item?.id} style={styles.card} onPress={() => handleOpenProduct(item)}>
            <Image
              source={handleImage(item?.id)}
              style={styles.cardImage}
              contentFit="cover"
            />
            <View style={{ alignItems: 'flex-end', }}>
              <Text style={{ color: Color.black, fontSize: 20 }}>
                {item?.name}
              </Text>
              <Text style={{ color: Color.black, fontSize: 14 }}>
                {item?.paymentMethod}
              </Text>
              <Text style={{ color: Color.black, fontSize: 24 }}>
                R$ {item?.price}
              </Text>
            </View>
          </Pressable>
        )}
        contentContainerStyle={{gap: 20, paddingHorizontal: 10}}
        ListEmptyComponent={
          <View style={styles.container}>
            <Text style={styles.title}>
              Nenhum produto encontrado...
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "500",
    fontSize: 18,
    flexGrow: 1
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 20,
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
  title: {
    fontFamily: FontFamily.redHatTextBold,
    fontSize: 20,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  tnis1Typo: {
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  tnisLayout: {
    height: 190,
    width: 298,
  },
  childPosition: {
    backgroundColor: Color.thistle,
    borderRadius: Border.br_2xs,
  },
  tnis1FlexBox: {
    textAlign: "center",
    color: Color.black,
  },
  supremeLayout: {
    width: 296,
    height: 190,
  },
  itemLayout: {
    borderRadius: Border.br_3xs,
  },
  comboDe37Typo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  r30000Typo: {
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
  },
  r400000Position: {
    textAlign: "left",
    color: Color.black,
  },
  vectorIcon: {
    right: "7.23%",
    height: "86.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
  },
  vectorIcon1: {
    right: "14.45%",
    height: "86.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.49%",
  },
  vectorIcon2: {
    height: "43.33%",
    right: "0%",
  },
  text: {
    height: "73.33%",
    width: "14.16%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.black,
  },
  barranotificaes: {
    height: "1.88%",
    width: "89.44%",
    right: "5%",
  },
  botovoltarChild: {
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
  botovoltarItem: {
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
  botovoltar: {
    width: 18,
    height: 28,
  },
  procurarChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: Color.gainsboro_200,
    width: '90%',
    height: 48,
    marginBottom: 20
  },
  searchIcon: {
    width: 26,
    height: 26,
  },
  produtoOuLoja: {
    fontSize: 22,
    textAlign: "left",
    color: Color.black,
  },
  tnisChild: {
    height: 190,
    width: 298,
  },
  maskGroupIcon: {
    width: 125,
    height: 131,
  },
  tnis1: {
    fontSize: 23,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  r20000: {
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
    fontSize: 23,
    textAlign: "left",
    color: Color.black,
  },
  tnis: {
  },
  supremeChild: {
    backgroundColor: Color.thistle,
    borderRadius: Border.br_2xs,
  },
  supremeItem: {
    width: 121,
    height: 129,
  },
  supremeXNba: {
    textAlign: "center",
    color: Color.black,
  },
  r30000: {
    fontSize: 23,
    textAlign: "left",
    color: Color.black,
  },
  supreme: {
    width: 296,
  },
  comboItem: {
    width: 119,
    height: 138,
  },
  comboDe37: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.redHatTextBold,
    fontWeight: "700",
  },
  r400000: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.redHatTextMedium,
    fontWeight: "500",
  },
  combo: {
    width: 296,
  },
  container: {
    backgroundColor: Color.white,
    flex: 1,
    paddingTop: 40,
  },
});

export default Procurar;

import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import HomeSapatos from "./HomeSapatos";
import HomeNerd from "./HomeNerd";
import HomeEletronicos from "./HomeEletronicos";

const InfiniteScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.content}>
        <HomeSapatos />
      </View>
      <View style={styles.content}>
        <HomeNerd />
      </View>
      <View style={styles.content}>
        <HomeEletronicos />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: "100%",
    flex: 1,
  },
});

export default InfiniteScreen;

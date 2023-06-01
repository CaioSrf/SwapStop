import * as React from "react";
import { Image } from "expo-image";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";
import Icon from '@expo/vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/core";

const SCREEN = Dimensions.get('screen')

const Check = () => {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('StackHome')
  }

  React.useEffect(() => {
    const timiout = setTimeout(() => {
      handleNavigate()
    }, 1000)
    return () => clearTimeout(timiout);
  }, [])

  return (
    <View style={styles.check}>
      <Pressable onPress={handleNavigate}>
        <Icon name="check-circle" size={SCREEN.width * 0.7} color={Color.darkviolet} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  checkLayout: {
    transform: [
      {
        rotate: "-42.21deg",
      },
    ],
    width: 28,
    borderRadius: Border.br_5xl,
    position: "absolute",
    backgroundColor: Color.white,
  },
  checkChild: {
    top: 306,
    left: 86,
    width: 188,
    height: 188,
    position: "absolute",
  },
  checkItem: {
    top: 400,
    left: 124,
    height: 73,
  },
  checkInner: {
    top: 380,
    left: 243,
    height: 100,
  },
  check: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Check;

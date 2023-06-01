import React from "react";
import VendedorComprador from "../screens/VendedorComprador";
import EsqueciSenha from "../screens/EsqueciSenha";
import EntrarComprador from "../screens/EntrarComprador";
import Cadastro from "../screens/Cadastro";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entrar } from "../screens/Entrar";
import Abertura from "../screens/Abertura";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Abertura">
            <Stack.Screen
                name="Abertura"
                component={Abertura}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VendedorComprador"
                component={VendedorComprador}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Entrar"
                component={Entrar}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
            />
            <Stack.Screen
                name="EsqueciSenha"
                component={EsqueciSenha}
            />

        </Stack.Navigator>
    );
};
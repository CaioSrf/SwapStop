import React from "react";
import Abertura from "../screens/Abertura";
import NotebookQrCode from "../screens/NotebookQrCode";
import NotebookPix from "../screens/NotebookPix";
import NotebookVisa from "../screens/NotebookVisa";
import NotebookHiper from "../screens/NotebookHiper";
import NotebookMaster from "../screens/NotebookMaster";
import NovoCartoNote from "../screens/NovoCartoNote";
import NotebookCartes from "../screens/NotebookCartes";
import NotebookEscPag from "../screens/NotebookEscPag";
import NotebookDetalhes from "../screens/NotebookDetalhes";
import FoneQrCode from "../screens/FoneQrCode";
import FonePix from "../screens/FonePix";
import FoneVisa from "../screens/FoneVisa";
import FoneHiper from "../screens/FoneHiper";
import FoneMaster from "../screens/FoneMaster";
import NovoCartoFone from "../screens/NovoCartoFone";
import FoneCartes from "../screens/FoneCartes";
import FoneEscPag from "../screens/FoneEscPag";
import FoneDetalhes from "../screens/FoneDetalhes";
import TenisQrCode from "../screens/TenisQrCode";
import TenisPix from "../screens/TenisPix";
import TenisVisa from "../screens/TenisVisa";
import TenisHiper from "../screens/TenisHiper";
import TenisMaster from "../screens/TenisMaster";
import NovoCartoTenis from "../screens/NovoCartoTenis";
import TenisCartes from "../screens/TenisCartes";
import TenisEscPag from "../screens/TenisEscPag";
import TenisDetalhes from "../screens/TenisDetalhes";
import TnQrCode from "../screens/TnQrCode";
import TnPix from "../screens/TnPix";
import TnVisa from "../screens/TnVisa";
import TnHiper from "../screens/TnHiper";
import TnMaster from "../screens/TnMaster";
import NovoCartoTn from "../screens/NovoCartoTn";
import TnCartes from "../screens/TnCartes";
import TnEscPag from "../screens/TnEscPag";
import TnDetalhes from "../screens/TnDetalhes";
import PikachuQrCode from "../screens/PikachuQrCode";
import PikachuPix from "../screens/PikachuPix";
import PikachuVisa from "../screens/PikachuVisa";
import PikachuHiper from "../screens/PikachuHiper";
import PikachuMaster from "../screens/PikachuMaster";
import NovoCartoPikachu from "../screens/NovoCartoPikachu";
import PikachuCartes from "../screens/PikachuCartes";
import PikachuEscPag from "../screens/PikachuEscPag";
import Pikachu from "../screens/Pikachu";
import ComboQrCode from "../screens/ComboQrCode";
import ComboPix from "../screens/ComboPix";
import ComboVisa from "../screens/ComboVisa";
import ComboMaster from "../screens/ComboMaster";
import ComboHiper from "../screens/ComboHiper";
import NovoCartoCombo from "../screens/NovoCartoCombo";
import ComboEscCartes from "../screens/ComboEscCartes";
import ComboEscPag from "../screens/ComboEscPag";
import ComboDetalhes from "../screens/ComboDetalhes";
import Estatsticas from "../screens/Estatsticas";
import DetalheCombo from "../screens/DetalheCombo";
import DetalhePikachu from "../screens/DetalhePikachu";
import NotificaesVendedor from "../screens/NotificaesVendedor";
import PerfilLoja from "../screens/PerfilLoja";
import AdicionarProduto from "../screens/AdicionarProduto";
import HomeVendedor from "../screens/HomeVendedor";
import Check from "../screens/Check";
import Procurar from "../screens/Procurar";
import Histrico from "../screens/Histrico";
import Notificaes from "../screens/Notificaes";
import NovoCartao from "../screens/NovoCartao";
import TN from "../screens/TN";
import HomeSapatos from "../screens/HomeSapatos";
import HomeEletronicos from "../screens/HomeEletronicos";
import EntrarVendedor from "../screens/EntrarVendedor";
import VendedorComprador from "../screens/VendedorComprador";
import Cartoes from "../screens/Cartoes";
import { Pagamento } from "../screens/Pagamento";
import Perfil from "../screens/Perfil";
import HomeNerd from "../screens/HomeNerd";
import EsqueciSenha from "../screens/EsqueciSenha";
import EntrarComprador from "../screens/EntrarComprador";
import Cadastro from "../screens/Cadastro";
import Home from "../screens/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Produto } from "../screens/Produto";
import { AppTabRoutes } from "./appTab.routes";
import { QrCode } from "../screens/QrCode";

const Stack = createNativeStackNavigator();

export function AppStackRoutes() {
    console.log('stack')
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StackHome">

            <Stack.Screen
                name="StackHome"
                component={AppTabRoutes}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Produto"
                component={Produto}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Pagamento"
                component={Pagamento}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="QrCode"
                component={QrCode}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotebookPix"
                component={NotebookPix}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotebookVisa"
                component={NotebookVisa}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotebookHiper"
                component={NotebookHiper}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotebookMaster"
                component={NotebookMaster}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NovoCartoNote"
                component={NovoCartoNote}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotebookCartes"
                component={NotebookCartes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotebookEscPag"
                component={NotebookEscPag}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotebookDetalhes"
                component={NotebookDetalhes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FoneQrCode"
                component={FoneQrCode}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FonePix"
                component={FonePix}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FoneVisa"
                component={FoneVisa}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FoneHiper"
                component={FoneHiper}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FoneMaster"
                component={FoneMaster}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NovoCartoFone"
                component={NovoCartoFone}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FoneCartes"
                component={FoneCartes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FoneEscPag"
                component={FoneEscPag}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FoneDetalhes"
                component={FoneDetalhes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TenisQrCode"
                component={TenisQrCode}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TenisPix"
                component={TenisPix}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TenisVisa"
                component={TenisVisa}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TenisHiper"
                component={TenisHiper}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TenisMaster"
                component={TenisMaster}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NovoCartoTenis"
                component={NovoCartoTenis}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TenisCartes"
                component={TenisCartes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TenisEscPag"
                component={TenisEscPag}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TenisDetalhes"
                component={TenisDetalhes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TnQrCode"
                component={TnQrCode}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TnPix"
                component={TnPix}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TnVisa"
                component={TnVisa}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TnHiper"
                component={TnHiper}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TnMaster"
                component={TnMaster}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NovoCartoTn"
                component={NovoCartoTn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TnCartes"
                component={TnCartes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TnEscPag"
                component={TnEscPag}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TnDetalhes"
                component={TnDetalhes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PikachuQrCode"
                component={PikachuQrCode}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PikachuPix"
                component={PikachuPix}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PikachuVisa"
                component={PikachuVisa}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PikachuHiper"
                component={PikachuHiper}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PikachuMaster"
                component={PikachuMaster}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NovoCartoPikachu"
                component={NovoCartoPikachu}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PikachuCartes"
                component={PikachuCartes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PikachuEscPag"
                component={PikachuEscPag}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Pikachu"
                component={Pikachu}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ComboQrCode"
                component={ComboQrCode}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ComboPix"
                component={ComboPix}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ComboVisa"
                component={ComboVisa}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ComboMaster"
                component={ComboMaster}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ComboHiper"
                component={ComboHiper}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NovoCartoCombo"
                component={NovoCartoCombo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ComboEscCartes"
                component={ComboEscCartes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ComboEscPag"
                component={ComboEscPag}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ComboDetalhes"
                component={ComboDetalhes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Estatsticas"
                component={Estatsticas}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DetalheCombo"
                component={DetalheCombo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DetalhePikachu"
                component={DetalhePikachu}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotificaesVendedor"
                component={NotificaesVendedor}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PerfilLoja"
                component={PerfilLoja}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AdicionarProduto"
                component={AdicionarProduto}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeVendedor"
                component={HomeVendedor}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Check"
                component={Check}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Procurar"
                component={Procurar}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Histrico"
                component={Histrico}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Notificaes"
                component={Notificaes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NovoCartao"
                component={NovoCartao}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TN"
                component={TN}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeSapatos"
                component={HomeSapatos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeEletronicos"
                component={HomeEletronicos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EntrarVendedor"
                component={EntrarVendedor}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Cartoes"
                component={Cartoes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeNerd"
                component={HomeNerd}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
import { NavigationContainer } from "@react-navigation/native";
import { AppTabRoutes } from "./appTab.routes";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthRoutes } from "./auth.routes";
import { AppStackRoutes } from "./appStack.routes";
import { getProfile } from "../firebase-helpers/profile/getProfile";
import HomeVendedor from "../screens/HomeVendedor";
import { VendedorRoutes } from "./vendedorStack.routes";
import { ActivityIndicator, View } from "react-native";
import { Color } from "../GlobalStyles";

export function Routes() {
    const { isAuth, user } = useContext(AuthContext);
    const [profile, setProfile] = useState({});
    console.log({ profile })

    useEffect(() => {
        if (user?.uid) {
            getProfile(user.uid)
                .then(prof => setProfile(prof))
                .catch(err => console.log(err))
        }
    }, [user?.uid])

    return (
        <NavigationContainer>
            {isAuth && profile?.userId !== user?.uid && (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size={"large"} color={Color.darkviolet} />
                </View>
            )}
            {!isAuth && <AuthRoutes />}
            {isAuth && profile?.userId === user?.uid && (
                profile?.type === 'vendedor' ?
                    <VendedorRoutes /> : <AppStackRoutes />
            )}
            <StatusBar style="dark" />
        </NavigationContainer>
    )
}
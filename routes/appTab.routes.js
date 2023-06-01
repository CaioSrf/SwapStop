import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesignIcons from '@expo/vector-icons/AntDesign'
import { Color } from "../GlobalStyles";
import Procurar from "../screens/Procurar";
import Histrico from "../screens/Histrico";
import Home from "../screens/Home";


const Tab = createBottomTabNavigator();

export function AppTabRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor:
                    Color.darkviolet,
                tabBarStyle: {
                    height: 58
                }
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesignIcons name="home" size={30} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Procurar"
                component={Procurar}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesignIcons name="search1" size={30} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Histrico"
                component={Histrico}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesignIcons name="shoppingcart" size={30} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
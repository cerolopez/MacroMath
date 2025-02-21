import { Stack } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import FoodScreen from "../screens/FoodScreen";
import MealScreen from "../screens/MealScreen";
import MealLogScreen from "../screens/MealLogScreen";
import ListsScreen from "../screens/ListsScreen";


const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 0
        }
      }}
    >
      <Tab.Screen name="Home" component={WelcomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Foods" component={FoodScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Meals" component={MealScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Log" component={MealLogScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Lists" component={ListsScreen} options={{ headerShown: false }}/>

    </Tab.Navigator>
  );
}

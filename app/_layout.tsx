import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import CreateMealScreen from "../screens/CreateMealScreen";
import CreateFoodScreen from "../screens/CreateFoodScreen";
import FoodScreen from "../screens/FoodScreen";
import MealScreen from "../screens/MealScreen";
import MealLogScreen from "../screens/MealLogScreen";
import ListsScreen from "../screens/ListsScreen";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeStack" component={WelcomeScreen} options={{ title: "Home", headerShown: false }}/>
    <Stack.Screen name="Create Food" component={CreateFoodScreen} options={{ title: "Create Food", headerShown: false }}/>
    <Stack.Screen name="Create Meal" component={CreateMealScreen} options={{ title: "Create Meal", headerShown: false }}/>

  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator 
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 0
        }
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: "Home", headerShown: false }}/>
      <Tab.Screen name="Foods" component={FoodScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Meals" component={MealScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Log" component={MealLogScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Lists" component={ListsScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
);

export default function RootLayout() {
  return (
    <TabNavigator />
  );
}

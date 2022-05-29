import { useFonts } from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Text from "./src/components/text/text";
import Details from "./src/screens/details";
import Home from "./src/screens/home";

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    "Roboto-Medium": require("./assets/font/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/font/Roboto-Regular.ttf"),
  });
  if (!loaded) {
    return <Text>Font is loading...</Text>;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

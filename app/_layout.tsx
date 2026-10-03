import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"
import { useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import "../global.css"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded, error] = useFonts({
		"Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
		"Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
		"Nunito-ExtraBold": require("../assets/fonts/Nunito-ExtraBold.ttf"),
		"Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
		TitanOne: require("../assets/fonts/TitanOne.ttf")
	})

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync()
		}
	}, [loaded, error])

	if (!loaded && !error) return null

	return (
		<SafeAreaProvider style={{ flex: 1 }}>
			<StatusBar style={"auto"} animated={true} />

			<Stack
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name="index" options={{ title: "Home" }} />
				<Stack.Screen name="edit-note" options={{ title: "EditNote" }} />
			</Stack>
		</SafeAreaProvider>
	)
}

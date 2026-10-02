import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import "../global.css"

export default function RootLayout() {
	return (
		<SafeAreaProvider style={{ flex: 1 }}>
			<StatusBar style={"auto"} animated={true} />

			<Stack
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name="index" options={{ title: "Home" }} />
			</Stack>
		</SafeAreaProvider>
	)
}

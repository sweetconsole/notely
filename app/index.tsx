import { Pressable, Text, View } from "react-native"
import { useColorScheme } from "nativewind"
import { SafeAreaView } from "react-native-safe-area-context"

const Index = () => {
	const { colorScheme, setColorScheme } = useColorScheme()

	const toggleTheme = () => {
		const newTheme = colorScheme === "light" ? "dark" : "light"
		setColorScheme(newTheme)
	}

	return (
		<SafeAreaView className="flex-1 bg-background">
			<Text className="text-primary">
				Open up App.tsx to start working on your app!
			</Text>

			<Pressable onPress={toggleTheme} className="p-4 bg-surface rounded-lg">
				<Text className="text-text">Текущая тема: {colorScheme}</Text>
			</Pressable>
		</SafeAreaView>
	)
}

export default Index

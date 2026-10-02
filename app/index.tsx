import { Image, Pressable, Text, View } from "react-native"
import { useColorScheme } from "nativewind"
import { SafeAreaView } from "react-native-safe-area-context"
import { Menu, Search } from "../components/icons"

const Index = () => {
	const { colorScheme, setColorScheme } = useColorScheme()

	const toggleTheme = () => {
		const newTheme = colorScheme === "light" ? "dark" : "light"
		setColorScheme(newTheme)
	}

	return (
		<SafeAreaView className="flex-1 bg-background px-7">
			<View className="flex flex-row justify-between items-center py-4">
				<Pressable>
					<Menu />
				</Pressable>

				<Text className="font-nunito-black text-[14px] text-primary">
					All Notes
				</Text>

				<Pressable>
					<Search />
				</Pressable>
			</View>

			<View className="h-96 w-full mt-48">
				<Image
					className="flex-1 w-full mb-9"
					resizeMode="contain"
					source={require("../assets/images/image-first-page.png")}
				/>
				<Text className="font-nunito-black text-center text-primary text-[24px] mb-3">
					Create Your First Note
				</Text>
				<Text className="font-nunito-bold text-center text-[16px] text-text">
					Add a note about anything (your thoughts on climate change, or your
					history essay) and share it with the world.
				</Text>
			</View>

			<View className="absolute w-full bottom-8 left-7">
				<Pressable className="py-6 w-full bg-accent rounded-xl">
					<Text className="font-nunito-black text-xl text-surface text-center">
						Create A Note
					</Text>
				</Pressable>

				<Pressable className="mt-5">
					<Text className="font-nunito-extra-bold text-accent text-[16px] text-center">
						Import Notes
					</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}

export default Index

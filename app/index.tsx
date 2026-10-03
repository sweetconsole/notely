import { Image, Pressable, Text, View } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { Menu, Search } from "../components/icons"
import ThemedIcon from "../components/ThemedIcon"
import { Link } from "expo-router"
import { useColorScheme } from "nativewind"

const Index = () => {
	const { colorScheme, setColorScheme } = useColorScheme()
	const insets = useSafeAreaInsets()

	setColorScheme("dark")

	return (
		<SafeAreaView
			className={`flex-1 bg-background px-7`}
			style={{ paddingBottom: insets.bottom }}
		>
			<View className="flex flex-row justify-between items-center py-4">
				<Pressable>
					<ThemedIcon icon={Menu} />
				</Pressable>

				<Text className="font-nunito-black text-[14px] text-primary">
					All Notes
				</Text>

				<Pressable>
					<ThemedIcon icon={Search} />
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

			<View className="absolute w-full bottom-10 left-7">
				<Link href="/edit-note">
					<View className="py-6 w-full bg-accent rounded-xl">
						<Text className="font-nunito-black text-xl text-surface-light text-center">
							Create A Note
						</Text>
					</View>
				</Link>

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

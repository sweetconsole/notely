import {
	Image,
	Pressable,
	ScrollView,
	Text,
	TextInput,
	View
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"
import { useState } from "react"
import { Back, Properties } from "../components/icons"
import ThemedIcon from "../components/ThemedIcon"
import { useColorScheme } from "nativewind"

const EditNote = () => {
	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")

	const { colorScheme } = useColorScheme()

	const themeColors = {
		light: "#595550",
		dark: "#D9CFC2"
	}

	const colorPlaceholder =
		colorScheme == "light" ? themeColors.light : themeColors.dark

	return (
		<SafeAreaView className={`flex-1 bg-background px-7`}>
			<View className="flex flex-row justify-between items-center py-4">
				<Link href="/">
					<ThemedIcon icon={Back} />
				</Link>

				<Text className="font-nunito-black text-[14px] text-primary">
					Edit Note
				</Text>

				<Pressable>
					<ThemedIcon icon={Properties} />
				</Pressable>
			</View>

			<ScrollView className="w-full mt-7">
				<TextInput
					className="font-nunito-black text-2xl text-primary"
					style={{ padding: 0, margin: 0 }}
					value={title}
					onChangeText={setTitle}
					placeholder="Title"
					placeholderTextColor={colorPlaceholder}
					multiline
				/>

				<TextInput
					className="font-nunito-bold text-text mt-1.5"
					style={{ padding: 0, margin: 0 }}
					value={body}
					onChangeText={setBody}
					placeholder="Start writing..."
					placeholderTextColor={colorPlaceholder}
					multiline
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default EditNote

import { useColorScheme } from "nativewind"
import { ComponentType } from "react"
import { SvgProps } from "react-native-svg"

interface ThemedIconProps {
	icon: ComponentType<SvgProps>
}

const ThemedIcon = ({ icon: Icon }: ThemedIconProps) => {
	const { colorScheme } = useColorScheme()

	const themeColors = {
		light: "#403B36",
		dark: "#F0EAE2"
	}

	const color = colorScheme == "light" ? themeColors.light : themeColors.dark

	return <Icon color={color} />
}

export default ThemedIcon

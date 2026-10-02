/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				"nunito-black": ["NunitoBlack"],
				"nunito-extra-bold": ["Nunito-ExtraBold"],
				"nunito-bold": ["Nunito-Bold"],
				"nunito-semi-bold": ["Nunito-SemiBold"],
				"titan-one": ["TitanOne"]
			},
			colors: {
				background: "var(--color-background)",
				surface: "var(--color-surface)",
				text: "var(--color-text)",
				primary: "var(--color-primary)",
				accent: "var(--color-accent)",
				success: "var(--color-success)",
				warning: "var(--color-warning)",
				error: "var(--color-error)"
			}
		}
	},
	plugins: []
}

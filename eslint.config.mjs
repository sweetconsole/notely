import { defineConfig } from "eslint/config"
import reactNative from "eslint-plugin-react-native"
import importPlugin from "eslint-plugin-import"

const eslintConfig = defineConfig([
	{
		plugins: {
			import: importPlugin,
			react: reactNative
		},
		rules: {
			indent: "off",
			quotes: "off",
			semi: "off",
			"comma-dangle": "off",
			"object-curly-spacing": "off",
			"array-bracket-spacing": "off",
			"space-before-function-paren": "off",
			"no-mixed-spaces-and-tabs": "off",

			"react/jsx-uses-react": "off",
			"react/react-in-jsx-scope": "off",
			"react/jsx-no-target-blank": "warn",
			"react/jsx-key": "warn",
			"react/self-closing-comp": "warn",

			"import/no-duplicates": "warn",
			"import/order": [
				"warn",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index"
					],
					"newlines-between": "never",
					alphabetize: { order: "asc", caseInsensitive: true }
				}
			],
			"import/newline-after-import": "warn"
		}
	}
])

export default eslintConfig

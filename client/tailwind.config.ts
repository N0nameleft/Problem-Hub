import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				monoton: ['Monoton', 'cursive'],
				manjari: ['Manjari', 'sans-serif'],
			},
			colors: {
				phLinen: '#FFEDDF',
				phDarkgrey: '#4E4B4B',
				phDarkergrey: '#332F2F',
				phGreen: '#739E82',
				// Add more colors as needed
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		// ...
	],
}
export default config

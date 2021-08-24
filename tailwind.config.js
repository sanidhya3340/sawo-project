// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
		options: {
			keyframes: true,
			fontFace: true,
		},
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		screens: {
			'lg-mobile': '467px',
			...defaultTheme.screens,
		},
		extend: {
			zIndex: {
				'-10': '-10',
			},
			colors: {
				'sawo-dark': '#0A0A16',
				'secondary-color': '#fcdc60',
				'primary-color': '#151522a7',
				'brown-color': '#707070',
				'red-color': '#D13F3F',
				'terminal-blue': '#00CEFF',
				'yellow-color': '#F5D756',
			},
			fontFamily: {
				montserrat: ['montserrat', 'sans-serif'],
				'pt-mono': ['PT Mono', 'monospace'],
				gilroy: ['gilroy'],
			},
			boxShadow: {
				'3xl': '5px 5px 10px #00000029',
			},
			screens: {
				'3xl': '1700px',
				'sm-mob': { max: '430px' },
			},
			inset: {
				'-62': '-15.5rem',
				'-58': '-14.5rem',
				'1/33': '3.33%',
				'1/4': '25%',
			},
		},
	},
	variants: {
		textColor: ['dark', 'responsive', 'hover', 'focus'],
		backgroundColor: ['dark', 'responsive', 'hover', 'focus'],
		filter: ['dark', 'responsive', 'hover', 'focus'],
	},
	plugins: [],
}

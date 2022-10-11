/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			blue: '#0083A0',
			orange: '#FF913A',
			black: '#000000',
			white: '#ffffff',
			grey: '#929292',
			'grey-dark': '#4A4A4A',
			'grey-light': '#e1e1e1',
			footer: '#484848',
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1100px',
			xxl: '1300px',
			xxxl: '1500px',
		},
		extend: {
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
				Baloo: ["'Baloo Chettan 2'", 'serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

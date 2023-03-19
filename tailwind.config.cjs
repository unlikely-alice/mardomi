/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"flag-green": '#18a300',
				"flag-gold": '#c4a12d',
				"flag-red": '#eb4034',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}

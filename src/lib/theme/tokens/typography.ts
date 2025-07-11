import { spacers } from "./spacers";

export const typography = {
	fontFamily: {
		base: `"Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		heading: `"Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		monospace: `"Roboto Slab", 'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
	},

	fontSize: {
		h1: spacers[32],
		h2: spacers[24],
		h3: spacers[20],
		h4: spacers[18],
		h5: spacers[16],
		h6: spacers[14],
		large: spacers[18],
		base: spacers[16],
		small: spacers[14],
		xSmall: spacers[12],
		xxSmall: spacers[10],
		xxxSmall: spacers[8],
	},

	lineHeight: {
		h1: spacers[40],
		h2: spacers[36],
		h3: spacers[32],
		h4: spacers[24],
		h5: spacers[24],
		h6: spacers[20],
		large: spacers[24],
		base: spacers[20],
		small: spacers[18],
		xSmall: spacers[16],
		xxSmall: spacers[14],
		xxxSmall: spacers[12],
	},

	fontWeight: {
		light: "300",
		regular: "400",
		medium: "500",
		semiBold: "600",
		bold: "700",
		lightItalic: "300",
		italic: "400",
	},
}
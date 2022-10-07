import type { AstroI18nextConfig } from "astro-i18next/index"

export default {
	defaultLanguage: "en",
	supportedLanguages: ["en", "fr", "es"],
	i18next: {
		debug: true,
		initImmediate: false,
		backend: {
			loadPath: "./src/translations/{{lng}}.json",
		},
	},
	i18nextPlugins: { fsBackend: "i18next-fs-backend" },
} as AstroI18nextConfig

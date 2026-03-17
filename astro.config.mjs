// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: process.env.PUBLIC_SITE_URL || "http://localhost:4321",
	base: process.env.PUBLIC_SITE_BASE || "",
	env: {
		schema: {
			PUBLIC_SITE_URL: envField.string({
				context: "client",
				access: "public",
			}),
			PUBLIC_SITE_BASE: envField.string({
				context: "client",
				access: "public",
			}),
			PUBLIC_GA_MEASUREMENT_ID: envField.string({
				context: "client",
				access: "public",
			}),
		},
	},
	integrations: [
		react({
			include: ["**/react/*"],
		}),
		icon(),
	],
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: ["scrollmagic", "gsap", "scrollmagic-plugin-gsap"],
		},
		resolve: {
			alias: {
				"@pages": "/src/pages",
				"@assets": "/src/assets",
				"@components": "/src/components",
				"@layouts": "/src/layouts",
				"@styles": "/src/styles",
				"@utils": "/src/utils",
				"@scripts": "/src/scripts",
			},
		},
	},
});

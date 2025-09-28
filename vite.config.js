// vite.config.js
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [
        react(),
        svgr(),
        tailwindcss({
            config: {
                darkMode: "class",
                content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
                plugins: [],
            },
        }),
    ],
})

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import svgr from "vite-plugin-svgr"

export default defineConfig({
    server: {
        port: 3000,
    },
    base: process.env.VITE_BASE_PATH || "/",
    plugins: [react(), svgr(), tailwindcss()],
})

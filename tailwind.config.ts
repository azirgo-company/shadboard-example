import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Escanea los componentes de shadboard desde el workspace
    "../../packages/core/src/**/*.{js,ts,jsx,tsx}",
    // También desde node_modules para producción
    "./node_modules/shadboard/dist/**/*.{js,mjs,cjs}",
  ],
}

export default config

import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  base:'./',
  server:{
	  port:8886
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
});
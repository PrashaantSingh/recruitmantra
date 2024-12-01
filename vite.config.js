import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/user": {
        target: "http://15.206.133.74/user",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/user/, ""),
      },
    },
  },
});

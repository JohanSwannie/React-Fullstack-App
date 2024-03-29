import { defineConfig } from "vite";
import dns from "dns";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    open: true,
    port: 3000,
  },
});

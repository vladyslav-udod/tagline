import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/features": path.resolve(__dirname, "src/features"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/shared": path.resolve(__dirname, "src/shared"),
      "@/stores": path.resolve(__dirname, "src/stores"),
    },
  },
});

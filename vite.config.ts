import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import type { UserConfig } from "vite";
import svgSprite from "vite-plugin-svg-sprite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [
      svgSprite({
        include: ["src/assets/svg/**/*.svg"],
      }),
      react({
        // Enable babel optimizations
        babel: {
          plugins: [["@babel/plugin-transform-runtime", { regenerator: true }]],
        },
      }),
      splitVendorChunkPlugin(),
      mode === "analyze" &&
        visualizer({
          open: true,
          filename: "bundle-analyzer.html",
          gzipSize: true,
          brotliSize: true,
        }),
    ].filter(Boolean) as any,
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    esbuild: {
      loader: "tsx",
      include: /.*\.tsx?$/,
      exclude: [],
      // Minify in production
      minify: mode === "production",
      // Enable tree-shaking
      treeShaking: true,
    } as any,
    build: {
      outDir: "dist",
      // Enable code splitting
      cssCodeSplit: true,
      // Minify CSS in production
      cssMinify: mode === "production",
      // Minify JavaScript in production
      minify: mode === "production" ? "esbuild" : false,
      // Generate source maps in development
      sourcemap: mode === "development",
      // Configure chunk size warnings
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // Better chunk splitting
          manualChunks: {
            vendor: ["react", "react-dom", "react-router-dom"],
            ui: ["bootstrap", "@tabler/icons-react"],
            charts: ["apexcharts", "react-apexcharts"],
            forms: ["react-select", "react-quill"],
            tables: ["datatables.net", "datatables.net-dt"],
          },
        },
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
      esbuildOptions: {
        // Target modern browsers
        target: "es2020",
        // Enable esbuild's tree shaking
        treeShaking: true,
        // Define global constants
        define: {
          global: "globalThis",
        },
        loader: {
          ".ts": "tsx",
        },
      },
    },
    server: {
      port: 3000,
      // Enable HMR
      hmr: {
        overlay: true,
      },
    },
    // Experimental features
    // Experimental features
    experimental: {
      renderBuiltUrl(_filename: string) {
        return { relative: true };
      },
    },
    // Enable CSS modules
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
      },
      // Enable CSS source maps in development
      devSourcemap: mode === "development",
    },
  };

  return config;
});

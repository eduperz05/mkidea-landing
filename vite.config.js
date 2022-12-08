import path, { resolve } from "path";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
const isGitHubPages = false;
const folderName = path.basename(process.cwd()) + "/";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

const PATH = path.join(__dirname, "/src/");

export default defineConfig({
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "app/public",
    rollupOptions: {
      input: {
        main: resolve(PATH, "index.html"),
        news: resolve(PATH, "components/news/index.html"),
        "about-us": resolve(PATH,"components/about-us/index.html"),
        contact: resolve(PATH, "components/contact/index.html")
      }
    },
    plugins: [visualizer()],
  } 
});

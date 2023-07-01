import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ATSB documentation",
  description: "ATSB docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about-project" },
    ],

    sidebar: [
      {
        text: "Example topics",
        items: [
          { text: "About the project", link: "/about-project" },
          { text: "Technical details", link: "/tech-desc" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/NoamMirel2/The-Trading-Project",
      },
    ],
  },
});

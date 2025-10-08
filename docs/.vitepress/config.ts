import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    en: {
      lang: "en",
      label: "English",
      themeConfig: {
      },
    },
    he: {
      lang: "he", 
      label: "Hebrew",
      themeConfig: {
        nav: [
          { text: "בית", link: "/he/" },
          { text: "על אודות", link: "/he/about-project" },
        ],
        sidebar: [
          { text: "על אודות", link: "/he/about-project" },
          {
            text: "מטרות עסק",
            items: [
              { text: "About the project", link: "/he/about-project" },
              { text: "Technical details", link: "/he/about-project" },
            ],
          },
          {
            text: "Installation",
            collapsed: false,
            items: [
              { text: "Frontend", link: "/he/about-project" },
              { text: "Backend", link: "/he/about-project" },
              { text: "Services", link: "/he/about-project" },
            ],
          },
        ],
      },
    }
  },
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  base: "/docs/",
  lang: "en",
  title: "ATSB",
  description: "ATSB project documentation",
  themeConfig: {
    logo: "/images/logo.png",
    nav: [
      { text: "Home", link: "/en/" },
      { text: "About", link: "/en/about-project" },
    ],

    sidebar: [
      {
        text: "Getting started",
        items: [
        { text: "About the project", link: "/en/about-project" },
        { text: "Technical details", link: "/en/tech-desc" },
        ]
      },
      {
        text: "Business goals",
        items: [
          // { text: "Some article", link: "/en/about-project" },
          { text: "Stock analysis", link: "/en/strategy-discoverer" },
        ],
      },
      {
        text: "Services",
        items: [
          { text: "Trading", link: "/en/services-trading" },
          { text: "StochUtils", link: "/en/services-stockUtils" },
        ],
      },
      {
        text: "Databases",
        items: [
          { text: "Stock history", link: "/en/hystory-database.md" },
          { text: "JSON Data Refresh", link: "/en/latest-data.md" },
        ],
      },
      {
        text: "Installation",
        items: [
          { text: "Frontend", link: "/en/installation-frontend" },
          { text: "Backend", link: "/en/installation-backend" },
          // { text: "Services", link: "/en/services" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/orgs/atsb-pro/repositories",
      },
    ],
  },
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app.html", './src/**/*.{svelte,js,ts,html}'],
  theme: {
    extend: {
      colors: {
        orange: "color(display-p3 1 0.4 0)",
        noir: "color(display-p3 0.22 0.088 0)",
        yellow: "color(display-p3 1 0.5 0)",
        brown: "color(display-p3 0.7215686275 0.2862745098 0)",
        "light-orange": "color(display-p3 1 0.5098039216 0.1803921569)",
        "dark-orange": "color(display-p3 1 0.4980392157 0.003921568627)"
      }
    },
  },
  plugins: [],
}


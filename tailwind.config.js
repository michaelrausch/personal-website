module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sourcecode': ['"Source Code Pro"', 'sans-serif'],
        'futura-pt': ['"futura-pt"', 'sans-serif'],
        'futura-pt-bold': ['"futura-pt-bold"', 'sans-serif'],
      },
      colors: {
        green: {
          "50": "#113ff107",
          "100": "#f0fff9",
          "200": "#adffe0",
          "300": "#66ffc4",
          "400": "#00ff9d",
          "500": "#00ff9d",
          "600": "#00b36e",
          "700": "#008a55",
          "800": "#005c39",
          "900": "#00331f"
        },
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.gray.300"),
              '[class~="lead"]': { color: theme("colors.gray.400") },
              a: { color: theme("colors.gray.100") },
              strong: { color: theme("colors.gray.100") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.gray.100"),
                borderLeftColor: theme("colors.gray.800"),
              },
              h1: { color: theme("colors.gray.100") },
              h2: { color: theme("colors.gray.100") },
              h3: { color: theme("colors.gray.100") },
              h4: { color: theme("colors.gray.100") },
              code: { color: theme("colors.gray.100"), backgroundColor: theme('colors.gray.700') },
              "a code": { color: theme("colors.gray.100") },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.700"),
              },
              thead: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") },
            },
          },
        }
      },
    }
  },
  variants: {
    extend: {},
    typography: ["responsive", "dark"]
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
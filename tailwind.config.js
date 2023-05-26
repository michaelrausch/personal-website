module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {

    extend: {
      fontFamily: {
        'sourcecode': ['"Source Code Pro"', 'sans-serif'],
        'futura-pt': ['"futura-pt"', 'sans-serif'],
        'itc-avant-garde-gothic-pro': ['"itc-avant-garde-gothic-pro"', 'sans-serif'],
      },
      rotate: {
        '0-5': '0.7deg',
      },
      scale: {
        '102': '1.02',
      },
      colors: {
        green: {
          "200": "#E2F8D4",
          "500": "#1EB154",
          "900": "#163300"
        },
        gray: {
          "700": "#12151B",
          "800": "#171A20",
          "900": "#090A0C",
        },
        deepblue: {
          "100": "#252528",
          "500": "#FECF69",
          "900": "#0e0157"
        },
        win95blue: {
          "default": "060084"
        },
      },
      screens: {
        'sm': '740px',
        'md': '868px',
        'lg': '1124px',
        'xl': '1380px',
        '2xl': '1636px',
        '3xl': '2100px',
        '4xl': '2400px'
      },
      boxShadow: {
        'offset-black': '5px 5px black ',
        'offset-black-lg': '8px 8px black',
        'offset-green': '3px 3px #00DB87',
        'offset-green-lg': '5px 5px #00DB87'
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        rem: ["REM", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
      },
      colors: {
        primary: '#6016FC',
        dark: '#0B0B22',
        error: '#FC165B',
        badge: '#16FCD2',
        muted: '#ffffff99',
        highlight: '#221048',
        light: '#ffffff0d',
        buttonLight: '#ffffff1a',
        borderLight: '#ffffff1a',
        primaryLight: '#6016FC1a',
        pinkBadge: '#F5A7FF',
        purpleCustom: '#FAF6F9',
        deepPurple: '#2B007D',
        magenta: '#D606CE',
        gradientFrom: '#43159B',
        gradientTo: '#5D2BA9',
        purpleFigma: '#6C2BD7',
        lightGray: '#F6F8FA',
      },
    },
  },
  plugins: [],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
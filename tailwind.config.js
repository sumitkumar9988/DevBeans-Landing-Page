module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        white_A700_3d: "#ffffff3d",
        white_A700_90: "#ffffff90",
        black_918: "#090b0a",
        green_A700: "#0eb770",
        green_A701: "#02b762",
        green_A702: "#00b862",
        green_A703: "#00ba63",
        deep_orange_300: "#fda162",
        gray_804: "#6f4e37",
        pink_300: "#fb5e93",
        pink_301: "#f6709e",
        gray_802: "#4d4d4d",
        amber_301: "#f7da5e",
        gray_803: "#4f4f4f",
        gray_800: "#444444",
        gray_801: "#393939",
        lime_900: "#744a30",
        amber_300: "#f8db5e",
        black_908: "#020504",
        black_907: "#060505",
        black_909: "#020604",
        black_915: "#100e09",
        bluegray_800: "#286251",
        black_914: "#000508",
        black_917: "#0a1411",
        black_916: "#090909",
        black_911: "#070707",
        black_910: "#080808",
        black_913: "#0f0f0f",
        black_912: "#0a0a0a",
        gray_916: "#2f2118",
        gray_914: "#1b1b1b",
        black_900_19: "#00000019",
        gray_915: "#2a2a2a",
        white_A701: "#fefefa",
        white_A700: "#ffffff",
        gray_912: "#242424",
        gray_913: "#292929",
        gray_910: "#111111",
        gray_911: "#141414",
        light_blue_401: "#23befe",
        light_blue_400: "#20beff",
        amber_A200: "#fae041",
        gray_50: "#f8f8f8",
        black_904: "#020202",
        black_903: "#0c0c0c",
        black_906: "#050505",
        black_905: "#030303",
        black_900: "#060606",
        black_902: "#000000",
        black_901: "#091610",
        gray_905: "#121212",
        gray_906: "#212121",
        gray_903: "#131313",
        gray_904: "#161616",
        gray_909: "#191919",
        gray_907: "#1a1a1a",
        gray_908: "#1c1014",
        gray_700: "#555555",
        gray_901: "#151515",
        gray_902: "#181818",
        gray_701: "#5b5b5b",
        white_A700_a2: "#ffffffa2",
        gray_900: "#141915",
        gray_702: "#57525c",
        gray_300: "#e5e0e0",
        gray_100: "#f5f4ef",
        bluegray_900: "#343434",
        indigo_A400: "#485bff",
        bluegray_902: "#323232",
        bluegray_901: "#2c2c2c",
      },
      fontFamily: {
        inter: "Inter",
        manrope: "Manrope",
        catamaran: "Catamaran",
      },
      boxShadow: { bs: "0px 0px  20px 0px #00000019" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

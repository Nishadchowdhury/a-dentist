module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  },
  daisyui: {
    themes: [
      {
        doctorsTheme: {
          primary: "#19D3AE",
          secondary: "#0FCFEC",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",

          backgroundImage: {
            // 'hero-pattern': "url('/src/assets/images/bg.png')",
          }
        },
      },
      "dark",
      "cupcake",

    ],
  },
  plugins: [require("daisyui")],
}
module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      /*
      
      --primary:#0A2647",
      --variant2: #144272;
      --variant3: #205295;
      --variant4: #2C74B3;
      --primary_transparent:#07003066",
      --secondary:#9aaeb9",
      --primary_text:#ffffff",
      */
      colors: {
        primary: "#0A2647",
        variant2: "#144272",
        variant3: "#205295",
        variant4: "#2C74B3",
        primary_transparent: "#0A264766",
        secondary: "#9aaeb9",
        primary_text: "#ffffff",
        gray:"#636e74"
      },
      fontFamily: { actor: "Actor", roboto: "Roboto" },
      backgroundImage: {
        gradient: "linear-gradient(60deg ,var(--primary),var(--variant2))",
        gradient2: "linear-gradient(180deg ,var(--primary),var(--primary_transparent))",
        gradient1: "linear-gradient(180deg ,var(--primary),var(--variant2))"
      },
      letterSpacing: {
        ls1: "1px",
        ls2: "2px",
        ls02: "0.2px",
        ls4: "4px",
        ls016: "0.16px",
        ls024: "0.24px",
        ls112: "1.12px",
        ls128: "1.28px",
        ls192: "1.92px",
        ls256: "2.56px",
        ls384: "3.84px",
        ls28000000000000003: "2.8000000000000003px",
      },
      borderRadius: { radius2: "2px", radius10: "10px", radius50: "50%" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

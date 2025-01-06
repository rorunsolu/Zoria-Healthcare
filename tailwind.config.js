/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: false,
    extend: {
      colors: {
        white: 'var(--color-white)',
        'white-2': 'var(--color-white-2)',
        'white-hover': 'var(--color-white-hover)',
        black: 'var(--color-black)',
        'black-2': 'var(--color-black-2)',

        green: 'var(--color-green)',
        yellow: 'var(--color-yellow)',
        purple: 'var(--color-purple)',
        orange: 'var(--color-orange)',
      },
      transitionTimingFunction: {
        'custom': 'var(--transition)',
      },
      transitionDuration: {
        'custom': '200ms',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".container": {
          width: "85%",
          margin: "0 auto",
          "max-width": "1500px",
          position: "relative",
          "@media (max-width: 700px)": {
            width: "92.5%",
          },
        },
        ".button": {
          borderWidth: "0.0625rem",
          borderColor: "transparent",
          borderRadius: "var(--border-radius)",
          padding: "0.75rem 1rem",
          fontWeight: "600",
          transition: "var(--transition)",
          "&:hover": {
            cursor: "pointer",
          },
        },
        ".button--header": {
          padding: "1rem 2.75rem",
          backgroundColor: "var(--color-white)",
          color: "var(--color-green)",
          "&:hover": {
            backgroundColor: "var(--color-white-hover)",
          },
        },
        ".button--nav": {
          padding: "0.5rem 1rem;",
          backgroundColor: "var(--color-white)",
          color: "var(--color-green)",
          "&:hover": {
            backgroundColor: "var(--color-white-hover)",
          },
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
      });
    },
  ],
}


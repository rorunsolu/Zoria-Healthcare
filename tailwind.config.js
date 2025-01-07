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
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "85%",
          margin: "0 auto",
          "max-width": "1500px",
          position: "relative",
          "@media (max-width: 700px)": {
            width: "92.5%",
          },
        },
        ".button-wrapper": {
          display: "flex",
          gap: "1rem",
          with: "100%",
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
        ".button--green": {
          padding: "0.5rem 1rem",
          backgroundColor: "var(--color-green)",
          color: "var(--color-white)",
          "&:hover": {
            backgroundColor: "var(--color-green-hover)",
          },
        },
        ".button--white": {
          padding: "0.5rem 1rem",
          backgroundColor: "var(--color-white)",
          color: "var(--color-green)",
          "&:hover": {
            backgroundColor: "var(--color-white-hover)",
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
          padding: "0.5rem 1rem",
          backgroundColor: "var(--color-white)",
          color: "var(--color-green)",
          "&:hover": {
            backgroundColor: "var(--color-white-hover)",
          },
        },
        ".absolute-icon": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "4.5rem",
          height: "4.5rem",
          borderRadius: "50%",
          border: "5px solid var(--color-white)",
          fontSize: "2.25rem",
          color: "var(--color-white)",
          backgroundColor: "var(--color-green)",
        },
        ".h1": {
          "@apply font-bold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight font-bold":
            {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
      });
    }
  ],
}


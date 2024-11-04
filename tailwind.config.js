/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    default: "#FED267",
                    dark: "#FFC22D",
                    light: "#FFE198",
                },
            },
            fontFamily: {
                montserrant: ['MontserrantCustom', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
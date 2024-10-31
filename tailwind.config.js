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
                    default: "#F7A51E",
                    dark: "#E4991E",
                    light: "#FFC058",
                },
            },
            fontFamily: {
                montserrant: ['MontserrantCustom', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
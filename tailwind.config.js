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
                    dark: "#D09503",
                    default: "#F5AF02",
                    light: "#FFC22B",
                    superlight: "#FCFCE6",
                },
            },
            fontFamily: {
                montserrant: ['MontserrantCustom', 'sans-serif'],
            },
            keyframes: {
                grow: {
                    '0%, 100%': {
                        transform: 'scale(1)',
                        border: '1px solid transparent'
                    },
                    '50%': {
                        transform: 'scale(1.05)',
                        border: '1px solid white'

                    },
                }
            },
            animation: {
                grow: 'grow 1.3s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
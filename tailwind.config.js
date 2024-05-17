// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            dark: {
                colors: {
                    primary: {
                        DEFAULT: "#d063ff",
                        foreground: "#FFFFFF"
                    },
                    focus: "#d063ff"
                }
            },
            light: {
                colors: {
                    primary: {
                        DEFAULT: "#d063ff",
                        foreground: "#000000"
                    },
                    focus: "#d063ff"
                }
            }
        }
    })],
};
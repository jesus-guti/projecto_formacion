/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "light-gray": "#F7F7F7",
                "gray": "#E2E2E2",
                "dark-gray": "#888888",
                "darker-gray": "#666666",
                "main-green": "#5EE85B",
            },
        },
    },
    plugins: [],
};

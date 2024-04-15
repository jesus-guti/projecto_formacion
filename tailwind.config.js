/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "light-gray": "var(--light-gray)",
                "gray": "var(--gray)",
                "dark-gray": "var(--darkgray)",
                "darker-gray": "var(--darker-gray)",
                "main-green": "var(main-green)",
            },
            fontSize: {
                "xs": "var(--text-xs)",
                "sm": "var(--text-sm)",
                "base": "var(--text-base)",
                "md": "var(--text-md)",
                "xl": "var(--text-xl)",
                "2xl": "var(--text-2xl)",
            },
        },
    },
    plugins: [],
};

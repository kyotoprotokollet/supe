module.exports = {
    mode: "jit",
    purge: {
        content: [
            "./resources/**/*.antlers.html",
            "./resources/**/*.blade.php",
            "./resources/js/**/*.{js,jsx,ts,tsx,vue}",
            "./content/**/*.md",
        ],
    },
    important: false,
    theme: {
        extend: {},
        fontFamily: {
            sans: [
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
            ],
            serif: ["Lora", "Georgia", "sans-serif"],
        },
        fontSize: {
            "5xl": ["3rem", { lineHeight: "1.15" }],
            "6xl": ["3.75rem", { lineHeight: "1.15" }],
            "7xl": ["4.5rem", { lineHeight: "1.15" }],
            "8xl": ["6rem", { lineHeight: "1.15" }],
            "9xl": ["8rem", { lineHeight: "1.15" }],
        },
    },
    variants: {},
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};

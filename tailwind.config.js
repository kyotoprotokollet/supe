module.exports = {
    purge: {
        content: [
            "./resources/**/*.antlers.html",
            "./resources/**/*.blade.php",
            "./content/**/*.md"
        ]
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
                "Arial"
            ],
            serif: ["Lora", "Georgia", "sans-serif"]
        }
    },
    variants: {},
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio")
    ]
};

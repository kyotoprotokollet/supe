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
            serif: ["Lora", "Georgia", "sans-serif"]
        }
    },
    variants: {},
    plugins: []
};

module.exports = {
    mode: 'jit',
    purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                main: ['Lexend Deca'],
                secondary: ['Roboto'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

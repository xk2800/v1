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
            width: {
                '120': '7.5rem',
            },


        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

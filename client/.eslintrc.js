module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        'comma-dangle': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'indent': 'off',
        'no-multiple-empty-lines': 'off',
        'semi': 'off',
        // allow paren-less arrow functions
        'arrow-parens': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 'off'
    }
}

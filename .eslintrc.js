module.exports = {
  extends: [ 'eslint-config-airbnb' ],
  ignorePatterns: [ 'node_modules/**/*.js', 'public/**/*.js' ],
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'react/prop-types': [ 0 ],
    'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
    'react/function-component-definition': [ 2, { namedComponents: 'arrow-function' } ],
    'react/jsx-one-expression-per-line': [ 0 ],
    'react/no-danger': [ 0 ],
  },
};

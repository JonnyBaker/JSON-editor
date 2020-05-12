module.exports = {
  plugins: ['prettier'],
  extends: ['react-app', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};

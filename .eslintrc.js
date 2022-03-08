module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _styles: './src/assets/styles',
          _images: './src/assets/images',
          _component: './src/components',
          _routes: './src/routes',
          _utils: './src/utils',
          _views: './src/views',
          _reduxs: './src/utils/redux',
          _reducer: './src/utils/redux/reducer',
        },
      },
    },
  },
};

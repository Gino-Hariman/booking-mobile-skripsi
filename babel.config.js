module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.svg'],
          alias: {
            tests: ['./tests/'],
            '@components': './src/components',
            '@Styles': './src/styles',
            '@Icons': './assets/icons',
            '@Types': './src/Types',
          },
          ssr: false,
        },
        'babel-plugin-inline-import',
      ],
      'react-native-reanimated/plugin',
      '@svgr/babel-plugin-transform-react-native-svg',
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
    ],
  };
};

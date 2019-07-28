module.exports = {
  sourceType: 'module',
  presets: ['@babel/preset-react'],
  env: {
    //-------------------------------------------------------------- DEVELOPMENT
    development: {
      sourceMaps: 'both',
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: true,
            pure: true,
          },
        ],
      ],
    },
    //------------------------------------------------------------------ TESTING
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            debug: true,
            modules: 'commonjs',
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: true,
            ssr: true,
          },
        ],
        '@babel/plugin-transform-classes',
      ],
    },
    //--------------------------------------------------------------- PRODUCTION
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
};

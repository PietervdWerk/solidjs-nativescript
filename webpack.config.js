const webpack = require('@nativescript/webpack');

module.exports = (env) => {
  webpack.init(env);

  webpack.chainWebpack((config) => {
    config.module
      .rule('bundle-source')
      .test(/\.(|t|j)sx?$/)
      .exclude.add(/node_modules/)
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .before('ts-loader')
      .options({
        babelrc: false,
        configFile: false,
        plugins: [
          [
            '@babel/plugin-transform-react-jsx',
            {
              throwIfNamespace: false,
              runtime: 'classic',
              pragma: 'R.c',
              pragmaFrag: 'R.f',
            },
          ],
        ],
      });
  });

  return webpack.resolveConfig();
};

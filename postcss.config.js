/* eslint-disable @typescript-eslint/no-var-requires,global-require */
module.exports = {
  plugins: [
    // https://github.com/cuth/postcss-pxtorem
    require('postcss-pxtorem')({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*', '!border*'],
      selectorBlackList: [/.ant-radio?.+/],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      // exclude: /node_modules/i,
    }),
    require('autoprefixer'),
  ],
};

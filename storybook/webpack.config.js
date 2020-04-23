'use strict'

const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  newConfig.module.preloaders = (newConfig.module.preloaders || []).concat(
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'standard'
    }
  )
  return newConfig
}

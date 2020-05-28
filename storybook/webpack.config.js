'use strict'

const path = require('path')
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

  newConfig.resolve = {
    alias: {
      utils: path.join(__dirname, '..', 'src', 'utils')
    }
  }
  return newConfig
}

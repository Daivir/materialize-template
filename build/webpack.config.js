const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entryPoint: './resources/main.js',
  outputDir: '../static/',
  stylesDir: 'css/',
  library: 'window',
  sassResources: './resources/assets/sass/boot.scss'
};

const enabledStyles = {
  css: extractStyles(),
  scss: extractStyles('sass')
};

// -------------------------------------
// Utility functions

function addSuffix(entry, suffix) {
  if (entry) {
    if (Array.isArray(entry)) {
      return entry.map(e => e + suffix);
    }
    return entry + suffix;
  }
  return '';
}

function trim(str, char) {
  if (str.substr(-1) === char) {
    return str.substr(0, str.length - 1);
  }
  return str;
}

function extractStyles(types, map = true) {
  types = addSuffix(types, '-loader');

  let loaders = [{ loader: 'css-loader' }];

  if (Array.isArray(types)) {
    types.forEach(function (l) {
      loaders.push({ loader: l });
    });
  } else {
    loaders.push({ loader: types })
  }

  loaders.forEach(function (a) {
    a.sourceMap = map;
  });

  if (loaders.indexOf('sass-loader')) {
    loaders = loaders.concat({
      loader: 'sass-resources-loader',
      options: {
        resources: config.sassResources
      }
    })
  }
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader'
  });
}

// -------------------------------------

module.exports = {
  watch: true,
  entry: config.entryPoint,
  output: {
    path: path.resolve(__dirname, config.outputDir),
    filename: '[name].min.js',
    publicPath: '/build/',
    libraryTarget: config.library
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.join(__dirname, '..', 'resources')
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      { // compiles vue files
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: enabledStyles
        }
      },
      { // transpile ECMAScript 5
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: addSuffix(trim(config.stylesDir, '/'), '/') + '[name].bundle.css'
    })
  ]
};
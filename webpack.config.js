const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const { title, pages } = require('./site.config');

/*
 * Build HTML files.
 *
 * Data for pages is managed with the pages
 * object in site.config.js, to loop through
 * and utilize HtmlWebpackPlugin().
 *
 * This array then gets merged with any other
 * plugins passed into the webpack build.
 */
let htmlFiles = pages.map(function(page) {
  return new HtmlWebpackPlugin({
    filename: `${page.slug}.html`,
    title: `${title} - ${page.title}`,
    template: `./src/html/${page.template}`,
    name: page.title,
    page: page.slug,
    sitePages: pages
  });
});

/*
 * Configure Webpack.
 */
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './assets/js/main.js'
  },
  plugins: htmlFiles.concat([
    /*
     * Move compiled .scss to an actual .css file in the
     * final build.
     *
     * Oddly, this is not default behavior. Without this,
     * Webpack will include the CSS in <style> tags directly
     * in the website's head.
     */
    new MiniCssExtractPlugin({
      filename: './assets/css/[name].css'
    }),
    /*
     * Manually list all url() includes from .scss.
     *
     * When we're using HtmlWebpackPlugin, handling the
     * images URLs to resolve properly messes up how
     * `css-loader` resolves images.
     *
     * So in the `css-loader` loader below, we've disabled
     * url() includes, so that we can manually copy them
     * from here.
     */
    new CopyWebpackPlugin([
      { from: 'src/img/info-bg.jpg', to: 'assets/img/info-bg.jpg' },
      { from: 'src/img/quote-bg.jpg', to: 'assets/img/quote-bg.jpg' },
      { from: 'src/img/video-bg.jpg', to: 'assets/img/video-bg.jpg' },
      { from: 'src/font/muli-bold.ttf', to: 'assets/font/muli-bold.ttf' },
      {
        from: 'src/font/muli-light-italic.ttf',
        to: 'assets/font/muli-light-italic.ttf'
      },
      {
        from: 'src/font/muli-light.ttf',
        to: 'assets/font/muli-light.ttf'
      },
      {
        from: 'src/font/playfair-display-black.ttf',
        to: 'assets/font/playfair-display-black.ttf'
      },
      {
        from: 'src/font/playfair-display-regular.ttf',
        to: 'assets/font/playfair-display-regular.ttf'
      },
      {
        from: 'src/font/libre-baskerville-italic.ttf',
        to: 'assets/font/libre-baskerville-italic.ttf'
      },
      { from: 'src/font/icons.ttf', to: 'assets/font/icons.ttf' }
    ])
  ]),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false // url() includes disabled, see CopyWebpackPlugin() comments above.
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './assets/img',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './assets/svg',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};

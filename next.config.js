module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        // Simplest example (non-minified)..
        loader: `babel-loader!next-style-loader`
        // Example with `css-loader` to minify CSS
        // NOTE: The `url` option from the css loader must be disabled; images, fonts, etc should go into /static
      }
    );

    return config;
  }
};

// next.config.js
module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mov|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/videos', // Adjust this path accordingly
              outputPath: 'static/videos',
              name: '[name].[ext]',
              esModule: false,
            },
          },
        ],
      });
  
      return config;
    },
  };
  
module.exports = {
  configureWebpack: (config) => {
    // Add a new rule
    config.module.rules.push({
      test: /\.cofee$/,
      use: ['coffee-loader'],
    });

    const newRule = {
      test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 5000,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[hash:8].[ext]',
              },
            },
          },
        },
      ],
    };

    const imageRulesIndex = config.module.rules
      .findIndex(x => x.test.source.includes('png|jpe?g'));

    // Change default vue rule with the new rule
    config.module.rules.splice(imageRulesIndex, 1, newRule);
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeorigin: true,
      },
    },
  },
};

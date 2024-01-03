module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    "@storybook/addon-essentials",
    // "@storybook/addon-links",
    // "@storybook/preset-create-react-app",
    // {
    //   name: "@storybook/addon-docs",
    //   options: {
    //     configureJSX: true,
    //   },
    // },
  ],
  webpackFinal: async (config, { configType }) => {
    delete config.resolve.alias['core-js'];
    // Fix ESLint to use .eslintrc configuration
    config.module.rules.forEach((rule) => {
      console.log(JSON.stringify(rule))
      if (rule.enforce === 'pre' && rule.use) {
        const use = rule.use[0];
        if (use.loader.match('/eslint-loader/')) {
          use.options.useEslintrc = true;
        }
      }
    });
    return config;
  }
};

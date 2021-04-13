module.exports = (api) => {
  api.cache(() => process.env.NODE_ENV);
  return {
    presets: ["@babel/preset-env", "@babel/preset-typescript"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".ts"],
          alias: {
            config: ["./src/config"],
            utils: ["./src/utils"],
          },
        },
      ],
    ],
  };
};

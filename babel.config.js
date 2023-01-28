module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    MyFontName: require("../assets/font/Poppins-Black.ttf"),
  };
};

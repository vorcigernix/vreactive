module.exports = {
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
      navigateFallback: "/index.html",
      exclude: [/\.map$/, /manifest\.json$/]
    },
    themeColor: "#1da025"
  }
};

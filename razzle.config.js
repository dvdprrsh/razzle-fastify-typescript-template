module.exports = {
  // options: {
  //   verbose: false, // set to true to get more info/error output
  //   debug: { // debug flags
  //     options: false, // print webpackOptions that will be used in webpack config
  //     config: false, // print webpack config
  //     nodeExternals: false // print node externals debug info
  //   },
  //   buildType: 'iso', // or 'spa', 'serveronly', 'iso-serverless' and 'serveronly-serverless'
  //   cssPrefix: 'static/css',
  //   jsPrefix: 'static/js',
  //   mediaPrefix: 'static/media',
  //   staticCssInDev: false, // static css in development build (incompatible with css hot reloading)
  //   browserslist: undefined, // or what your apps package.json says
  //   enableSourceMaps: true,
  enableReactRefresh: true,
  //   enableTargetBabelrc: false, // enable to use .babelrc.node and .babelrc.web
  //   enableBabelCache: true,
  //   forceRuntimeEnvVars: [], // force env vars to be read from env e.g. ['HOST', 'PORT']
  //   disableWebpackbar: false, // can be true to disable all environments or target to disable specific environment such as "node" or "web"
  //   staticExport: {
  //     parallel: 5, // how many pages to render at a time
  //     routesExport: 'routes',
  //     renderExport: 'render',
  //     scriptInline: false,
  //     windowRoutesVariable: 'RAZZLE_STATIC_ROUTES',
  //     windowRoutesDataVariable: 'RAZZLE_STATIC_DATA_ROUTES'
  //   },
  // },
  // modifyOptions({
  //   webpackObject, // the imported webpack node module
  //   options: {
  //     pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
  //     razzleOptions, // the default options/ options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
  //   },
  // }) {
  //   // Do some stuff...
  //   return razzleOptions;
  // },
  // modifyPaths({
  //   webpackObject, // the imported webpack node module
  //   options: {
  //     pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
  //     razzleOptions, // the modified options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
  //   },
  //   paths, // the default paths that will be used by Razzle.
  // }) {
  //   // Do some stuff...
  //   return paths;
  // },
  // modifyWebpackOptions({
  //   env: {
  //     target, // the target 'node' or 'web'
  //     dev, // is this a development build? true or false
  //   },
  //   webpackObject, // the imported webpack node module
  //   options: {
  //     pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
  //     razzleOptions, // the modified options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
  //     webpackOptions, // the default options that will be used to configure webpack/ webpack loaders and plugins
  //   },
  //   paths, // the modified paths that will be used by Razzle.
  // }) {
  //   if (target === "web") {
  //     // client only
  //   }
  //   if (target === "node") {
  //     // server only
  //   }
  //   if (dev) {
  //     // dev only
  //   } else {
  //     // prod only
  //   }
  //   // Do some stuff...
  //   return webpackOptions;
  // },
  // modifyWebpackConfig({
  //   env: {
  //     target, // the target 'node' or 'web'
  //     dev, // is this a development build? true or false
  //   },
  //   webpackConfig, // the created webpack config
  //   webpackObject, // the imported webpack node module
  //   options: {
  //     pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
  //     razzleOptions, // the modified options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
  //     webpackOptions, // the modified options that was used to configure webpack/ webpack loaders and plugins
  //   },
  //   paths, // the modified paths that will be used by Razzle.
  // }) {
  //   if (target === "web") {
  //     // client only
  //   }
  //   if (target === "node") {
  //     // server only
  //   }
  //   if (dev) {
  //     // dev only
  //   } else {
  //     // prod only
  //   }
  //   // Do some stuff...
  //   return webpackConfig;
  // },
  // modifyJestConfig({
  //   jestConfig, // the created jest config
  //   webpackObject, // the imported webpack node module
  //   options: {
  //     pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
  //     razzleOptions, // the modified options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
  //   },
  //   paths, // the modified paths that will be used by Razzle.
  // }) {
  //   // Do some stuff...
  //   return jestConfig;
  // },
};

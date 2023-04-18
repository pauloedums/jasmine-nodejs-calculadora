module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine','browserify'],
    files: [
      'spec/**/*Spec.js',
      'spec/helpers/**/SpecHelper.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'spec/**/*Spec.js': ['browserify']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  })
}

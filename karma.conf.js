module.exports = function(karma) {
    karma.set({
        basePath: 'app',

        files: [
          "../vendor/jquery/jquery.min.js",
          "../vendor/handlebars/handlebars.js",
          "../vendor/ember/ember.js",
          "../vendor/jquery-mockjax/jquery.mockjax.js",
          
          "**/*.js", // all app/ folder

          // "application.js",
          // "controllers/PeopleController.js",
          // "routes/OtherRoute.js",
          // "routes/PeopleRoute.js",
          // "router-map.js",
          // "templates.js",

          "../tests/prepare.js",
          "../tests/*_test_helper.js",
          "../tests/*_test_helpers.js",
          "../tests/*_tests.js",
          "../tests/*_test.js",
        ],

        logLevel: karma.LOG_INFO,
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatch: false,

        frameworks: ["qunit"],

        plugins: [
            'karma-qunit',
            'karma-chrome-launcher',
            'karma-ember-preprocessor',
            'karma-phantomjs-launcher'
        ],

        // preprocessors: {
        //     "**/*.hbs": 'ember'
        // }
    });
};

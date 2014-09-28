if (window.location.search.indexOf("?test") !== -1) {
    // in order to see the app running inside the QUnit runner
    App.rootElement = '#ember-testing';
    App.LOG_TRANSITIONS_INTERNAL = false;

    // Common test setup
    App.setupForTesting();
    App.injectTestHelpers();

    document.write(
        '<div id="qunit"></div>' +
        '<div id="qunit-fixture"></div>' +
        '<div id="ember-testing-container">' +
        '  <div id="ember-testing"></div>' +
        '</div>' +
        '<link rel="stylesheet" href="tests/qunit-runner.css">' +
        '<link rel="stylesheet" href="vendor/qunit/qunit/qunit.css">' +
        '<script src="vendor/qunit/qunit/qunit.js"></script>' +
        '<script src="vendor/jquery-mockjax/jquery.mockjax.js"></script>' +
        '<script src="tests/integration_test_helper.js"></script>'+
        '<script src="tests/unit_tests.js"></script>'+
        '<script src="tests/integration_tests.js"></script>'
    )
}
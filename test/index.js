/*
 * This file compiles any files under the test directory that end with
 * _test.js or _test.jsx
 *
 * A sample has been added in test/client_test.js.
 */

const testsContext = require.context('.', true, /_test\.(jsx?)$/);

testsContext.keys().forEach(testsContext);

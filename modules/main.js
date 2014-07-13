exports.Link = require('./components/Link');
exports.Route = require('./components/Route').Route;
exports.RouteMixin = require('./components/Route').RouteMixin;
exports.computeHandlerProps = require('./components/Route').computeHandlerProps;

exports.goBack = require('./helpers/goBack');
exports.replaceWith = require('./helpers/replaceWith');
exports.transitionTo = require('./helpers/transitionTo');

// Backwards compat with 0.1. We should
// remove this when we ship 1.0.
exports.Router = require('./Router');

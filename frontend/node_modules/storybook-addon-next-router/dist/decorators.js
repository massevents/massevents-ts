"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithNextRouter = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var addon_actions_1 = require("@storybook/addon-actions");
var client_api_1 = require("@storybook/client-api");
var router_1 = tslib_1.__importDefault(require("next/router"));
var WithNextRouter = function (Story, context) {
    var _a;
    var locale = client_api_1.useGlobals()[0].locale;
    var _b = (_a = context.parameters.nextRouter) !== null && _a !== void 0 ? _a : {}, Provider = _b.Provider, parameters = tslib_1.__rest(_b, ["Provider"]);
    if (Provider === undefined)
        throw new Error('NextContext.Provider is undefined, please add it to parameters.nextRouter.Provider');
    router_1.default.router = tslib_1.__assign({ locale: locale, route: '/', pathname: '/', query: {}, asPath: '/', push: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            addon_actions_1.action('nextRouter.push').apply(void 0, args);
            return Promise.resolve(true);
        }, replace: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            addon_actions_1.action('nextRouter.replace').apply(void 0, args);
            return Promise.resolve(true);
        }, reload: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            addon_actions_1.action('nextRouter.reload').apply(void 0, args);
        }, back: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            addon_actions_1.action('nextRouter.back').apply(void 0, args);
        }, prefetch: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            addon_actions_1.action('nextRouter.prefetch').apply(void 0, args);
            return Promise.resolve();
        }, beforePopState: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            addon_actions_1.action('nextRouter.beforePopState').apply(void 0, args);
        }, events: {
            on: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                addon_actions_1.action('nextRouter.events.on').apply(void 0, args);
            },
            off: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                addon_actions_1.action('nextRouter.events.off').apply(void 0, args);
            },
            emit: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                addon_actions_1.action('nextRouter.events.emit').apply(void 0, args);
            },
        }, isFallback: false }, parameters);
    return (jsx_runtime_1.jsx(Provider, tslib_1.__assign({ value: router_1.default.router }, { children: jsx_runtime_1.jsx(Story, {}, void 0) }), void 0));
};
exports.WithNextRouter = WithNextRouter;
//# sourceMappingURL=decorators.js.map
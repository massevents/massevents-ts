"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.managerEntries = exports.config = void 0;
var tslib_1 = require("tslib");
function config(entry) {
    if (entry === void 0) { entry = []; }
    return tslib_1.__spreadArray(tslib_1.__spreadArray([], entry), [require.resolve('./preset/addDecorator')]);
}
exports.config = config;
function managerEntries(entry) {
    if (entry === void 0) { entry = []; }
    return tslib_1.__spreadArray(tslib_1.__spreadArray([], entry), [require.resolve('./preset/register')]);
}
exports.managerEntries = managerEntries;
//# sourceMappingURL=preset.js.map
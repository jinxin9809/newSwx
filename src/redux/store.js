"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
// @ts-ignore
var redux_logger_1 = __importDefault(require("redux-logger"));
var reducers_1 = __importDefault(require("./reducers"));
var configureStore = function (preloadedState) {
    return redux_1.createStore(reducers_1.default, preloadedState, redux_1.compose(redux_1.applyMiddleware(redux_logger_1.default)));
};
// @ts-ignore
var store = configureStore();
exports.default = store;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var StackViewStyleInterpolator_1 = __importDefault(require("react-navigation-stack/src/views/StackView/StackViewStyleInterpolator"));
var react_native_1 = require("react-native");
// @ts-ignore
var homePage_1 = __importDefault(require("../homePage/homePage"));
var RootStack = react_navigation_1.createStackNavigator({
    'Home': { screen: homePage_1.default },
}, 
// @ts-ignore
{
    headerMode: "none",
    defaultNavigationOptions: {
        gesturesEnabled: false
    },
    transitionConfig: (function () { return ({
        screenInterpolator: StackViewStyleInterpolator_1.default.forHorizontal,
        transitionSpec: {
            duration: 500,
            easing: react_native_1.Easing.out(react_native_1.Easing.poly(4)),
            timing: react_native_1.Animated.timing,
        },
    }); })
});
var AppContainer = react_navigation_1.createAppContainer(RootStack);
exports.default = AppContainer;

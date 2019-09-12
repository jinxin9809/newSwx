"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionsTypes_1 = require("./actionsTypes");
//const setData = (value) => ({type: SETDATA, data: value || null});
var setInputValueAction = function (payload) { return ({ type: actionsTypes_1.SET_INPUTVALUE, payload: payload }); };
exports.setInputValueAction = setInputValueAction;
var setTabIndex = function (index) { return ({ type: actionsTypes_1.SETTABINDEX, tabIndex: index }); };
exports.setTabIndex = setTabIndex;
var setSectionIndex = function (index) { return ({ type: actionsTypes_1.SETSECTIONINDEX, sectionIndex: index }); };
exports.setSectionIndex = setSectionIndex;
//const setCloseOn = (index) => ({type: SETCLOSEON, index: index})
var setMaskFlag = function (payload) { return ({ type: actionsTypes_1.SET_MASKFLAG, maskFlag: payload }); };
exports.setMaskFlag = setMaskFlag;
var setScrollEnabled = function (payload) { return ({ type: actionsTypes_1.SET_SCROLLENABLED, scrollEnabled: payload }); };
exports.setScrollEnabled = setScrollEnabled;
var setNavigationData = function (data) { return ({ type: actionsTypes_1.SET_NAVIGATIONDATA, data: data }); };
exports.setNavigationData = setNavigationData;
var setMultiTreeData = function (data) { return ({ type: actionsTypes_1.SET_MULTITREEDATA, data: data }); };
exports.setMultiTreeData = setMultiTreeData;
var setBottomHeight = function (height) { return ({ type: actionsTypes_1.SET_BOTTOMHEIGHT, bottomHeight: height }); };
exports.setBottomHeight = setBottomHeight;
var setTopHeight = function (height) { return ({ type: actionsTypes_1.SET_TOPHEIGHT, topHeight: height }); };
exports.setTopHeight = setTopHeight;
var setTreeData = /** @class */ (function () {
    function setTreeData() {
    }
    return setTreeData;
}());
exports.setTreeData = setTreeData;

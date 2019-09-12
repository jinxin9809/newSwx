"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var actionsTypes_1 = require("./actionsTypes");
/*
* state
* */
var defaultState = {
    //data:{},
    tabIndex: 0,
    sectionIndex: 0,
    maskFlag: false,
    //treeData: [],
    //navigationParams: [],
    scrollEnabled: true,
    navigationData: [],
    multiTreeData: [],
    bottomHeight: 0,
    topHeight: 0,
};
/*
* 处理state
* */
function counter(state, action) {
    if (state === void 0) { state = defaultState; }
    var list = state.navigationData;
    var data = state.navigationData[state.navigationData.length - 1];
    switch (action.type) {
        //case SETDATA: //废弃方法
        //return {...state, data: action.data || []};
        case actionsTypes_1.SETTABINDEX: //改变选项卡下标值
            return __assign(__assign({}, state), { tabIndex: action.tabIndex });
        case actionsTypes_1.SETSECTIONINDEX: //改变渲染块下标值
            return __assign(__assign({}, state), { sectionIndex: action.sectionIndex });
        case actionsTypes_1.SET_INPUTVALUE: //改变input值
            var payload = action.payload;
            // @ts-ignore
            data.page.body
                .tabs[payload.tabIndex]
                .sections[payload.sectionIndex]
                .rows[payload.rowIndex]
                .value = payload.text;
            list.splice(list.length - 1, list.length, data);
            return __assign(__assign({}, state), { navigationData: list });
        /*case SETCLOSEON :
          //data.page.body.tabs[state.tabIndex].sections[action.index].collapsed = !data.page.body.tabs[state.tabIndex].sections[action.index].collapsed;
          return {...state, data: data}
        case SET_NAVIGATIONPARAMS:
          let arr = state.navigationParams;
          arr.push(action.params)
          return {...state, navigationParams: arr}*/
        case actionsTypes_1.SET_MASKFLAG: //全局loading状态改变
            return __assign(__assign({}, state), { maskFlag: action.maskFlag });
        case actionsTypes_1.SET_SCROLLENABLED: //控制滑动
            return __assign(__assign({}, state), { scrollEnabled: action.scrollEnabled });
        case actionsTypes_1.SET_NAVIGATIONDATA: //全局数据添加
            var array = state.navigationData;
            // @ts-ignore
            array.push(action.data);
            return __assign(__assign({}, state), { navigationData: array });
        case actionsTypes_1.SET_MULTITREEDATA: //及联树 数据存储
            return __assign(__assign({}, state), { multiTreeData: action.data });
        case actionsTypes_1.SET_BOTTOMHEIGHT: //设定底部高度
            return __assign(__assign({}, state), { bottomHeight: action.bottomHeight });
        case actionsTypes_1.SET_TOPHEIGHT:
            return __assign(__assign({}, state), { topHeight: action.topHeight });
        default:
            return state;
    }
}
exports.default = redux_1.combineReducers({
    counter: counter
});

import {combineReducers} from 'redux';

import {
  //SETDATA,
  SET_INPUTVALUE,
  SETTABINDEX,
  SETSECTIONINDEX,
  /*SETCLOSEON,
  SET_NAVIGATIONPARAMS,*/
  SET_MASKFLAG,
  SET_SCROLLENABLED,
  SET_NAVIGATIONDATA,
  SET_MULTITREEDATA,
  SET_BOTTOMHEIGHT,
  SET_TOPHEIGHT
} from './actionsTypes';

/*
* state
* */
const defaultState = {
  //data:{},
  tabIndex: 0, //tab选项卡下标记录
  sectionIndex: 0, //section块下标记录
  maskFlag: false, //全局loading状态
  //treeData: [],
  //navigationParams: [],
  scrollEnabled: true, //scrollView 滚动条状态
  navigationData: [], //每页page存储 用于路由跳转后渲染
  multiTreeData: [], //及联选择器树存储数组
  bottomHeight: 0 ,//底部高度
  topHeight:0, //顶部高度
  //buttonIndex:null
}

/*
* 处理state
* */

function counter(state = defaultState, action : any) {
  let list = state.navigationData;
  let data = state.navigationData[state.navigationData.length - 1];
  switch (action.type) {
    //case SETDATA: //废弃方法
    //return {...state, data: action.data || []};
    case SETTABINDEX: //改变选项卡下标值
      return {...state, tabIndex: action.tabIndex};
    case SETSECTIONINDEX: //改变渲染块下标值
      return {...state, sectionIndex: action.sectionIndex}
    case SET_INPUTVALUE: //改变input值
      const payload = action.payload;
      // @ts-ignore
      data.page.body
        .tabs[payload.tabIndex]
        .sections[payload.sectionIndex]
        .rows[payload.rowIndex]
        .value = payload.text;
      list.splice(list.length - 1, list.length, data);
      return {...state, navigationData: list}
    /*case SETCLOSEON :
      //data.page.body.tabs[state.tabIndex].sections[action.index].collapsed = !data.page.body.tabs[state.tabIndex].sections[action.index].collapsed;
      return {...state, data: data}
    case SET_NAVIGATIONPARAMS:
      let arr = state.navigationParams;
      arr.push(action.params)
      return {...state, navigationParams: arr}*/
    case SET_MASKFLAG: //全局loading状态改变
      return {...state, maskFlag: action.maskFlag}
    case SET_SCROLLENABLED: //控制滑动
      return {...state, scrollEnabled: action.scrollEnabled}
    case SET_NAVIGATIONDATA://全局数据添加
      let array = state.navigationData;
      // @ts-ignore
      array.push(action.data);
      return {...state, navigationData: array}
    case SET_MULTITREEDATA ://及联树 数据存储
      return {...state, multiTreeData: action.data}
    case SET_BOTTOMHEIGHT: //设定底部高度
      return {...state, bottomHeight: action.bottomHeight}
    case SET_TOPHEIGHT :
      return {...state,topHeight:action.topHeight}
    default:
      return state;
  }
}


export default combineReducers({
  counter
});

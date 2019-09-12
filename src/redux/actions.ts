import {
  //SETDATA,
  SETTABINDEX,
  SETSECTIONINDEX,
  SET_INPUTVALUE,
  //SETCLOSEON,
  SET_ROWINDEX,
  SET_MULTITREEDATA,
  SET_MASKFLAG,
  SET_SCROLLENABLED,
  SET_NAVIGATIONDATA,
  SET_BOTTOMHEIGHT,
  SET_TOPHEIGHT
} from './actionsTypes';

//const setData = (value) => ({type: SETDATA, data: value || null});
const setInputValueAction = (payload: any) => ({type: SET_INPUTVALUE, payload: payload})
const setTabIndex = (index : number) => ({type: SETTABINDEX, tabIndex: index});
const setSectionIndex = (index : number) => ({type: SETSECTIONINDEX, sectionIndex: index})
//const setCloseOn = (index) => ({type: SETCLOSEON, index: index})


const setMaskFlag = (payload :object) => ({type: SET_MASKFLAG, maskFlag: payload})

const setScrollEnabled = (payload : object) => ({type: SET_SCROLLENABLED, scrollEnabled: payload})

const setNavigationData = (data : any) => ({type: SET_NAVIGATIONDATA, data: data})

const setMultiTreeData = (data :any) => ({type: SET_MULTITREEDATA, data: data})

const setBottomHeight = (height: any) => ({type: SET_BOTTOMHEIGHT, bottomHeight: height})

const setTopHeight = (height: any) => ({type:SET_TOPHEIGHT,topHeight:height})


export {
  //setData,
  setInputValueAction,
  setTabIndex,
  setSectionIndex,
  //setCloseOn,
  setMaskFlag,
  setScrollEnabled,
  setNavigationData,
  setMultiTreeData,
  setBottomHeight,
  setTopHeight
}

export class setTreeData {
}

import { CHANGE_DEMO_ACTION , ASYNC_GET_DATA} from '../Actions/homeAction';

let dataTree = {
  successMark: "当你看到这个信息的时候种子项目已经启动",
}

export function HomeReducer(state = dataTree, action) {
    switch (action.type) {
        case CHANGE_DEMO_ACTION://改变demoAction
            return Object.assign({}, state, {data: action.data});
        case ASYNC_GET_DATA:
            return Object.assign({}, state, {data: action.data}); 
        default:
          return state
    }
}
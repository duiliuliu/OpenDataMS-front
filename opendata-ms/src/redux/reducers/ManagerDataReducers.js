import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  treeData: [{
    name:'数据目录'
  }],
  loadStatus: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionConstants.FETCH_TREE_DATA:
      {
        return {
          ...state,
          treeData: action.payload.treeData,
          loadStatus: false
        };
      }

    case ActionConstants.LOAD_TREE_DATA:
      {
        return {
          ...state,
          loadStatus: true
        };
      }

    default:
      return state;
  }
}
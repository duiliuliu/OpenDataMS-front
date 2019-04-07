import * as ActionsConstant from '../../contants/ActionConstants';

export const requestTreeData = ()=>{
    return {
        type: ActionsConstant.REQUEST_TREE_DATA
    };
};

export const loadTreeData = ()=>{
    return {
        type: ActionsConstant.LOAD_TREE_DATA
    };
};

export const fetchTreeData = (treeData)=>{
    return {
        type: ActionsConstant.FETCH_TREE_DATA,
        payload:{
            treeData
        }
    };
};
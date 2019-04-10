import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';
import * as ManagerDataActions from '../actions/ManagerDataActions';
import * as ActionConstants from '../../constants/ActionConstants';
import {
    getData
} from '../../api/Api';


const {
    loadTreeData,
    fetchTreeData
} = ManagerDataActions;

function* requestTreeDataAsync() {
    try {
        yield put(loadTreeData());
        const response = yield call(getData.bind(this, '/data'));
        yield put(fetchTreeData(response.data));
    } catch (error) {
        /**
         * 未知错误，跳转页面
         */
        console.log('失败====模拟 jobList');
        const response = {
            'data': [{
                name: '数据目录',
                data: [{
                        name: '佛山',
                        data: [{
                                name: '佛山asdasd数据'
                            },
                            {
                                name: '佛山asdasd数据'
                            },
                            {
                                name: '佛山asdasd数据'
                            }
                        ]
                    },
                    {
                        name: '贵州',
                        data: [{
                                name: '佛山asdasd数据'
                            },
                            {
                                name: '佛山asdasd数据'
                            },
                            {
                                name: '佛山asdasd数据'
                            }
                        ]
                    }
                ]
            }]
        };
        yield put(fetchTreeData(response.data));
    }
}


export function* watchTreeData() {
    yield takeLatest(ActionConstants.REQUEST_TREE_DATA, requestTreeDataAsync);
}
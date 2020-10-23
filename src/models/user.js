import { history } from 'umi';
import { getUserInfo } from 'services/user';

export default {
  namespace: 'user',

  state: {
    currentUser: null,
  },

  effects: {
    *getUserInfo({ payload }, { call, put, select }) {
      const res = yield call(getUserInfo, {
        username: 'wq',
        password: '111111',
      });
      if (res.response && res.response.ok) {
        yield put({
          type: 'updateState',
          payload: {
            currentUser: 'wq',
          },
        });
      }
      // history.push('/system/ordinary/myTest');
    },
  },

  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },

  subscriptions: {},
};

import getRequest from 'utils/request'

const getUserInfoApi = '/getUserInfo'

export async function getUserInfo(data) {
    return getRequest()(getUserInfoApi, {
      method: 'GET',
      params: data,
    })
}
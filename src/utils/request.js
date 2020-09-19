import getRequest from './getRequest'
import config from './config'
import { returnToLogin } from './auth'
const { baseURL } = config

const errorHandler = error => {
  const { response = {} } = error
  const { status, url, statusText } = response || {}
  if (status === 401) {
    returnToLogin()
  }
  return { response: {}, ...error }
}

const generateRequest = () => getRequest()(baseURL, errorHandler)


export default generateRequest
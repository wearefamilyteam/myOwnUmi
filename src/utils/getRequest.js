import { extend } from "umi-request";
import { getAuthHeader } from "./auth";
import moment from 'moment'

const request = (baseURL, errorHandler) => {
  const zone = moment().utcOffset()/60
  const zoneStr = `${zone>0?'+':'-'}${zone}:00`
  const headers =
    getAuthHeader() !== null
      ? {
          ...getAuthHeader(),
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-TimeZone-Offset": zoneStr
        }
      : {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-TimeZone-Offset": zoneStr
        };

  return extend({
    prefix: baseURL,
    headers,
    credentials: "include",
    errorHandler,
    getResponse: true
  });
};

const getRequest = () => {
  return request;
};

export default getRequest;
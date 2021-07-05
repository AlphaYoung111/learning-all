import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { fillStringPlaceholder } from "./util";

const baseURL = 'api'
const instance = axios.create({
  baseURL: baseURL,
  timeout: 450000,
  withCredentials: true
})




const checkTokenAfterRequest = (http: (url: string) => Promise<AxiosResponse<any>>, url: string, params: any, config?: AxiosRequestConfig) => {
  return new Promise((resolve, reject) => {

  })
}

export const GET = (url: string, params: any, config?: AxiosRequestConfig) => {
  const get = (url: string): Promise<AxiosResponse<any>> => {
    return instance.get(fillStringPlaceholder(url, params), Object.assign(params, config))
  }

  return checkTokenAfterRequest(get, url, params, config)
}
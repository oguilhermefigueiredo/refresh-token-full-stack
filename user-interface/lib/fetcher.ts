import axios, {AxiosResponse} from 'axios'

import {environment} from './environment'

export type QueryResponse<T> = [error: string | null, data: T | null]

export const fetcher = async <T>(url: string): Promise<QueryResponse<T>> => {
  try {
    const request = () => axios.get(url, {withCredentials: true})
    const {data} = await handleRequest(request)
    return [null, data]
  } catch (error) {
    return [error, null]
  }
}
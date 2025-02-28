export type HttpMethod = 'get' | 'post' 

export const HttpMethod = {
    GET: 'get' as HttpMethod,
    POST: 'post' as HttpMethod
} as const;
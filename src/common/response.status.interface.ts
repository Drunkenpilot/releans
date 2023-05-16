export const ResponseStatusProps = {
    200: 'Success',
    201: 'Request created',
    400: 'Wrong input parameters',
    401: 'Authorization failed',
    404: 'Data not fount',
    422: 'Wrong input parameters',
    500: 'Process errors'
} as const

export type ResponseStatusCode = keyof typeof ResponseStatusProps;
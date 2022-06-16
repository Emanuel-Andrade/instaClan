export const url = 'http://localhost:4008'
export const upload = 'http://localhost:4008/uploads'

export const requestConfig = (method, data, token = null, image = null) =>{

    let config

    if(image) config =  { method, body: data, headers:{} }
    if(method === 'DELETE' || data === null ) config =  { method,  headers:{} }

    config = { method, body: JSON.stringify(data), headers:{ "Content-Type": "application/json" } }

    if(token) config.headers.Authorization = `Bearer ${token}`

    return config

}

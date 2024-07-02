let key = 'TOKEN_KEY'
export const setToken = (key:string) => {
    return localStorage.setItem(key,'123456789')
}

export const getToken = () => {
    return localStorage.getItem(key)
}

export const remmoveToken = () => {
    return localStorage.removeItem(key)
}



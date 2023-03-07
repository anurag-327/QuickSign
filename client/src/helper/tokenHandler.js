import ls from "localstorage-slim" 
export function setToken(token)
{
    ls.set('quick_sign',token,{ttl:86400})
}
export function getToken()
{
    return(ls.get('quick_sign'))
}
export function removeToken()
{
    ls.remove('quick_sign');
}
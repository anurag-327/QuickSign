import ls from "localstorage-slim" 
export function setToken(token,type)
{
    const value={
        token:token,
        type:type
    }

    ls.set('quick_sign',value,{ttl:86400})
}
export function getToken()
{
    return(ls.get('quick_sign'))
}
export function removeToken()
{
    ls.remove('quick_sign');
}
import  toast  from "react-hot-toast";
export function addcredential(title,username,password)
{
    // console.log(title,username,password)
    if(validate(username,title)===true && validatepassword(password)===true)
    { 
        // console.log("true")
        return(true)
    }

}

function validate(username,title)
{
    if(!username)
    {
        toast.error(" Username cannot be empty");
        return false;
    }
    else if(!title)
    {
        toast.error("title cannot be empty");
        return false;
    }
    else if(username.includes(" "))
    {
        toast.error("Invalid username");
        return false;
    }
    else
    {
        return(true);
    }
}

function validatepassword(password)
{
    if(!password)
    {
        toast.error("Password can not be empty");
        return false;
    }
    else if(password.length<6)
    {
        toast.error("Weak password, we advice replacing it")
        return true;
    }
    return true;
}

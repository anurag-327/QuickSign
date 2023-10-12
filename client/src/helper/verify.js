import toast from 'react-hot-toast'
export function verify(name)
{
    if(!name)
    {
      toast.error('Fields cannot be empty...!');   
      return(false)
    }
    else
    {
        return true;
    }
}
export function verifyName(name)
{
    if(!name)
    {
      toast.error('Name Required...!');   
      return(false)
    }
    else
    {
        return true;
    }
}
export function verifyPhonenumber(phonenumber)
{
    if(!phonenumber)
    {
      toast.error('PhoneNumber Required...!');   
      return(false)
    }
    
    else
    {
        return true;
    }
}
export function verifyUsername(username)
{
    if(!username)
    {
      toast.error('Username Required...!');   
      return(false)
    }
    else if(username.includes(" "))
    {
        toast.error('Invalid Username...!');   
        return(false)
    }
    else
    {
        return true;
    }
}
export function verifyPassword(password)
{
    if(!password)
    {
      toast.error('Password required...!');   
      return(false)
    }
    else if(password.includes(" "))
    {
        toast.error('Invalid Password...!');   
        return(false)
    }
    else
    {
        return true
    }
}
export function checkPasswordStrength(password)
{
    if(password.length<6)
    {
        toast.error("Password too weak...!")
    }
    else
    {
        return true;
    }  
}
export function verifyconfirmPassword(password,confirmpassword)
{
    if(password===confirmpassword)
    {
        return true;
    }
    else
    {
        toast.error("Password doesnot match! Retry...!")
        return false;
    }
}
export function verifyEmail(email)
{
    if(!email)
    {
        toast.error("Email Required...")
        return false;
    }
    else if(email.includes(" "))
    {
        toast.error("Wrong Email....!")
        return true;
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    {
        toast.error("Invalid Email Format....")
        return false;
    }
    else
    {
        return true;
    }
}


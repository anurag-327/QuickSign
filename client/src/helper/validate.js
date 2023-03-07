import  toast  from "react-hot-toast";
import { verifyUsername,verifyPassword,verify,verifyconfirmPassword,verifyPhonenumber,verifyName ,verifyEmail,checkPasswordStrength } from "./verify";

export  function valiateLogin(email,password)
{
    if(verifyEmail(email)===true && verifyPassword(password)===true)
    {
        return true;
    }
}

export  function validateSignup(name,email,contact,address,link,password,confirmpassword,profile)
{
    if(verifyName(name)===true && verifyEmail(email) && verifyPhonenumber(contact) && verify(contact) && verify(address) && verifyPassword(password)===true  && checkPasswordStrength(password) && verify(profile) )
    {
        return true; 
    }
}
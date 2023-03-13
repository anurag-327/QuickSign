import  toast  from "react-hot-toast";
import { verifyUsername,verifyPassword,verify,verifyconfirmPassword,verifyPhonenumber,verifyName ,verifyEmail,checkPasswordStrength } from "./verify";

export  function valiateLogin(email,password)
{
    if(verifyEmail(email)===true && verifyPassword(password)===true)
    {
        return true;
    }
}

export  function validateSignup(name,email,contact,link,address,password,profile)
{
    if(verifyName(name)===true && verifyEmail(email) && verifyPhonenumber(contact) && verify(contact) && verify(address) && verifyPassword(password)===true  && checkPasswordStrength(password) && verify(profile) )
    {
        return true; 
    }
}
export  function validateUserSignup(name,email,phonenumber,password,profile)
{
    if(verifyName(name)===true && verifyEmail(email) && verifyPhonenumber(phonenumber) &&verifyPassword(password)===true  && checkPasswordStrength(password) && verify(profile) )
    {
        return true; 
    }
}
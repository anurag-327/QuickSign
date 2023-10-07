import { BASE_URL } from "../base";

export function generateOTP()
{
  const OTP=Math.round(Math.random()*9000+1000)
    // var digits = '0123456789';
    // let OTP = '';
    // for (let i = 0; i < 4; i++ ) {
    //     OTP += digits[Math.floor(Math.random() * 10)];
    // }
    return OTP;
}

export async function sendOTP(email,OTP)
{
  
    let options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({email:email, OTP: OTP }),
      };
   const res=await fetch(`${BASE_URL}/sendOTP`,options)
   const data=await res.json();
   return res;
}
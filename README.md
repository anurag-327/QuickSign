![Screenshot 2023-10-06 004218](https://github.com/anurag-327/QuickSign/assets/98267696/8bdd4350-1af0-4f4f-8bf3-96eae202b04a)
![Screenshot 2023-10-06 004555](https://github.com/anurag-327/QuickSign/assets/98267696/6602d047-dc9c-4416-9a07-4fef891dcd90)


# Quick Sign

Welcome to the QuickSign OAuth documentation. This guide will help you integrate QuickSign's OAuth system into your applications for secure user authentication. OAuth is a widely-used protocol that allows you to grant access to your application or services without sharing credentials.

# Features

QuickSign's OAuth system offers a range of powerful features to streamline authentication and enhance the security of your applications. Explore the capabilities that make QuickSign OAuth a reliable choice for user authentication:

- **Secure User Authentication**
- **Simple Integration**
- **Access Token Management**
- **Seamless User Experience**

## Introduction to OAuth

OAuth is an open-standard protocol that enables applications to securely access resources on behalf of a user. QuickSign's OAuth system allows you to authenticate users without exposing their credentials, providing a seamless and secure user experience.

# ****Getting Started****

1. ****Registering Your Application****
    1. Log in to your QuickSign account.
    2. Navigate to the OAuth developer portal.
    3. Create a new OAuth application by providing application details such as name, description, and redirect URI.
2. ****Obtaining OAuth Credentials****
    
    Once you've registered your application, you will receive the following OAuth credentials:
    
    - API Key- For Identification of application and secure communication

# ****OAuth Flow****

1. **Authorization Request**
    1. Redirect users to QuickSign's authorization endpoint.
    2. Users will log in to their QuickSign accounts (if not already logged in).
    3. Users will grant permission to your application to access their data.
    4. QuickSign will redirect the user back to your redirect URI with an authorization code.
2. **Access Token Request**
    1. Exchange the authorization code for an access token by making a POST request to QuickSign's token endpoint.
    2. QuickSign will respond with an access token and optionally a refresh token.
    

# ****Using Access Tokens****

1. ****Accessing QuickSign APIs****
    1. Include the Application API KEY in the header of your API requests as a Bapi key and provide access token in body of request.
    2. QuickSign will validate the token and allow access to authorized resources.
2. ****Token Expiration and Refresh****
    
    Access tokens typically have a limited lifespan. You can use the refresh token to obtain a new access token without requiring user intervention.
    

# Security Practices

- Keep your OAuth credentials secure.
- Implement proper token management.
- Follow OAuth best practices for secure user authentication.

# Implementation

1. **Setting up URL to redirect to OAuth Authentication**

```jsx
<a href="https://quicksign-bq48.onrender.com/auth?state=**<YOUR API_KEY>**&redirect_url=**<YOUR REDIRECT URL>**/">
Continue with QuickSign
</a>
```

1. **Redirection to URL after successful auth**

```jsx
// sample Redirection link
https://<REDIRECT URL>?status=true&token=**<ACCESS TOKEN>**&email=**<Email>**&name**<NAME>**
```

1. **API Endpoint for token verification**

```jsx
**https://quicksign-bq48.onrender.com/auth/verify**
// sample fetch request
const body={
   method:"post",
   headers:{
      "content-type":"application/json",
      "authorization":"Bearer <YOUR API KEY>"
   },
   body:JSON.stringify({token:**<ACCESS TOKEN>**})
}
const response=await fetch("**https://quicksign-bq48.onrender.com/auth/verify**",body);
const data=await response.json();
```

1. **Response schema**

```jsx
**1- OK Response
{
   staus:200,
   user:{
      name:<NAME>
      email:<EMAIL>
      type:user,
      profile:<PROFILE IMAGE>
   }
}

2-BAD RESPONSE
{
  status:400|403|404|500,
  message:<ERROR MESSAGE>
}**
```

# FAQ’s

- What is OAuth?
    
    OAuth is an open-standard protocol that enables applications to securely access resources on behalf of a user. QuickSign's OAuth system allows you to authenticate users without exposing their credentials, providing a seamless and secure user experience.
    
- How to register application?
    
    By just logging to your github account
    

# Contact

If you encounter any issues or have questions about using QuickSign's OAuth system, please contact our support team at anuragsrivastav0027@gmail.com

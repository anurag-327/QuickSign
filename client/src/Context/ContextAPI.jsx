import React, { useState, useEffect, useContext, createContext } from "react";
export const UserContext = createContext();
import { getToken } from "../helper/tokenHandler";
import { BASE_URL } from "../base";
import { Router } from "react-router-dom";
export default function ContextAPI({ children }) {
  const [user, setUser] = useState();
  const [applications, setApplications] = useState([]);
  const [authorizations, setAuthorizations] = useState([]);
  useEffect(() => {
    const token = getToken();
    if (token) {
      (async function () {
        let options = {
          method: "GET",
          headers: {
            authorization: `Bearer ${token.token}`,
          },
        };
        const response = await fetch(`${BASE_URL}/api/data/getdata`, options);
        const data = await response.json();
        if (data.status === 200) {
          setUser(data.data);
          setApplications(data.applications);
          setAuthorizations(data.authorizations);
        } else {
          console.log(data);
        }
      })();
    } else {
      console.log("Access token missing");
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        applications,
        setApplications,
        authorizations,
        setAuthorizations,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

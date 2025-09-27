// src/context/AppContext.jsx
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Load user from cookie
  const [user, setUser] = useState(() => {
    const cookieUser = Cookies.get("user");
    return cookieUser ? JSON.parse(cookieUser) : null;
  });

  const [theme, setTheme] = useState(() => {
    return Cookies.get("theme") || "light";
  });

  useEffect(() => {
    if (user) Cookies.set("user", JSON.stringify(user), { expires: 7 });
    else Cookies.remove("user");
  }, [user]);

  useEffect(() => {
    Cookies.set("theme", theme, { expires: 30 });
  }, [theme]);

  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

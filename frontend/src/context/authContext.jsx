import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("user");
    try { return raw ? JSON.parse(raw) : null; } catch { return null; }
  });
  const [loading, setLoading] = useState(false);

  const login = (data) => {
    const userObj = data?.user ?? data;
    const tokenVal = data?.token ?? null;
    setUser(userObj ?? null);
    setToken(tokenVal ?? null);
    if (tokenVal) localStorage.setItem("token", tokenVal);
    if (userObj) localStorage.setItem("user", JSON.stringify(userObj));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const verifyUser = async () => {
      if (!token || user) return;
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3000/api/auth/verify", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res?.data?.success && res.data.user) {
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        } else {
          // invalid token -> cleanup
          logout();
        }
      } catch (err) {
        console.error("verifyUser error:", err?.response?.data ?? err.message);
        // treat server 500 or any failure as invalid token -> cleanup
        logout();
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, [token, user]);

  const value = { user, token, login, logout, loading };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);
export default AuthContext;
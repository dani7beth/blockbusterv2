import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleRegister = async (user, history) => {
    // /api/auth
    try {
      let res = await axios.post("/api/auth", user);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (user, history) => {
    // /api/auth/sign_in
    try {
      let res = await axios.post("/api/auth/sign_in", user);
      console.log(res);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async (history) => {
    // /api/auth/sign_out
    try {
      let res = await axios.delete("/api/auth/sign_out");
      setUser(null);
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        handleRegister: handleRegister,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
        setUser: (user) => setUser({ user }),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;


'use client';

import React, { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

// Make useAuth


// Provider
const AuthProvider = ({ children }) => {

  // sign up using email password
  const signUp = (email, password) => {
    return <div>signup</div>
  };

  // User Logout
  const logout = () => {
    return <div>logout</div>
  };

  // User login using email password
  const login = (email, password) => {
    return <div>login</div>
  };

  // google SignUp
  const googleSignUp = () => {
    return <div>google signup</div>
  };

  // github SignUp
  const githubSignUp = () => {
    return <div>github signup</div>
  };

  // forget Password
  const forgetPassword = (email) => {
    return <div>forget password</div>
  };

  // Get Current Login user

  // Context values
  const value = {
    signUp,
    currentUser: { displayName: 'ganesh', email: 'pgcr71@gmail.com' },
    logout,
    login,
    googleSignUp,
    githubSignUp,
    forgetPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

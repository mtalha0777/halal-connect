"use client";
import React, { createContext, useState, useContext } from "react";
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Liam James",
    age: 63,
    gender: "Male",
    dob: "2000-01-10",
    profilePicture: "/assets/adminimage.png",
    email: "liam123@gmail.com",
    phone: "+92 30456783047",
    address: "1600 Ampthitheatre Parkway, Mountain View",
    role: "Admin",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

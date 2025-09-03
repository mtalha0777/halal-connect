"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  getCurrentUser,
  fetchUserAttributes,
  signOut as amplifySignOut,
} from "@aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

const AuthContext = createContext(undefined);

export function AuthSessionProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useCallback istemal karein taake function baar baar na bane
  const checkUser = useCallback(async () => {
    try {
      // bypassCache zaroori hai taake hamesha server se taza data aaye
      const sessionUser = await getCurrentUser({ bypassCache: true });
      const attributes = await fetchUserAttributes();
      const userData = {
        username: sessionUser.username,
        userId: sessionUser.userId,
        ...attributes,
      };
      setUser(userData);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkUser();
    const hubListener = (data) => {
      switch (data.payload.event) {
        case "signedIn":
          checkUser();
          break;
        case "signedOut":
          setUser(null);
          break;
      }
    };
    
    const unsubscribe = Hub.listen("auth", hubListener);
    return () => unsubscribe();
  }, [checkUser]);

  const signOut = async () => {
    try {
      await amplifySignOut({ global: true });
    } catch (error) {
      console.error("Logout command failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // YEH HAI SAB SE ZAROORI FIX: Default loading hamesha TRUE honi chahiye
    return {
      user: null,
      loading: true, // PEHLE YEH FALSE THA, AB TRUE HAI
      signOut: async () => {},
    };
  }
  return context;
}
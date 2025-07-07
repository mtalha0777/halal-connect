import { UserProvider } from "@/app/context/UserContext";
import { SidebarProvider } from "@/app/context/SidebarContext";
import "../styles/globals.css";
import React from "react";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <UserProvider>
      <SidebarProvider>
        {getLayout(<Component {...pageProps} />)}
      </SidebarProvider>
    </UserProvider>
  );
}

export default MyApp;

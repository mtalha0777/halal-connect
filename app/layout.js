import "../styles/globals.css";

import { UserProvider } from "./context/UserContext";
export const metadata = {
  title: "Halal Connect - Admin",
  description: "Admin Panel for Halal Connect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          {children} 
        </body>
      </UserProvider>
    </html>
  );
}
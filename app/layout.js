import { AuthProvider } from "./(auth)/context/AuthContext";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Halal Connect - Admin",
  description: "Admin Panel for Halal Connect",
};

export default function RootLayout({ children }) {
  return (
  <html lang="en">
      <body>
        <AuthProvider>
          <Toaster position="top-right" reverseOrder={false} />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
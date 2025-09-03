import "../styles/globals.css";
import { AuthSessionProvider } from "@/src/AuthSessionProvider";
import ConfigureAmplifyClientSide from "@/src/app/ConfigureAmplify";
export const metadata = {
  title: 'Halal Connect Web',
  description: 'Admin Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConfigureAmplifyClientSide />
        <AuthSessionProvider>
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
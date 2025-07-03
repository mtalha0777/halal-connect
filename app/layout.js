import "../styles/globals.css";
export const metadata = {
  title: "Halal Connect - Admin",
  description: "Admin Panel for Halal Connect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
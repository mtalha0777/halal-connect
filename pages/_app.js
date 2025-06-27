import "../styles/globals.css";
import { useRouter } from "next/router";
import BackgroundWrapper from "@/function/BackgroundWrapper";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const showBackgroundPages = [
    "/Login/login",
    "/Login/signup",
    "/Login/forgotpassword",
    "/Login/resetpassword",
    "/Login/otpverification",
    "/Login/confirmation",
  ];

  const showBackground = showBackgroundPages
    .map((path) => path.toLowerCase())
    .includes(router.pathname.toLowerCase());

  if (showBackground) {
    return (
      <BackgroundWrapper>
        <Component {...pageProps} />
      </BackgroundWrapper>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;

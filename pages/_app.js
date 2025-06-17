import '../styles/globals.css';
import BackgroundWrapper from "@/componentsnew/BackgroundWrapper";

function MyApp({ Component, pageProps, router }) {
  const showBackgroundPages = [
    "/login",
    "/signup",
    "/forgotpassword",
    "/resetpassword",
    "/otpverification",
    "/confirmation",
  ];

  const showBackground = showBackgroundPages.includes(router.pathname.toLowerCase());

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

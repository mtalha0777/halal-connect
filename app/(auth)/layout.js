import BackgroundWrapper from "@/function/BackgroundWrapper";
export default function AuthLayout({ children }) {
  return (
    <BackgroundWrapper>
      {children}
    </BackgroundWrapper>
  );
}
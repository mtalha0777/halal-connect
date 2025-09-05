import BackgroundWrapper from "@/function/BackgroundWrapper";

export default function AuthPagesLayout({ children }) {
  return (
    <BackgroundWrapper>
      {children}
    </BackgroundWrapper>
  );
}
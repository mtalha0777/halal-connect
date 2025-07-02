import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/halallogo.svg"
        alt="Halal Connect"
        width={120}
        height={40}
      />
    </div>
  );
}

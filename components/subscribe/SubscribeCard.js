"use client";
import Image from "next/image";
export default function SubscribeCard({
  title,
  count,
  percentage,
  icon,
  arrow,
  bg = "#D3F0F8",
  borderColor = "#1CDACD",
  cloudRightImage,
  borderbackgroundBg,
}) {
  return (
    <div
      className="relative overflow-hidden w-full min-h-[148px] rounded-xl p-4 flex"
      style={{ backgroundColor: bg }}
    >
      <div className="relative z-10 flex flex-col justify-between w-full">
        {/* Top Icon */}
        {icon && <Image src={icon} alt="Icon" width={40} height={40} />}
        <div className="flex justify-between items-end mt-auto">
          <div className="space-y-1">
            <h4 className="text-base font-medium text-white/60">{title}</h4>
            <p className="text-3xl font-bold text-white">{count}</p>
          </div>

          {/* Percentage Pill */}
          <div
            className="flex items-center justify-center gap-1 px-3 py-1 rounded-full border text-sm font-semibold"
            style={{
              borderColor: borderColor,
              backgroundColor: borderbackgroundBg || "transparent",
              color: "white",
            }}
          >
            <span>{percentage}</span>
            {arrow && <Image src={arrow} alt="Arrow" width={16} height={16} />}
          </div>
        </div>
      </div>

      {/* Background Cloud Image */}
      {cloudRightImage && (
        <Image
          src={cloudRightImage}
          alt="Cloud decoration"
          width={80}
          height={80}
          className="absolute top-0 right-0 z-0 object-contain object-right-top opacity-70"
        />
      )}
    </div>
  );
}

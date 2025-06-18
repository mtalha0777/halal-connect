'use client';

import Image from 'next/image';

export default function SubscribeCard({
  title,
  count,
  percentage,
  icon,
  arrow,
  bg = '#D3F0F8',
  borderColor = '#1CDACD', // Default border color
  cloudRightImage,
   backgroundRGBA,
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: bg,
        width: 364,
        height: 148,
        borderRadius: 12,
        padding: 16,
      }}
    >
      {/* Icon Top Left */}
      {icon && (
        <Image
          src={icon}
          alt="Icon"
          width={40}
          height={40}
          className="absolute top-4 left-4 z-10"
        />
      )}

      {/* Title and Count */}
      <div className="absolute bottom-4 left-4 z-10 space-y-2">
        <h4 className="text-base font-medium" style={{ color: '#FFFFFF99' }}>
          {title}
        </h4>
        <p className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>
          {count}
        </p>
      </div>

      {/* Percentage Circle */}
      <div
  className="absolute bottom-4 right-4 flex items-center gap-2 z-10"
  style={{
    width: '101px',
    height: '32px',
    padding: '2px 8px',
    borderRadius: '100px',
    border: `1px solid ${borderColor}`,
    backgroundColor: backgroundRGBA || borderColor, // ✅ Use transparent only if provided
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  }}
>

        <span className="text-sm font-semibold">{percentage}</span>
        {arrow && (
          <Image
            src={arrow}
            alt="Arrow"
            width={16}
            height={16}
          />
        )}
      </div>

      {/* Cloud Image */}
      {cloudRightImage && (
        <div className="absolute right-0 top-0 w-24 h-24 z-0">
          <Image
            src={cloudRightImage}
            alt="Cloud"
            width={96}
            height={96}
            className="object-contain opacity-80"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}
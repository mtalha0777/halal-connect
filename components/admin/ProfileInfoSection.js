import Image from "next/image";

const ProfileInfoSection = ({ title, data, onEdit, icon }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      {/* Title with Icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon && (
            <Image
              src={icon}
              alt="section icon"
              width={20}
              height={20}
              className="object-contain"
            />
          )}
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
        <button
          onClick={onEdit}
          className="text-[#5D5FEF] text-sm hover:underline"
        >
          Edit
        </button>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4">
        {data.map((item, index) => (
          <div key={index} className={title === "Location" ? "md:col-span-3" : ""}>
            <p className="text-sm text-gray-500">{item.label}</p>
            <p 
              className={`text-sm text-gray-800 mt-1 ${
                title === "Location" ? "break-words whitespace-normal" : ""
              }`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfoSection;
export default function Input({
  label,
  type = "text",
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      />
    </div>
  );
}

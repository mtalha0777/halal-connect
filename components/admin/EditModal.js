'use client';
import React from 'react';

const EditModal = ({ visible, title, fields, onSave, onClose }) => {
  const [formData, setFormData] = React.useState({});

  React.useEffect(() => {
    if (visible) {
      const initialData = {};
      fields.forEach(f => (initialData[f.name] = f.value));
      setFormData(initialData);
    }
  }, [visible, fields]);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-[#00000099] z-50 flex items-center justify-center">
      <div className="w-[660px] h-[360px] bg-white rounded-[12px] p-[32px] flex flex-col gap-[40px] z-50 relative">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

        <div className="flex flex-col gap-4">
          {fields.map((field, i) => (
            <div key={i} className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">{field.label}</label>
              <input
                type="text"
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.label}
                className="w-full h-[44px] border border-[#00000066] rounded-[8px] px-4 text-sm text-gray-700"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-auto">
          <button
            onClick={onClose}
            className="w-[288px] h-[48px] rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
          >
            Close
          </button>
          <button
            onClick={handleSave}
            className="w-[288px] h-[48px] rounded-[8px] bg-[#5D5FEF] text-white text-sm font-medium hover:bg-[#4b4df0] transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

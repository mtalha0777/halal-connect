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
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>

        {fields.map((field, i) => (
          <div key={i} className="mb-4">
            <label className="block text-sm font-medium mb-1">{field.label}</label>
            <input
              type="text"
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;


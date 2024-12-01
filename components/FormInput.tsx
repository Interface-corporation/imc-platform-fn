import React from 'react';

interface FormInputProps {
  type: string;
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export default FormInput;

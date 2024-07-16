import React from "react";

const TextInput = (props) => {
  const { label, type, placeholder, value, onChange } = props;
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default TextInput;

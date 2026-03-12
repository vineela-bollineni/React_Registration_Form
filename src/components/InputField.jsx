import React from "react";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="input-group">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      <label>{label}</label>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;

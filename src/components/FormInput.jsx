import React from 'react';
import './FormInput.css';

const FormInput = ({ label, type, value, onChange, placeholder, required, isTextarea }) => {
  return (
    <div className="form-input">
      {label && (
        <label className="form-input__label">
          {label} {required && <span className="form-input__required">*</span>}
        </label>
      )}
      {isTextarea ? (
        <textarea
          className="form-input__field form-input__field--textarea"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={5}
        />
      ) : (
        <input
          className="form-input__field"
          type={type || 'text'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default FormInput;

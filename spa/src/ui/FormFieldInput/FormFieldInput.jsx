import React from 'react';

import './FormFieldInput.scss';

function FormFieldInput({
  fieldType,
  fieldName,
  fieldID,
  fieldPlaceholder,
  value,
  error,
  touched,
  onChange,
  disabled,
}) {
  return (
    <>
      <input
        type={fieldType}
        name={fieldName}
        id={fieldID}
        placeholder={fieldPlaceholder}
        value={value}
        onChange={onChange}
        className={disabled ? 'form-field-input_disabled' : 'form-field-input'}
        disabled={disabled}
      />

      {
        touched && error
          ? (
            <span
              className="form-field-input-err"
            >
              {error}
            </span>
          ) : (<></>)
      }
    </>
  );
}

export default FormFieldInput;

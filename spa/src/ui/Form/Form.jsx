import React from 'react';

import './Form.scss';

function Form({
  children,
  buttonText,
  onSubmit,
  error,
  loading,
  disabled,
}) {
  return (
    <form
      action="#"
      className="form"
    >

      {children}

      <div className="form__btn-wrap">
        {error
          ? (
            <span
              className="form__btn-submit-err"
            >
              {error}
            </span>
          ) : (<></>)}

        <button
          type="submit"
          aria-label={buttonText}
          onClick={onSubmit}
          className={
            disabled || loading
              ? 'form__btn-submit_disabled'
              : 'form__btn-submit'
          }
          disabled={disabled || loading}
        >
          {buttonText}

        </button>
      </div>
    </form>
  );
}

export default Form;

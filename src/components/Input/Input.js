/* eslint-disable */
import React, { useRef } from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

export const Input = (
  {
    type,
    // eslint-disable-next-line no-shadow
    name,
    containerClassName,
    placeholder,
    inputHandler,
    iconUrl,
    inputClassName,
    logoClassName,
  }
) => {
  const inputRef = useRef(null);
  const handlecontainerClick = () => {
    inputRef.current.focus();
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      role="input"
      className={`${containerClassName} input`}
      onClick={handlecontainerClick}
    >
      <input
        ref={inputRef}
        className={inputClassName}
        onChange={(event) => {
          inputHandler(event.target.value);
        }}
        type={type}
        name={name}
        placeholder={placeholder}
      />

      <img
        className={logoClassName}
        src={iconUrl}
        alt={name}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  containerClassName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputHandler: PropTypes.func.isRequired,
  iconUrl: PropTypes.string,
  inputClassName: PropTypes.string,
  logoClassName: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  iconUrl: '',
  inputClassName: '',
  logoClassName: '',
};

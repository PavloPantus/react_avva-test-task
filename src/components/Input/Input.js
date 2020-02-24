import React, { useRef } from 'react';
import './Input.scss';

export const Input = (
  {
    type,
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
    <div
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

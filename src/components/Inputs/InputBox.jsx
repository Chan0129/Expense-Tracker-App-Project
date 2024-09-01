import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const InputBox = ({
  type,
  placeholder,
  title,
  backgroundColor,
  name,
  textColor,
}) => {
  const [inputType, setInputType] = useState(type);

  const handleIconClick = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <label htmlFor={name} className="flex-1 relative">
      <p className={title === '' ? 'pb-0' : 'pb-3'}>{title}</p>
      <input
        type={inputType}
        placeholder={placeholder}
        className={`border-2 border-neutral-500 p-3 rounded-xl placeholder:text-neutral-500 ${backgroundColor} ${textColor} w-full focus:border-custom-green hover:border-custom-green active:border-custom-green`}
        name={name}
        id={name}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={handleIconClick}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          {inputType === 'password' ? (
            <FiEyeOff className="text-white text-2xl" />
          ) : (
            <FiEye className="text-white text-2xl" />
          )}
        </button>
      )}
    </label>
  );
};

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default InputBox;

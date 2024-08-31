import PropTypes from 'prop-types';

const RadioInput = ({ title, name, id, value, handleRadioChange }) => {
  return (
    <label htmlFor={title} className="flex gap-2 items-center">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={handleRadioChange}
        className="appearance-none w-4 h-4 rounded-full border-2 border-[#0EF387] checked:bg-[#0EF387] relative cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0EF387]"
      />
      <p>{title}</p>
    </label>
  );
};

export default RadioInput;

RadioInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
};

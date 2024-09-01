import PropTypes from 'prop-types';

const PrimaryButton = ({ title, icon }) => {
  return (
    <button className="bg-green-400 text-black py-3 px-10 rounded-3xl font-medium hover:bg-green-300 transition-transform transition-colors duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2">
      {icon && <img src={icon} alt="" className="w-5 h-5" />}
      {title}
    </button>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

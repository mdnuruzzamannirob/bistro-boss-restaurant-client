import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mx-5 sm:mx-8 md:mx-10 xl:mx-auto ${className}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;

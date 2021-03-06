import React from 'react';
import classNames from 'classnames'
import PropTypes from "prop-types";

const Button = ({children, onClick, className, outline}) => {
  return (
    <button onClick={onClick}
            className={classNames('button',
              className, {
                'button--outline': outline,
              })}>
      {children}
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired
}
export default Button;
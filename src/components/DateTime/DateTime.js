import React, { useState, useEffect } from 'react';
import './DateTime.scss';
import PropTypes from 'prop-types';

export const DateTime = ({ className }) => {
  const [time, setTime] = useState(
    (new Date()).toLocaleTimeString().slice(0, 5)
  );

  const [date, setDate] = useState(
    (new Date()).toLocaleDateString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((new Date()).toLocaleTimeString().slice(0, 5));
      setDate((new Date()).toLocaleDateString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`time__container ${className}`}>
      <span className="time">
        {time}
      </span>
      <span className="date">
        {date}
      </span>
    </div>
  );
};

DateTime.propTypes = {
  className: PropTypes.string,
};

DateTime.defaultProps = {
  className: '',
};

import React from 'react';
import './Notifications.scss';
import PropTypes from 'prop-types';

export const Notifications = (
  {
    customClassName,
    notificationHeading,
    notifications,
  }
) => (
  <article className={`notifications ${customClassName}`}>
    <h1 className="notifications__heading">
      {notificationHeading}
    </h1>

    {
      notifications
        .map(
          item => (
            <div
              key={Math.random() * Math.random()}
              className="notifications__notification-container"
            >
              <span className="notifications__notification">
                {item}
              </span>
              <button
                className="notifications__open-notification button"
                type="button"
              />
            </div>
          )
        )
    }
  </article>
);

Notifications.propTypes = {
  customClassName: PropTypes.string,
  notificationHeading: PropTypes.string.isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

Notifications.defaultProps = {
  customClassName: '',
};

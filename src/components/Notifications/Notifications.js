import React from 'react';
import './Notifications.scss';

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
            <div className="notifications__notification-container">
              <span className="notifications__notification">
                {item}
              </span>
              <button className="notifications__open-notification button" />
            </div>
          )
        )
    }
  </article>
);

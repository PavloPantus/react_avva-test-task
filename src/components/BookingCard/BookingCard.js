import React from 'react';
import './BookingCard.scss';
import PropTypes from 'prop-types';

export const BookingCard = (
  {
    taskType,
    taskNumber,
    taskSource,
    customer,
    category,
    period,
    // eslint-disable-next-line no-shadow
    status,
    className,
    overBooking,
  }
) => (
  <div className={`booking-card ${className}`}>
    <button className="booking-card__close button" type="button" />

    <span className="booking-card__task-type">
      {taskType}
      {' '}
      {overBooking
        && (
          <span className="booking-card__over-booking">
            Овербукинг!
          </span>
        )}
    </span>

    <span className="booking-card__number">
      {taskNumber}
    </span>

    <div className="booking-card__item-container">
      Источник
      {' '}
      <span className="item-value">{taskSource}</span>
    </div>

    <div className="booking-card__item-container">
      Заказчик
      {' '}
      <span className="item-value">{customer}</span>
    </div>

    <div className="booking-card__item-container">
      Категория
      {' '}
      <span className="item-value">{category}</span>
    </div>

    <div className="booking-card__item-container">
      Период
      {' '}
      <span className="item-value">{period}</span>
    </div>

    <div className="booking-card__item-container">
      Статус
      {' '}
      <span className="item-value">{status}</span>
    </div>

  </div>
);

BookingCard.propTypes = {
  taskType: PropTypes.string.isRequired,
  taskNumber: PropTypes.string.isRequired,
  taskSource: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  className: PropTypes.string,
  overBooking: PropTypes.bool,
};

BookingCard.defaultProps = {
  className: '',
  overBooking: false,
};

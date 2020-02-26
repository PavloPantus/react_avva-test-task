/* eslint-disable no-shadow */
import React from 'react';
import './TasksList.scss';
import { BookingCard } from '../BookingCard';

export const TasksList = () => {
  const task = {
    taskType: 'Бронь',
    taskNumber: '95959959',
    taskSource: 'Booking',
    customer: 'Иванов Иван Ивано...',
    category: 'Люкс 5-ти местный ...',
    period: '15.02.20 - 17.02.20',
    status: 'Оплачено',
  };

  const bookingData = [
    {
      ...task, overBooking: false,
    },
    {
      ...task, overBooking: false,
    },
    {
      ...task, overBooking: false,
    },
    {
      ...task, overBooking: true,
    },
    {
      ...task, overBooking: false,
    },
    {
      ...task, overBooking: false,
    },
    {
      ...task, overBooking: true,
    },
    {
      ...task, overBooking: true,
    },
    {
      ...task, overBooking: true,
    },
  ];

  return (
    <div className="tasks-list">

      {
        bookingData
          .map(
            task => (
              <BookingCard
                key={Math.random() * Math.random()}
                className="tasks-list__card"
                taskType={task.taskType}
                taskNumber={task.taskNumber}
                taskSource={task.taskSource}
                customer={task.customer}
                category={task.category}
                period={task.period}
                status={task.status}
                overBooking={task.overBooking}
              />
            )
          )
      }

    </div>
  );
};

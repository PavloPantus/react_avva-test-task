/* eslint-disable max-len */
import React, { useContext } from 'react';
import './ActiveItem.scss';
import PropTypes from 'prop-types';
import { Notifications } from '../Notifications';
import { Context } from '../context';

export const ActiveItem = ({ customClassName }) => {
  const notification = 'Напоминание о чем то важном 1';
  const notifications = [notification, notification, notification];
  const {
    showSmallSidebar,
    showBigSidebar,
  } = useContext(Context);

  return (

    <section className="item">

      <div className="item__bottom-menu-and-data-container">
        <div className="item__container">
          <h2 className="item__sub-heading">Заголовок 2</h2>

          <div className="item__data-container">

            <div className="item__data-row">
              <div className="item__data-name">
                Lorem Ipsum
              </div>
              <div className="item__data-value">
                Что то
              </div>
            </div>

            <div className="item__data-row">
              <div className="item__data-name">
                Lorem Ipsum
              </div>
              <div className="item__data-value">
                Что то
              </div>
            </div>

            <div className="item__data-row">
              <div className="item__data-name">
                Lorem Ipsum
              </div>
              <div className="item__data-value">
                Что то
              </div>
            </div>

            <div className="item__data-row">
              <div className="item__data-name">
                Lorem Ipsum
              </div>
              <div className="item__data-value">
                Что то
              </div>
            </div>

          </div>

        </div>

        {
          (showBigSidebar || showSmallSidebar)
          && (
            <div className="item__edit-menu edit-menu">
              <button
                className="edit-menu__button button"
                type="button"
              >
                <img src="/react_avva-test-task/images/icon-printer.png" alt="" />
              </button>

              <button className="edit-menu__button button" type="button">
                <img src="/react_avva-test-task/images/icon-download.png" alt="" />
              </button>

              <button className="edit-menu__button button" type="button">
                <img src="/react_avva-test-task/images/icon-edit.png" alt="" />
              </button>

              <button className="edit-menu__button button" type="button">
                <img src="/react_avva-test-task/images/icon-add.png" alt="" />
              </button>

              <button className="edit-menu__cancel button" type="button">
                Отмена
              </button>

              <button className="edit-menu__save button" type="button">
                Сохранить
              </button>

            </div>
          )
        }
      </div>

      <Notifications
        customClassName="item__notifications"
        notificationHeading="Напоминания (обуч.)"
        notifications={notifications}
      />
    </section>
  );
};

ActiveItem.propTypes = {
  customClassName: PropTypes.string,
};

ActiveItem.defaultProps = {
  customClassName: '',
};

import React, { useContext } from 'react';
import './SidebarMenu.scss';
import classNames from 'classnames';
import { Context } from '../context';

export const SidebarMenu = () => {
  const { showSmallSidebar, showBigSidebar } = useContext(Context);

  return (
    <div className={
      classNames(
        [
          'sidebar',
          {
            'sidebar-small_open': showSmallSidebar,
            'sidebar-big_open': showBigSidebar,
            sidebar_close: !showSmallSidebar && !showBigSidebar,
          },
        ]
      )
    }
    >

      <button className="sidebar__item button">
        <img src="/images/logo-majex.png" alt="" />
      </button>

      <div className="sidebar__top-container">
        <button className="sidebar__item button">
          <img src="/images/icon-calendar.png" alt="" />
          {showBigSidebar && 'Шахматка'}
        </button>

        <button className="sidebar__item button">
          <img src="/images/icon-reports.png" alt="" />
          {showBigSidebar && 'Отчеты'}
        </button>

        <button className="sidebar__item button">
          <img src="/images/icon-calculator.png" alt="" />
          {showBigSidebar && 'Касса'}
        </button>

        <button className="sidebar__item button">
          <img src="/images/icon-client.png" alt="" />
          {showBigSidebar && 'Клиент'}
        </button>

        <button className="sidebar__item button">
          <img src="/images/icon-staff.png" alt="" />
          {showBigSidebar && 'Персонал'}
        </button>

        <button className="sidebar__item button">
          <img src="/images/icon-suitcase.png" alt="" />
          {showBigSidebar && 'Задачи'}
        </button>

        <button className="sidebar__item button">
          <img src="/images/icon-store.png" alt="" />
          {showBigSidebar && 'Склад'}
        </button>

      </div>

      <div className="sidebar__bottom-container">

        <button className="sidebar__item button">
          <img src="/images/icon-archive.png" alt="" />
        </button>

        <button className="sidebar__item button">
          <img src="/images/icon-wrench.png" alt="" />
        </button>

        <button className="sidebar__item button">
          <img src="/images/icon-help.png" alt="" />
        </button>

      </div>

    </div>
  );
};

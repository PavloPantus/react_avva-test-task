import React, { useContext } from 'react';
import './QuickAccesPages.scss';

export const QuickAccesPages = () => (
  <div className="pages">
    <button className="pages__item button">
      <img src="/images/icon-calendar.png" alt="" />
    </button>

    <button className="pages__item button">
      <img src="/images/icon-suitcase.png" alt="" />
    </button>

    <button className="pages__item button">
      <img src="/images/icon-reports.png" alt="" />
    </button>

    <button className="pages__item button">
      <img src="/images/icon-staff.png" alt="" />
    </button>
  </div>
);

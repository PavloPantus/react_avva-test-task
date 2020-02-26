import React from 'react';
import './QuickAccesPages.scss';

export const QuickAccesPages = () => (
  <div className="pages">
    <button
      className="pages__item button"
      type="button"
    >
      <img src="/react_avva-test-task/images/icon-calendar.png" alt="" />
    </button>

    <button
      className="pages__item button"
      type="button"
    >
      <img src="/react_avva-test-task/images/icon-suitcase.png" alt="" />
    </button>

    <button
      className="pages__item button"
      type="button"
    >
      <img src="/react_avva-test-task/images/icon-reports.png" alt="" />
    </button>

    <button
      className="pages__item button"
      type="button"
    >
      <img src="/react_avva-test-task/images/icon-staff.png" alt="" />
    </button>
  </div>
);

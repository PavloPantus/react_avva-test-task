import React, { useState, useContext } from 'react';
import './Header.scss';
import { Context } from '../context';
import { Input } from '../Input/Input';
import { DateTime } from '../DateTime';

export const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState('');
  const [pagesClicked, setPagesClicked] = useState(false);
  const { showSmallSidebar,
    setShowSmallSidebar,
    showBigSidebar,
    setShowBigSidebar } = useContext(Context);

  return (
    <header className="header">
      {
        (!showSmallSidebar && !showBigSidebar)
        && (
          <button
            type="button"
            className="header__side-menu-toggle button"
            onClick={() => {
              setShowSmallSidebar(true);
              setShowBigSidebar(false);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        )
      }

      {
        (showSmallSidebar || showBigSidebar)
        && (
          <button
            type="button"
            className="header__arrow-left button"
            onClick={() => {
              setShowSmallSidebar(false);
              setShowBigSidebar(false);
            }}
          />
        )
      }

      <button
        className="header__add-booking button"
        type="button"
      />

      <button
        className="header__group-booking button"
        type="button"
      />

      <Input
        containerClassName="header__input-container-search"
        inputClassName="header__input-search"
        type="text"
        name="search"
        placeholder="Поиск"
        iconUrl="/react_avva-test-task/images/input-search-logo.png"
        inputHandler={setSearchQuery}
        logoClassName="header__input-search-logo"
      />

      <DateTime
        className="header__time"
      />

      <button
        className="header__information-button button"
        type="button"
      />

      {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
      <button
        type="button"
        className="header__pages-button button"
        onMouseOver={() => {
          setShowSmallSidebar(false);
          setShowBigSidebar(true);
        }}

        onMouseLeave={() => {
          if (!pagesClicked) {
            setShowSmallSidebar(false);
            setShowBigSidebar(false);
          }
        }}

        onClick={() => {
          setPagesClicked(!pagesClicked);
          setShowSmallSidebar(false);
          setShowBigSidebar(!pagesClicked);
        }}
      />

      <button
        className="header__notifications button"
        type="button"
      >
        <img
          src="/react_avva-test-task/images/icon-notifications-bell.png"
          alt=""
        />
        <span className="header__notifications-quantity">
          {3}
        </span>
      </button>

      <button
        className="header__profile button"
        type="button"
      >
        A
      </button>
    </header>
  );
};

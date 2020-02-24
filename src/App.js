/* eslint-disable */
import React, { useState } from 'react';
import './App.scss';
import classNames from 'classnames';
import { Context } from './components/context';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { ActiveItem } from './components/ActiveItem';
import { SidebarMenu } from './components/SidebarMenu';
import { Footer } from './components/Footer';
import { QuickAccesPages } from './components/QuickAccesPages';

function App() {
  const [showSmallSidebar, setShowSmallSidebar] = useState(false);
  const [showBigSidebar, setShowBigSidebar] = useState(false);

  console.log(showSmallSidebar);

  return (
    <Context.Provider
      value={
        {
          showSmallSidebar,
          setShowSmallSidebar,
          showBigSidebar,
          setShowBigSidebar,
        }
      }
    >

      <div className={
        classNames(
          ['app',
            {
              'white-theme': showBigSidebar,
            },

          ]
        )
      }
      >
        <SidebarMenu />

        <div className="app__content-container">
          <Header />
          {
            showBigSidebar
            && <QuickAccesPages />
          }

          <main>
            {
              !showSmallSidebar && !showBigSidebar
              && <TasksList />
            }

            <div className="app__container-item-and-notifications">

              <h1 className="app__heading">
                Заголовок 1
              </h1>

              <ActiveItem />

            </div>
          </main>

          {
            (showSmallSidebar || showBigSidebar)
            && <Footer />
          }
        </div>

      </div>

    </Context.Provider>

  );
}

export default App;

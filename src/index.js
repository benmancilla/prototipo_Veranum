import React from 'react';
import ReactDOM from 'react-dom';
import './styles/whole.css'; 
import './styles/simple-cards.css'; 
import './styles/card.css'; 
import CreateNavBar from './components/nav';
import CreateSimpleCardGroup from './components/simple-cards';
import CreateCardGroup from './components/cards';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CreateNavBar />
    <section id="v1">
      <h1>Veranum</h1>
    </section>
    <section id="v2">
      <div id="v2-text">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>...continuation of lorem ipsum text...</p>
      </div>
      <div id="vd2-image"></div>
    </section>
    <section id="v3">
      <div id="v3-text">
        <h1>Loremipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
      </div>
      <CreateSimpleCardGroup />
    </section>
    <section id="v4">
      <div id="v4-text">
        <h1>Loremipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        <CreateCardGroup></CreateCardGroup>
      </div>
    </section>
  </React.StrictMode>
);

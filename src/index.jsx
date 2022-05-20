import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import OurProject from './OurProject';
import About from './About';
import styles from './style.css';
import logo from './img/logo.png';

const App = () => (
  <div>
    <nav
      className="navigation"
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link className="home" to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link className="about" to="/about">
        About
      </Link>{' '}
      |{' '}
      <Link className="project" to="/ourproject">
        Project
      </Link>
    </nav>
    <h1 className="title">
      un poco<br></br> LOGO
    </h1>
    <Outlet />
  </div>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="ourproject" element={<OurProject />} />
        <Route path="about" element={<About />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);

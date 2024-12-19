// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HookErrorsPage from './pages/HookErrorsPage';
import CSSIssuesPage from './pages/CSSIssuesPage';
import RTKApiPage from './pages/RTKApiPage';
import StartPage from './StartPage';

const App = () => {
  return (
    <>
    <h1>ARCUS NODE CODING CHALLANGE v0.0</h1>
    <Router>
      <nav>
        <ul>
          <li><Link to="/css-issues">CSS Issues</Link></li>
          <li><Link to="/hook-errors">React Hook Errors</Link></li>
          <li><Link to="/rtk-api">RTK API Challenge</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/StartPage" element={<StartPage />} />
        <Route path="/hook-errors" element={<HookErrorsPage />} />
        <Route path="/css-issues" element={<CSSIssuesPage />} />
        <Route path="/rtk-api" element={<RTKApiPage />} />
        <Route path="/rtk-api" element={<RTKApiPage />} />
        <Route path="/" element={<h2>Welcome! Select a challenge from the menu.</h2>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;

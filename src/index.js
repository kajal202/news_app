import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<News />} />
        {/* categories */}
        <Route path="/business" element={<News key="business" category="business" />} />
        <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
        <Route  path="/health" element={<News key="health" category="health" />} />
        <Route path="/sports" element={<News key="sports" category="sports" />}/>
        <Route path="/science" element={<News key="science" category="science" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

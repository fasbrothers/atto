import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoadingLazy from './components/LoadingLazy';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingLazy />}>
        <App />
    </Suspense>
  </React.StrictMode>
);


import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoadingLazy from './components/LoadingLazy';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider  client={queryClient}>
    <Suspense fallback={<LoadingLazy />}>
        <App />
    </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);


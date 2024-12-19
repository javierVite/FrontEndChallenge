import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
// import CommentsList from './CommentsList';
import { worker } from './mocks/browser';

worker.start().then(() => {
createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
});

import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './routes'
import './index.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
)
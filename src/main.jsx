import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { ContextApi } from './components/ContextApi.jsx'
import firebaseConfig from './firebaseConfig.js'
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextApi>
    <React.StrictMode>
      <Provider store={store} >
      <App />
      </Provider>
    </React.StrictMode>,
  </ContextApi>

)

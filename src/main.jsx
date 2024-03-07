import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import OnlineRouter from './router/OnlineRouter.jsx'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* on enregistre le store */}
    <Provider store={store}>
      {/* on enregistre le router */}
      <RouterProvider router={OnlineRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)

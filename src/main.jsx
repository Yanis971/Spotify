import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import OnlineRouter from './router/OnlineRouter.jsx'
import { Provider } from 'react-redux'
import store from './redux/store'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import AppRouter from './router/AppRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* on enregistre le context d'authentification */}
    <AuthContextProvider>
      {/* on enregistre le store */}
      <Provider store={store}>
        {/* on enregistre le Approuter */}
        <AppRouter>

        </AppRouter>
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>,
)

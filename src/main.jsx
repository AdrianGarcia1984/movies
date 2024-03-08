import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './context/userContext.jsx';
//import { Provider } from "react-redux";
//import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
      </Provider> */}
<UserProvider> 
<App />
     </UserProvider>
  </React.StrictMode>,
)

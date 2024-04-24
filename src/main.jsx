import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// import { RouterProvider } from "react-router-dom";
// import { router } from "./router/router.jsx";
import { AppTheme } from "./theme/AppTheme.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { JournalApp } from "./JournalApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        {/* <RouterProvider router={router} /> */}
        <JournalApp />
      </AppTheme>
    </Provider>
  </React.StrictMode>
);

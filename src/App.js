import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import * as Pages from "./containers/pages";
import axios from "axios";
import setupAxios from "./apis/setupAxios";

setupAxios(axios, store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path="/" component={Pages.ListPage} />
          <Route exact path="/movies/:id" component={Pages.DetailPage} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

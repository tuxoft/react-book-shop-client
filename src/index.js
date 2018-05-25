import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import moment from "moment";
import "moment/locale/ru";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from "./store/rootReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();

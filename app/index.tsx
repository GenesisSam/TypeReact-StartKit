import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { createBrowserHistory } from "history";
import { ConnectedRouter } from "react-router-redux";

import Hello from "./common/test";
import rootReducer from "./rootReducer";
import { Switch, Route } from "react-router";

const history = createBrowserHistory();
const middleWares: any = [thunk];

if (process.env.NODE_ENV === "development") {
  middleWares.push(createLogger());
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/hello" component={() => <div>H3llo World!</div>} />
        <Route exact component={Hello} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("mainContainer"),
);

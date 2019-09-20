import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { Switch, Route } from "react-router";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";

import Hello from "./landing";
import rootReducer from "./rootReducer";
import getMessages from "common/intl/getMessages";

class ClientRender {
	public render() {
		const currentLocale = navigator.language.split("-")[0];
		const messages = getMessages(currentLocale);

		const history = createBrowserHistory();
		const middleWares: any = [thunk];

		if (process.env.NODE_ENV === "development") {
			middleWares.push(createLogger());
		}

		const store = createStore(rootReducer(history), applyMiddleware(...middleWares));

		ReactDOM.render(
			<IntlProvider locale={navigator.language} messages={messages}>
				<Provider store={store}>
					<ConnectedRouter history={history}>
						<Switch>
							<Route exact path="/hello" component={() => <div>H3llo World!</div>} />
							<Route exact component={Hello} />
						</Switch>
					</ConnectedRouter>
				</Provider>
			</IntlProvider>,
			document.getElementById("mainContainer"),
		);
	}
}

const render = new ClientRender();
render.render();

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/reducers";
import thunk from "redux-thunk";

import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk));

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;

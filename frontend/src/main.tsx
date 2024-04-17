import ReactDOM from "react-dom/client";
import App from "./app/app.tsx";
import "./index.css";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

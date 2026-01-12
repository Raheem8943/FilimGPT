import { Provider } from "react-redux";
import Body from "./components/body";
import appStore from "./utils/appStore";
import "./App.css";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;

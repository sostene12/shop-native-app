import "react-native-gesture-handler";
import React from "react";
import { Provider} from "react-redux";
import AllScreens from "./navigation/AllScreens";
import store from "./redux/store"

export default function App() {
  // const cart = useSelector(state=> state.cart);
  const badgeCount = 3;
  return (
    <Provider store={store}>
      <AllScreens />
    </Provider>
  );
}
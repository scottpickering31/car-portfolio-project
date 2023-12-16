import Basket from "./components/ui/Basket/Basket.jsx";
import CarPickerForm from "./containers/CarPickerForm.jsx";
import Header from "./containers/Header.jsx";
import HowItWorksSection from "./containers/HowItWorks.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <HowItWorksSection />
        <CarPickerForm />
        <Basket />
      </div>
    </Provider>
  );
}

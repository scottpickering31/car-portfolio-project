import Basket from "./components/ui/Basket/Basket.jsx";
import CarPickerForm from "./containers/CarPickerForm.jsx";
import Header from "./containers/Header.jsx";
import HowItWorksSection from "./containers/HowItWorks.jsx";
import { Provider } from "react-redux";
import { BasketProvider } from "./statemanagement/context/BasketContext";
import store from "./statemanagement/store/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <BasketProvider>
          <Header />
          <HowItWorksSection />
          <CarPickerForm />
          <Basket />
        </BasketProvider>
      </div>
    </Provider>
  );
}

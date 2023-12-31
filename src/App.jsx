import Basket from "./components/ui/Basket/Basket.jsx";
import CarPickerForm from "./containers/CarPickerForm.jsx";
import Header from "./containers/Header.jsx";
import { Provider } from "react-redux";
import { BasketProvider } from "./statemanagement/context/BasketContext";
import store from "./statemanagement/store/store.js";
import Footer from "./containers/Footer.jsx";
import SuperCarFleet from "./components/ui/SuperCarFleet.jsx";
import EliteDrivesAbout from "./components/ui/EliteDrivesAbout.jsx";
import DistanceInfo from "./components/ui/DistanceInfo.jsx";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <BasketProvider>
          <Header />
          <EliteDrivesAbout />
          <SuperCarFleet />
          <DistanceInfo />
          <CarPickerForm />
          <Basket />
        </BasketProvider>
        <Footer />
      </div>
    </Provider>
  );
}

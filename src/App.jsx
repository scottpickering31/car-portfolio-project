import Basket from "./components/ui/Basket/Basket.jsx";
import CarPickerForm from "./containers/CarPickerForm.jsx";
import Header from "./containers/Header.jsx";
import HowItWorksSection from "./containers/HowItWorks.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <HowItWorksSection />
      <CarPickerForm />
      <Basket />
    </div>
  );
}

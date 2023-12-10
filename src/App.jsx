import CarPickerForm from "./components/CarPickerForm.jsx";
import Header from "./containers/Header.jsx";
import HowItWorksSection from "./containers/HowItWorks.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <HowItWorksSection />
      <CarPickerForm />
    </div>
  );
}

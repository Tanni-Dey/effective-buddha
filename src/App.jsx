import "./App.css";
import Vows from "./components/Vows/Vows";
import Banner from "./components/Banner/Banner";
import Evidence from "./components/Evidence/Evidence";
import Precepts from "./components/Precepts/Precepts";
import Reiterating from "./components/Reiterating/Reiterating";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Evidence />
      <Vows />
      <Precepts />
      <Reiterating />
      <Footer />
    </>
  );
}

export default App;

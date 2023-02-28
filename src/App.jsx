import EducationalJourney from "./componenets/educationalJourney/EducationalJourney";
import Footer from "./componenets/footer/Footer";
import FourthHomeComponent from "./componenets/forthHomeComponent/FourthHomeComponent";
import Home from "./componenets/home/Home";
import Navbar from "./componenets/navbar/Navbar";
import SecondHomeSection from "./componenets/secondHomeSection/SecondHomeSection";
import Testimonials from "./componenets/testimonials/Testimonials";
import ThirdHomeSection from "./componenets/thirdHomeSection/ThirdHomeSection";
//import './app.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <SecondHomeSection/>
      <ThirdHomeSection/>
      <FourthHomeComponent/>
      <EducationalJourney/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;

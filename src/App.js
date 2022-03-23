import './App.css';
import BenefitContent from './components/benefitcontent/BenefitContent.components';
import TrustedCompanies from './components/Company_logos/TrustedCompanies.component';
import EmployeeContainer from './components/Employee_Benefit_container/Employee_container.component';
import Footer from './components/footer/Footer.component';
import Header from './components/header/Header.component';
import Mobile from './components/mobile/Mobile.component';
import Testimonials from './components/Testimonials/Testimonials.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Mobile />
      <EmployeeContainer />
      <BenefitContent />
      <Testimonials />
      <TrustedCompanies />
      <Footer />
    </div>
  );
}

export default App;

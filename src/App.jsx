import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomeContainer from './pages/home_container/HomeContainer';
import Bus from './pages/bus/Bus';
import BusDetail from './pages/bus/Details';
import Checkout from './pages/checkout/Checkout';
import Service from './pages/service/Service'
import Contactus from './pages/contact/Contactus'
import About from './pages/about/About'
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy';
import TermsAndConditions from './pages/termscondition/TermsCondition';
import SafetyGuarantee from './pages/safetyguarantee/SafetyGuarantee';
import FAQSupport from './pages/FAQsupport/FAQSupport';
import EnoughFacilities from './pages/enoughfacilities/EnoughFacilities';

function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeContainer></HomeContainer>}></Route>
            <Route path="/bus" element={<Bus></Bus>}></Route>
             <Route path="bus/bus-details" element={<BusDetail></BusDetail>}></Route>
             <Route path="bus/bus-details/checkout" element={<Checkout></Checkout>}></Route>
             <Route path="/services" element={<Service></Service>}></Route>
             <Route path="/contactus" element={<Contactus></Contactus>}></Route>
             <Route path="/about" element={<About></About>}></Route>
             <Route path="/privacy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
             <Route path="/termscondtion" element={<TermsAndConditions></TermsAndConditions>}></Route>
             <Route path="/safetyguarantee" element={<SafetyGuarantee></SafetyGuarantee>}></Route>
             <Route path="/faqsupport" element={<FAQSupport></FAQSupport>}></Route>
             <Route path="/enoughfacilities" element={<EnoughFacilities></EnoughFacilities>}></Route>
          </Routes>
          {/* Home Content */}
           
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App

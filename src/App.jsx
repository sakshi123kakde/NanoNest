import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';  
import Navbar from './component/Navbar';  
import HeroSection from './component/HeroSection';  
import Section2 from './component/Section2';  
import Appointment from './component/Apointment';  
import Testimonials from './component/Testimonials';  
import Services from './component/Services';  
import Industry from './component/Industry';  
import wave from '../src/assets/Wave.jpg';  
import webDesign from './assets/Web Design 1.png';  
import SignIn from './component/SignIn';  
import SignUp from './component/SignUp';  
import AfterLogin from './component/AfterLogin';
import AfterLogInInvestor from './component/InvestorPage';
import Profile from './component/Profile';  
import { getAuth, onAuthStateChanged } from "firebase/auth";  
import VisitProfile from './component/VisitProfile';
import MesssageScreen from './component/MessageScreen';
import Menu from './component/Menu';
import EntrepreneurProfileForm from './component/EntrepreneurProfileForm';
import MessageSection from './component/MessageSection';
import Footer from './component/Footer';
import Team from './component/Team';
import NewPostForm from './component/NewPostForm'
import Investment from './component/Investment';
import AboutUs from './component/AboutUs';
import EntrepreneurFAQ from './Common/EntreprenuerFAQ';
import InvestorFAQ from './Common/InvestorFAQ';
import Resources from './Common/Resources';
import InvestorDashboard from './component/InvestorDashboard';
import InvestmentDetail from './component/InvestmentDetail';
import Admin from './component/Admin';
import Email from './component/Email';
import InvestorForm from './component/InvestorForm';
import InvestorProfilePage from './component/InvestorProfilePage';
import ContactUs from './component/ContactUs';
import AdminMessage from './component/AdminMessage';
import NotificationPage from './component/NotificationPage';

const App = () => {  
  const [user, setUser] = useState(null);  

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  return (  
    <Router>  
      <MainLayout user={user} /> 
    </Router>  
  );  
};  

const MainLayout = ({ user }) => {  
  const location = useLocation();  

  // Check if the current path matches the dynamic pattern for profile pages or other pages without a Navbar
  const noNavbarPaths = [
    '/signIn', 
    '/signup', 
    '/AfterLogin', 
    '/profile', 
    '/VisitProfile',
    '/Profile/Menu', 
    '/profile/EntrepreneurProfileForm', 
     '/InvestorForm',
    '/AfterLogInInvestor',
    '/investment',
    '/InvestorDashboard',
    '/investment/1',
    '/message/:id',
    '/InvestorProfilePage',
    '/Admin',
    '/email',
    '/MessageSection',
    '/AdminMessage',
    '/notifications'
     
  ];

  const isDynamicProfile = /^\/profile\/[a-zA-Z0-9]+$/.test(location.pathname);
  const isDynamicMessage = /^\/message\/[a-zA-Z0-9]+$/.test(location.pathname);

  const showNavbar = !noNavbarPaths.includes(location.pathname) && !isDynamicProfile && !isDynamicMessage;

  return (  
    <div>  
      {showNavbar && (  
        <Navbar   
          title='NanoNest'   
          services='Services'   
          industry='Industry'   
          about='About Us'   
          team='Team NanoNest'   
          more='More'   
          faq='Entrepreneur FAQ'   
          in_faq='Investor FAQ'   
          blog='Blog' 
          button='Contact Us' 
        />  
      )}  

      <Routes>  
        <Route path="/" element={  
          <>  
            <HeroSection />  
            <Section2 />  <br />
            <Appointment />  
            <Testimonials /> 
            <Footer />
          </>  
        }/>  

        <Route path="/services" element={  
          <Services   
            title='Services'  
            content='All our digital marketing services start with a free 30-minute consultation call where we find the best strategy towards reaching your goals.'  
            itWorker={webDesign}  
          />  
        } />  
        
        <Route path='/Industry' element={  
          <Industry   
            title="Welcome"  
            content="where your entrepreneurial journey meets limitless growth and opportunity!"  
            wave={wave}  
          />  
        }/>  

        <Route path="/signIn" element={<SignIn />} />  
        <Route path='/profile/EntrepreneurProfileForm' element ={<EntrepreneurProfileForm />}/>

        <Route path="/signup" element={<SignUp />} />
        <Route path="Profile/Menu" element ={<Menu />}/>
        <Route path="/Team" element={<Team />} />
        <Route path='/NewPostForm' element={<NewPostForm />}/>
        <Route path='/investment' element={<Investment />}/>
        <Route path='/message/:id' element={<MesssageScreen/>}/>
        <Route path="/profile/:id" element={<VisitProfile />} />
         {/* Route for dynamic profiles */}
         <Route path="/InvestorProfilePage/:id" element={<InvestorProfilePage />} />
        <Route path='/about' element={<AboutUs/>}/> 
        <Route path='/faq' element={<EntrepreneurFAQ/>}/>
        <Route path='/investor-faq' element={<InvestorFAQ/>} />
        <Route path='/blog' element={<Resources/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path='/MessageSection/:id' element={<MessageSection />}/>
        <Route path='/MessageSection' element={<MessageSection />}/>
        <Route path='/InvestorDashboard' element={<InvestorDashboard/>}/>
        <Route path='/investment/1' element={<InvestmentDetail/>}/>
       <Route path ='/AdminMessage' element={<AdminMessage/>}/>
        <Route path="/AfterLogin" element={  
          <AfterLogin
            wave={wave}   
            title={`Welcome, ${user?.displayName || 'User'}`}  
            content='where your entrepreneurial journey meets limitless growth and opportunity!'   
          />  
        } /> 
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/email' element={<Email/>}/>
         <Route path ='/InvestorForm' element= {<InvestorForm/>}/>
        <Route path='/AfterLogInInvestor' element={<AfterLogInInvestor/>}/>
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/notifications' element={<NotificationPage/>}/>
        <Route path="*" element={<h2>404 Not Found</h2>} /> 
      </Routes>  
    </div>  
  );  
};  

export default App;
